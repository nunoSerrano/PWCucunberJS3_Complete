// cucumber.js (at project root)
export default {
  default: {
    dryRun: false,
    formatOptions: { snippetInterface: 'async-await' },
    paths: ['tests/features/**/*.feature'],          // <-- find all .feature files
    require: [
      'core/World.js', //custom world for Cucumber to get environment variables
      'core/hooks.js', //run this first to initialize browser
      'tests/steps/**/*.js', //then all step definitions
    ],
    format: ['progress', 'html:cucumber-report.html']
  }
};

