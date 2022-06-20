const Dog = require('./js/Dog.js');

/*
OOP - object oriented programming
parametrai - ka zinau, koks as (informacija)
metodai - ka galiu (funcionalumas)
*/

console.clear();

const rex = new Dog('Rex', 'tax');
const brisius = new Dog('Brisius', 'Lietuvos lenciuginis');

console.log(rex.voice());
console.log(brisius.voice());

console.log(brisius.getBone());
console.log(brisius.getBone());
console.log(brisius.getBone());
console.log(brisius.getBone());
console.log(brisius.getBone());
console.log(brisius.getBone());
console.log(brisius.getBone());

console.log(rex.getBone());
console.log(rex.getBone());
console.log(rex.getBone());
console.log(rex.getBone());

console.log(brisius.getBone());
console.log(brisius.getBone());

console.log(brisius.intro());
console.log(rex.intro());

console.log(rex.changeName('Reksas'));
console.log(rex.intro());
console.log(rex.intro());
console.log(rex.intro());
console.log(rex.intro());
console.log('----------Cat-----------');

const Cat = require('./js/Cat.js');

const katinas = new Cat('Katinas', '"Juodas naminis"');
console.log(katinas.getMouse());
console.log(katinas.getMouse());
console.log(katinas.getMouse());
console.log(katinas.getMouse());

console.log(katinas.intro());
console.log(katinas.voice());