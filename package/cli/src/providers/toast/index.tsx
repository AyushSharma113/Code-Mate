/// <reference types="bun-types" />

import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";
import { DEFAULT_DURATION, type ToastOptions, type ToastVariant } from "./types";
import { useTerminalDimensions } from "@opentui/react";
import { SplitBorderChars } from "../../components/border";


export type ToastContextValue = {
  show: (option: ToastOptions) => void;
}
// created a context for global use 
const ToastContext = createContext<ToastContextValue | null>(null)

// allows any child component to trigger the popup notification
export function useToast(): ToastContextValue {
  const value = useContext(ToastContext);

  if (!value){
    throw new Error("useToast must be added within a ToastProvider");
  }

  return value;
}

export type ToastProviderProps = {
  children: ReactNode;
}


// ToastProvider component manages active toast notification and handles auto dismissals.
export function ToastProvider({children}: ToastProviderProps){
  const [currentToast, setCurrentToast] = useState<ToastOptions| null>(null);

  // holds a mutable reference of the active timeout so it can persist across re-renders.
  const timeoutHandleRef = useRef<ReturnType<typeof globalThis.setTimeout> | null>(null);

  // clears any existing timers to prevent overlapping notifications from clashing.
  const clearCurrentTimeout = useCallback(() => {
    if (timeoutHandleRef.current) {
      globalThis.clearTimeout(timeoutHandleRef.current);
      timeoutHandleRef.current = null;
    }
  }, [])
  
  const show = useCallback((options: ToastOptions) => {
    const duration = options.duration ?? DEFAULT_DURATION;

    clearCurrentTimeout();

    setCurrentToast({
      variant: options.variant ?? "info",
      ...options,
      duration,
    })

    timeoutHandleRef.current = globalThis.setTimeout(() => {
      setCurrentToast(null);
    }, duration);
  }, [clearCurrentTimeout])


  const value: ToastContextValue = {
    show,
  }
  


 return (
    <ToastContext.Provider value={value}>
      {children}
      <Toast currentToast={currentToast} />
    </ToastContext.Provider>
  );
};

type ToastProps = {
  currentToast: ToastOptions | null;
};


function Toast({currentToast}: ToastProps) {
  const {width} = useTerminalDimensions();
  // here theme will come

    if (!currentToast) {
    return null;
  }
  


  const variantColors: Record<ToastVariant, string> = {
    // success: colors.success,
    // error: colors.error,
    // info: colors.info,
    success: "#82E0AA",
    error: "#E74C5E",
    info: "#56D6C2",
  };

  const borderColor = currentToast.variant ? variantColors[currentToast.variant] : variantColors.info


  return (
     <box
      position="absolute"
      justifyContent="center"
      alignItems="flex-start"
      top={2}
      right={2}
      width={Math.max(1, Math.min(60, width - 6))}
      paddingLeft={2}
      paddingRight={2}
      paddingTop={1}
      paddingBottom={1}
      // backgroundColor={colors.surface}
      backgroundColor="#1A1A24"
      borderColor={borderColor}
      border={["left", "right"]}
      customBorderChars={SplitBorderChars}
    >
      <box flexDirection="column" gap={1} width="100%">
        <text fg="#E1E1E1" wrapMode="word" width="100%">
          {currentToast.message}
        </text>
      </box>
    </box>
  )
  
}