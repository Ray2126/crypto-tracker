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
const limit = argv.limit;
const pageNumber = argv.pageNumber;

if(!currency) {
  errorExit('missing arg: currency');
}
if(!limit) {
  errorExit('missing arg: limit');
}
if(!pageNumber) {
  errorExit('missing arg: pageNumber');
}

async function main() {
  const coins = await coinGeckoClient.listCoinMarketData({ currency, limit, pageNumber });
  coins.forEach(c => {
    console.log(c);
  });
}

main()
  .then(console.log)
  .catch(errorExit);