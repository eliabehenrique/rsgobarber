import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, resBuffer) => {
        if (err) return cb(err);

        return cb(null, resBuffer.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
