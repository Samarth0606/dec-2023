import Comments from "../models/Comment.model.js";

export async function getComment(req,res){
    try{
        let allComments = await Comments.find();
        return res.status(200).json(allComments)
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
}

export async function createComment(req,res){
    try{
        let {username,comment} = req.body;
        let newComment = await Comments.create({username,comment});
        return res.status(201).json({comment: newComment})
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
}

export async function editComment(req,res){
    try{
        let {id} = req.params; 
        let {comment} = req.body;
        await Comments.findByIdAndUpdate(id , {comment});
        res.status(200).json({message:"edited succesfully"})
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
}

export async function deleteComment(req,res){
    try{
        let {id} = req.params; 
        await Comments.findByIdAndDelete(id);
        res.status(200).json({message:"deleted succesfully"})
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
}