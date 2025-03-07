function capitalizeFirstLetterOfEachWord(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

const string = "juan andrés reyes";
const capitalizedString = capitalizeFirstLetterOfEachWord(string);

console.log(capitalizedString); // Juan Andrés Reyes