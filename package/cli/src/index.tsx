import { Box, createCliRenderer, TextAttributes } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { Header } from "./components/header";
import { InputBar } from "./components/input-bar";
import { ToastProvider } from "./providers/toast";


function App() {
  return (
    <ToastProvider>

    <box
      alignItems="center"
      justifyContent="center"
      backgroundColor="#0D0D12"
      width="100%"
      height="100%"
      paddingX={2}
      gap={2}
      >
      <Header />
      <InputBar onSubmit={() => {}} />
      <box></box>
    </box>
    
      </ToastProvider>
  );
}
const renderer = await createCliRenderer(
  {  targetFps: 60,  exitOnCtrlC: false,}
);
createRoot(renderer).render(<App />);