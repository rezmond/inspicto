import { axios } from '@/libs/axios';

// const URL = `${process.env.API_HOST}/users`;
const URL = `http://localhost:3000/users`;

export const POST = async (req: Request) => {
  try {
    const res = await axios.post(URL, await req.json());
    return Response.json(res.data);
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Something went wrong', error: String(error) }),
      {
        status: 500,
      },
    );
  }
};
