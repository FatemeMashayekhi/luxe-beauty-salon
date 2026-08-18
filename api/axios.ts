import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import {
  GENERATE_ACCESS_TOKEN_URL,
  LOGIN_URL,
  OTP_LOGIN_URL,
  REGISTER_URL,
  VERIFY_OTP_URL,
} from "./endpoints";

declare module "axios" {
  export interface AxiosRequestConfig {
    lang?: string;
  }
}

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
axios.defaults.withCredentials = true;

axios.interceptors.request.use((req) => {
  if (
    req.url !== LOGIN_URL &&
    req.url !== REGISTER_URL &&
    req.url !== VERIFY_OTP_URL &&
    req.url !== OTP_LOGIN_URL
  ) {
    const token = Cookies.get("access_token");
    if (token) {
      req.headers.Authorization = `JWT ${token}`;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lang = (req as any).lang || "en";
  req.headers["Accept-Language"] = lang;
  return req;
});

axios.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error: AxiosError) => {
    const status = error?.response?.status;
    const originResponse = error.config;
    const refreshToken = Cookies.get("refresh_token");
    if (
      status === 401 &&
      refreshToken &&
      location.pathname !== "/auth/otp" &&
      location.pathname !== "/auth/otp/confirmation"
    ) {
      try {
        const res = await authRefreshToken(refreshToken);
        if (res) {
          const access = res.data["access"] || "";

          Cookies.set("access_token", access, {
            secure: true,
            sameSite: "Lax",
            httpOnly: false,
            path: "/",
            // domain: ".rhino-teams.com",
            expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
          });
          originResponse!.headers["Authorization"] =
            `JWT ${res.data["access"]}`;
          return axios.request(originResponse!);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        Cookies.remove("access_token", {
          path: "/",
          // domain: ".rhino-teams.com",
        });

        Cookies.remove("refresh_token", {
          path: "/",
          // domain: ".rhino-teams.com",
        });

        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  },
);

export default axios;

const authRefreshToken = (refresh: string) => {
  try {
    return axios.post(GENERATE_ACCESS_TOKEN_URL, { refresh: refresh });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw err;
  }
};
