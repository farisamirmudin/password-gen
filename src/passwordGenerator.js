const CHARSET =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:<>?";

function randomizeCharacter(length) {
  if (length === 0) return "";
  const randomIndex = Math.floor(Math.random() * CHARSET.length);
  return CHARSET.charAt(randomIndex) + randomizeCharacter(length - 1);
}

function generatePassword() {
  const passwordLength = document.querySelector(
    "#password-length__input"
  ).value;
  document.querySelector("#password-length__value").textContent =
    passwordLength;
  const password = randomizeCharacter(passwordLength);
  document.querySelector("#generated-password").textContent = password;
}

export function setupPasswordGenerator() {
  document
    .querySelector("#password-length__input")
    .addEventListener("input", generatePassword);
  generatePassword();
}
