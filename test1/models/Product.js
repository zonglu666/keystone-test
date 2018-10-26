var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * ==========
 */

var Product = new keystone.List('Product');

Product.add({
	name: { type: String, required: true },
	status: {
		type: Types.Select,
		options: [
			{value:'draft', label:'草稿'},
			{value:'prepared', label:'准备完毕'},
			{value:'sold', label:'已出售'}],
		default: 'draft'
	},
	price: { type: Number },
	brand: { type: Types.Relationship, ref: 'Brand' },
});

Product.defaultColumns = 'name, status, price, brand';
Product.register();
