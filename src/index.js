const axios = require('axios').default;
const validateConfig = require('./utils/validate-config');

const LOLSummoner = require('./lol/lol-summoner');
const LOLLeague = require('./lol/lol-league');
const LOLMatch = require('./lol/lol-match');

const TFTSummoner = require('./tft/tft-summoner');
const TFTLeague = require('./tft/tft-league');
const TFTMatch = require('./tft/tft-match');

const {
  PLATFORMS,
  PLATFORM_HOST,
  REGIONS,
  REGION_HOST,
  LOL,
} = require('./constants');

/**
 * createClient
 * 
 * @param {string} apiKey
 * @returns {AxiosInstance}
 */
function createClient(apiKey) {
  return axios.create({ headers: { 'X-Riot-Token': apiKey } });
}

/**
 * RiotAPI
 *
 * @param {Config} config
 */
function RiotAPI(config) {
  validateConfig(config);

  const clients = {
    lol: createClient(config.lolKey),
    tft: createClient(config.tftKey),
  };

  return {
    lol: {
      summonerV4: LOLSummoner(4, clients.lol),
      leagueV4: LOLLeague(4, clients.lol),
      matchV4: LOLMatch(4, clients.lol),
    },
    tft: {
      summonerV1: TFTSummoner(1, clients.tft),
      leagueV1: TFTLeague(1, clients.tft),
      matchV1: TFTMatch(1, clients.tft),
    },
    lor: {
      
    },
    val: {

    }
  };
}

RiotAPI.PLATFORMS = PLATFORMS;
RiotAPI.PLATFORM_HOST = PLATFORM_HOST;
RiotAPI.REGIONS = REGIONS;
RiotAPI.REGION_HOST = REGION_HOST;
RiotAPI.LOL = LOL;

module.exports = RiotAPI;
