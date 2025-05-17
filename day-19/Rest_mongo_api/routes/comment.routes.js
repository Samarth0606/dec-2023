import { createComment, deleteComment, editComment, getComment } from "../controllers/comment.controllers.js";


export function commentRoutes(app){
    app.get('/comments', getComment);
    app.post('/comment', createComment);
    app.put('/comments/:id', editComment);
    app.delete('/comments/:id', deleteComment);
}




