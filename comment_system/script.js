const textArea = document.querySelector('#text-area');
const commentBtn = document.querySelector('#comment-btn');
const commentText = document.querySelector('#comment-text');
commentBtn.addEventListener('click', ()=>{
    const addComment = document.createElement('p');
    commentText.appendChild(addComment);
    const textAreaValue = textArea.value;
    addComment.innerHTML = textAreaValue;
    textArea.value = '';
})