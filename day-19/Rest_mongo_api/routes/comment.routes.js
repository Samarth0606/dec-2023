import { getComment } from "../controllers/comment.controllers.js";



export function commentRoutes(app){
    app.get('/comments', getComment);
    // app.post();
}




