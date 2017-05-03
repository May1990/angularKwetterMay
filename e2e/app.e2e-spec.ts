import { AngularKwetterMayPage } from './app.po';

describe('angular-kwetter-may App', () => {
  let page: AngularKwetterMayPage;

  beforeEach(() => {
    page = new AngularKwetterMayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
