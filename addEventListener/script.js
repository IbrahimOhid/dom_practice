const changeButton = document.querySelector('#change-btn');
const heading = document.querySelector('#heading');
changeButton.addEventListener('click', function (){
    heading.innerHTML = 'I love Bangladesh';
    changeButton.style.backgroundColor = 'red';
    changeButton.style.padding = '10px';
    changeButton.style.border = 'none';
    changeButton.style.color = 'white';
    changeButton.style.borderRadius = '15px';
})

const textValue = document.querySelector('#text-value');
const clickBtn = document.querySelector('#click-btn');
const paraText = document.querySelector('#para-text');
clickBtn.addEventListener('click', function(){
    paraText.innerHTML = textValue.value;
})