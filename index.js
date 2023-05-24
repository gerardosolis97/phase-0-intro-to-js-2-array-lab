// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
const destructivelyAppendCat = (name) => cats.push(name);

const destructivelyPrependCat = (name) => cats.unshift(name);

const destructivelyRemoveLastCat = () => cats.pop();

const destructivelyRemoveFirstCat = () => cats.shift();

const appendCat = (name) => {
    const newCats = cats.slice();
    newCats.push(name);
    return newCats;
}
const prependCat = (name) => {
    const newCats = cats.slice();
    newCats.unshift(name);
    return newCats;
}
const removeLastCat = () => {
    const newCats = cats.slice();
    newCats.pop();
    return newCats;
}
const removeFirstCat = (name) => {
    const newCats = cats.slice();
    newCats.shift(name);
    return newCats;
}
