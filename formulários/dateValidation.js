
//busca e armazena o elemento input da data de nascimento
const inputDate = document.querySelector('#date');
//ao acionar o evento "blur", 
inputDate.addEventListener('blur', () => {
    //pega o valor do input no elemento
    const inputValue = inputDate.value;
    const dateValues = getDateValuesInArray(inputValue);

    //trabalhando com formato de datas
    const dateByDateValues = new Date(dateValues);
    const dateNow = new Date();

    //calculando a diferença em dias
    var timeDiff = Math.abs(dateNow.getTime() - dateByDateValues.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    verifyAge(diffDays);

})

function getDateValuesInArray(date) {
    const arr = date.split('-');//['YYYY','MM','DD']
    return arr;
}

function verifyAge(diffDays) {
    const DAYS_IN_A_YEAR = 365;
    const MIN_AGE = 18;
    //se a diferença for menor que a quantidade mínima, exibe uma mensagem e limpa o input
    if (diffDays < (DAYS_IN_A_YEAR * MIN_AGE)) {
        inputDate.value = '';
        inputDate.classList.add('errorMessage');
    }
}