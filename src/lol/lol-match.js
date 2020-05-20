const getResponseData = require('../utils/get-response-data');
const {getPlatformHost} = require('../utils/get-platform');

const {LOL} = require('../constants');

/**
 * LOLMatch
 *
 * @param {number} version
 * @param {AxiosInstance} client
 */
function LOLMatch(version, client) {
  return {
    /**
     * listByAccountId
     *
     * @param {string} platform
     * @param {string} accountId
     * @param {object} [params={}]
     */
    listByAccountId(platform, accountId, params = {}) {
      const {
        champion = undefined,
        queue = LOL.QUEUEID.SOLO,
        season = undefined,
        endTime = undefined,
        beginTime = undefined,
        endIndex = undefined,
        beginIndex = undefined,
      } = params;
      const url = `${getPlatformHost(platform)}/lol/match/v${version}/matchlists/by-account/${accountId}`;
      return getResponseData(client, {
        url,
        params: { champion, queue, season, endTime, beginTime, endIndex, beginIndex },
      });
    },

    /**
     * matchById
     *
     * @param {string} platform
     * @param {string} matchId
     */
    matchById(platform, matchId) {
      const url = `${getPlatformHost(platform)}/lol/match/v${version}/matches/${matchId}`;
      return getResponseData(client, { url });
    },
  };
}

module.exports = LOLMatch;