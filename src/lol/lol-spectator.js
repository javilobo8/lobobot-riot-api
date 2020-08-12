const {getPlatformHost} = require('../utils/get-platform');

/**
 * LOLSpectator
 *
 * @param {number} version
 * @param {function} client
 */
function LOLSpectator(version, client) {
  switch (version) {
    case 4: return {
      /**
       * activeGamesBySummoner
       *
       * @param {string} platform
       * @param {string} summonerId
       */
      activeGamesBySummoner(platform, summonerId) {
        const url = `${getPlatformHost(platform)}/lol/spectator/v4/active-games/by-summoner/${summonerId}`;
        return client(url);
      },
    };
    default:
  }

  throw new Error(`Invalid version ${version} in LOLSpectator`);
}

module.exports = LOLSpectator;