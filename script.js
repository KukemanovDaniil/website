// Функция автоматического расчета возраста
function calculateAge(birthYear, birthMonth, birthDay) {
    const today = new Date();
    const currentYear = today.getFullYear();
    
    let age = currentYear - birthYear;

    const monthDifference = today.getMonth() - birthMonth;
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDay)) {
        age--;
    }

    return age;
}

const myAge = calculateAge(2012, 6, 25);

document.getElementById('age').textContent = myAge;
