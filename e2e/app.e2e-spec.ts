import { DesignPage } from './app.po';

describe('design App', function() {
  let page: DesignPage;

  beforeEach(() => {
    page = new DesignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
