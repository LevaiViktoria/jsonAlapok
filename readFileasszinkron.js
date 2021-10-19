const fs = require('fs');

let data = fs.readFile('colors.json', (err, data) => {
    if (err) {
        throw err;
    }
    console.log("Az fs belsejében: "+ data);
    return data; //Itt nem adja majd vissza, hiába van 
});
console.log(`A nyers adatok: ${data}`);