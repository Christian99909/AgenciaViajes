

const guardarTestimonial =  (req, res) => { //req - lo que enviamos : res - lo que express nos responde


   //validar
    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === ''){

        errores.push({mensaje: 'El Nombre esta vacio'});
    }
    if(correo.trim() === ''){

        errores.push({mensaje: 'El Correo esta vacio'});
    }
    if(mensaje.trim() === ''){

       errores.push({mensaje: 'El Mensaje esta vacio'});
    }

    if (errores.length > 0) {

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje
        })
        
    }else{
        // Almacenar en la base de datos
    }
}

export {guardarTestimonial}