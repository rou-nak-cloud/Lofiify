import multer from 'multer'

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, 'uploads/')
    },
    filename: function(req,res,cb){
        cb(null, file.originalname)
    },
})

const upload = multer({ storage });

export default upload;