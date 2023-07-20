//ASAL SAYI BULMA 
let sayi = Number(prompt("Lütfen bir sayı giriniz"));
let sonuc=true;

for(let i=2; i <= Math.floor(sayi/2);i++){
    if(sayi%i==0){
        //sayı asal değildir.
        sonuc = false;
        break;
    }
}
if(sonuc){
    alert(`${sayi} asal bir sayıdır.`);
}else{
    alert(`${sayi} asal bir sayı değildir.`);
}
