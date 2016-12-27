import { TimerAppPage } from './app.po';

describe('timer-app App', function() {
  let page: TimerAppPage;

  beforeEach(() => {
    page = new TimerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
