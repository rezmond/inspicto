import { axiosServer } from '@/shared/lib/axios';

export const POST = async (request: Request) => {
  const url = new URL(request.url);
  try {
    const { data } = await axiosServer.post(url.pathname, await request.json());
    return Response.json(data);
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Something went wrong', error: String(error) }),
      {
        status: 500,
      },
    );
  }
};
