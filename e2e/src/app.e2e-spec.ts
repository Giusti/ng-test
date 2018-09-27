import { AppPage } from './app.po';
import {browser, by} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should open and close the dialog', () => {
    page.navigateTo();
    browser.findElement(by.id('button')).click();
    expect(browser.findElement(by.id('dialog')).isDisplayed()).toBe(true);
    browser.actions().mouseMove({x: 20, y: 20}).perform();
    browser.waitForAngular();
    browser.findElement(by.className('cdk-overlay-container')).click();
    browser.waitForAngular();
    browser.waitForAngular();
    browser.waitForAngular();
    browser.waitForAngular();
    expect(browser.findElement(by.id('dialog')).isDisplayed()).toBe(false);
  });
});
