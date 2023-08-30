const ilkYarisHizi = 15; // İlk yarışmacının hızı (km/saat)
const ikinciYarisHizi = 20; // İkinci yarışmacının hızı (km/saat)

const yakalamaSuresi = 0; 

const hizFarki = ikinciYarisHizi - ilkYarisHizi;

const yakalamaSuresiHesapla = d => d / hizFarki;

alert(`İkinci yarışmacı ilk yarışmacıyı ${yakalamaSuresiHesapla(yakalamaSuresi)} saat sonra yakalar.`);