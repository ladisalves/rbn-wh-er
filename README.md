# Demo - CNB Exchange Rates

This application gets exchange rates from CNB (Czech National Bank). You can easily convert Czech Crowns into other currencies.

`For testing purposes only!`

## Online version

https://klhuh.csb.app/

sandbox mode: https://codesandbox.io/s/pensive-rain-klhuh


## Caveats

CORS headers are not correctly set for server response. Remote proxy is used to overcome the lack of `Access-Control-Allow-Origin` header. This shouldn't happen in the real life scenario.

- CNB end-point URL: https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-
devizoveho-trhu/denni_kurz.txt

- Used open proxy: https://api.allorigins.win/raw?url=

## Local development
```shell
yarn
yarn start
```
An application opens port 3000 for connections.
