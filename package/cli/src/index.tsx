import { Box, createCliRenderer, TextAttributes } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { Header } from "./components/header";
import { InputBar } from "./components/input-bar";
import { ToastProvider } from "./providers/toast";
import { KeyboardLayerProvider } from "./providers/keyboard-layer";
import { DialogProvider } from "./providers/dialog";
import { createMemoryRouter, RouterProvider } from "react-router";
import { RootLayout } from "./layouts/root-layout";
import { Session } from "./screens/session";
import { NewSession } from "./screens/new-session";
import { Home } from "./screens/home";



const router = createMemoryRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },      // { path: "sessions/new", element: <NewSession /> },
            { path: "sessions/new", element: <NewSession /> },
      { path: "sessions/:id", element: <Session /> },
    ]
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}
const renderer = await createCliRenderer({ targetFps: 60, exitOnCtrlC: false });
createRoot(renderer).render(<App />);
