

////////////////////////////////
// Easy Going
////////////////////////////////

for (i=1; i <= 20; i++)
// console.log(i)

// ////////////////////////////////
// // Get Even
// ////////////////////////////////
for (i=0; i <= 200;i+=2)
console.log(i);

////////////////////////////////
// Fizz Buzz
////////////////////////////////


for (let i=1; i <=100; i++) {
    // console.log(i);
    if (i % 3 === 0)
    if (i === 'Fizz') {
            } 
}

let Fizz = 'Fizz'
let Buzz = 'Buzz'

for(i=1; i<=100;i++)
{
    if(i%5==0 && i%3==0)
    {
        console.log("FizzBuzz")
    }

    else if(i%3==0)
    {
        console.log(Fizz)
    }

    else if(i%5==0)
    {
        console.log(Buzz)
    }

    else
    {
        console.log(i)
    }
}


////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee.splice(2, 1, '5001')
// console.log(plantee);

wolfy.splice(3, 1, 'Gotham City')
console.log(wolfy);

dart.splice(3, 0, 'Hawkins')
console.log(dart);

wolfy.splice(0, 1, 'Gameboy')
console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const turtles = ['donatello', 'leonardo', 'raphael', 'michaelangelo'];
for ( let i = 0; i < turtles.length; i++ ) {
  turtles[i] = turtles[i].charAt(0).toUpperCase() + turtles[i].slice(1);;
  console.log(turtles[i]);
}
////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf('Titanic'));

favMovies.sort();
// console.log(favMovies);

favMovies.pop();
console.log(favMovies)//console.log(favMovies.pop()); returns popped array item ('Volver')

favMovies.push('Guardians of the Galaxy')
// console.log(favMovies);

favMovies.reverse();
console.log(favMovies);

favMovies.shift();
console.log(favMovies);

favMovies.unshift();
console.log(favMovies);

console.log(favMovies.unshift())//returns array length (19)

console.log(favMovies.indexOf('Django Unchained'));

favMovies.splice(3, 1, 'Avatar')
console.log(favMovies);//updated  array

const half = Math.ceil(favMovies.length / 2)
const secondHalf = favMovies.slice(half)
console.log(half);//printed how many indices are in the second half of the array, updated array

console.log(favMovies.indexOf('Fast and Furious'));//prints -1


////////////////////////////////
// Where is Waldo - unfinished
////////////////////////////////

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];

// outerArr.splice(2,1)
// console.log(outerArr);//

////////////////////////////////
//  Excited Kitten - unfinished
////////////////////////////////

// for (i=1; i <= 20; i++)
// console.log("Love me, pet me! HSSSSSS!")

// const kittyTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

//   let pics = 0;
//   kittyTalk[pics]

//   let nip = 1;
//   kittyTalk[nip]

//   let red = 2;
//   kittyTalk[red]

//   const rando = Math.round(Math.random(kittyTalk)* kittyTalk.length)

//   for (i=1; i <= 20; i++) {
//       if (i % 2 == 1) {
//           console.log("Love me, pet me! HSSSSSS!");
//       } else if (i % 2 == 0)
//       console.log(rando);
//       }
    
  
  


////////////////////////////////
//  Find the Median - unfinished
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

console.log(nums.sort());

// const median = arr => {
//     const mid = Math.floor(nums.length / 2)
// }
// Expected output:
// => 15



