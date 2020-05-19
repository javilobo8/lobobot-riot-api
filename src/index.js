const axios = require('axios').default;

const {
  PLATFORMS,
  PLATFORM_HOST,
  REGIONS,
  REGION_HOST,
  PLATFORM_TO_REGION,
  LOL,
} = require('./constants');

// const c = {
//   lolKey: 'test',
//   tftKey: 'test',
//   lorKey: 'test',
//   valKey: 'test',
// };

function validateConfig(config = {}) {
  if (!config.lolKey) {
    throw new Error('RiotApi: No LOL Riot API Key supplied');
  }

  if (!config.tftKey) {
    console.warn('RiotApi: No TFT Riot API Key supplied');
  }

  if (!config.lorKey) {
    console.warn('RiotApi: No LOR Riot API Key supplied');
  }

  if (!config.valKey) {
    console.warn('RiotApi: No VALORANT Riot API Key supplied');
  }
}

function getPlatfromHost(platform) {
  if (PLATFORM_HOST[platform]) {
    return PLATFORM_HOST[platform];
  }

  throw new Error(`Invalid platform "${platform}"`);
}

function getRegionFromPlatform(platform) {
  if (PLATFORMS[platform] && PLATFORM_TO_REGION[platform] && REGION_HOST[PLATFORM_TO_REGION[platform]]) {
    return REGION_HOST[PLATFORM_TO_REGION[platform]];
  }

  throw new Error(`Invalid platform "${platform}"`);
}

function getResponseData(client, params) {
  return client({ url: params.url, method: params.method || 'get' })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

function LOLSummoner(version, client) {
  return {
    byAccount(platform, accountId) {
      const url = `${getPlatfromHost(platform)}/lol/summoner/v${version}/summoners/by-account/${encodeURIComponent(accountId)}`;
      return getResponseData(client, { url });
    },

    byName(platform, summonerName) {
      const url = `${getPlatfromHost(platform)}/lol/summoner/v${version}/summoners/by-name/${encodeURIComponent(summonerName)}`;
      return getResponseData(client, { url });
    },

    byPUUID(platform, encryptedPUUID) {
      const url = `${getPlatfromHost(platform)}/lol/summoner/v${version}/summoners/by-puuid/${encodeURIComponent(encryptedPUUID)}`;
      return getResponseData(client, { url });
    },

    bySummonerId(platform, summonerId) {
      const url = `${getPlatfromHost(platform)}/lol/summoner/v${version}/summoners/${encodeURIComponent(summonerId)}`;
      return getResponseData(client, { url });
    },
  };
}

function LOLLeague(version, client) {
  return {
    entriesBySummonerId(platform, summonerId) {
      const url = `${getPlatfromHost(platform)}/lol/league/v${version}/entries/by-summoner/${encodeURIComponent(summonerId)}`;
      return getResponseData(client, { url });
    },
  };
}

function LOLMatch(version, client) {
  return {
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
      const url = `${getPlatfromHost(platform)}/lol/match/v${version}/matchlists/by-account/${encodeURIComponent(accountId)}`;
      return getResponseData(client, {
        url,
        params: { champion, queue, season, endTime, beginTime, endIndex, beginIndex },
      });
    },

    matchById(platform, matchId) {
      const url = `${getPlatfromHost(platform)}/lol/match/v${version}/matches/${encodeURIComponent(matchId)}`;
      return getResponseData(client, { url });
    },
  };
}

function TFTSummoner(version, client) {
  return {
    byAccount(platform, accountId) {
      const url = `${getPlatfromHost(platform)}/tft/summoner/v${version}/summoners/by-account/${encodeURIComponent(accountId)}`;
      return getResponseData(client, { url });
    },

    byName(platform, summonerName) {
      const url = `${getPlatfromHost(platform)}/tft/summoner/v${version}/summoners/by-name/${encodeURIComponent(summonerName)}`;
      return getResponseData(client, { url });
    },

    byPUUID(platform, encryptedPUUID) {
      const url = `${getPlatfromHost(platform)}/tft/summoner/v${version}/summoners/by-puuid/${encodeURIComponent(encryptedPUUID)}`;
      return getResponseData(client, { url });
    },

    bySummonerId(platform, summonerId) {
      const url = `${getPlatfromHost(platform)}/tft/summoner/v${version}/summoners/${encodeURIComponent(summonerId)}`;
      return getResponseData(client, { url });
    },
  };
}

function TFTMatch(version, client) {
  return {
    listByPUUID(platform, encryptedPUUID) {
      const url = `${getRegionFromPlatform(platform)}/tft/match/v${version}/matches/by-puuid/${encodeURIComponent(encryptedPUUID)}/ids`;
      return getResponseData(client, { url });
    },

    matchById(platform, matchId) {
      const url = `${getRegionFromPlatform(platform)}/tft/match/v${version}/matches/${encodeURIComponent(matchId)}`;
      return getResponseData(client, { url });
    }
  };
}

function createClient(apiKey) {
  return axios.create({ headers: { 'X-Riot-Token': apiKey } });
}

function RiotApi({ config }) {
  validateConfig(config);

  const clients = {
    lol: createClient(config.lolKey),
    tft: createClient(config.tftKey),
  };

  return Object.freeze({
    lol: {
      summonerV4: LOLSummoner(4, clients.lol),
      leagueV4: LOLLeague(4, clients.lol),
      matchV4: LOLMatch(4, clients.lol),
    },
    tft: {
      summonerV1: TFTSummoner(1, clients.tft),
      matchV1: TFTMatch(1, clients.tft),
    },
    lor: {
      
    },
    val: {

    }
  });
}

RiotApi.PLATFORMS = PLATFORMS;
RiotApi.PLATFORM_HOST = PLATFORM_HOST;
RiotApi.REGIONS = REGIONS;
RiotApi.REGION_HOST = REGION_HOST;
RiotApi.LOL = LOL;

module.exports = RiotApi;
