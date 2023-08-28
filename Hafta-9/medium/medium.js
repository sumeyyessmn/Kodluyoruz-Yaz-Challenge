// Problem: Medium:  Kullanıcıdan alınan bir metindeki kelime sayısını hesaplayan bir kod parçacığı yazar mısın?

let word = prompt("Bir metin giriniz: ")
let count = word.split(" ").length

alert(`Metindeki kelime sayısı: ${count}`)