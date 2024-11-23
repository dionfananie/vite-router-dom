import { Cookies as ReactCookie } from "react-cookie";
import { TimeSpan, createDate } from "oslo";

const COOKIE_NAME = "x-auth-bearmentor";

export const accessTokenCookie = new ReactCookie(null, {
  path: "/",
  sameSite: "none",
  secure: true,
  expires: createDate(new TimeSpan(30, "d")),
});

export const accessToken = {
  get() {
    return accessTokenCookie.get(COOKIE_NAME) || null;
  },
  set(token: string) {
    accessTokenCookie.set(COOKIE_NAME, token);
  },
  remove() {
    accessTokenCookie.remove(COOKIE_NAME);
  },
};
