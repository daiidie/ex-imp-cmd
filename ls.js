const fs = require('fs');
const dirname = process.argv[2]

const { existsSync } = require('fs')

// existsSync returns a boolean

if (existsSync(dirname)) {
  fs.readdirSync(dirname).forEach(file => {
    console.log(file);
  });
} else {
  console.log('The path does not exists.')
}



