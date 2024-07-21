import multer from 'multer';
import path from 'path';

// Configuración de almacenamiento para diferentes tipos de archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = '';
        switch (file.fieldname) {
            case 'profile':
                folder = './src/public/uploads/profiles/';
                break;
            case 'serviceBill':
                folder = './src/public/uploads/serviceBill/';
                break;
            case 'product':
                folder = './src/public/uploads/product/';
                break;
        }
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Instancia de multer para manejar múltiples archivos
const upload = multer({ storage: storage });

export default upload;
