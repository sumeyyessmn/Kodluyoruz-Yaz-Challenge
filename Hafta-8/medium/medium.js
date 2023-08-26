function digitsTotal() {
    let number = parseInt(prompt("Bir sayı giriniz: "));
    let num = 0; 
    
    while (number > 0) {
        num += number % 10; // Son basamağı al ve toplama ekle
        number = Math.floor(number / 10); // Son basamağı çıkar
    }
    
    return num;
}

let total = digitsTotal();
alert(total);