const Plane = require('../models/plane');


/**
 * получить все самолеты
 * @param {*} req 
 * @param {*} res 
 */
const getPlanes = async(req, res) => {
    try {
        const planes = await Plane.find();

        res.status(200).json(planes);
    } catch (error) {
        res.status(500).json({ message: "Не удалось получить список самолетов, повторите попытку", });
    }
};

/**
 * Получить самолет по Id
 * @param {*} req 
 * @param {*} res 
 */

const getPlane = async(req, res) => {
    try {
        const plane = await Plane.find({ _id: req.params.id });

        res.status(200).json(plane);
    } catch (error) {
        res.status(400).json({ message: "Самолет не найден", });
    }
}

/**
 * создать самолет
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createPlane = async(req, res) => {
    try {
        const errors = {};

        if (!req.body.name) {
            errors.name = { message: "Укажите название" }
        }
        if (!req.body.price) {
            errors.price = { message: "Укажите цену" }
        }
        if (!req.body.description) {
            errors.description = { message: "Укажите описание" }
        }
        if (req.body.description && req.body.description.length > 700) {
            errors.description = { message: "Описание слишком длинное" }
        }
        if (!req.body.capacity) {
            errors.capacity = { message: "Укажите вместимость" }
        }
        if (req.body.capacity && req.body.capacity.length > 2) {
            errors.capacity = { message: "Вместимость не может быть больше 99" }
        }
        if (!req.file) {
            errors.planeImage = { message: "Добавьте фото" }
        }

        if (Object.keys(errors).length > 0) {
            return res.status(400).json(errors);
        }

        const { name, price, description, capacity } = req.body;

        const plane = await Plane.create({
            name,
            price,
            description,
            capacity,
            planeImage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`,
        });

        res.status(201).json(plane);
    } catch (error) {
        res.status(500).json({ message: "Не удалось создать самолет, повторите попытку", });
    }
};

module.exports = {
    getPlanes,
    createPlane,
    getPlane
}