// Function to find the maximum and minimum price products -------->

const products = [
    { name: "Mobile", price: 70000 },
    { name: "Laptop", price: 120000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile charger", price: 1500 }
]

for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products.length; j++) {
        if (products[i].price > products[j].price) {
            console.log(`${products[i].price} && ${products[j].price}`);
        }
    }
}



// const MaxMin = (list) => {
//     for (const i of list) {
//         console.log(list[i]);
//         // for (const j of list) {
//         //     if (list[i].price > list[j].price) {
//         //         console.log(list[i]);
//         //     }
//         // }
//     }
// }

// MaxMin(products)