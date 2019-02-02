
const Joi = require('joi');
const express = require('express');

const app = express();

app.use(express.json());

const customers = [
    {id:1, name:'FOX'},
    {id:2, name:'SDVI'},
    {id:3, name:'Evertz'},
]

app.get('/', (req, res) => {
    res.send("This is the home page of my express app...");
});

app.get('/api/customers', (req, res) => {
    res.send(customers);
});

app.get('/api/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if(!customer) return res.status(404).send('Resource not found...');
    res.send(customer);
});

app.post('/api/customers/', (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = {id: customers.length + 1, name: req.body.name};
    customers.push(customer);
    console.log(customers);
    res.send(customer);
});

app.put('/api/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if(!customer) return res.status(404).send('Resource not found...');

    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    customer.name = req.body.name;
    res.send(customer);
});

app.delete('/api/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if(!customer) return res.status(404).send('Resource not found...');

    const index = customers.indexOf(customer);
    customers.splice(index, 1);
    res.send(customer);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));

function validateCustomer(customer) {
    const schema = { 
        'name': Joi.string().min(3).required()
    }  
    
    return Joi.validate(customer, schema);

}