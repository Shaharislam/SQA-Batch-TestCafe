import { Selector } from 'testcafe'
//import {login} from '../helper'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'

const navbar = new Navbar()
const loginPage = new LoginPage()

fixture `Getting Started`
.page `http://zero.webappsecurity.com/`

 
test('Valid Login test', async t => {
        //await login('username','password')
        await t.click(navbar.signInButton)
        loginPage.loginApp('username','password')

        // await t.wait(3000)
        // const accountSummeryTab= Selector('#account_summary_tab')
        // await t.expect(accountSummeryTab.exists).ok()
        // //await t.expect(loginForm.exists).notOk()


        //  const userIcon= Selector('.icon-user')
        //  await t.click(userIcon)

        //  const logoutButton=Selector('#logout_link')
        //  await t.click(logoutButton)

        //  await t.expect(logoutButton.exists).notOk()
        //  await t.expect(navbar.signinButton.exists).ok()
    });
