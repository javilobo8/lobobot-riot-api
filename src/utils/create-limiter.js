const RiotRateLimiter = require('riot-ratelimiter');
const querystring = require('querystring');

/**
 * createLimiter
 * 
 * @param {string} apiKey
 * @param {number} [strategy=0]
 */
function createLimiter(apiKey, strategy = 0) {
  const limiter = new RiotRateLimiter({ strategy });

  return (url, queryParams) => {
    let query;

    if (queryParams) {
      query = querystring.stringify(queryParams);
    }

    const finalUrl = url + (query ? `?${query}` : '');

    return limiter.executing({ url: finalUrl, token: apiKey, resolveWithFullResponse: true})
      .then((response) => JSON.parse(response.body));
  };
}

module.exports = createLimiter;
