// Instructions are published in the online book. The URL is:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/studio.html
import { Cargo } from "./cargo";
import { Rocket } from "./rockets";
// TODO: 
// * Code the Astronaut, Cargo, and Rocket classes in new files.
// * Import the three classes into this file.

let c1: Cargo = new Cargo(100, 'silver');
let c2: Cargo = new Cargo(200, 'copper');

let myCargoArray: Cargo[] = [c1, c2];
let myRocket = new Rocket('my rocket', 0);
const mySum = myRocket.sumMass(myCargoArray);
console.log('mysum is: ', mySum);