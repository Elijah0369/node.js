const fs = require('fs');

const contentToWrite = 'Hello Node';


fs.writeFile('welcome.txt', contentToWrite, (err) => {
  if (err) {
    console.error('Error creating file:', err);
  } else {
    console.log('File "welcome.txt" created successfully.');
    
    fs.readFile('welcome.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
      } else {
        console.log('Content from "welcome.txt":', data);
      }
    });
  }
});
