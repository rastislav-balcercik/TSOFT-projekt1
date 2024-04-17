const chrome = require('selenium-webdriver/chrome');
const {Builder, Browser, By } = require('selenium-webdriver');
 
(async function textChangeText() {
  const driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(new chrome.Options().addArguments('--headless'))
    .build();
 
    try {
    await driver.get('http://localhost:3000');
    const text = await driver.findElement(By.id('text')).getText();
    console.log("Parsed text:" + text);

    // Kontrola či sa text zobrazuje správne
    if (text !== 'Rastislav Balcerčík') {
      throw new Error('Initial text is not correct');
    }

    const button = await driver.findElement(By.id('button'));
    await button.click();

    // Kontrola či sa text zmenil
    const newText = await driver.findElement(By.id('text')).getText();
    if (newText !== 'RB') {
      throw new Error('Text was not changed');
    }
    console.log("New arsed text:" + newText);

  } finally {
    await driver.quit();
    console.log('Test done');
  }
})();