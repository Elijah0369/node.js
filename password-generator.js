const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12,  
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  });

  return password;
}


const randomPassword = generateRandomPassword();
console.log('Generated Password:', randomPassword);
