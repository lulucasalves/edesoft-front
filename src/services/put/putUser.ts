import { AxiosError, AxiosResponse } from "axios";

import { IUserPost } from "types";

import { api } from "../api";

export function putUser({ id, firstName, lastName, email }: IUserPost) {
  return new Promise((resolve, reject) => {
    const userObject = { firstName, lastName, email };
    (async () => {
      await api
        .put(`users/${id}`, userObject)
        .then((res: AxiosResponse) => {
          const data = res.data;
          if (res.status === 200 || res.status === 201) {
            resolve(data);
          } else {
            reject(data.message);
          }
        })
        .catch((error: AxiosError) => reject(error));
    })();
  });
}
