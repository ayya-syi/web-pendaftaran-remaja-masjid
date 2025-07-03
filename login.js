function validateLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Ganti ini dengan data yang kamu anggap valid
  const validEmail = "kubah99@gmail.com";
  const validPassword = "kubah99";
    
  if (email === validEmail && password === validPassword) {
    alert("Login berhasil!");
    // redirect ke halaman dashboard, misalnya
    window.location.href = "home_admin.html";
    return false;
  } else {
    errorMessage.textContent = "Email atau password salah!";
    return false; // mencegah form submit
  }
}
