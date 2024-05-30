const waitForMe = async (request, response) => {
	return "Don't worry I am waiting for you";
};
const herResponse = await waitForMe();
console.log(herResponse);
