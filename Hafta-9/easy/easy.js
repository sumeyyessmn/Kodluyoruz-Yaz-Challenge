// Problem: Easy: Kullanıcıdan aldığın iki sayının toplamını ekrana yazdıran bir kod parçacığı yazar mısın?

sayi1 = Number(prompt("Birinci sayıyı giriniz: "))
sayi2 = Number(prompt("İkinci sayıyı giriniz: "))

function Topla(sayi1,sayi2){
  return sayi1+sayi2;
}

let islem = Topla(sayi1,sayi2)

alert(`Verilen iki sayının toplamı: ${islem}`)