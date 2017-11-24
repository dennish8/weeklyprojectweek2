// 1. DEFINISIKAN sebuah function bernama "hangman" yang berisikan sebuah game
function hangman(){
// 2. SIMPAN sekumpulan array kata 
var arrKata =['monyet','ayam','sapi','kucing'];
// 3. PILIH kata secara acak
var kata =arrKata[Math.floor(Math.random()*arrKata.length)];
var tebakan =[];
// 4. SIAPKAN array untuk tebakan  
for(var i=0; i<kata.length;i++){
  tebakan[i]="_";
}
var sisaKata = kata.length;
// 5. MULAI LOOP untuk game tersebut 
while(sisaKata > 0){
  // Dalam loop tersebut selama permainan berjalan
  // 5.1 TAMPILKAN progress permainan
  alert(tebakan.join(" "));
  // 5.2 MINTA sebuah tebakan dari pemain
  var tebak = prompt("Silahkan tebak kata.");
  // 5.3 EXIT LOOP kalo kondisi berikut tercapai
  if(tebak === null){
    break;
  } else if (tebak.length !== 1){
  alert("Silahkan tebak satu kata.");
  } else {
  for(var j =0; j<kata.length; j++){
    if(kata[j]=== tebak){
      tebakan[j] = tebak;
      sisaKata --;
    }
  }
  }
  //5.4 END daripada LOOP
}
//6. TAMPILKAN tebakan dan menyelamati pemain;
alert(tebakan.join(" "));
alert("Selamat! Kata nya adalah "+ kata);
  
}
//7. Panggil function hangman untuk memulai permainan
console.log(hangman());


