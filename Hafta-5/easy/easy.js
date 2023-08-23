// Problem: Bir dizi tanımladıktan sonra bu dizinin içinden en büyük sayıyı bulan kod parçacığını yazar mısın?

let dizi=[1,2,3,4]
let enBuyuk=dizi[0]
for(let i=0;i<dizi.length;i++){
    if(dizi[i]>enBuyuk)
    {
        enBuyuk=dizi[i]
    }
}
alert(`Dizinin en büyük elemanı: ${enBuyuk}`)