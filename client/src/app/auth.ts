import { authClient } from "@/lib/auth-client";

export type UserRole = "MENTEE" | "MENTOR";

type AuthResult = {
  data: unknown;
  error: { message: string; code?: string; status?: number } | null;
};

export async function signUpEmail({
  email,
  password,
  name,
  role,
  callbackURL = "/",
}: {
  email: string;
  password: string;
  name: string;
  role?: UserRole; // omitted -> server defaults to "MENTEE"; mentor signup sends "MENTOR"
  callbackURL?: string;
}): Promise<AuthResult> {
  return authClient.signUp.email(
    {
      email,
      password,
      name,
      role,
      callbackURL,
    },
  ) as Promise<AuthResult>;
}

export async function signInEmail({
  email,
  password,
  callbackURL = "/",
  rememberMe = true,
}: {
  email: string;
  password: string;
  callbackURL?: string;
  rememberMe?: boolean;
}): Promise<AuthResult> {
  return authClient.signIn.email(
    {
      email,
      password,
      callbackURL,
      rememberMe,
    },
  ) as Promise<AuthResult>;
}

export async function signOutUser({
  callbackURL = "/",
}: { callbackURL?: string } = {}): Promise<AuthResult> {
  return authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        if (typeof window !== "undefined") {
          window.location.href = callbackURL;
        }
      },
    },
  }) as Promise<AuthResult>;
}

export async function resendVerificationEmail({
  email,
  callbackURL = "/",
}: {
  email: string;
  callbackURL?: string;
}): Promise<AuthResult> {
  return authClient.sendVerificationEmail(
    {
      email,
      callbackURL,
    },
  ) as Promise<AuthResult>;
}
