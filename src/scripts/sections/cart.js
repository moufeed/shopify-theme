const CartLinks = {
	"update" : "/cart/update.js"
}

class Cart {

	static 	_PostMethod(url = ``, data = {}){
		return fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				// "Content-Type": "application/x-www-form-urlencoded",
			},
			body: JSON.stringify(data), 
		})
		.then(response => response.json());  
	}

	static  deleteById(id) {	
		let updates = {}
		updates[id] = 0;
		return  Cart._PostMethod( CartLinks.update , {updates});
	}

}

export default Cart;