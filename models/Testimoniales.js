import Sequalize from 'sequelize';
import db from '../config/db.js'

export const Testimonial = db.define('testimoniales', {

    nombre:{ type: Sequalize.STRING},
    correo:{ type: Sequalize.STRING},
    mensaje:{ type: Sequalize.STRING},
    
});