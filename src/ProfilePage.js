import React from "react";
import { useAuth } from "./auth";

function ProfilePage() {
  const auth = useAuth();
  return (
    <>
      <p>ProfilePage</p>
      <h1>{auth.user.username}</h1>
    </>
  );
}

export { ProfilePage };
