const fs = require('fs');

const html = fs.readFileSync('gdoc.html', 'utf8');

const targetStr = 'lakeland-dui-defense-lawyer';
const idx = html.indexOf(targetStr);

console.log('Index of lakeland-dui-defense-lawyer:', idx);

if (idx !== -1) {
  // Extract 200,000 chars starting from idx
  const snippet = html.substring(idx - 100, idx + 200000);
  
  const regex = /"s":"([^"]+)"/g;
  let match;
  let textBlocks = [];
  
  while ((match = regex.exec(snippet)) !== null) {
    let str = match[1]
      .replace(/\\n/g, '\n')
      .replace(/\\u0027/g, "'")
      .replace(/\\"/g, '"')
      .replace(/\\u0026/g, '&');
    if (str.trim()) {
      textBlocks.push(str);
    }
  }
  
  fs.writeFileSync('dui_full.txt', textBlocks.join('\n\n'));
  console.log('Extracted full text blocks count:', textBlocks.length);
}
