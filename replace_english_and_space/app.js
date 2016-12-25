/**
 * 替换文本中的英文字符和空格并保留换行
 */
const fs = require('fs');
const input = './test/text.md';
const output = './test/out.md';


fs.readFile(input, 'utf8', (err, data) => {
  if (err) {
    console.log('err: ', err);
    return false;
  }
  let tmp = '';
  // 将换行符替换为 ___LINE_FEED_LINE_FEED___
  console.log('将换行符替换为 ___LINE_FEED_LINE_FEED___');
  tmp = data.replace(/\n/g, '___LINE_FEED_LINE_FEED___');
  // 去掉空格
  console.log('去掉空格');
  tmp = tmp.replace(/\s+/g, '');
  // 替换 :
  console.log('替换 :');
  tmp = tmp.replace(/:/g, '：');
  // 替换 ;
  console.log('替换 ;');
  tmp = tmp.replace(/;/g, '；');
  // 替换 ,
  console.log('替换 ,');
  tmp = tmp.replace(/,/g, '，');
  // 替换 .
  console.log('替换 .');
  tmp = tmp.replace(/\./g, '。');
  // 替换 >
  console.log('替换 >');
  tmp = tmp.replace(/</g, '《');
  // 替换 >
  console.log('替换 >');
  tmp = tmp.replace(/>/g, '》');
  // 将换行 ___LINE_FEED_LINE_FEED___ 变为 \n
  console.log('将换行 ___LINE_FEED_LINE_FEED___ 变为 \n');
  tmp = tmp.replace(/(___LINE_FEED_LINE_FEED___)+/g, '\n');
  console.log('result: ', tmp);
  fs.writeFile(output, tmp, 'utf8', (err) => {
    if (err) {
      console.log('err: ', err);
      return false;
    }
    console.log('success!');
  });
});
