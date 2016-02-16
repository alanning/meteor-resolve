Package.describe({
  name: 'alanning:resolve',
  version: '0.0.1',
  summary: 'Resolve a value given a path and an object',
  git: 'https://github.com/alanning/meteor-resolve',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('resolve.js');
  api.export('Util');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('alanning:resolve');
  api.addFiles('resolve-tests.js');
});
