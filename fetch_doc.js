const fs = require('fs');
const https = require('https');

const docUrl = 'https://docs.google.com/document/d/16JdhkSI5kA5jMHbJUfs1V8uoUdHc6okKK-tJ61hAnwg/edit?usp=sharing';

https.get(docUrl, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync('gdoc.html', data);
    console.log('Downloaded gdoc.html, size:', data.length);
  });
}).on('error', (err) => {
  console.error('Error fetching doc:', err.message);
});
