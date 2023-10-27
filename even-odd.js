function evenOrOdd(number) {
	let result;
	if (number % 2 === 0) {
		result = 'The number is even';
	} else {
		result = 'The number is odd';
	}
	return result;
}
console.log(evenOrOdd(4));
