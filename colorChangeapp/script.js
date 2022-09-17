
// ===== CHALLENGE =====
const COLORS_ARRAY = ["red","yellow","magenta","cyan","blue","black","gray","teal","green","purple", "violet"];
  


// 1. Create A Function (generate)
// Function should get a random color from the COLORS_ARRAY
// Create a li element
// Add the color name to the li text
//   / / Set the background color of the li to the random color
// Append the li to the ul
const ul = document.querySelector('#color-list')
const body = document.querySelector('#body')
const colorBtn = document.querySelector('#generate-color')
const resetBtn = document.querySelector('#reset-btn')
const getRand = () => COLORS_ARRAY[(Math.floor(Math.random()* 12))]

const generate = () => {
    const li = document.createElement('li')
    li.style.backgroundColor = getRand()
    li.addEventListener('click', generate)
    ul.appendChild(li)
}

colorBtn.addEventListener('click', generate)


// 2. Create Function (reset)
// Should remove all li children from the ul. 
// Should set background color to white.

const reset = () => {
   const li = document.querySelector('li')
   li.style.backgroundColor = 'white'

   for (let i = COLORS_ARRAY.length;i > 0; i--) {
   ul.children[0].remove();
    }

}

resetBtn.addEventListener('click', reset)


