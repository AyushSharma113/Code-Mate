import { useCallback, useRef, useState } from "react";
import { TextareaRenderable, type KeyBinding } from "@opentui/core";
import { EmptyBorder } from "./border";
import { StatusBar } from "./status-bar";
import { CommandMenu } from "./command-menu";
import { useRenderer } from "@opentui/react";
import { useCommandMenu } from "./command-menu/use-command-menu";


// this component connects 
// Textarea
//    ↓
// Command Menu
//    ↓
// Keyboard Navigation
//    ↓
// Command Execution
//    ↓
// Message Submission



type Props = {
    onSubmit: (text: string) => void;
    disabled?: boolean;
};



export const TEXTAREA_KEY_BINDINGS: KeyBinding[] = [
  { name: "return", action: "submit" },
  { name: "enter", action: "submit" },
  { name: "return", shift: true, action: "newline" },
  { name: "enter", shift: true, action: "newline" },
];


export function InputBar( { onSubmit, disabled=false}:Props){
    const textareaRef = useRef<TextareaRenderable>(null); // access the textarea instance
    const onSubmitRef = useRef<() => void>(() => {});
    const renderer = useRenderer();


  const {
    showCommandMenu,
    commandQuery,
    selectedIndex,
    scrollRef,
    handleContentChange,
    resolveCommand,
    setSelectedIndex,
  } = useCommandMenu();

  const handleCommandExecute = useCallback(
    (index: number) => {
        const command = resolveCommand(index);
        handleCommand(command)
    },
    [],
  )

const handleTextareaContentChange = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    handleContentChange(textarea.plainText);
}, [])


const handleSubmit = useCallback(() => {
    if (disabled) return;

    const textarea = textareaRef.current;
    if(!textarea) return;

    const text = textarea.plainText.trim();
    if (text.length === 0 ) return;
    onSubmit(text);
    textarea.setText("");
  }, [disabled, onSubmit])
  

//   const handleCommand = useCallback((
//     command: Command | undefined
//   ) => {

  })


    return(
        <box width="100%" alignItems="center">
      <box
        border={["left"]}
        borderColor="cyan"
        customBorderChars={{
          ...EmptyBorder,
          vertical: "┃",
          bottomLeft: "╹",
        }}
        width="100%"
      >
                
                <box
                position="relative"
                justifyContent="center"
                paddingX={2}
                paddingY={1}
                backgroundColor="#1A1A24"
                width="100%"
                gap={1}

                >

               {true && ( <box
                position="absolute"
                bottom="100%"
                left={0}
                width="100%"
                backgroundColor="#1A1A24"
                zIndex={10}
                >
                    <CommandMenu query="" />
                </box>)
}
                    
                    <textarea 
                        focused={!disabled}
                        keyBindings={TEXTAREA_KEY_BINDINGS}
                        placeholder={`Ask anything... Fix a bug in the database`}
                    />

                    <StatusBar />
                </box>
            </box>
        </box>
    )
}