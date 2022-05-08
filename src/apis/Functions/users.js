import { PostLogin, PostData, GetData, PostFormData, PutData } from "../helpers";

import url from "../url";

export const loginApi = async (body) =>
  PostLogin(url.urllogin, body)
    .then((res) => res)
    .catch((err) => err);
export const userInfoApi = async (body) =>
  GetData(url.urlUserInfo, body)
    .then((res) => res)
    .catch((err) => err);
export const editCard = async (body) =>
  PutData(url.urlEditCard, body)
    .then((res) => res)
    .catch((err) => err);
