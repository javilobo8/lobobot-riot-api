const getResponseData = require('../utils/get-response-data');
const {getRegionFromPlatform} = require('../utils/get-platform');

/**
 * TFTMatch
 *
 * @param {number} version
 * @param {AxiosInstance} client
 */
function TFTMatch(version, client) {
  return {
    /**
     * listByPUUID
     *
     * @param {string} platform
     * @param {string} encryptedPUUID
     */
    listByPUUID(platform, encryptedPUUID) {
      const url = `${getRegionFromPlatform(platform)}/tft/match/v${version}/matches/by-puuid/${encryptedPUUID}/ids`;
      return getResponseData(client, { url });
    },

    /**
     * matchById
     *
     * @param {string} platform
     * @param {string} matchId
     */
    matchById(platform, matchId) {
      const url = `${getRegionFromPlatform(platform)}/tft/match/v${version}/matches/${matchId}`;
      return getResponseData(client, { url });
    }
  };
}

module.exports = TFTMatch;
