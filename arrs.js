let cars = ["volvo", "saab", "seat", "volkswagen", "bmw", "opel", "audi", "mercedes", "kia", "lexus", "tesla"]
// Skriv ut den strängen i arrayen som är längst.
/* up1
 let maxcars = cars.reduce((a, b) => a.length > b.length ? a:b ,"")
up2
let maxcars = cars.reduce((a, b) => a.length < b.length ? a:b ,cars[0])

Kapitalisera alla strängar i arrayen, alltså ändra de så att alla börjar med stor bosktav istället för liten.
let stora = cars.map(bila => bila.toUpperCase())

up4 Reversera alla enskilda strängar i arrayen, alltså strängarna skrivs ut baklänges.
let reversecars = cars.map(bil => bil.split('').reverse().join(''))

up5 Sortera alla strängar i alfabetisk ordning.
sortcars = cars.sort()

up6 Ta bort alla strängar i arrayen som börjar på till exempel s
let acars = cars.filter(bil => !bil.startsWith('s'))

up7Reversera hela strängen, den strängen som var på första plats ska nu vara på sista plats.

cars.reverse()
up8Lägg till ett ord till varje sträng. Till exempel i mitt fall så vill jag lägga till “bil” till alla strängar. Så det blir “volvobil”, “saabbil” och så vidare…

*/

let tillcars = cars.map(bil => bil +'bil')

document.write(tillcars)
