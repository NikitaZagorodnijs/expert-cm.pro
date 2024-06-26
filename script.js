document.getElementById('showFormButton').addEventListener('click', function() {
    var formContainer = document.getElementById('emailFormContainer');
    if (formContainer.classList.contains('hidden')) {
        formContainer.classList.remove('hidden');
        formContainer.style.display = 'block';
    } else {
        formContainer.classList.add('hidden');
        formContainer.style.display = 'none';
    }
});
