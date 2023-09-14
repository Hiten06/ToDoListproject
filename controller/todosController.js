const Todo = require("../models/Todo")

const getAllTodos = async (req,res) =>{
      try{
         const todos = await Todo.find({});
         if(todos.length === 0){
            res.status(500).json({
               message:"Todo list is empty"
            })
         }
         else{
            res.status(201).json({
                message:"Fetched All todo list",
                todo:todos
             })
         }
        
      }
      catch(err){
         res.status(400).json({
            error:err.message,
            message:"Internal server Error"
         })
      }
} 


const getTodosById = async(req,res) =>{
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});
        if(!todo){
            res.status(404).json({
                message:"The required Id is not found"
            })
        }
        else{
            res.status(201).json({
                message:"The required Todo is",
                todo:todo
            })
        }
    }
    catch(err){
        res.status(400).json({
            error:err.message,
            message:"Internal server Error"
         })
    }
}


const addTodo = async(req,res)=>{
    try{
        const {title,desc,status} = req.body;
        if(!title || !desc || !status){
            res.status(500).json({
                message:"Please enter all the required details"
            })
        }

        const todo =  await Todo.create({
            title,desc,status
        });

        if(todo){
            res.status(201).json({
                message:"Task created sucessfully"
            })
        }
        else{
            res.status(400).json({
                message:"Some problem while creating an task"
            })
        }

    }
    catch(err){
        res.status(500).json({
            error:err.message,
            message:"Internal server Error"
         })
    }

}

const modifyTodo = async(req,res)=>{
    
         const id = req.params.id;
         const {status} = req.body;
         try{
            const task = await Todo.findById({_id:id});
            const taskStatus = new String(task.status);
            if(taskStatus === status){
                 res.status(400).json({
                    message:"The task you are trying to modify is already modified"
                 })
            }else{
                const modifytodo =  await Todo.findByIdAndUpdate({_id:id},{status});
                if(modifytodo){
                    res.status(201).json({
                        message:"Updated the task to completed",
                    })
                }
                else{
                    res.status(400).json({
                        message:"Task can not be updated"
                    })
                }
            }
            
        }
        catch(err){
            res.status(500).json({
                error:err.message,
                message:"Internal server Error"
             })
        }
    
}

const deleteTodo = async(req,res)=>{
    try{
         const id = req.params.id;
         const deletedTodo = await Todo.findByIdAndDelete({_id:id});
         if(deletedTodo){
            res.status(201).json({
                message:"Deleted the task Sucessfully"
            })
         }
         else{
            res.status(400).json({
                message:"Failed to delete such Task"
            })
         }
    }
    catch(err){
        res.status(500).json({
            error:err.message,
            message:"Internal server Error"
         })
    }
}
module.exports = {getAllTodos,getTodosById,addTodo,modifyTodo,deleteTodo}