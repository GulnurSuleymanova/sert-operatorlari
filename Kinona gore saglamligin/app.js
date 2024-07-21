//Kilonuza gore saglamliginiz necedir

let kilo=Number(prompt ("Nece kilosunuz?"));

let boy=Number(prompt("Boyunuzu metre olaraq ile yazin"));

let netice = kilo/(boy*2);

if(netice<18/5){
    alert("Ideal kilodan az");
}else if(netice>=18.5 && netice <=24.9){
    alert("Ideal kiloda")
}else if(netice>=25 && netice <=29.9){
    alert("Ideal kilonundan cox")
}else if(netice>=30 && netice <=39.9){
    alert("Ideal kilonun cox ustunde (obez) ")
}
else (netice>=40){
    alert("Ideal kilonun cox ustunde (morbid obez) ")
}