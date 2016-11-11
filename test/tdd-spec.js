const expect = require('chai').expect
	, makeOneOrder = require('../lib/makeOneOrder')


describe('Test', ()=>{
	var items = [
			{name: 'apple',  price:10, qty: 5},
			{name: 'orange', price:15, qty:10}
	]

	it('makeOneOrder API', ()=>{
		var orderA = makeOneOrder()
		orderA
		  .purchase(items)
		  .purchase(items)
		console.log(orderA.getItems().length)
		expect(orderA.get('qty')).to.equal(30)
		expect(orderA.get('subtotal')).to.equal(400)
	})
	it('pay thing')
})