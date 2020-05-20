/**
 * validateConfig
 * 
 * @param {Config} [config={}]
 */
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

module.exports = validateConfig;
