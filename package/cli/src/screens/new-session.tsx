import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { BotMessage, ErrorMessage, UserMessage } from "../components/messages";
import { SessionShell } from "../components/session-shell";
// import type { InferResponseType } from "hono/client";
// import type { apiClient } from "../lib/api-client";


// type SessionData = InferResponseType<(typeof apiClient.sessions)[":id"]["$get"], 200>;



export function NewSession() {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as { message?: string } | null;
  const message = state?.message?.trim();

  useEffect(() => {
    if (!message) {
      navigate("/", { replace: true });
    }
  }, [message, navigate]);

  if (!message) return null;

  return (
    <SessionShell onSubmit={() => {}} inputDisabled loading={true}>
      <UserMessage message={message} />
      <BotMessage
        content={`I received your request: ${message}`}
        model="opus-4-6"
      />
    </SessionShell>
  );
}
