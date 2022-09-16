function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirm]');
    const but = document.querySelector('button[name=but_login]');
    if (confirm.value != password.value) {
        confirm.setCustomValidity('Passwords do not match');
    } else{
        but.href="index.html"
    }
    confirm.reportValidity();
  }