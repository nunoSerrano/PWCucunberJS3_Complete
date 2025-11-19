// cucumber.js (at project root)
export default {
  default: {
    dryRun: false,
    formatOptions: { snippetInterface: 'async-await' },
    paths: ['tests/features/**/*.feature'],          // <-- find all .feature files
    require: [
      'tests/steps/**/*.js'
    ],
    format: ['progress', 'html:cucumber-report.html']
  }
};

