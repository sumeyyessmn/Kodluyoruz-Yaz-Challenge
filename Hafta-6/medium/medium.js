// Problem: Medium: Bir dizi oluşturup içindeki çift sayıların toplamını hesaplayan bir kod parçacığı yazar mısınız?

const myArray = [1,2,3,4,5,6]
let toplam = 0;
for (let i=0; i < myArray.length; i++){
    if(myArray[i] % 2 === 0){
       toplam += myArray[i]
    }
}

alert(`Dizideki çift sayıların toplamı: ${toplam}`)
