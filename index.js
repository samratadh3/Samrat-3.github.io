// Array of texts to display
const texts = ["Hi", "Hola", "Bonjour", "Hallo", "Olá"];

// Recursive function to update text
function changeText(index) {
    const element = document.getElementById('langchange');

    // Update the text from the array
    element.innerText = texts[index];

    // Calculate the next index (loop back to 0 if we reach the end of the array)
    const nextIndex = (index + 1) % texts.length;

    // Call changeText again after 5 seconds
    setTimeout(() => changeText(nextIndex), 4000);
}

// Start the recursion with the first index
changeText(0);

function menu() {
    let listItems = document.querySelectorAll("section");
    let ham=document.getElementById('ham');
    let bg=document.getElementById('bg');
    bg.style.display='block';
    // ham.style.display='none';
    document.documentElement.style.overflow = "hidden";
    listItems.forEach((li, index) => {
        listItems[index].style.display = 'block';
    });
}

function menuclose() {
    let listItems = document.querySelectorAll("section");
    let ham=document.getElementById('ham');
    let bg=document.getElementById('bg');
    bg.style.display='none';
    ham.style.display='block';
    document.documentElement.style.overflow = "auto";
    listItems.forEach((li, index) => {
        listItems[index].style.display = 'none';
    });
}