let cost=100;
let price=150;

if(cost >= price){
    alert("Kar edilemez");
}else{
    const maxUnits = Math.floor(price/(price-cost));
    alert(`Kar edilebilecek maksimum ürün adedi: ${maxUnits}`);
}