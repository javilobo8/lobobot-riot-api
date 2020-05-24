const {getRegionFromPlatform} = require('../utils/get-platform');

/**
 * TFTMatch
 *
 * @param {number} version
 * @param {function} client
 */
function TFTMatch(version, client) {
  switch (version) {
    case 1: return {
      /**
       * listByPUUID
       *
       * @param {string} platform
       * @param {string} encryptedPUUID
       */
      listByPUUID(platform, encryptedPUUID) {
        const url = `${getRegionFromPlatform(platform)}/tft/match/v1/matches/by-puuid/${encryptedPUUID}/ids`;
        return client(url);
      },
  
      /**
       * matchById
       *
       * @param {string} platform
       * @param {string} matchId
       */
      matchById(platform, matchId) {
        const url = `${getRegionFromPlatform(platform)}/tft/match/v1/matches/${matchId}`;
        return client(url);
      }
    };
    default:
  }

  throw new Error(`Invalid version ${version} in TFTMatch`);
}

module.exports = TFTMatch;
