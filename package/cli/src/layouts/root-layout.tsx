import { DialogProvider } from "../providers/dialog";
import { KeyboardLayerProvider } from "../providers/keyboard-layer";
import { ToastProvider } from "../providers/toast";
import {Outlet} from "react-router"
import {ThemedLayout} from "./themed-layout"


export function RootLayout() {
  return (
    <KeyboardLayerProvider>
      <DialogProvider>
        <ToastProvider>   
            <ThemedLayout>

        <Outlet />
            </ThemedLayout>
        </ToastProvider>
      </DialogProvider>
    </KeyboardLayerProvider>
  );
}