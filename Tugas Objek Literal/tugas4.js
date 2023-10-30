let dataStudent = [
    {
        nama: 'Andi',
        score: 90
    },
    {
        nama: 'Rudi',
        score: 80
    },
    {
        nama: 'Dira',
        score: 100
    },
]

let highestScore = -1;
let studentWithHighestScore = null;

dataStudent.forEach(student => {
    if (student.score > highestScore) {
        highestScore = student.score;
        studentWithHighestScore = student;
    }
});

if (studentWithHighestScore) {
    console.log(`Siswa dengan nilai tertinggi adalah ${studentWithHighestScore.nama} dengan nilai ${studentWithHighestScore.score}`);
} else {
    console.log('Tidak ada data siswa.');
}