const fs = require('fs');
  
// Get the current filenames
// before the function
getCurrentFilenames();
console.log("\nFile Contents of hello.txt:",
      fs.readFileSync("hello.txt", "utf8"));
  
fs.copyFileSync("hello.txt", "world.txt");
  
// Get the current filenames
// after the function
getCurrentFilenames();
console.log("\nFile Contents of world.txt:",
      fs.readFileSync("world.txt", "utf8"));
  
// Function to get current filenames
// in directory
function getCurrentFilenames() {
  console.log("\nCurrent files in directory:");
  fs.readdirSync(__dirname).forEach(file => {
    console.log(file);
  });
}