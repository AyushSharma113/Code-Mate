import { TextAttributes } from "@opentui/core";
// import { useTheme } from "../providers/theme";
// import { usePromptConfig } from "../providers/prompt-config";
// import { Mode } from "@nightcode/shared";

export function StatusBar() {
//   const { mode, model } = usePromptConfig();
//   const { colors } = useTheme();

  return (
    <box flexDirection="row" gap={1}>
      
      <text fg={'cyan'}>
        Build
      </text>

      <text attributes={TextAttributes.DIM} fg="gray">
        ›
      </text>
      <text>Opus-4.6</text>
    </box>
  );
};