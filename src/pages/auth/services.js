import endpoints from "common/endpoints";
import { publicAxios as axios } from "setup/auth/axios";

class Services {
  signin(payload) {
    return axios({
      method: "POST",
      url: endpoints.login,
      data: payload.data,
    });
  }
}

export default new Services(); // eslint-disable-line
