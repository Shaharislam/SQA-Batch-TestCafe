import { Selector } from 'testcafe'
import xPathToCSS from 'xpath-to-css'
import  Navbar  from './page-objects/components/Navbar'
import SearchResultPage from './page-objects/pages/SearchResultPage'

const navbar = new Navbar()
const searchResultPage = new SearchResultPage()

// fixture `Getting Started`
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

test('search Test', async t => {
        //Get Selectors
        //const searchBox= Selector('#searchTerm')
        // const resultsTitle = Selector('h2')
        // const linkText = Selector('div').innerText

        //Xpath to CSS Example
        const xPath = `'//*[@id="carousel"]/div/div[1]/img'`
        const css = xPathToCSS(xPath)
        console.log(css)

        //Actions
       await t.typeText(navbar.searchBox,'Online bank',{paste:true})
       await t.pressKey('enter')
           
       //Assertions
       await t.expect(searchResultPage.resultsTitle.exists).ok()
       await t.expect(navbar.searchBox.exists).ok()
       await t.expect(searchResultPage.linkText.innerText).contains('Zero - Free Access to Online Banking')    

    });
