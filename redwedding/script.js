
const addBtn = document.getElementById('add-child')
const redBtn = document.getElementById('red-wedding')
const starks = document.querySelector('.starks')

// Create Two Functions -> addChild and redWedding
addChild = () => {
    const newChildDiv = document.createElement('div')
    newChildDiv.textContent = 'Never Seen GOT'
    starks.appendChild(newChildDiv)
}

redWedding = () => {
    for (let i = starks.children.length;i > 0;i--) {
        starks.children[0].remove();
    }
}
// Attach functions to buttons

addBtn.addEventListener('click', addChild) 
redBtn.addEventListener('click', redWedding)
   


// The addChild function creates new div & appends it to the starks div

// The redWedding function removes ALL stark children (loop)