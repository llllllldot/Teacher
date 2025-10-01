// Базовые функции для личного кабинета
document.addEventListener('DOMContentLoaded', function() {
    // Обработка начисления кубиков
    const awardButtons = document.querySelectorAll('.btn');
    awardButtons.forEach(button => {
        button.addEventListener('click', function() {
            const inputField = this.parentElement.querySelector('.input-field');
            const selectField = this.parentElement.querySelector('.select-field');
            
            if (inputField && inputField.value) {
                alert(`Начислено ${inputField.value} кубиков`);
                inputField.value = '';
            } else if (selectField && selectField.value) {
                alert(`Начислено достижение: ${selectField.options[selectField.selectedIndex].text}`);
            } else {
                alert('Пожалуйста, заполните все поля');
            }
        });
    });

    // Обработка создания лекции
    const createLecture = document.querySelector('.create-lecture');
    if (createLecture) {
        createLecture.addEventListener('click', function() {
            alert('Функция создания лекции');
        });
    }

    // Простая валидация полей ввода
    const inputFields = document.querySelectorAll('.input-field');
    inputFields.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value < 0) {
                this.value = 0;
            }
        });
    });
});
