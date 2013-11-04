/*
 * Объекты-обертки
 */
console.clear();

var str = 'Hello, World!',
    upperStr = str.toUpperCase(); // Создается обертка new String(str) и у нее вызывается метод .toUpperCase()
console.log(upperStr); // 'HELLO, WORLD!'