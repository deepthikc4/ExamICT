const express = require('express');
const router = express.Router();
const taskdetails = require('../model/task');


router.use(express.json());
// Add new task

router.post('/addTask',async(req,res)=>{

    try {
       const data=req.body;
       const newtask=await taskdetails(data).save();
       console.log(newtask);
       if(newtask)
       {
       
       res.status(200).send({Message:'New Task Added successfully'})
    }

    } catch (error) {
        res.status(400).send({Message:'failed'})
    }
    }
)




// Get all task


router.get('/home',(req,res)=>{

    try {
        taskdetails.find().then((tdetails)=>{
            res.status(200).send(tdetails);
        })
    } catch (error) {
       res.status(404).send({Message:"can not display task details"}) 
    }
})



// Delete Task
router.delete('/delete/:id',async(req,res)=>{

    try {
    let id=req.params.id;
    console.log(id);
    const deletetask=await  taskdetails.findByIdAndDelete(id);
    console.log(deletetask);
    if(!deletetask){
        return res.status(404).json({error:`no data found`});
       
    }
    res.status(200).send({message:"task deleted Successfully"})
    
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' });
    }
    })
    


    // update task ststus

    // router.put('update/:id', async (req, res) => {
    //     const updatedTask = await taskdetails.findByIdAndUpdate(req.params.id, req.body, { new: true });
    //     res.json(updatedTask);
    //   });
module.exports = router;