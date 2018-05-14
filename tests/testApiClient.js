import test from 'ava';

import apiClient from '../src/apiClient';

require('dotenv').config({ path: './../' });

test('client test', t => {
  //let results = apiClient.getRandomQuote();
  t.true(process.env.API_TOKEN != undefined);
});
