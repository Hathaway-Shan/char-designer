// import needed modules

// state
const character = {
    head: 'bird',
    middle: 'dress',
    pants: 'white',
    phrases: []
};

// components

// Designer
const designSection = document.getElementById('design-section');
const [headSelect, middleSelect, pantsSelect] = designSection.querySelectorAll('select');

headSelect.addEventListener('change', () => {
    character.head = headSelect.value;

    displayDesign();
});
 // *** Complete the middle select change handler
middleSelect.addEventListener('change', () => {
    character.middle = middleSelect.value;

    displayDesign();
});
// *** Complete the pants select change handler
pantsSelect.addEventListener('change', () => {
    character.pants = pantsSelect.value;

    displayDesign();
});
// *** Assign the initial values of the middle select and pants select!
function displayDesigner() {
    headSelect.value = character.head;
    middleSelect.value = character.middle;
    pantsSelect.value = character.pants;
    console.log(displayDesign);
}

// AddPhrase
const addPhraseSection = document.getElementById('add-phrase-section');
const phraseInput = addPhraseSection.querySelector('input');
// *** Select the button from the add phrase section
// const phraseButton = ?;
const phraseButton = addPhraseSection.querySelector('button');

function handleAddPhrase() {
    // *** add the current phrase value to the character phrases
    
    character.phrases.push(phraseInput.value);
    phraseInput.value = '';
    phraseInput.focus();

    displayPhrases();
    phraseInput.value = '';
    phraseInput.focus();
}

// *** Add a click handler to the phrase button that calls handleAddPhrase

phraseInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleAddPhrase();
    }
});

// Character
const characterSection = document.getElementById('character-section');
const [headImage, middleImage, pantsImage] = characterSection.querySelectorAll('img');

function displayCharacter() {
    // *** Set the src properties for the three images.
    headImage.src = 'assets/character/' + character.head + '-head.png';
    middleImage.src = 'assets/character/' + character.middle + '-middle.png';
    pantsImage.src = 'assets/character/' + character.pants + '-pants.png';
    // You can use:
    // 'assets/character/' + <get prop value here> + '-head.png'
    // to format the correct file name
}

// Phrases
const phrasesSection = document.getElementById('phrases-section');
const phraseList = phrasesSection.querySelector('ul');

function displayPhrases() {
    phraseList.innerHTML = '';

    // ** Create an li for each phrase and append to the list
    for (const phrase in phrasesSection) {
        const li = document.createElement('li');
        li.textContent = phrase;
        phraseList.append('li');
    }
}

// page load actions
function displayDesign() {
    displayCharacter();
    displayPhrases();
}

displayDesigner();
displayDesign();


