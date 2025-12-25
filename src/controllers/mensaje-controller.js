const Mensaje = require("../models/mensaje");

const getAllMessages = async (req, res) => {
    try{
        const msg = await Mensaje.findAll();
        res.json(msg);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error"});
    };
};

const getMessageById = async (req, res) => {
    try {
        const msg = await Mensaje.findByPk(req.params.id)
        res.json(msg);
    } catch (err) {
        console.log(err);
        res.status(404).json({ error: "Not Found"});
    };
};

const postMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body();
        const msg = Mensaje.create( {name, email, message });
        res.json(msg);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: "Bad Request"});
    };
};

