const {getPlatformHost} = require('../utils/get-platform');

/**
 * LOLSummoner
 *
 * @param {number} version
 * @param {function} client
 */
function LOLSummoner(version, client) {
  switch (version) {
    case 4: return {
      /**
       * byAccount
       *
       * @param {string} platform
       * @param {string} accountId
       */
      byAccount(platform, accountId) {
        const url = `${getPlatformHost(platform)}/lol/summoner/v4/summoners/by-account/${accountId}`;
        return client(url);
      },
  
      /**
       * byName
       *
       * @param {string} platform
       * @param {string} summonerName
       */
      byName(platform, summonerName) {
        const url = `${getPlatformHost(platform)}/lol/summoner/v4/summoners/by-name/${encodeURIComponent(summonerName)}`;
        return client(url);
      },
  
      /**
       * byPUUID
       *
       * @param {string} platform
       * @param {string} encryptedPUUID
       */
      byPUUID(platform, encryptedPUUID) {
        const url = `${getPlatformHost(platform)}/lol/summoner/v4/summoners/by-puuid/${encryptedPUUID}`;
        return client(url);
      },
  
      /**
       * bySummonerId
       *
       * @param {string} platform
       * @param {string} summonerId
       */
      bySummonerId(platform, summonerId) {
        const url = `${getPlatformHost(platform)}/lol/summoner/v4/summoners/${summonerId}`;
        return client(url);
      },
    };
    default:
  }

  throw new Error(`Invalid version ${version} in LOLSummoner`);
}

module.exports = LOLSummoner;