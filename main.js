var reasons=["My Family Book",
    "Pomesh Bhasharkar",
    "Sunanda Bhasharkar",
    "Sonali Pakhre",
    "Yeshoda",
    "Saanvi Bhasharkar",
    "Vihaan Bhasharkar"];
var images=[
"51KNpAKei-L.jpg",
"1516539879648.jpg",
"20210517_151540.jpg",
"Snapchat-1499049689.jpg",
"20210925_133907.jpg",
"20210322_222138.jpg",
"20210322_220736.jpg"
];
 var i=0;
function nextslide() {
document.getElementById("x").innerHTML=reasons[i];
document.getElementById("y").src=images[i];
i++;
if(i == 7){
    i = 0;
}



}