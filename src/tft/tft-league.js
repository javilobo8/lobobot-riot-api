const {getPlatformHost} = require('../utils/get-platform');

/**
 * TFTLeague
 *
 * @param {number} version
 * @param {function} client
 */
function TFTLeague(version, client) {
  switch (version) {
    case 1: return {
      /**
       * entriesBySummonerId
       *
       * @param {string} platform
       * @param {string} summonerId
       */
      entriesBySummonerId(platform, summonerId) {
        const url = `${getPlatformHost(platform)}/tft/league/v1/entries/by-summoner/${summonerId}`;
        return client(url);
      },
    };
    default:
  }

  throw new Error(`Invalid version ${version} in TFTLeague`);
}

module.exports = TFTLeague;
