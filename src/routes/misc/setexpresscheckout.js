export default function (router) {
    router.get('/', (req, res) => {
        
        let paypal = req.app.kraken.get('paypalClassic');
        let c9config = req.app.kraken.get('cloud9');

        let nvpParams = {
            RETURNURL: 'http://localhost:3000/misc/returnurl.html',
            CANCELURL: 'http://localhost:3000/misc/cancelurl.html',
            PAYMENTREQUEST_0_AMT: '100.00'
        };
            
        paypal.call('SetExpressCheckout', nvpParams, (err, response) => {
            res.redirect('https://www.sandbox.paypal.com/checkoutnow?token=' + response.TOKEN);
        });
    });
}