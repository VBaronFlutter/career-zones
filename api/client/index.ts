import useSWR, { SWRConfig } from 'swr';

export const get = (url) => fetch(url).then((res) => res.json());
export { SWRConfig };

/***
 * HTTP API client
 */
const api = <T>(key: string) => useSWR<T, any>(key, get);
export default api;
