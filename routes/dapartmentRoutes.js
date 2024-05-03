// 1. Import requirements i.e.
    // 1.1. Router from Express
    // 1.2. <model> from <models>

    const {Router} = require('express');
    const Department = require('../models/Department')
    
    // 2. Create a Router instance
    const router = Router()
    
    
    // 3. Create routes
    // 3.1. Create a post route for the model.
    router.post('/', async (req,res)=>{
        const newDepartment = new Department(req.body)
        try{
            const department = await newDepartment.save()
            if(!department) throw Error('Something went wrong!')
            res.status(201).json(department)
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    });
    
    // 3.2. Create a get all route for the model.
    router.get('/', async (req,res)=>{
        try{
            const departments = await Department.find()
            if(!departments) throw Error('Something went wrong!')
            res.status(200).json(departments)
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    });
    // 3.3. Create a get one route for the model.
router.get('/:id', async (req,res)=>{
    const {id} = req.params

    try{
        const department = await Department.findById(id);
        if(!department) throw Error('Resource not found!')
        res.status(200).json(department)
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
        const department = await Department.findByIdAndUpdate(id, updates);

        if(!department) throw Error('Something went wrong!')

        const newDepartment = {...department._doc, ...updates};
        res.status(200).json(newDepartment)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});
// 3.4. Create a delete route for the model.
router.delete('/:id', async (req,res)=>{
    const {id} = req.params

    try{
        const deleted = await Student.findByIdAndDelete(id);
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