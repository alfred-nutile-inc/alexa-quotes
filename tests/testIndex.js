import test from 'ava';
const fs = require('fs');
import index from '../index';

require('dotenv').config({ path: './../' });

test.cb('client test', t => {
  let path = __dirname + '/../tests/fixtures/hw.json';
  fs.readFile(path, 'utf8', function (err, data) {
    data = JSON.parse(data);
    index.handler(data, [], function (empty, results) {
      console.log(results);
      t.is(results.statusCode, 403);
      t.end();
    });
  });
});