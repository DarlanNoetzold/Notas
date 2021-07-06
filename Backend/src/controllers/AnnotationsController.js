const Annotations = require('../models/AnnotationData');


module.exports = {

    read(request, response){
        return response.json({
            sucess: true,
        })
    },

    create(request, responde){
        const {title, notes, priority} = request.body;

        console.log(title);
        console.log(notes);
        console.log(priority);
    }
    
}