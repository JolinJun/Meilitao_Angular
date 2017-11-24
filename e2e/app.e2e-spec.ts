import { MeilitaoAngularPage } from './app.po';

describe('meilitao-angular App', () => {
  let page: MeilitaoAngularPage;

  beforeEach(() => {
    page = new MeilitaoAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
