// ข้อมูลคำศัพท์
const vocabulary = [
    {
        id: 1,
        english: "examine (v.),inspect (v.)",
        thai: "ตรวจสอบ"
    },
    {
        id: 2,
        english: "indicate (v.)",
        thai: "แสดงให้เห็น,บ่งชี้,ระบุ"
    },
    {
        id: 3,
        english: "evaluate (v.),assess (v.)",
        thai: "ประเมิน"
    },
    {
        id: 4,
        english: "tend to (v.),tedency (n.),likely(adj.)",
        thai: "มีแนวโน้ม"
   },
    {
        id: 5,
        english: "access (n.)",
        thai: "เข้าถึง,การเข้าถึง"
    },
    {
        id: 6,
        english: "attend (v.)",
        thai: "เข้าร่วม"
    },
    {
        id: 7,
        english: "convince (v.),persuade (v.),induce (v.)",
        thai: "โน้มน้าว,ชักจูง,ทำให้เชื่อ"
   },
    {
        id: 8,
        english: "encourage (v.),advocate (v.),endorse (v.)",
        thai: "สนับสนุน"
    },
    {
        id: 9,
        english: "reasonable (adj.),rational (adj.),logical (adj.)",
        thai: "มีเหตุผล,สมเหตุสมผล"
    },
    {
        id: 10,
        english: "influence (v.) (n.)",
        thai: "มีอิทธิพล"
    },
    {
        id: 11,
        english: "discourage (v.)",
        thai: "ไม่สนับสนุน,หมดกำลังใจ"
    },
    {
        id: 12,
        english: "assume (v.),presume (v.)",
        thai: "สันนิษฐาน"
    },
    {
        id: 13,
        english: "regarding (prep.),concerning (prep.)",
        thai: "เกี่ยวกับ"
    },
    {
        id: 14,
        english: "obvious (adj.),apparent (adv.),evident (adj.),distinct (adj.)",
        thai: "ที่เห็นได้ชัด, ชัดเจน"
   },
     {
        id: 15,
        english: "result from (v.)",
        thai: "เกิดจาก,เป็นผลมาจาก"
   },
     {
        id: 16,
        english: "result in (v.)",
        thai: "ทำให้เกิด,เป็นผลทำให้เกิด"
   },
    {
        id: 17,
        english: "analyze (v.)",
        thai: "วิเคราะห์"
    },
    {
        id: 18,
        english: "progress (v.) (n.)",
        thai: "ความคืบหน้า,ก้วหน้า"
    },
    {
        id: 19,
        english: "approval (ืn.)",
        thai: "การอนุมัติ,การอนุญาต"
    },
    {
        id: 20,
        english: "optimistic (adj.)",
        thai: "มองโลกในแง่ดี"
   },
    {
        id: 21,
        english: "pessimistic (adj.)",
        thai: "มองโลกในแง่ร้าย"
   },
    {
        id: 22,
        english: "affect (v.)",
        thai: "มีผลต่อ"
    },
    {
        id: 23,
        english: "situation (n.),incident (n.),event (n.),occasion (n.),circumstance (n.)",
        thai: "เหตุการณ์,สถานการณ์"
   },
    {
        id: 24,
        english: "propersal (n.)",
        thai: "การเสนอ,ข้อเสนอ,การขอแต่งงาน"
    },
    {
        id: 25,
        english: "organize (v.)",
        thai: "จัดระเบียบ,จัดเตรียม"
    },
    {
        id: 26,
        english: "initially (adv.)",
        thai: "ในตอนแรก"
    },
    {
        id: 27,
        english: "eventually (adv.)",
        thai: "ในท้ายที่สุด"
   },
    {
        id: 28,
        english: "urge (v.)",
        thai: "กระตุ้น,ผลักดัน"
    },
    {
        id: 29,
        english: "appropriate (adj.),proper (adj.),suitable (adj.), fitting (adj.)",
        thai: "เหมาะสม"
    },
    {
        id: 30,
        english: "criticism (n.)",
        thai: "การวิจารณ์"
    },
    {
        id: 31,
        english: "affair (n.)",
        thai: "ธุระ,เหตุการณ์,เรื่องอื้อฉาว"
    },
    {
        id: 32,
        english: "task (v.) (n.)",
        thai: "หน้าที่,งาน"
    },
    {
        id: 33,
        english: "apparently (adv.)",
        thai: "อย่างที่เห็น,อย่างทีู่้,ปรากฏว่า"
    },
    {
        id: 34,
        english: "necessary (adj.),essential (adj.),critical (adj.),crucial (adj.),vital (adj.),imparative (adj.),pivotal (adj.)",
        thai: "สำคัญ,จำเป็น"
    },
    {
        id: 35,
        english: "efficient (adj.),effective (adj.)",
        thai: "มีประสิทธิภาพ"
    },
    {
        id: 36,
        english: "involve (v.)",
        thai: "เกี่ยวข้อง,พัวพัน"
    },
    
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
