export function formatPrice(price){
    return price.toLocaleString('en-US', {
        style: "currency",
        currency: "EUR"
    })
}

export const foodItems = [
    {
        name: "Cheese Pizza",
        img: '/img/pizza.png',
        section: "Pizza",
        price: 1.99
    },
    {
        name: "Pepperoni Pizza",
        img: '/img/pizza2.jpeg',
        section: "Pizza",
        price: 2.99
    },
    {
        name: "Burger",
        img: '/img/burger.jpeg',
        section: "Sandwich",
        price: 3.99
    },
    {
        name: "Fries",
        img: '/img/fries.jpeg',
        section: "Sides",
        price: 2.5
    },
    {
        name: "Veggie Pizza",
        img: '/img/healthy-pizza.jpeg',
        section: "Pizza",
        price: 2.69
    },
    {
        name: "Chicken Pizza",
        img: '/img/chicken-pizza.jpeg',
        section: "Pizza",
        price: 2.29
    },
    {
        name: "Club Sandwich",
        img: '/img/sandwich.jpeg',
        section: "Sandwich",
        price: 5.99
    },
    {
        name: "Gyro",
        img: '/img/gyro.jpeg',
        section: "Sandwich",
        price: 4.99
    },
    {
        name: "Chicken Fingers",
        img: '/img/chicken-fingers.jpeg',
        section: "Sides",
        price: 3.99
    },
    {
        name: "Shrimp Sandwich",
        img: '/img/shrimp.jpg',
        section: "Sandwich",
        price: 7.99
    }
];

export const foods = foodItems.reduce((res, food) => {
 if (!res[food.section]){
     res[food.section] = []
 }
 res[food.section].push(food);
 return res;
}, {});

