



const Algorithm = require('../models/algorithms');

exports.getAllAlgorithms = async (req, res) => {
    try {
        const algorithms = await Algorithm.getAll();
        res.json(algorithms);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAlgorithmById = async (req, res) => {
    const id = req.params.id;
    try {
        const algorithm = await Algorithm.getById(id);
        if (!algorithm) {
            return res.status(404).json({ error: 'Algorithm not found' });
        }
        res.json(algorithm);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
