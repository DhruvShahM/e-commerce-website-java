const { promisify } = require('util');
const fs = require('fs');

const mkdir = promisify(fs.mkdir);

// Creating a directory asynchronously using a promise
mkdir('newDirectory')
  .then(() => {
    console.log('Directory created successfully.');
  })
  .catch((err) => {
    console.error('Error occurred while creating the directory:', err);
  });
