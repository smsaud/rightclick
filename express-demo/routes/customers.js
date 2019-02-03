
const express = require('express');
const router = express.Router();

const customers = [
    {id:1, name:'FOX'},
    {id:2, name:'SDVI'},
    {id:3, name:'Evertz'},
]

router.get('/', (req, res) => {
    res.send(customers);
});

router.get('/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if(!customer) return res.status(404).send('Resource not found...');
    res.send(customer);
});

router.post('/', (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = {id: customers.length + 1, name: req.body.name};
    customers.push(customer);
    console.log(customers);
    res.send(customer);
});

router.put('/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if(!customer) return res.status(404).send('Resource not found...');

    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    customer.name = req.body.name;
    res.send(customer);
});

router.delete('/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if(!customer) return res.status(404).send('Resource not found...');

    const index = customers.indexOf(customer);
    customers.splice(index, 1);
    res.send(customer);
});

function validateCustomer(customer) {
    const schema = { 
        'name': Joi.string().min(3).required()
    }  
    return Joi.validate(customer, schema);
}

module.exports = router;