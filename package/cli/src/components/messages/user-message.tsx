import { EmptyBorder } from "../border";

type Props = {
  message: string;
};

export function UserMessage({ message }: Props) {

  return (
    <box width="100%" alignItems="center">
      <box
        border={["left"]}
        borderColor="#56D6C2"
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
          <text>{message}</text>
        </box>
      </box>
    </box>
  );
};