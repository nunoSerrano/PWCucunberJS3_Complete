// cucumber.js (at project root)
export default {
  default: {
    dryRun: false,
    formatOptions: { snippetInterface: 'async-await' },
    paths: ['tests/features/**/*.feature'],          // <-- find all .feature files
    require: [
      'core/hooks.js', //run this first to initialize browser
      'tests/steps/**/*.js', //then all step definitions
      'tests/pages/**/*.js' //then all page objects
    ],
    format: ['progress', 'html:cucumber-report.html']
  }
};

