const {
  PLATFORMS,
  PLATFORM_HOST,
  REGION_HOST,
  PLATFORM_TO_REGION,
} = require('../constants');

/**
 * getPlatformHost
 *
 * @param {string} platform
 * @returns {string}
 */
function getPlatformHost(platform) {
  if (PLATFORM_HOST[platform]) {
    return PLATFORM_HOST[platform];
  }

  throw new Error(`Invalid platform "${platform}"`);
}

/**
 * getRegionFromPlatform
 *
 * @param {string} platform
 * @returns {string}
 */
function getRegionFromPlatform(platform) {
  if (PLATFORMS[platform] && PLATFORM_TO_REGION[platform] && REGION_HOST[PLATFORM_TO_REGION[platform]]) {
    return REGION_HOST[PLATFORM_TO_REGION[platform]];
  }

  throw new Error(`Invalid platform "${platform}"`);
}

exports.getPlatformHost = getPlatformHost;
exports.getRegionFromPlatform = getRegionFromPlatform;