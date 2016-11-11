module.exports = function(){
	let cart = []
	
	return {
		purchase: function(items){
			if(cart.length === 0){
				cart = items
			} else {
				cart = cart.concat(items)
			}
			return this
		},
		getItems: function(){
			return cart
		},
		get:function(term){
			switch(term) {
				case'subtotal':
					return cart.reduce((acc, item)=>acc+=(item.qty * item.price),0)
				case'qty':
					return cart.reduce((acc, item)=>acc+=item.qty,0)
				default:
					return 0
			}
		}
	}
}