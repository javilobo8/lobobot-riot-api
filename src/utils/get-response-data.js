/**
 * getResponseData
 *
 * @param {AxiosInstance} client
 * @param {object} params
 */
function getResponseData(client, params) {
  return client(params)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

module.exports = getResponseData;
