// Problem: Easy: Kullanıcıdan aldığınız sayının tek mi çift mi olduğunu ekrana yazdıran bir kod parçacığı yazar mısın?

let number = Number(prompt("Bir sayı giriniz: "))

if(number % 2 == 0){
    alert(`${number} çift bir sayıdır.`)
}else{
    alert(`${number} tek bir sayıdır.`)
}

