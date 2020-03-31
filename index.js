const dns = require('dns').promises;
const options = {
    all:true,
}

dns.lookup('gmail.com', options)
.then((result) => {
    console.log('dns results', result);
  }).catch((err) => {
      console.log('error', err);
  });

dns.resolveMx('aol.com', options)
.then((result) => {
    console.log('mx results', result);
}).catch((err) => {
    console.log('error', err);
});