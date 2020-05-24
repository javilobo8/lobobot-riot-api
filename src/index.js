const validateConfig = require('./utils/validate-config');
const createLimiter = require('./utils/create-limiter');

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
 * RiotAPI
 *
 * @param {object} keys
 */
function RiotAPI({ keys, options = {} } = { }) {
  validateConfig(keys);

  const clients = {
    lol: createLimiter(keys.lolKey, options.limiterStrategy),
    tft: createLimiter(keys.tftKey, options.limiterStrategy),
    lor: null,
    val: null,
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
    lor: { },
    val: { },
  };
}

RiotAPI.PLATFORMS = PLATFORMS;
RiotAPI.PLATFORM_HOST = PLATFORM_HOST;
RiotAPI.REGIONS = REGIONS;
RiotAPI.REGION_HOST = REGION_HOST;
RiotAPI.LOL = LOL;

module.exports = RiotAPI;
