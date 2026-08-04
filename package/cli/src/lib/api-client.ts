import { hc } from "hono/client";
import type { AppType } from "@codemate/server";

export const apiClient = hc<AppType>(
   "http://localhost:3000"
);