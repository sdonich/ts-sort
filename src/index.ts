import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";

const numbersCollection = new NumberCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);