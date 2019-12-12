import {useState} from "react";

export function useToppings(defaultTopping){
    const [toppings, setToppings] = useState(defaultTopping || getDefaultTopping());
    function checkTopping(index){
        const newToppings =[...toppings];
        newToppings[index].checked = !newToppings[index].checked;
        setToppings(newToppings);
    }
    return {
        checkTopping,
        toppings
    }
}

const toppingsList = [
    "Pepperoni",
    "Mushrooms",
    "Onions",
    "Sausage",
    "Bacon",
    "Extra cheese",
    "Black olives",
    "Green peppers",
    "Pineapple",
    "Spinach"
];

function getDefaultTopping(){
    return toppingsList.map(topping => ({
        name: topping,
        checked: false
    }))
}
