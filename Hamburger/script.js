const size_small = {
    price: 50,
    calories: 20,
}
const size_medium = {
    price: 75,
    calories: 30,
}
const size_grand = {
    price: 100,
    calories: 40,
}

const topping_cheese = {
    name: 'cheese',
    price: 10,
    calories: 20,
} 
const topping_salad = {
    name: 'salad',
    price: 20,
    calories: 5,
}
const topping_potato = {
    name: 'potato',
    price: 15,
    calories: 10,
}
const topping_flavoring = {
    name: 'flavoring',
    price: 15,
    calories: 0,
}
const topping_mayo = {
    name: 'mayo',
    price: 20,
    calories: 5,
}


function Hamburger(type){
    this.price = type.price;
    this.calories = type.calories;
    this.topics_names = [];
   
    this.getPrice = function(new_price){
        this.price = this.price + new_price;
    }

    this.getCalories = function(new_calories){
        this.calories = this.calories + new_calories;
    }

    this.addTopping = function(topping){      
        this.getPrice(topping.price);
        this.getCalories(topping.calories);
        this.topics_names.push(topping.name);
    }
}

const small = new Hamburger(size_small);
const medium = new Hamburger(size_medium);
const grand = new Hamburger(size_grand);

medium.addTopping(topping_flavoring);
console.log(medium);

small.addTopping(topping_mayo);
small.addTopping(topping_potato);
console.log(small);



   