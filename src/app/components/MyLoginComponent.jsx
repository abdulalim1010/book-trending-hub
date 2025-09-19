"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function MyLoginComponent() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user?.name}!</p>
        <button onClick={() => signOut()}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <p>You are not logged in</p>
      <button onClick={() => signIn("google")}>Login with Google</button>
      <button
        onClick={() =>
          signIn("credentials", {
            email: "test@test.com",
            password: "123456",
          })
        }
      >
        Login with Email
      </button>
    </div>
  );
}
