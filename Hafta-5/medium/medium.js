// Problem: Bir dizi oluşturup içindeki sayıların en büyük ve en küçük değerlerini bulan ve ekrana yazdıran bir kod parçacığı yazar mısınız?
let dizi = [0,1,2,3,4]
enBuyuk = dizi[0]
enKucuk = dizi.length-1

for(let i = 0; i < dizi.length; i++){
  if(dizi[i] > enBuyuk){
    enBuyuk = dizi[i]
  }
  else if(dizi[i] < enKucuk){
    enKucuk = dizi[i]
  }
}
alert(`Dizinin en büyük elemanı ${enBuyuk} ve en küçük elemanı ${enKucuk}`)