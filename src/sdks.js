import braintree from 'braintree';
import paypal from 'paypal-rest-sdk';
import PayPal from 'paypal-classic-api';

console.log(braintree.Environment.Sandbox);

export let btGateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: 'wkqn2r5yxbvdgs4r',
    publicKey: 'm3zd8fgjyjw2p7yr',
    privateKey: 'ae3a67109fef1965a922d89553962e80'
});

paypal.configure({
    'mode': 'sandbox', //sandbox or live 
    'client_id':
        'AUwffmEqTvZfFZzpxSyD0Lr7GCLxyTxppff6tGv9m2WdNh8VK3o1YZ4HwkTA54iPzOqIO0Cpy1GtdiwS',
    'client_secret':
        'EPE1Wv6KetPfsx8McWMIOjwXHE2OiOVnJ-ED9e4FacpGI-pJjbzmaVOYj9Xc5jeQ3WnYoTwEFwWnr4x9'
});
export let paypalRest = paypal;

export let paypalClassic = new PayPal({
    username: 'merchant74_api1.gmail.com',
    password: 'NGA3X5HFQCTVHETS',
    signature: 'A0D2TVkf7Pjk-x7ZaBcqTEtb2NMNACvcwk4XeC-MH8ysEw9UGWgo7hmy'
});




