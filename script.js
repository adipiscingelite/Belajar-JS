// alert("Hello World")
console.log("Hello World from console")

const nama = "Syaiful"
let umur = 19
umur = 20

console.log(nama + " umur " + umur)


console.log(2 + 2)
console.log(3 - 1)
console.log(2 * 3)
console.log(5 ** 2)
console.log(6 / 2)
console.log(7 % 2)

let angka_dua = 2
let angka_tiga = 3

console.log(angka_dua + angka_tiga)
console.log(angka_dua - angka_tiga)
console.log(angka_dua * angka_tiga)
console.log(angka_dua / angka_tiga)

let x = 1
x += 1
console.log(x)

let y = 1
y++
console.log(y)

console.log(8 > 9)
console.log(10 > 9)
console.log(10 == 9)
console.log(10 <= 9)
console.log(9 <= 9)

// confirm("oke?")
// masukkan_nama = prompt("masukkan nama")

// console.log(masukkan_nama)

// if else
let siswa = 34

if (siswa = 34) {
  console.log("Jumlah siswa adalah 34")
} else {
  console.log("Jumlah siswa bukan 34")
}

// if else
let sukaMakanDaging = true

if (sukaMakanDaging) {
  console.log("Suka makan daging")
} else {
  console.log("Tidak suka makan daging")
}
if (!sukaMakanDaging) {
  console.log("Tidak suka makan daging")
} else {
  console.log("Suka makan daging")
}

// else if
let usia = 11

if (usia > 17) {
  console.log("Anda bisa membuat KTP")
} else if (usia <= 17) {
  console.log("Anda belum bisa membuat KTP")
}

// for loop
for (let kue = 3; kue >= 1; kue--) {
  console.log("Kue sudah dibagikan, sisa kue adalah " + kue)
}

// while loop
let angka = 1

while (angka <= 5) {
  console.log("hai" + angka)
  angka++
}

//infinite loop
// let infinite = 1

// while (true) {
//   console.log(infinite)
//   infinite++
// }

for (let i = 0; i < 20; i++) {
  if (i % 2 == 0) {
    continue
  } 

  console.log(i)

  if (i == 15) {
    break;
  }
}


// function
function login(username) {
  console.log("Selamat datang " + username)
}

login("budi")

// scope
let buku = 4000

function harga() {
  let pulpen = 2000
  console.log(buku)
}
harga()
console.log(pulpen)
