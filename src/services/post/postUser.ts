import { AxiosError, AxiosResponse } from "axios";

import { IUserCreate } from "types";

import { api } from "../api";

export function postUser({ lastName, firstName, email }: any) {
  return new Promise((resolve, reject) => {
    const userObject = { lastName, firstName, email };
    (async () => {
      await api
        .post(`users`, userObject)
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
