import { AxiosError } from 'axios';
import { axiosServer } from '@/shared/api/axios';

export const POST = async (request: Request) => {
  const url = new URL(request.url);
  try {
    const { data, headers } = await axiosServer.post(
      url.pathname,
      await request.json(),
      { headers: Object.fromEntries(request.headers.entries()) },
    );

    return new Response(JSON.stringify(data), {
      headers: Object.fromEntries(Object.entries(headers)),
    });
  } catch (error) {
    if (!(error instanceof AxiosError) || !error.response) {
      return new Response(
        JSON.stringify({
          message: 'Something went wrong',
          error: String(error),
        }),
        {
          status: 500,
        },
      );
    }

    const { data, status, statusText } = error.response;
    return new Response(JSON.stringify(data), {
      status,
      statusText,
    });
  }
};
