/*
1-Budce
2-Mexaric
3-Medaxil
4-Cixis
 
ATM
*/

let yeniSetir = "\r\n";
let budce = 1000;

let metin = "1-Budce" + yeniSetir + "2-Mexaric" + yeniSetir
    + "3-Medaxil" + yeniSetir + "4-Cixis" + yeniSetir + "Birini secin!";

let secim = prompt(metin);

switch (secim) {
    case "1":
        alert("Budce: " + budce);
        break;
    case "2":
        let cekilecekMebleg = Number(prompt("Çekmek istediyiniz mebleği yazın: "));
        if (cekilecekMebleg <= budce) {
            budce = budce - cekilecekMebleg;
            alert("Qalan budce: " + budce);
        } else {
            alert("Budcenizden artiq mebleg cekmemelisiniz!" + yeniSetir
                + "Budceniz: " + budce + yeniSetir + "Çekilecek mebleg: " + cekilecekMebleg);
        }
        break;
    case "3":
        let medaxil = Number(prompt("Medaxili yazın: "));
        budce = budce + medaxil;
        alert("Hazirki budceniz: " + budce);
        break;
    case "4":
        alert("Sistemden çıxış edildi.");
        break;
    default:
        alert("1-4 arasında birini seçin.");
        break;
}
