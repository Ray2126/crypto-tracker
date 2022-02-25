#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import coinGeckoClient from '../src/models/coinGeckoClient.js';

function errorExit(e) {
  console.error(e);
  process.exit(1);
}

const argv = yargs(hideBin(process.argv)).argv;
const currency = argv.currency;
const coinId = argv.coinId;
const period = argv.period;

if(!currency) {
  errorExit('missing arg: currency');
}
if(!coinId) {
  errorExit('missing arg: coinId');
}
if(!period) {
  errorExit('missing arg: pageNumber');
}

async function main() {
  const coinPrices = await coinGeckoClient.getHistoricalDataForCoin({ currency, coinId, period });
  console.log(coinPrices);
}

main()
  .then(console.log)
  .catch(errorExit);