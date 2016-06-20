export class BuetLaggersPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('buet-laggers-app h1')).getText();
  }
}
