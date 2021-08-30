import axiosClient from "./axiosInstance";

const userApi = {
  getUser: (params) => {
    const url = "/user";
    return axiosClient.get(url, { params });
  },
  Login: (data) => {
    const url = "/auth/login";
    return axiosClient.post(url, data);
  },
  Register: (data) => {
    const url = "auth/register";
    return axiosClient.post(url, data);
  },
};

export default userApi;
