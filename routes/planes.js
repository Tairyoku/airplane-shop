const express = require("express")
const router = express.Router()
const { getPlanes, createPlane, getPlane } = require('../controllers/planes')
const path = require('path')
const multer = require('multer')

//указываем куда сохранять загружаемые файлы
const storage = multer.diskStorage({
    destination: './assets/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage })

//@route get /api/planes
//@des получить все самолеты
router.get('/', getPlanes);

//@route get /api/planes/:id
//@des получить самолет по  id
router.get('/:id', getPlane);


//@route post /api/planes
//@des создать самолет
router.post('/', upload.single('planeImage'), createPlane);

module.exports = router;