const getResponseData = require('../utils/get-response-data');
const {getPlatformHost} = require('../utils/get-platform');

/**
 * LOLLeague
 *
 * @param {number} version
 * @param {AxiosInstance} client
 */
function LOLLeague(version, client) {
  return {
    /**
     * entriesBySummonerId
     *
     * @param {string} platform
     * @param {string} summonerId
     */
    entriesBySummonerId(platform, summonerId) {
      const url = `${getPlatformHost(platform)}/lol/league/v${version}/entries/by-summoner/${summonerId}`;
      return getResponseData(client, { url });
    },
  };
}

module.exports = LOLLeague;