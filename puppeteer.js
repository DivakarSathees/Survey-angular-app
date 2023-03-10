const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-dffafdafebcfacbdcbaeafafbecbbd.project.examly.io/');
    await page.setViewport({ width:1100, height:600, })
    // await page.screenshot({path: 'example.png'});
    
    const products = await page.$$('.card');
    if(products.length == 3)
      console.log('Product length is 3: success 1');
    else
      console.log("TESTCASE:test_case1:failure");
    }
    catch(e){
      console.log(e);
      console.log('TESTCASE:test_case1:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try{
      await page.goto('https://8081-dffafdafebcfacbdcbaeafafbecbbd.project.examly.io/');
      await page.setViewport({ width:1100, height:600, })
      // await page.screenshot({path: 'example.png'});
    const product1likeButton = await page.$$('#product1 #like')
    const product1dislikeButton = await page.$$('#product1 #dislike')
    if( product1likeButton.length === 1 && product1dislikeButton.length === 1 )
      console.log('buttons matches for product 1 : success 2');
    else
      console.log("TESTCASE:test_case2:failure");
    }
    catch(e){
      console.log(e);
      console.log('TESTCASE:test_case2:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try{
      await page.goto('https://8081-dffafdafebcfacbdcbaeafafbecbbd.project.examly.io/');
      await page.setViewport({ width:1100, height:600, })
      // await page.screenshot({path: 'example.png'});
    const product2likeButton = await page.$$('#product2 #like')
    const product2dislikeButton = await page.$$('#product2 #dislike')
    if( product2likeButton.length === 1 && product2dislikeButton.length === 1 )
      console.log('buttons matches for product 2 : success 3');
    else
      console.log("TESTCASE:test_case3:failure");
    }
    catch(e){
      console.log(e);
      console.log('TESTCASE:test_case3:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try{
      await page.goto('https://8081-dffafdafebcfacbdcbaeafafbecbbd.project.examly.io/');
      await page.setViewport({ width:1100, height:600, })
      // await page.screenshot({path: 'example.png'});
    const product3likeButton = await page.$$('#product3 #like')
    const product3dislikeButton = await page.$$('#product3 #dislike')
    if( product3likeButton.length === 1 && product3dislikeButton.length === 1 )
      console.log('buttons matches for product 3 : success 4');
    else
      console.log("TESTCASE:test_case4:failure");
    }
    catch(e){
      console.log(e);
      console.log('TESTCASE:test_case4:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try{
      await page.goto('https://8081-dffafdafebcfacbdcbaeafafbecbbd.project.examly.io/');
      await page.setViewport({ width:1100, height:600, })
      // await page.screenshot({path: 'example.png'});

    const likeButton = await page.$('#product1 #like');
    await likeButton.click();
    const likesCount = await page.$eval('#product1 #likescount', el => el.value);
    if(likesCount == 1)
      console.log("likecount increases by 1 : success 5");
    else
      console.log("TESTCASE:test_case5:failure");
    }
    catch(e){
      console.log(e);
      console.log('TESTCASE:test_case5:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try{
      await page.goto('https://8081-dffafdafebcfacbdcbaeafafbecbbd.project.examly.io/');
      await page.setViewport({ width:1100, height:600, })
      // await page.screenshot({path: 'example.png'});

    const dislikeButton = await page.$('#product1 #dislike');
    await dislikeButton.click();
    const dislikesCount = await page.$eval('#product1 #dislikescount', el => el.value);
    if(dislikesCount == 1)
      console.log("dislikecount increases by 1 : success 6");
    else
      console.log("TESTCASE:test_case6:failure");
    }
    catch(e){
      console.log(e);
      console.log('TESTCASE:test_case6:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try{
      await page.goto('https://8081-dffafdafebcfacbdcbaeafafbecbbd.project.examly.io/');
      await page.setViewport({ width:1100, height:600, })
      await page.screenshot({path: 'example.png'});

    for (let i = 0; i < 10; i++) {
      const likeButton = await page.$('#product2 #like');
      await likeButton.click();
    }
    // await page.screenshot({path: 'example5.png'});

    const likesButton = await page.$('#product2 #like');
    const dislikesButton = await page.$('#product2 #dislike');
    const likeisDisabled = await likesButton.evaluate(button => button.disabled); 
    const dislikeisDisabled = await dislikesButton.evaluate(button => button.disabled);          
    if(likeisDisabled && dislikeisDisabled)
    console.log("Like & Dislike are disabled after 10 responese : success 7");
    else
    console.log("TESTCASE:test_case7:failure");   
    }
      
    
    catch(e){
      console.log(e);
      console.log('TESTCASE:test_case7:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
