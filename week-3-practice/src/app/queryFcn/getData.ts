export const getData = async (path: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

   if (!response.ok) {
      throw new Error('Network response was not ok')
    }
  
  return response.json();
};
