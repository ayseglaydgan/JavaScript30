/*GOAL: When a user opens this page and presses a key that corresponds with
        one of our div elements, we should play the audio clip associated with
        the keypress, add a class to the specific element that matches with the keypress,
        and then remove that class in order to reset the element to it's original state.*/

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', removeLighted);

function removeLighted(event) {
    console.log('worked');
    console.log(event);
    const key = document.querySelector(`div[data-key="${event.code}"]`);
    key.classList.remove('playing');
}

// Function to handle 'keydown' event
function handleKeyDown(event) {
    console.log('Key Code:', event.code);
    const audio = document.querySelector(`audio[data-key="${event.code}"]`);
    const key = document.querySelector(`div[data-key="${event.code}"]`);
    if (!audio) return; // Stop the function from running all together
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    console.log(event.propertyName);
}
