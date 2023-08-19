/*
Ödev 1
Node.JS Komut Satırı Kullanımı
Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. 
Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. 
Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.

*/



const yariCap = parseFloat(process.argv[2]);
const pi = 3.14;
daireAlan = pi * (yariCap * yariCap);

console.log(`Yarı çapı ${yariCap} olan dairenin alanı: ${daireAlan} idir.`);

