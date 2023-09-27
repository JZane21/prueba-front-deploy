import { baseApi } from "./api";

export const getHelloFromApi = async () => {
  try {
    const dataFromPromise = await baseApi.get("/");
    return dataFromPromise.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}