import { Selector } from 'testcafe'
import { login } from '../helper'

// fixture `New Pay Test`
// .page `https://devexpress.github.io/testcafe/example/`
fixture `search test`
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
    })

test.before(async t => {
    // const signinButton=Selector('#signin_button')
    // await t.click(signinButton)

    // const loginForm=Selector('#login_form')
    // await t.expect(loginForm.exists).ok()

    // const usernameInput=Selector('#user_login')
    // const passwordInput=Selector('#user_password')
    // await t.typeText(usernameInput,'username',{paste:true})
    // await t.typeText(passwordInput,'password',{paste:true})

    // const submitButton= Selector('.btn-primary')
    // await t.click(submitButton)
    await login('username','password')

    })('User can add new pay to the list', async t=>{
        //selector
        const payBillsTab = Selector('#pay_bills_tab')
        const addNewPayTab = Selector('a').withText('Add New Payee')
        const form_name= Selector('#np_new_payee_name')
        const form_address= Selector('#np_new_payee_address')
        const form_account= Selector('#np_new_payee_account')
        const form_details= Selector('#np_new_payee_details')
        const form_submitButton= Selector('#add_new_payee')
        const message= Selector('#alert_content').innerText
       //Actions
       await t.click(payBillsTab)
       await t.click(addNewPayTab)
       await t.typeText(form_name,'name',{paste:true})
       await t.typeText(form_address,'address',{paste:true})
       await t.typeText(form_account,'account',{paste:true})
       await t.typeText(form_details,'Details',{paste:true})
       await t.click(form_submitButton)

       //Assertions
       await t.expect(message).contains('successfully created')

    })

    test.before(async t => {
        await login('username','password')
    
        })('User can add new pay to the list', async t=>{
            //selector
            const payBillsTab = Selector('#pay_bills_tab')
            const addNewPayTab = Selector('a').withText('Add New Payee')
            const form_name= Selector('#np_new_payee_name')
            const form_address= Selector('#np_new_payee_address')
            const form_account= Selector('#np_new_payee_account')
            const form_details= Selector('#np_new_payee_details')
            const form_submitButton= Selector('#add_new_payee')
            const message= Selector('#alert_content').innerText
           //Actions
           await t.click(payBillsTab)
           await t.click(addNewPayTab)
           await t.typeText(form_name,'name',{paste:true})
           await t.typeText(form_address,'address',{paste:true})
           await t.typeText(form_account,'account',{paste:true})
           await t.typeText(form_details,'Details',{paste:true})
           await t.click(form_submitButton)
    
           //Assertions
           await t.expect(message).contains('successfully created')
    
        })
    