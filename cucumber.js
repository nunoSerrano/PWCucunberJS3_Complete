// cucumber.js (at project root)
export default {
  default: {
    dryRun: false,
    formatOptions: { snippetInterface: 'async-await' },
    paths: ['tests/features/**/*.feature'],          // <-- find all .feature files
    require: [
      'core/coreLib.js',
      'tests/steps/**/*.js',
      'tests/pages/**/*.js'
    ],
    format: ['progress', 'html:cucumber-report.html']
  }
};

