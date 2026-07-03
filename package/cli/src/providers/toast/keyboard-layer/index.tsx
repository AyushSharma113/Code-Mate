import { useRenderer } from "@opentui/react";
import { createContext, useCallback, useRef, useState, type ReactNode } from "react";


type Responder = () => boolean;


type KeyboardLayerContextValue = {
    push: (id: string, responder: Responder) => void;
    pop: (id: string) => void;
    isTopLayer: (id: string)=> boolean;
    setResponder: (id: string, responder: Responder | null)=> void;
}



const KeyboardLayerContext = createContext<KeyboardLayerContextValue | null>(null)


export function KeyboardLayerProvider = ({children}: {children: ReactNode}) => {
    const [stack, setStack] = useState<string[]>(["base"]);
    const stackRef = useRef(stack);
    stackRef.current = stack;
    
    const responders = useRef<Map<string, Responder>>(new Map());
    const renderer = useRenderer();

    const push = useCallback((id: string, responder)=>{

    },[])


    
    
}




