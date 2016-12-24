import { QuidoitcombienPage } from './app.po';

describe('quidoitcombien App', function() {
  let page: QuidoitcombienPage;

  beforeEach(() => {
    page = new QuidoitcombienPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
