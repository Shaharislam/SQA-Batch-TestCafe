import { Selector } from 'testcafe'
import  Navbar  from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'
import ForgottenPasswordPage from '../page-objects/pages/ForgottenPasswordPage'

const navbar = new Navbar()
const loginPage = new LoginPage()
const forgottenPasswordPage = new ForgottenPasswordPage()
 
// fixture `Getting Started`
// .page `https://devexpress.github.io/testcafe/example/`
fixture `forgotten password`
.page `http://zero.webappsecurity.com/`

    
test('User can request new password', async t => {
        //Get Selectors
       // const signInButton=Selector('#signin_button')
        const linkTopassword = Selector('a').withText('Forgot your password ?')
        //const emailInput= Selector('#user_email')
        //const message = Selector('div').innerText

        //Actions
        await t.click(navbar.signInButton)
        await t.click(linkTopassword)
        await t.typeText(forgottenPasswordPage.emailInput,'email@yopmail.com',{paste:true})
        await t.pressKey('enter')

        //Assertions
        await t.expect(forgottenPasswordPage.message.innerText).contains('email@yopmail.com')
        await t.expect(forgottenPasswordPage.emailInput.exists).notOk()

    });
