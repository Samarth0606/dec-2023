import Comments from "../models/Comment.model.js";

export async function getComment(req,res){
    try{
        let allComments = await Comments.find();
        res.status(200).json({comment:allComments})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

// export function createComment(){}