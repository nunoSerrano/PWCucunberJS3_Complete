// core/world.js
// This from Cucumber. Custom World for Cucumber to manage environment variables. 
// No need to import dotenv in each step file and just need to get the baseurl from here
import { setWorldConstructor } from '@cucumber/cucumber';
import dotenv from 'dotenv';
dotenv.config();

class CustomWorld {
  constructor(options) {
    this.parameters = options.parameters;

    // Environment: SIT or UAT (default SIT)
    this.environment = (process.env.ENV || 'SIT').toUpperCase();

    // Map environments to URLs
    this.config = {
      SIT: process.env.BASE_URL_SIT,
      UAT: process.env.BASE_URL_UAT,
    };

    if (!this.config.SIT) {
      console.warn('BASE_URL_SIT not set in .env');
    }
    if (!this.config.UAT) {
      console.warn('BASE_URL_UAT not set in .env');
    }
  }

  // Get base URL based on current environment to call from step definitions
  getBaseUrl() {
    const url = this.config[this.environment];
    
    if (!url) {
      throw new Error(
        `No base URL configured for ENV="${this.environment}". ` +
        `Check BASE_URL_SIT / BASE_URL_UAT in .env.`
      );
    }
    return url;
  }

//   getBaseUrl(pageName) {
//     // Just an example; adapt to your logic
//     switch (pageName) {
//       case 'Monetis':
//         return `${this.baseUrl}/monetis`;
//       default:
//         return this.baseUrl;
//     }
// }
}

setWorldConstructor(CustomWorld);