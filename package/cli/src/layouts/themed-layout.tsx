import type { ReactNode } from "react";
import { Header } from "../components/header";
import { InputBar } from "../components/input-bar";

type Props = {
  children: ReactNode;
};


export function ThemedLayout({children}: Props) {
  return (
    
          <box
            alignItems="center"
            justifyContent="center"
            backgroundColor="#0D0D12"
            width="100%"
            height="100%"
            paddingX={2}
            gap={2}
          >
            {children}
          </box>
      
  );
}