//Problem: Medium:  Bir mağazada bir kitap 80 TL, bir defter 20 TL ve bir kalem 5 TL. Bir müşteri 2 kitap, 3 defter ve 4 kalem aldı. Müşteri ne kadar ödeme yapmalı?

let magaza = {
    "kitap": 80,
    "defter": 20,
    "kalem": 5,           
               }

  let odemeTutari = magaza["kitap"] * 2 + magaza["defter"] * 3 + magaza["kalem"] * 4
  
  alert(`Müşteri ${odemeTutari} TL kadar ödeme yapmalıdır.`)