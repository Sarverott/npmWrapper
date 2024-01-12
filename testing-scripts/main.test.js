const MAIN = require('../main.js');
const path = require('path');

test('checking if LOAD methods are defined', () => {
  expect(MAIN.LOAD).toBeDefined();
  expect(MAIN.PM_Checker.LOAD).toBeDefined();
  expect(MAIN.PackageManager.LOAD).toBeDefined();
  expect(MAIN.NPM_Wrapper).toBeDefined();
});

test('CWD and CD use, go to upper dir', () => {
  expect(MAIN.CWD).toBe(process.cwd());
  expect(MAIN.CD("..")).toBe(path.dirname(process.cwd()));
});
