import endpoints from "common/endpoints";
import { authAxios as axios } from "setup/auth/axios";



class Services {
  async getAllAgentPlayers(param) {
    const response = await  axios({
      method: "GET",
      url: `${endpoints.agentPlayers}/${localStorage.accountId}`,
    });
    return response?.data
  };
}

export default new Services(); //eslint-disable-line