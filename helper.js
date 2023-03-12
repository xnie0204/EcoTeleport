const axios = require('axios');

const helpers = {
    axiosGet : async function (url) {
        const respond = await axios.get(url);
        return respond.data;
      },

      axiosPost : async function (url, item) {
        const respond = await axios.post(url,item)
        return  respond.data;
      },

}

export default helpers;