const getResponseData = require('../utils/get-response-data');
const {getPlatformHost} = require('../utils/get-platform');

/**
 * LOLSummoner
 *
 * @param {number} version
 * @param {AxiosInstance} client
 */
function LOLSummoner(version, client) {
  return {
    /**
     * byAccount
     *
     * @param {string} platform
     * @param {string} accountId
     */
    byAccount(platform, accountId) {
      const url = `${getPlatformHost(platform)}/lol/summoner/v${version}/summoners/by-account/${accountId}`;
      return getResponseData(client, { url });
    },

    /**
     * byName
     *
     * @param {string} platform
     * @param {string} summonerName
     */
    byName(platform, summonerName) {
      const url = `${getPlatformHost(platform)}/lol/summoner/v${version}/summoners/by-name/${encodeURIComponent(summonerName)}`;
      return getResponseData(client, { url });
    },

    /**
     * byPUUID
     *
     * @param {string} platform
     * @param {string} encryptedPUUID
     */
    byPUUID(platform, encryptedPUUID) {
      const url = `${getPlatformHost(platform)}/lol/summoner/v${version}/summoners/by-puuid/${encryptedPUUID}`;
      return getResponseData(client, { url });
    },

    /**
     * bySummonerId
     *
     * @param {string} platform
     * @param {string} summonerId
     */
    bySummonerId(platform, summonerId) {
      const url = `${getPlatformHost(platform)}/lol/summoner/v${version}/summoners/${summonerId}`;
      return getResponseData(client, { url });
    },
  };
}

module.exports = LOLSummoner;