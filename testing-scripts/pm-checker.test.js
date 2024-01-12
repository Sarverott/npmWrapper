const PM_Checker = require('../src/pm-checker.js');
const path = require('path');

const TESTSET={
  missing: [__dirname, "package.json"],
  goodPackage: [path.dirname(__dirname), "package.json"],
  goodPackageLock: [path.dirname(__dirname), "package-lock.json"],
}

describe('helper integration check', ()=>{
  test('PM_Checker has LOAD', () => {
    expect(
      PM_Checker.LOAD
    ).toBeDefined();
  });
});

describe('test wrong data', ()=>{
  test('LOAD with exist check, where package.json not exists', () => {
    expect(
      PM_Checker.LOAD( ...TESTSET.missing ).exist
    ).toBeFalsy();
  });
});

describe('test good data', ()=>{
  test('LOAD and exist check - package.json exists', () => {
    expect(
      PM_Checker.LOAD( ...TESTSET.goodPackage ).exist
    ).toBeFalsy()
  });
  test('LOAD and exist check - package-lock.json exists', () => {
    expect(
      PM_Checker.LOAD( ...TESTSET.goodPackageLock ).exist
    ).toBeTruthy();
  });
  test('LOAD with valid check - package.json', () => {
    expect(
      PM_Checker.LOAD( ...TESTSET.goodPackage ).valid
    ).toBeTruthy();
  });
  test('LOAD with valid check - package-lock.json', () => {
    expect(
      PM_Checker.LOAD( ...TESTSET.goodPackageLock ).valid
    ).toBeTruthy();
  });
});
