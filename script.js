// ข้อมูลคำศัพท์
const vocabulary = [
    {
        id: 1,
        english: "apple",
        thai: "แอปเปิ้ล"
    },
    {
        id: 2,
        english: "book",
        thai: "หนังสือ"
    },
    {
        id: 3,
        english: "computer",
        thai: "คอมพิวเตอร์"
    }
];

let currentIndex = 0;

function displayWord() {
    const frontWord = document.getElementById('frontWord');
    const backWord = document.getElementById('backWord');
    const frontCounter = document.getElementById('frontCounter');
    const backCounter = document.getElementById('backCounter');
    
    if (vocabulary.length > 0) {
        const word = vocabulary[currentIndex];
        frontWord.textContent = word.english;
        backWord.textContent = word.thai;
        
        const counterText = `${currentIndex + 1} / ${vocabulary.length}`;
        frontCounter.textContent = counterText;
        backCounter.textContent = counterText;
    }
}

function updateButtonStates() {
    document.getElementById('prevButton').disabled = currentIndex <= 0;
    document.getElementById('nextButton').disabled = currentIndex >= vocabulary.length - 1;
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function getPreviousWord() {
    if (currentIndex > 0) {
        currentIndex--;
        displayWord();
        updateButtonStates();
    }
}

function getNextWord() {
    if (currentIndex < vocabulary.length - 1) {
        currentIndex++;
        displayWord();
        updateButtonStates();
    }
}

// แสดงคำศัพท์แรกเมื่อโหลดหน้าเว็บ
document.addEventListener('DOMContentLoaded', () => {
    displayWord();
    updateButtonStates();
});