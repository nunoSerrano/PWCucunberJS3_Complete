//HomePage.js

class HomePage {
  constructor(page) {
    this.page = page;
    this.startJourneyButton = this.page.getByRole('link', { name: 'Start your journey' });
  }

  async navigateToMonetisPage() {
    await this.page.goto('https://monetis-delta.vercel.app');
  }

  async clickStartYourJourneyButton() {
    await this.startJourneyButton.click();
  }
}

export default HomePage;
