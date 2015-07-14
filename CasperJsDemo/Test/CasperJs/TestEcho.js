casper.start('http://localhost:58001/', function () {
    this.test.assertExists('input[id=shout]')
    this.capture('FirstPage.png')
})

casper.then(function () {
    this.fillSelectors('#EchoForm', {
        'input[id=shout]': 'scream'
    }, true);
    this.capture('FirstPageWithTextInForm.png')

});

casper.then(function () {
    this.test.assertSelectorHasText('h1', 'scream')
    this.test.assertSelectorHasText('h2', 'scream')
    this.test.assertSelectorHasText('h3', 'scream')
    this.test.assertSelectorHasText('h4', 'scream')
    this.test.assertSelectorHasText('h5', 'scream')
    this.test.assertSelectorHasText('h6', 'scream')
    this.capture('EchoPage.png')
})
casper.run(function () {
    this.test.done()
})