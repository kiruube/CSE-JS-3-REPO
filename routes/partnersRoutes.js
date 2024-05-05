// 1. Import requirements i.e.
    // 1.1. Router from Express
    // 1.2. <model> from <models>

    const {Router} = require('express');
    const Partner = require('./../models/partner')
    
    // 2. Create a Router instance
    const router = Router()
    
    
    // 3. Create routes
    // 3.1. Create a post route for the model.
    router.post('/', async (req,res)=>{
        const newPartner = new Partner(req.body)
        try{
            const partner = await newPartner.save()
            if(!partner) throw Error('Something went wrong!')
            res.status(201).json(partner)
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    });
    
    // 3.2. Create a get all route for the model.
    router.get('/', async (req,res)=>{
        try{
            const partners = await Partner.find()
            if(!partners) throw Error('Something went wrong!')
            res.status(200).json(partners)
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    });

    // 3.3. Create a get one route for the model.
router.get('/:id', async (req,res)=>{
    const {id} = req.params

    try{
        const partner = await Partner.findById(id);
        if(!partner) throw Error('Resource not found!')
        res.status(200).json(partner)
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
        const partner = await Partner.findByIdAndUpdate(id, updates);

        if(!partner) throw Error('Something went wrong!')

        const newPartner = {...partner._doc, ...updates};
        res.status(200).json(newPartner)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

// 3.4. Create a delete route for the model.
router.delete('/:id', async (req,res)=>{
    const {id} = req.params

    try{
        const deleted = await Partner.findByIdAndDelete(id);
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