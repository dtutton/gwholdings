import { GarronwareholdingsPage } from './app.po';

describe('garronwareholdings App', function() {
  let page: GarronwareholdingsPage;

  beforeEach(() => {
    page = new GarronwareholdingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
