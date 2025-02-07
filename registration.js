function next() {
    document.getElementById('first').classList.add('hidden');
    document.getElementById('second').classList.remove('hidden');
}

function back() {
    document.getElementById('first').classList.remove('hidden');
    document.getElementById('second').classList.add('hidden');
}
