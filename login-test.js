import {Selector} from 'testcafe';

fixture `Login tests`
.page `https://www.saucedemo.com/`

test('A user can order items successfully', async t => {

    await t
    .typeText(Selector('#user-name'),'performance_glitch_user')
    .typeText(Selector('#password'),'secret_sauce')
    .click(Selector('#login-button'))
    .click(Selector('#add-to-cart-sauce-labs-backpack'))
    .click(Selector('#add-to-cart-sauce-labs-bike-light'))
    .click(Selector('#shopping_cart_container > a'))
    .click(Selector('#checkout'))
    .typeText(Selector('#first-name'),'Kasuni')
    .typeText(Selector('#last-name'),'Samarasinghe')
    .typeText(Selector('#postal-code'),'71000')
    .click(Selector('#continue'))
    .click(Selector('#finish'))
}).timeouts({
    pageLoadTimeout:    2000,
    pageRequestTimeout: 60000,
    ajaxRequestTimeout: 60000,

});