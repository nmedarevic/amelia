import { JecaBootstrapPage } from './app.po';

describe('jeca-bootstrap App', () => {
  let page: JecaBootstrapPage;

  beforeEach(() => {
    page = new JecaBootstrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
