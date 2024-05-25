const mongoose=require('mongoose');
const taskSchema=mongoose.Schema(
    {
        description: { type: String, required: true },
        taskstatus: { type: String, default: 'ongoing' }
  
})
const taskData=mongoose.model('task',taskSchema);

module.exports=taskData;

