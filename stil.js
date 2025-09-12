// Burada doğru şifreyi ve yönlendirilecek URL'i belirleyin
const CORRECT_PASSWORD = '10.03'; // <--- burayı istediğiniz şifre ile değiştirin
const REDIRECT_URL = 'site1.html'; // <--- doğruysa yönlendirilecek adresi buraya yazın

const passInput = document.getElementById('password');
const checkBtn = document.getElementById('check');
const clearBtn = document.getElementById('clear');
const msg = document.getElementById('message');

function showMessage(text, type) {
    msg.textContent = text;
    msg.className = 'msg ' + (type === 'ok' ? 'ok' : 'error');
}

function checkPassword() {
    const val = passInput.value;
    if (!val) {
        showMessage('Lütfen şifre girin', 'error');
        return;
    }

    if (val === CORRECT_PASSWORD) {
        showMessage('Şifre doğru — yönlendiriliyorsunuz...', 'ok');
        // Yönlendirme
        window.location.href = REDIRECT_URL;
    } else {
        showMessage('Şifre yanlış', 'error');
    }

}

checkBtn.addEventListener('click', checkPassword);
clearBtn.addEventListener('click', () => {
    passInput.value = '';
    showMessage('', '');
    passInput.focus();
});

// Enter tuşuyla da gönderme
passInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkPassword();
});