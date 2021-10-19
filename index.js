const fs = require('fs');

let data = fs.readFileSync('colors.json', (err, data) => {
    if (err) {
        throw err;
    }
});
console.log(`A nyers adatok: ${data}`);


console.log(data); //Ezek nyersek valójában

let colors = JSON.parse(data); 
console.log(colors); //Itt már szép JSON 

console.log(`A JSON file: ${colors.length} elemet tartalmaz`);

console.log("Alap bejárás")
for(color of colors) {
    console.log(`${color.name} (${color.code})`)
}

console.log("foreach bejárás")
colors.forEach(szin => console.log(`${szin.name}`));

colors.push({'name': 'Black', 'code': '#00000'})
colors.push({'name': 'White', 'code': '#FFFFF'})

console.log(`A tömböm: ${colors.length} elemet tartalmaz`);
colors.forEach(szin => console.log(`${szin.name}`));

const feher = colors.pop();
console.log("Az utolsó elem: "),
console.log(feher);
console.log("A tömb elemeinek száma kivétel után: "+colors.length);

console.log("Adott elem keresése")
const index = colors.findIndex(szin => szin!= null && szin.name === 'Crimson');
console.log("Az Crimson szín indexe: " + index);

delete colors[2]; //2 indexű elem törlése, ez a harmadik, mert 0-val kezdődik
console.log(colors);
console.log("Az elemek a törölt tömben: ")
for(color of colors) {
    if (color !=null)
    console.log(`${color.name} (${color.code})`)
}

console.log("Adott szín megkeresése és kimásolása");
const keresett = colors.find(szin => szin != null && szin.code=== "#00000");
console.log(keresett);

console.log("Új felépítésű tömb kinyerése")
let i=0;
const szinTomb = colors.map(szin => ({"cId": i++, "cName": szin.name}));
console.log(szinTomb);

szinTomb.push({"cId": 4, "cName": "Purple"});
szinTomb.push({"cId": 5, "cName": "Áfonyakék"});
szinTomb.push({"cId": 6, "cName": "Beige"});
szinTomb.push({"cId": 7, "cName": "Barna"});

console.log("Rendezzük # -1:");
const rendezett0 = szinTomb.sort((a, b) => a.cName-b.cName);  // Nem így kell megcsinálni

/*
console.log("Rendezzük # 1:");  //Bonyolult dolgok is lehetnek az if-ben
const rendezett1 = szinTomb.sort((a, b) => {
    if (a.cName < b.cName) return -1; //jó a sorrend
    if (a.cName > b.cName) return 1; //Nem jó a sorrend, cserélni kell
    return 0; //megegyezik a két elem

});
*/
console.log("Rendezzük # 2:");  //Bonyolult dolgok is lehetnek az if-ben
const rendezett2 = szinTomb.sort((a, b) =>  a.cName.localeCompare(b.cName));
console.log(rendezett2);

console.log("Adott tulajdonságú elemek kiszűrése");
const kiszurt1 = szinTomb.sort((szin) => true);
console.log(kiszurt1);

console.log("---\nSzűrés számra")
const kiszurt2 = szinTomb.filter((szin) => szin.cId>3);
console.log(kiszurt2);

console.log("---\nSzűrés szövegre") //regex
let regex = /^B\w*/g;
const kiszurt3 = szinTomb.filter((szin) =>szin!=null && regex.test(szin.cName));
console.log(kiszurt3);

/*
map
sort
filter


find 
fineIndex
pop
delete
JSON.parse
length
push
for(elem of sokasag)
sokasag.forEach(elem => függvény)

some
*/


//---------------------------------------------------------------------
/*
regex
split
match= azokat az elemeket szedi ki amelyeket egy halomban megtalál
replace
*/