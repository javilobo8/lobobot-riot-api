const getResponseData = require('../utils/get-response-data');
const {getPlatformHost} = require('../utils/get-platform');

/**
 * TFTLeague
 *
 * @param {number} version
 * @param {AxiosInstance} client
 */
function TFTLeague(version, client) {
  return {
    /**
     * entriesBySummonerId
     *
     * @param {string} platform
     * @param {string} summonerId
     */
    entriesBySummonerId(platform, summonerId) {
      const url = `${getPlatformHost(platform)}/tft/league/v${version}/entries/by-summoner/${summonerId}`;
      return getResponseData(client, { url });
    },
  };
}

module.exports = TFTLeague;
