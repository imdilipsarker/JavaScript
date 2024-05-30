class Store {
	constructor(name) {
		this.name = name;
		this.items = [];
		this.prices = {};
	}
	isItemAvailable(name) {
		const itemIndex = this.items.indexOf(name);
		if (itemIndex == -1) {
			return false;
		} else {
			return true;
		}
	}
	getPrice(name) {
		const isAvailable = this.isItemAvailable(name);
		if (isAvailable == true) {
			const itemPrice = this.prices[name];
			return itemPrice;
		} else {
			console.log("We don't have the item");
		}
	}
	addItem(name, price) {
		this.items.push(name);
		this.prices[name] = price;
	}
}
const myStore = new Store("Dilip's Store");
myStore.addItem('shirt', 500);
myStore.addItem('pant', 700);
console.log(myStore.getPrice('shirt'));
console.log(myStore.getPrice('trouser'));

// console.log(1);
// console.log(2);
// setTimeout(doSomething, 3000);
// console.log(4);
// console.log(5);

// function doSomething() {
// 	console.log(3);
// }
