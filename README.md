# Demo - CNB Exchange Rates

This application gets exchanges rates from CNB (Czech National Bank). You can easily convert Czech Crowns into other currencies.

`For testing purposes only!`

## Online version



## Caveats

CORS headers are not correctly set for server response. Remote proxy is used to overcome the lack of `Access-Control-Allow-Origin` header.

- CNB end-point URL: https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-
devizoveho-trhu/denni_kurz.txt

- Used open proxy: https://api.allorigins.win/raw?url=

## Local development
```shell
yarn
yarn start
```
An application opens port 3000 for connection.
