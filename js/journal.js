
const dateSelector = document.getElementById("date-selector");
const journalEntry = document.getElementById("journal-entry");
const saveBtn = document.getElementById("save-entry");
const displayJournal = document.getElementById("journal-container");

window.addEventListener('load', function() {
    const savedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    savedEntries.forEach(entry => {
        const paragraph = document.createElement('p');
        paragraph.textContent = entry;
        displayJournal.appendChild(paragraph);
    });
});

saveBtn.addEventListener('click', function() {
    const inputText = journalEntry.value;
    const selectedDate = dateSelector.value;

       if (!inputText || !selectedDate) {
        alert("Please enter both the journal entry and select a date.");
        return;
    }

    const paragraph = document.createElement('p');
    paragraph.textContent = `Date: ${selectedDate}, Entry: ${inputText}`;
    
    displayJournal.appendChild(paragraph);
    
    const savedEntries = JSON.parse(localStorage.getItem('journalEntries'));
    savedEntries.push(inputText);
    localStorage.setItem('journalEntries', JSON.stringify(savedEntries));
    
    dateSelector.value = '';
    journalEntry.value = '';
});