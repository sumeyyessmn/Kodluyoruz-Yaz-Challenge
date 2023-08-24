function findRepetitions(sentence) {
    const words = sentence.split(' ');
    
    for (let i = 0; i < words.length - 1; i++) {
      if (words[i] === words[i + 1]) {
        return true; // İkileme bulundu
      }
    }
    
    return false; // İkileme bulunamadı
  }
  
  const userInput = prompt('Bir cümle girin:');
  const hasRepetitions = findRepetitions(userInput);
  
  if (hasRepetitions) {
    alert('Girilen cümlede ikileme bulunuyor.');
  } else {
    alert('Girilen cümlede ikileme bulunmuyor.');
  }
  