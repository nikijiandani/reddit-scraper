const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.reddit.com';

puppeteer
  .launch()
  .then(browser => {
    return browser.newPage();
  })
  .then(page => {
    return page.goto(url).then(function() {
      return page.content();
    })
  })
  .then(html => {
    $('h3', html).each(function() {
      console.log($(this).text());
    });
  })
  .catch(err => {
    console.log(err)
  })