export async function loginUser(email: string, password: string) {
  const response = await fetch("http://localhost:10004/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const user = await response.json();

  if (!response.ok) {
    // If API returns an error, throw an error
    throw new Error(user.error || "Invalid credentials");
  }

  return user; // Return the user object
}
