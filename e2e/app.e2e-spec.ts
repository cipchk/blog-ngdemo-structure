import { element, by, browser } from 'protractor';
import { NgArticlePage } from './app.po';

describe('ng-article App', () => {
    let page: NgArticlePage;

    beforeEach(() => {
        page = new NgArticlePage();
    });

    it('导航》用户列表页》用户详情》输入【asdf】》结果表单无法提交', () => {
        browser.get('/');
        element(by.linkText('user list')).click();
        element(by.linkText('to view')).click();
        element(by.id('name')).sendKeys('adsf');
        element(by.id('pwd')).sendKeys('admin');
        browser.sleep(1000);
        let submitEl = element(by.id('submit'));
        expect(submitEl.getAttribute('disabled')).toBe('true');
    });

    it('导航》用户列表页》用户详情》输入【admin】》结果表单无法提交', () => {
        browser.get('/');
        element(by.linkText('user list')).click();
        element(by.linkText('to view')).click();
        element(by.id('name')).sendKeys('admin');
        element(by.id('pwd')).sendKeys('admin');
        browser.sleep(1000);
        let submitEl = element(by.id('submit'));
        expect(submitEl.getAttribute('disabled')).toBe(null);
    });
    
});
