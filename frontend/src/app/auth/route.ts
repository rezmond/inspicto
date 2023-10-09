// const URL = `${process.env.API_HOST}/users`;
const URL = `http://localhost:3000/users`;

export const POST = async (req: Request) => {
  const data = await req.json();
  try {
    const res = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return Response.json(await res.json());
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Something went wrong', error: String(error) }),
      {
        status: 500,
      },
    );
  }
};
