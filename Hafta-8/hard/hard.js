//Problem: Hard: Kullanıcıdan aldığınız bir metnin içindeki sesli harfleri sayan ve bunu kullanıcıya geri dönen bir kod parçacığı yazar mısın?

function countVowels(text) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
  
    for (let i = 0; i < text.length; i++) {
      if (vowels.includes(text[i])) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  const userInput = prompt("Bir metin girin:")
  const numberOfVowels = countVowels(userInput)
 alert(`Metindeki sesli harf sayısı: ${numberOfVowels}`)