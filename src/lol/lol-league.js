const {getPlatformHost} = require('../utils/get-platform');

/**
 * LOLLeague
 *
 * @param {number} version
 * @param {function} client
 */
function LOLLeague(version, client) {
  switch (version) {
    case 4: return {
      /**
       * entriesBySummonerId
       *
       * @param {string} platform
       * @param {string} summonerId
       */
      entriesBySummonerId(platform, summonerId) {
        const url = `${getPlatformHost(platform)}/lol/league/v4/entries/by-summoner/${summonerId}`;
        return client(url);
      },
    };
    default:
  }

  throw new Error(`Invalid version ${version} in LOLLeague`);
}

module.exports = LOLLeague;