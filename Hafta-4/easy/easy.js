/* 
Problem:  Kullanıcıdan aldığınız bir sayının faktöriyelini hesaplayan kod parçacığını yazmanızı istiyorum.
*/

let sayi = Number(prompt("Bir sayı giriniz: "))
let carpim = 1
for(let i = 1; i <= sayi ; i++){
    carpim = carpim * i;
}

alert(`Sonuç: ${carpim}`)
