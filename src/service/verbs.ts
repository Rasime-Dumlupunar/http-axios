import axiosClient from './instance';

export async function getRequest(URL: string, params?: any) {
  const response = await axiosClient.get(URL, { params });
  return response;
}
export async function postRequest(URL: any, payload: any) {
  const response = await axiosClient.post(URL, payload);
  return response;
}
export async function putRequest(URL: any, payload: any) {
  const response = await axiosClient.put(URL, payload);
  return response;
}
export async function patchRequest(URL: any, payload: any) {
  const response = await axiosClient.patch(URL, payload);
  return response;
}
export async function deleteRequest(URL: any, payload: any) {
  const response = await axiosClient.delete(URL, payload);
  return response;
}
