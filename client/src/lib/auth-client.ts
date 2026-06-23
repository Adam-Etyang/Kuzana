import { createAuthClient } from "better-auth/client";
import { inferAdditionalFields } from "better-auth/client/plugins";

import type { auth } from "../../server/auth"; // adjust path, server's auth instance

export const authClient = createAuthClient({
  baseURL: "http://localhost:3001",
  plugins: [inferAdditionalFields<typeof auth>()],
});


