# Riot API Wrapper for NodeJS

Another NodeJS wrapper for Riot API

## Features

* Multiple key support for LOL, LOR, TFT and VALORANT

## Installation

```bash
npm i -S lobobot-riot-api
```

## Usage
```javascript
const RiotAPI = require('lobobot-riot-api');

const api = RiotAPI({
  lolKey: 'XXXX',
  tftKey: 'XXXX',
  lorKey: 'XXXX',
  valKey: 'XXXX',
});

api.tft.summonerV1.byName('EUW', 'Lobo Bot')
  .then((data) => {
    /*
    {
      id: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      accountId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      puuid: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      name: 'Lobo Bot',
      profileIconId: 773,
      revisionDate: 1589927796000,
      summonerLevel: 97
    }
    */
  });
```