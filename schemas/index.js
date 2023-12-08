const {Contact} = require('./contactSchema');
const {addSchema} = require('./addSchema');
const {updateSchema} = require('./updateSchema');
const {updateStatusSchema} = require('./updateStatusSchema');


module.exports = { Contact, addSchema, updateSchema, updateStatusSchema };