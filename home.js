const arr=["Women's Wear" ,"Men's Wear","Jwellery","Fashion","Cosmetics","Electronics","Watches","Glasses","Diwali Dhamaka"];

const navDiv = document.getElementById("nav");

arr.forEach((item)=>{
    const btn = document.createElement("button");
    btn.innerText = item ;
    navDiv.appendChild(btn);
})

const jwels= ["Ring","Diamond Ring","Necklace","Earings","Coins"];

const ol = document.createElement("ol");
jwels.forEach((item)=>{
    const li = document.createElement("li");
    li.innerText = item ;
    li.setAttribute("type","a");
    ol.appendChild(li);
})
mainDiv.appendChild(ol);

const mens =["Shirt","Jeans","T-shirt","Pant","Belt"];

const olmens = document.createElement("ol");
mens.forEach((item)=>{
    const li = document.createElement("li");
    li.innerText = item ;
    li.setAttribute("type","i");
    olmens.appendChild(li);
})
mainDiv.appendChild(olmens);

const womens =["Top","Kurtis","Patiyala","Anarkali"];
const olwomens = document.createElement("ol");
womens.forEach((item)=>{
    const li = document.createElement("li");
    li.innerText = item ;
    li.setAttribute("type","A");
    olwomens.appendChild(li);
})
mainDiv.appendChild(olwomens);

const Electronics = ["TV","Mobile","Fridge","Smart Watch","Headphones"];
const olElectronics = document.createElement("ol");
Electronics.forEach((item)=>{
    const li = document.createElement("li");
    li.innerText = item ;
    li.setAttribute("type","I");
    olElectronics.appendChild(li);
})
mainDiv.appendChild(olElectronics);

const Fashion=["Indian","Street Fashion","Hip-Hop"];
const olFashion = document.createElement("ol");
Fashion.forEach((item)=>{
    const li = document.createElement("li");
    li.innerText = item ;
    li.setAttribute("type","a");
    olFashion.appendChild(li);
})
mainDiv.appendChild(olFashion);

const Cosmetics=["Eyeliner","Makeup Box","Eyeshadow","Lipstick","Mascara"];
const olCosmetics = document.createElement("ol");
Cosmetics.forEach((item)=>{
    const li = document.createElement("li");
    li.innerText = item ;
    li.setAttribute("type","A");
    olCosmetics.appendChild(li);
})
mainDiv.appendChild(olCosmetics);

const Watches=["SMart","Circle","Digital"];
const olWatches = document.createElement("ol");
Watches.forEach((item)=>{
    const li = document.createElement("li");
    li.innerText = item ;
    li.setAttribute("type","i");
    olWatches.appendChild(li);
})
mainDiv.appendChild(olWatches);

const Glasses=["Fiber","Designer","Sunglasses","UV Protector"];
const olGlasses = document.createElement("ol");
Glasses.forEach((item)=>{
    const li = document.createElement("li");
    li.innerText = item ;
    li.setAttribute("type","A");
    olGlasses.appendChild(li);
})
mainDiv.appendChild(olGlasses);