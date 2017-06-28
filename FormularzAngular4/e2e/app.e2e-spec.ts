import { FormularzAngular4Page } from './app.po';

describe('formularz-angular4 App', () => {
  let page: FormularzAngular4Page;

  beforeEach(() => {
    page = new FormularzAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
