export default function (router) {
    router.get('/', (req, res) => {

        let paypal = req.app.kraken.get('paypalClassic');
        let c9config = req.app.kraken.get('cloud9');

        let nvpParams = {
            RETURNURL: 'http://localhost:8080/misc/returnurl.html',
            CANCELURL: 'http://localhost:8080/misc/cancelurl.html',
            PAYMENTREQUEST_0_AMT: '10.00'
        };

        paypal.call('SetExpressCheckout', nvpParams, (err, response) => {
            if (err) {
                res.json(err);
            } else {
                res.json(response);
            }

        });
    });
}