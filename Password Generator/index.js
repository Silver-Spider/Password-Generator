function genpassword(passwordlength, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*_+;:,.<>?';

    let characters = '';
    let password = '';

    if (includeUppercase) characters += uppercase;
    if (includeLowercase) characters += lowercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    // Validation
    if (passwordlength < 1 || characters.length === 0) {
        return '';
    }

    // Generate password
    for (let i = 0; i < passwordlength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

// Event listener for button click
document.getElementById("mysubmit").onclick = function () {
    const passwordlength = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const password = genpassword(passwordlength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);

    const resultBox = document.getElementById('result');
    if (password) {
        resultBox.value = password;
    } else {
        resultBox.value = '❌ Select at least one option and valid length!';
    }
};
document.getElementById("copyBtn").addEventListener("click", function () {
  const resultBox = document.getElementById("result");

  if (resultBox.value) {
    navigator.clipboard.writeText(resultBox.value).then(() => {
      this.focus();
      setTimeout(() => this.blur(), 1500);
    });
  } else {
    alert("⚠️ No password to copy!");
  }
});
