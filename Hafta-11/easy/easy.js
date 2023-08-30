// Problem: Bir kutuda 5 kırmızı, 4 yeşil ve 3 mavi top bulunuyor. Kutudan rastgele çekilen 2 topun aynı renk olma olasılığı nedir?

let tumCarpim = 1
let kirmiziCarpim = 1
let yesilCarpim = 1
let maviCarpim = 1

for(let i = 12; i >= 11; i--){
  tumCarpim = i * tumCarpim
}
let tum =  tumCarpim / 2

for(let j = 5; j >= 4; j--){
  kirmiziCarpim = j * kirmiziCarpim
}
let kirmiziTop = kirmiziCarpim / 2

for(let k = 4; k >= 3; k--){
  yesilCarpim = k * yesilCarpim 
}
let yesilTop = yesilCarpim / 2

for(let l = 3; l >= 2; l--){
  maviCarpim = l * maviCarpim
}
let maviTop = maviCarpim / 2


let total = kirmiziTop + yesilTop + maviTop

let olasilik = total / tum

alert(`Kutudan rastgele çekilen 2 topun aynı renkte olma olasılığı: ${olasilik}`)
