const {getPlatformHost} = require('../utils/get-platform');

/**
 * LOLMatch
 *
 * @param {number} version
 * @param {function} client
 */
function LOLMatch(version, client) {
  switch (version) {
    case 4: return {
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
          queue = undefined, // LOL.QUEUEID.SOLO
          season = undefined,
          endTime = undefined,
          beginTime = undefined,
          endIndex = undefined,
          beginIndex = undefined,
        } = params;
        const url = `${getPlatformHost(platform)}/lol/match/v4/matchlists/by-account/${accountId}`;
        return client(url, { champion, queue, season, endTime, beginTime, endIndex, beginIndex });
      },
  
      /**
       * matchById
       *
       * @param {string} platform
       * @param {string} matchId
       */
      matchById(platform, matchId) {
        const url = `${getPlatformHost(platform)}/lol/match/v4/matches/${matchId}`;
        return client(url);
      },
    };
    default:
  }

  throw new Error(`Invalid version ${version} in LOLMatch`);
}

module.exports = LOLMatch;