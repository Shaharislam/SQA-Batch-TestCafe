import { Selector } from 'testcafe'
//import {login} from '../helper'
import LoginPage from '../page-objects/pages/LoginPage.js'
import Navbar from '../page-objects/components/Navbar.js'

const navbar = new Navbar()
const loginPage = new LoginPage()

// fixture `Getting Started`
// .page `https://devexpress.github.io/testcafe/example/`
fixture `Getting Started`
.page `http://zero.webappsecurity.com/`

    .before(async t =>{
        //Test setup
        //runDatabaseReset 
        //speedTestData()
    })

    .beforeEach(async t=>{
        //run beforeEachTest
        await t.setTestSpeed(1)
       // await t.setPageLoadTimeout(5000)
    })

    .after(async t =>{ 
        //cleaning test data
        //logging and sending to monitor system
    })
    .afterEach(async t =>{
      //run after each Test
      await t.wait(2000)
    })

test('Invalid Login test', async t => {
    //await login('username1','password1')

    navbar.click(navbar.signInButton)
    loginPage.loginApp('invalid username','invalid password')
        const errorMessage=Selector('.alert-error').innerText
        await t.expect(errorMessage).contains('Login and/or password are wrong.')   
    });
test.only("Valid Login test @tk", async t => {
        //await login('username','password')
        await t.click(navbar.signInButton)
        //await t.wait(1000)
        loginPage.loginApp('username','password')
        await t.wait(30000)
        const accountSummeryTab= Selector('#account_summary_tab')
        await t.expect(accountSummeryTab.exists).ok()
        // await t.expect(loginForm.exists).notOk()


        //  const userIcon= Selector('.icon-user')
        //  await t.click(userIcon)

        //  const logoutButton=Selector('#logout_link')
        //  await t.click(logoutButton)

        //  await t.expect(logoutButton.exists).notOk()
        //  await t.expect(signinButton.exists).ok()

    });

test('My first testcafe test', async t => {
    const developer_name_input= Selector('#developer-name')
    const submit_button= Selector('#submit-button')
    const articleText = Selector('#article-header')

    await t.takeScreenshot({fullPage: true})
    await t.takeElementScreenshot(submit_button)
    await t.typeText(developer_name_input,'Rakib')
    await t.click(submit_button)
    await t.wait(2000)
    await t.expect(Selector(articleText).innerText).contains('Rakib')
});

test('My first testcafe test-2', async t => {
    const developer_name_input= Selector('#developer-name')
    const submit_button= Selector('#submit-button')
    const articleText = Selector('#article-header')

    //await t.takeScreenshot({fullPage: true})
   // await t.takeElementScreenshot(submit_button)
    await t.resizeWindow(800,600)
    await t.typeText(developer_name_input,'Rakib')
    await t.click(submit_button)
    await t.wait(2000)
    await t.expect(Selector(articleText).innerText).contains('Raki')
});

test('My first testcafe test', async t => {
    const developer_name_input= Selector('#developer-name')
    const submit_button= Selector('#submit-button')
    const articleText = Selector('#article-header')

    await t.takeScreenshot({fullPage: true})
    await t.takeElementScreenshot(submit_button)
    await t.typeText(developer_name_input,'Rakib')
    await t.click(submit_button)
    await t.wait(2000)
    await t.expect(Selector(articleText).innerText).contains('Rakib')
       
    //click
    await t.click('selector',{options})
    //Double click
    await t.doubleClick('selector',{options})
    //Right Click
    await t.rightClick('Selector',{Options})
    //Drag Element 
    await t.drag('Selector',{Options})
    //Hover
    await t.hover('Selector',{Options})
    //Selec text
    await t.typeText('Selector','text')
    //Press key on the keyboard
    await t.pressKey('key')
    //Navigate
    await t.navigateTo('url')
    //Take Screenshot
    await t.takeScreenshot()
    await t.takeElementScreenshot()
    //Resize Windows
    await t.resizeWindow(800,600)

    //Deep Equal
    await t.expect('foo').eql('foo','message',options)
    //not Deep Equal
    await t.expect('foo').notEql('foo')
    //Ok
    await t.expect(true).ok
    //Not Ok
    await t.expect(true).notOk
    //Contains
    await t.expect('foo').contains('o')
    //Not Contains
    await t.expect('foo').notContains('hey')
    //Greater or less than
    await t.expect(10).gt(10)
    await t.expect(10).gte(10)
    await t.expect(10).lt(10)
    await t.expect(10).lte(10)
    //within
    await t.expect(10).within(1,100)
    //Not Within
    await t.expect(10).notWithin(5,50)
});