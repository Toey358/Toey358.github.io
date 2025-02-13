// ข้อมูลคำศัพท์
const vocabulary = [
    {
        id: 1,
        english: "apple (n.)",
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
let likedWords = {}; // Initialize likedWords as an empty object

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
        updateLikeButton(); // อัปเดตสถานะของปุ่ม "Like"
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

function updateLikeButton() {
    const likeButton = document.getElementById('likeButton');
    const word = vocabulary[currentIndex];
    if (likedWords[word.id]) {
        likeButton.classList.add('liked');
    } else {
        likeButton.classList.remove('liked');
    }
}

function likeWord(event) {
    event.stopPropagation(); // หยุดการแพร่กระจายของเหตุการณ์

    const word = vocabulary[currentIndex];
    const likeButton = document.getElementById('likeButton');
    if (likedWords[word.id]) {
        delete likedWords[word.id];
        likeButton.classList.remove('liked');
    } else {
        likedWords[word.id] = true;
        likeButton.classList.add('liked');
    }

    // บันทึกข้อมูล likedWords ลงใน Local Storage
    localStorage.setItem('likedWords', JSON.stringify(likedWords));
}
// Load from localStorage on DOMContentLoaded (optional)
document.addEventListener('DOMContentLoaded', () => {
    // โหลดข้อมูล likedWords จาก Local Storage
    const storedLikes = localStorage.getItem('likedWords');
    if (storedLikes) {
        likedWords = JSON.parse(storedLikes);
    }

    displayWord();
    updateButtonStates();
    updateLikeButton(); // อัปเดตสถานะของปุ่ม "Like"
});
