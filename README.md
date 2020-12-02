# Python/Node M-Pesa API

A workaround for integration of M-Pesa Open API for Node Js.

## Installation

This guide requires `Python` and `Node JS` installed in the system for it work out.

Download `Python` for your system from [Python Official Website](https://www.python.org/downloads/)

Download `Node JS` for your system from [Official Node JS Website](https://nodejs.org/en/download/)

## Get Started

Manage virtual environments using `virtualenv`, install it using `pip`:

```
pip install virtualenv
```

Create virtual environment within project directory

```
virtualenv env
```

Activate using command specific for your system

- Windows

    ```
    env/scripts/activate
    ```

- Mac OS/Linux

    ```
    source env/bin/activate
    ```

It use the `mobile-payments` package as dependency. Install it using `pip`:

```
pip install mobile-payments
```

More information on usage of `mobile-payments` package see [Mobile Payments repo](https://github.com/ZendaInnocent/mobile-payments)

```python
# sample.py

from mobile_payments.vodacom import MPESA

api_key = ''  # M-Pesa API key
public_key = ''  # Open API platform public key

m_pesa = MPESA(api_key, public_key)

parameters = {
    'input_Amount': 10000,
    'input_Country': 'TZN',
    'input_Currency': 'TZS',
    'input_CustomerMSISDN': '000000000001',
    'input_ServiceProviderCode': '000000',
    'input_ThirdPartyConversationID': 'asv02e5958774f7ba228d83d0d689761',
    'input_TransactionReference': 'iosddhfsdiuie98',
    'input_PurchasedItemsDesc': 'Shoes',
}

results = m_pesa.customer2business(parameters)
print(results)
```

```javascript
// payments.js

const {spawn} = require('child_process');
const python = spawn('python', ['sample.py']);

python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    console.log(data.toString());
});

python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
})
```

Test to see the results using

```
node payments.js
```

Currently, the output of the Python script is captured and printed in console using Node.

## License

Code released under [MIT LICENSE](https://github.com/ZendaInnocent/python-node-mpesa/blob/main/LICENSE)
