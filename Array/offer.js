let itemsPrice= [250,645,300,900,50];
let offer=0;
let price=0;
for(let p of itemsPrice){
    console.log(`Price before Offer: Rs${p}`);
    offer= p/10;
    price= p-offer;
    console.log(`Offer Price= Rs${price}`);
}