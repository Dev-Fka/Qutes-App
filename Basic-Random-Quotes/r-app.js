var Text =[
{Letter:"Geri gelmesi mümkün olmayan hatırlanmamalı..",Author:" Nazım Hikmet",image:"app-img/wiew1.jpg"},
{Letter:"Kırıldığını belli etmeyen insanları üzmeyin. Çünkü onlar sizi kaybetmemek için susar, aptal oldukları için değil.",Author:"T.S Eliot",image:"app-img/wiew2.jpg"},
{Letter:"Her başarı, sabır ile zamanı birleştirerek sağlanır.",Author:"Balzac",image:"app-img/wiew3.jpg"},
{Letter:"Stresin en büyük sebebi, günlük yaşamınızda anlayışsız insanlarla yaptığınız tartışmalarıdır.",Author:"Albert Einstein",image:"app-img/wiew4.jpg"},
{Letter:"Başarılı bir adam olmak için çalışmayın aksine önemli bir adam olmak için çalışın.",Author:"Albert Einstein",image:"app-img/wiew5.jpg"
}]

var First =[
    {Letter:"Geri gelmesi mümkün olmayan hatırlanmamalı..",Author:" Nazım Hikmet",image:"app-img/wiew1.jpg"},
    {Letter:"Kırıldığını belli etmeyen insanları üzmeyin. Çünkü onlar sizi kaybetmemek için susar, aptal oldukları için değil.",Author:"T.S Eliot",image:"app-img/wiew2.jpg"},
    {Letter:"Her başarı, sabır ile zamanı birleştirerek sağlanır.",Author:"Balzac",image:"app-img/wiew3.jpg"},
    {Letter:"Stresin en büyük sebebi, günlük yaşamınızda anlayışsız insanlarla yaptığınız tartışmalarıdır.",Author:"Albert Einstein",image:"app-img/wiew4.jpg"},
    {Letter:"Başarılı bir adam olmak için çalışmayın aksine önemli bir adam olmak için çalışın.",Author:"Albert Einstein",image:"app-img/wiew5.jpg"
    }]

var selector =document.querySelector("#buton");
var authorName =document.querySelector("#author");
var Content =document.querySelector("#content")
var b;

function changer(){
var a = Math.round(Math.random()*4);
    if(a==b){
        a--;
        document.querySelector("#img").setAttribute("src",Text[a].image);
        Content.innerHTML=Text[a].Letter;
        authorName.innerHTML = Text[a].Author;
        b=a;
    }else
    {
        document.querySelector("#img").setAttribute("src",Text[a].image);
        Content.innerHTML=Text[a].Letter;
        authorName.innerHTML = Text[a].Author;
        b=a;
    }
}

setInterval(function(){
    changer();
},3000)