const express = require("express");
const {todo} = require("./models");

//Reading

const gettodo = async(request,response)=>{
    var _id = request.query.id;
    if(_id){
        var Todos = await todo.findById(_id);    //todo ke andr search krni h particular id agr h to task found a jaega
    }
    else{
        var Todos = await todo.find();     //Find method used to find a specific or single element from the array. It gives only one value as a return
    }
    return response.json({status:"task found"});
}
 
const addtodo = async(request,response)=>{      //in this we are adding new task 
    console.log(request.body)                  // async is to increase wait time
    await todo.create(request.body)            //create library mein already stored h new task ko crate krne ke liye  // await jab tak wait krega isse phle vale steps complete nhi hote 
    return response.json({status:"task added"}) // task add hone ke baad output ae task added

}

const deletetodo = async(request,response) =>{
    var _id = request.query.id;
    var data = request.body;
    console.log(request.body)
    await todo.findByIdAndDelete(_id,data);
    return response.json({status:"task deleted"})
}

const updatetodo = async(request,response) =>{
    var _id = request.query.id;
    var newdata = request.body;
    console.log(id,newdata);
    await todo.findByIdAndUpdate(_id,newData);
    const opts = {new:true, upsert: true};          
    return response.json({status:"task updated"})
}

 
//     router.patch("/:id", async(request,response)=>{
//     var Todos = await todo.findById(_id);

//     if(!Todos) return response.status(404).send("Todo not found")
//     const updatetodo = todo.findByIdAndUpdate(request.params.id,{
//         isCompleted: !todo.isCompleted
//     })
//     return response.json({status:"task updated"})
// })
module.exports={gettodo,addtodo,deletetodo,updatetodo}


//line 37
//{ new : true } will return the modified document rather than the original
//. updateOne doesn't have this option. If you need response as updated document use findOneAndUpdate.

//new:true can be used in findByIdAndUpdate()
// findOneAndUpdate()
// findOneAndDelete()
// findOneAndRemove()
// findOneAndReplace()

//get-read
//post create
//put-update/create 
//patch is better than using put
