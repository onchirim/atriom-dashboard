const path = require('path');
const chartdata = require('../../../src/helpers/chartdata');
const data = require('../../../src/contexts/ATRIOM');

describe('Creates app list', () => {
  // console.log('DATA', data);
  const apps = data.default;
  xit('Testing to see if appsList array is populated', () => {
    const result = chartdata.createAppList(apps);
    console.log('RESULT', result);
    expect(result[0]).toHaveProperty('accessor');
    expect(result[0]).toHaveProperty('Header');
    expect(result.length).toBe(3);
  });
});

describe('Creates dependency list', () => {
  const apps = data.default;
  xit('Testing to see if unique list of dependencies is generated across apps', () => {
    const result = chartdata.createDependencyList(apps);
    console.log('RESULT', result);
    expect(result).toContain('accessor');
    expect(result.length).toBe(3);
  });
  xit('Testing to see if unique list of dependencies is generated across apps', () => {
    const result = chartdata.createDependencyList(apps);
    console.log('RESULT', result);
    expect(result).toContain('accessor');
    expect(result.length).toBe(3);
  });
});
