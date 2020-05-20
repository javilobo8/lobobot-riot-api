const { expect } = require('chai');

const RiotAPI = require('../');

describe('RiotAPI', () => {
  it('should export a function', () => {
    expect(RiotAPI).to.be.a('function');
  });

  describe('when initialize', () => {
    it('should return the correct interface', () => {
      const api = RiotAPI({ lolKey: 'test-key' });

      expect(api.lol).to.exist;
      expect(api.tft).to.exist;
      expect(api.lor).to.exist;
      expect(api.val).to.exist;
    });

    it('should throw an error if no lolKey passed', () => {
      try {
        RiotAPI();
        expect.fail();
      } catch (error) {
        expect(error.message).to.be.equal('RiotApi: No LOL Riot API Key supplied');
      }
    });
  });
});