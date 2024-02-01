import qs from 'qs';

let str = 'user[name]=John&user[email]=john@example.com';
let str1 = 'http://example.com/?name=John&age=30';
let str2='http://example.com/?order=price&filter[make]=honda&filter[model]=civic&honda[wow]=true';
console.log(qs.parse(str));
console.log(qs.parse(str1));
console.log(qs.parse(str2));
