import type { InferResponseType } from "hono";
import type { apiClient } from "../lib/api-client";
import { z } from "zod";
import { BotMessage, ErrorMessage, UserMessage } from "../components/messages";




type SessionData = InferResponseType<(typeof apiClient.sessions)[":id"]["&get"],200>;


const sessionLocationSchema = z.object({
  session: z.custom<SessionData>((val) => val != null && typeof val === "object" && "id" in val),
});

function ChatMessage(
  { msg }: {
    msg: SessionData["messages"][number]
  }
) {
  if (msg.role === "USER") {
    return <UserMessage message={msg.content} />;
  }
  if (msg.role === "ERROR") {
    return <ErrorMessage message={msg.content} />;
  }
  return <BotMessage content={msg.content} model={msg.model} />;
};



export function Session() {
  return (
    <text>this is text</text>
  );
};