document.getElementById("submit").addEventListener("click", generatePassword);
const PASSWORD_LENGTH = 24;

function generatePassword(event) {
  event.preventDefault();
  let passwordElement = document.getElementById("password");
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};:<>,.?/";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < PASSWORD_LENGTH) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  console.log(result);
  passwordElement.value = result;
}
