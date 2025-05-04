export const getPosts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};
