/*
 * Определение типа
 */
console.clear();

console.log($.type(false));
console.log(typeof false);
console.log('-------------');

console.log(typeof 1);
console.log($.type(1));
console.log('-------------');

console.log(typeof 'Hello');
console.log($.type('Hello'));
console.log('-------------');

console.log(typeof undefined);
console.log($.type(undefined));
console.log('-------------');

console.log(typeof null);
console.log($.type(null));
console.log('-------------');

console.log(typeof []);
console.log($.type([]));
console.log('-------------');

console.log(typeof {});
console.log($.type({}));
console.log('-------------');

console.log(typeof function(){});
console.log($.type(function(){}));
console.log('-------------');

console.log(typeof new Date());
console.log($.type(new Date()));
console.log('-------------');

console.log(typeof new RegExp());
console.log($.type(new RegExp()));
console.log('-------------');

console.log(typeof new Error());
console.log($.type(new Error()));
console.log('-------------');