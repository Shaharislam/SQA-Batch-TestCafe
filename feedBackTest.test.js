import { Selector } from 'testcafe'
import  Navbar  from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'
import ForgottenPasswordPage from '../page-objects/pages/ForgottenPasswordPage'
import FeedBackPage from '../page-objects/pages/FeedbackPage'

const navbar = new Navbar()
const loginPage = new LoginPage()
const forgottenPasswordPage = new ForgottenPasswordPage()
const feedBackPage = new FeedBackPage()


// fixture `Getting Started`
// .page `https://devexpress.github.io/testcafe/example/`
fixture `feedback test`
.page `http://zero.webappsecurity.com/`

    
test('FeedBack Test', async t => {
        //Get Selectors
        
        //Actions
       await t.click(feedBackPage.linkToFeedback)
       await t.typeText(feedBackPage.form_name,'NAME',{paste:true})
       await t.typeText(feedBackPage.form_email,'test@gmail.com',{paste:true})
       await t.typeText(feedBackPage.form_subject,'SUBJECT',{paste:true})
       await t.typeText(feedBackPage.form_comment,'YOUR COMMENT GOES HERE',{paste:true})
       feedBackPage.waitFor(4000)
       await t.click(feedBackPage.form_submitButton)
       
       //Assertions
        await t.expect(feedBackPage.message.innerText).contains('Thank you for your comments')
        

    });
