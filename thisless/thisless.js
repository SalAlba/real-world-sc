// rule of least powerful abstraction
function createProgrammer() {
    const languages = [];

    return {
        // local reasoning - declaration
        // eyes
        learnNewLanguage(language) {
            languages.push(language);
        },
        // eyes
        isPragmatic() {
            return languages.length > 2;
        },
        getLanguages() {
            return languages;
        }
    };
}

const programmer3 = createProgrammer();
programmer3.learnNewLanguage('Elm');
programmer3.learnNewLanguage('Clojure');
console.log(programmer3.isPragmatic()); // false
programmer3.learnNewLanguage('Haskell');
console.log(programmer3.isPragmatic()); // true

// usage
const programmer4 = createProgrammer();
programmer4.learnNewLanguage('Rust');
console.log(programmer4.getLanguages());
console.log(programmer3.getLanguages());


// this -> closure