//Problem: Hard: Bir sınıfta 30 öğrenci bulunmaktadır. Öğrencilerden kaç farklı şekilde 4 kişi seçilebilir?


let carpim = 1

for(let i = 30; i >= 27 ;i--){
  carpim = carpim * i
}

let carpim2 = 1

for(let j = 4; j >= 1 ; j--){
  carpim2 = carpim2 * j
}

let secim = carpim / carpim2

alert(` 30 öğrenciden 4 farklı öğrenciyi seçmenin ${secim} farklı şekli vardır`)