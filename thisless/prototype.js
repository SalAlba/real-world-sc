function Programmer1() {
    this.languages = [];
}

Programmer1.prototype.learnNewLanguage = function(language) {
    this.languages.push(language);
};

Programmer1.prototype.isPragmatic = function() {
    return this.languages.length > 2;
};

const programmer1 = new Programmer1();
programmer1.learnNewLanguage('Java');
programmer1.learnNewLanguage('Ruby');
console.log(programmer1.isPragmatic()); // false
programmer1.learnNewLanguage('Python');
console.log(programmer1.isPragmatic()); // true


// antipattern: action at a distance
['Java', 'Ruby', 'Python'].forEach(language => programmer1.learnNewLanguage(language));

function foo() {
    return this;
}
// 4
foo(); // window/global, strict - undefined
const o = {};
o.foo = foo;
o.foo(); // left of .
foo.apply({}); // explicit {}
new foo(); // new object