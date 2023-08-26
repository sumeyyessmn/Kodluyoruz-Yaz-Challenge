// Problem: Oluşturduğunuz bir dizinin medyanını hesaplayan bir kod parçacığı yazar mısınız?

let myArray = [1,2,3,4,5,6,7,8]

function medyanBul(dizi){
  if(dizi.length % 2 !== 0){

  return Math.round(dizi.length / 2)

  }
  else if(dizi.length % 2 == 0){

  return (dizi.length / 2 + dizi.length /2 +1) / 2 

  }
}

let medyan = medyanBul(myArray)

alert(`Verilen dizinin ortanca degeri: ${medyan}`)