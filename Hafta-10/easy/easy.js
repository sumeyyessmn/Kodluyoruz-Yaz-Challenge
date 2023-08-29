//Problem: Easy: Bir futbol maçında 3 puanlık atışlarda 5 kez isabet edildi, 2 puanlık atışlarda ise 10 kez isabet edildi. Toplam kaç puan elde edildi?

let futbol = {
  "puan1": 3,
  "isabet1": 5,
  "puan2": 2,
  "isabet2": 10            
             }

let toplamPuan = futbol["puan1"] * futbol["isabet1"] + futbol["puan2"] * futbol["isabet2"]

alert(`Toplam ${toplamPuan} puan elde edildi`)