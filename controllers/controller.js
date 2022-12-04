// Importing the Model
const Hero = require('../models/superHero');

// Function To Fetch The Details Of A Single Item
const getItem = async (req, res, next) => {
    let hero;
    const id = req.params.id;
    try {
        hero = await Hero.findById(id);
        if (hero == null) {
            return res.status(404).json({ message: 'Item Not Found!' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    };

    res.hero = hero;
    next();
}

// Getting All Items From The Database
const all_items = async (req, res) => {
    try {
        const heroes = await Hero.find();
        res.json(heroes);
    } catch {
        res.status(500).json({ message: err.message });
    };
};

// Fetching A Single Item From The Database
const fetch_item = async (req, res) => {
    res.json(res.hero);
};

// Adding An Item To The Database
const add_item = async (req, res) => {
    const hero = new Hero(req.body);
    try {
        const newHero = await hero.save();
        res.status(201).json({ message: 'Added Successfully!' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    };
};

// Updating An Item From The Database
const update_item = async (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    try {
        await Hero.findByIdAndUpdate(id, updates);
        res.json({ message: 'Updated Successfully!' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    };
};

// Deleting An Item From The Database
const delete_item = async (req, res) => {
    const id = req.params.id;
    try {
        await Hero.findByIdAndDelete(id);
        res.json({ message: 'Deleted Successfully!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    };
};

module.exports = {
    getItem,
    all_items,
    fetch_item,
    add_item,
    update_item,
    delete_item
}