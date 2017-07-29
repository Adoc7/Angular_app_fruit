import { MonApp01Page } from './app.po';

describe('mon-app01 App', () => {
  let page: MonApp01Page;

  beforeEach(() => {
    page = new MonApp01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
