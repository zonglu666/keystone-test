var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Brand Model
 * ==========
 */

var Brand = new keystone.List('Brand',{
	map: { name: 'englishName' },
});

Brand.add({
	englishName: { type: String, required: true },
	chineseName: { type: String },
});

/**
 * Relationships
 */
Brand.relationship({ ref: 'Product', path: 'products', refPath: 'brand' });


Brand.defaultColumns = 'englishName, chineseName';
Brand.register();
