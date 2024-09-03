const fs = require('fs');
const path = require('path');

/**
 * Generates a dummy binary file with random data.
 * 
 * @param {string} filePath - The path where the binary file will be saved.
 * @param {number} sizeInBytes - The size of the binary file in bytes.
 */
function createDummyBinFile(filePath, sizeInBytes) {
    const data = Buffer.alloc(sizeInBytes, Math.random() * 256);
    fs.writeFileSync(filePath, data);
    console.log(`Dummy binary file created at ${filePath}`);
}

// Example usage
const filePath = path.join(__dirname, 'dummy.bin');
createDummyBinFile(filePath, 1024); // Create a 1 KB dummy binary file
