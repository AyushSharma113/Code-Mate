import { TextAttributes } from "@opentui/core";
import { EmptyBorder } from "../border";

type Props = {
  message: string;
};

export function ErrorMessage({ message }: Props) {

  return (
    <box width="100%" alignItems="center">
      <box
        border={["left"]}
        borderColor="#E74C5E"
        width="100%"
        customBorderChars={{
          ...EmptyBorder,
          vertical: "┃",
          bottomLeft: "╹",
        }}
      >
        <box
          justifyContent="center"
          paddingX={2}
          paddingY={1}
          backgroundColor="#1A1A24"
          width="100%"
        >
          <text attributes={TextAttributes.DIM}>{message}</text>
        </box>
      </box>
    </box>
  );
};