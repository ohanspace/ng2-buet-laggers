import { BuetLaggersPage } from './app.po';

describe('buet-laggers App', function() {
  let page: BuetLaggersPage;

  beforeEach(() => {
    page = new BuetLaggersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('buet-laggers works!');
  });
});
