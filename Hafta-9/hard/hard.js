// Problem: Hard: Kullanıcının girdiği bir sayı karekökten çıkıyorsa çıktığı halini eğer çıkmıyorsa karekökten tam olarak çıkmıyor hata mesajı veren kod parçacığını yazar mısın?

let sayi = Number(prompt("Bir sayı giriniz: "))

if (Math.sqrt(sayi) % 1 === 0){

  alert(`Cevap: ${Math.sqrt(sayi)}`)

} else {

  alert("Sayı tam olarak karekökten çıkmıyor.")

}