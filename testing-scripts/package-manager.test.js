const PackageManager = require('../src/package-manager.js');
const path = require('path');

const TESTSET={
  badPath: __dirname,
  goodPath: path.dirname(__dirname),
}

describe('helper integration check', ()=>{
  test('PackageManager has LOAD', () => {
    expect(
      PackageManager.LOAD
    ).toBeDefined();
  });
});

describe('checking IS state check', ()=>{

  const TEST_PM = PackageManager.LOAD( TESTSET.goodPath )

  test('packageJson exist', () => {
    expect(
      //
      TEST_PM.IS.package.exist
      //
    ).toBeTruthy();
  });
  test('packageLock exist', () => {
    expect(
      //
      TEST_PM.IS.packageLock.exist
      //
    ).toBeTruthy();
  });
  test('packageJson valid', () => {
    expect(
      //
      TEST_PM.IS.package.valid
      //
    ).toBeTruthy();
  });
  test('packageJson valid', () => {
    expect(
      //
      TEST_PM.IS.packageLock.valid
      //
    ).toBeTruthy();
  });
});


test('packageJson is read succesfull', () => {
  expect(
    PackageManager.LOAD(
      path.dirname(__dirname)
    ).READ.package
  ).not.toBeNull();
});

test('packageJson read version', () => {
  expect(
    PackageManager.LOAD(
      path.dirname(__dirname)
    ).READ.package.version
  ).toBeDefined();
});
