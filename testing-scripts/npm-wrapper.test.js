const NPM_Wrapper = require('../src/npm-wrapper.js');
const path = require('path');

test('NPM_Wrapper has LOAD method', () => {
  expect(NPM_Wrapper.LOAD).toBeDefined();
});
