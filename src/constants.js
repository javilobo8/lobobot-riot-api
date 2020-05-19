// Old regions
const PLATFORMS = {
  BR: 'BR',
  EUNE: 'EUNE',
  EUW: 'EUW',
  JP: 'JP',
  KR: 'KR',
  LAN: 'LAN',
  LAS: 'LAS',
  NA: 'NA',
  OCE: 'OCE',
  TR: 'TR',
  RU: 'RU',
};

const PLATFORM_HOST = {
  [PLATFORMS.BR]: 'https://br1.api.riotgames.com',
  [PLATFORMS.EUNE]: 'https://eun1.api.riotgames.com',
  [PLATFORMS.EUW]: 'https://euw1.api.riotgames.com',
  [PLATFORMS.JP]: 'https://jp1.api.riotgames.com',
  [PLATFORMS.KR]: 'https://kr.api.riotgames.com',
  [PLATFORMS.LAN]: 'https://la1.api.riotgames.com',
  [PLATFORMS.LAS]: 'https://la2.api.riotgames.com',
  [PLATFORMS.NA]: 'https://na1.api.riotgames.com',
  [PLATFORMS.OCE]: 'https://oc1.api.riotgames.com',
  [PLATFORMS.TR]: 'https://tr1.api.riotgames.com',
  [PLATFORMS.RU]: 'https://ru.api.riotgames.com',
};

const REGIONS = {
  AMERICAS: 'AMERICAS',
  ASIA: 'ASIA',
  EUROPE: 'EUROPE',
};

const REGION_HOST = {
  [REGIONS.AMERICAS]: 'https://americas.api.riotgames.com',
  [REGIONS.ASIA]: 'https://asia.api.riotgames.com',
  [REGIONS.EUROPE]: 'https://europe.api.riotgames.com',
};

const PLATFORM_TO_REGION = {
  [PLATFORMS.BR]: REGIONS.AMERICAS,
  [PLATFORMS.EUNE]: REGIONS.EUROPE,
  [PLATFORMS.EUW]: REGIONS.EUROPE,
  [PLATFORMS.JP]: REGIONS.ASIA,
  [PLATFORMS.KR]: REGIONS.ASIA,
  [PLATFORMS.LAN]: REGIONS.AMERICAS,
  [PLATFORMS.LAS]: REGIONS.AMERICAS,
  [PLATFORMS.NA]: REGIONS.AMERICAS,
  [PLATFORMS.OCE]: REGIONS.ASIA,
  [PLATFORMS.TR]: REGIONS.EUROPE,
  [PLATFORMS.RU]: REGIONS.ASIA,
};

const LOL = {
  QUEUEID: {
    SOLO: 420,
    FLEX: 440,
  },
};

exports.PLATFORMS = PLATFORMS;
exports.PLATFORM_HOST = PLATFORM_HOST;
exports.REGIONS = REGIONS;
exports.REGION_HOST = REGION_HOST;
exports.PLATFORM_TO_REGION = PLATFORM_TO_REGION;
exports.LOL = LOL;