import { fetchData } from 'utils/requests/fetchData';

export const receiveVerificationCode = (
  email: string,
  baseURL: string,
  controller?: AbortController,
) =>
  fetchData(`${baseURL}/security/session`, {
    method: 'PATCH',
    queryParameters: { receiver: email },
    signal: controller?.signal,
  });
