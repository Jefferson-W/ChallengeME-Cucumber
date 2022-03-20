const { Given, When, Then, Before, After } = require('@cucumber/cucumber')
const { expect } = require('chai')
const webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const { setDefaultTimeout } = require('@cucumber/cucumber');
const { initDriver } = require('../support/driverUtils');
// const LoginPage = require('../pageobjects/page');



setDefaultTimeout(60 * 1000);

const chrome = require('selenium-webdriver/chrome'); // PARA FUNCIONAR O CHROME
const chromedriver = require('chromedriver'); // PARA FUNCIONAR O CHROME

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());// PARA FUNCIONAR O CHROME

let driver

Before(async () => { // utilizando o hook before para acessar a pagina
  driver = initDriver(); // utilizando a função para iniciar o Driver
  await driver.get('http://automationpractice.com/index.php'); // abrindo a pagina no Browser

});

After(function () {
});

// clicando no botão de login
Given('que acesso a pagina principal, clico em Sign in pra realizar o login', async () => {
  await driver.findElement(By.className('login')).click();

});


// Enviando os dados de email, senha, e clicando no botão para realizar o login
When('submeto meu email com {string} e senha com {string}', async (email, pass) => {
  await driver.findElement(By.id('email')).sendKeys(email);
  await driver.findElement(By.id('passwd')).sendKeys(pass);
  await driver.findElement(By.id('SubmitLogin')).click();

});

// Validando na pagina, se possui o nome do usuário logado
Then('devo ver o meu nome {string} como usuario logado', async (name) => {
  let user = await driver.findElement(By.className('account')).getText();
  expect(user).equals(name);

});


// verificação dos erros gerados
Then('vejo a mensagem de erro: {string}', async (string) => {
  let errorMsg = await driver.findElement(By.xpath('//*[@id="center_column"]/div[1]/ol/li')).getText();

  expect(string).equals(errorMsg);



}); 