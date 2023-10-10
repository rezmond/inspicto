import { axiosServer } from '@/libs/axios';

export const POST = async (req: Request) => {
  try {
    const res = await axiosServer.post('/users', await req.json());
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
