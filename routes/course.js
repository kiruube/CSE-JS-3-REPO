// 1. Import requirements i.e.
    // 1.1. Router from Express
    // 1.2. <model> from <models>

    const {Router} = require('express');
    const Course = require('./../models/course')
    
    // 2. Create a Router instance
    const router = Router()
    
    
    // 3. Create routes
    // 3.1. Create a post route for the model.
    router.post('/', async (req,res)=>{
        const newCourse = new Course(req.body)
        try{
            const course = await newCourse.save()
            if(!course) throw Error('Something went wrong!')
            res.status(201).json(course)
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    });
    
    // 3.2. Create a get all route for the model.
    router.get('/', async (req,res)=>{
        try{
            const courses = await Course.find()
            if(!courses) throw Error('Something went wrong!')
            res.status(200).json(courses)
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    });
    // 3.3. Create a get one route for the model.
router.get('/:id', async (req,res)=>{
    const {id} = req.params

    try{
        const course = await Course.findById(id);
        if(!course) throw Error('Resource not found!')
        res.status(200).json(course)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});


// 3.4. Create a put route for the model.
router.put('/:id', async (req,res)=>{
    const {id} = req.params
    updates = {...req.body}

    try{
        const course = await Course.findByIdAndUpdate(id, updates);

        if(!course) throw Error('Something went wrong!')

        const newCourse = {...course._doc, ...updates};
        res.status(200).json(newCourse)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});
// 3.4. Create a delete route for the model.
router.delete('/:id', async (req,res)=>{
    const {id} = req.params

    try{
        const deleted = await Course.findByIdAndDelete(id);
        console.log(deleted);

        if(deleted==null) {
            res.status(404).json({message: 'Not Found'})
            return null
        }

        if(!deleted) throw Error('Something went wrong!')

        res.status(200).json(deleted)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

module.exports = router;