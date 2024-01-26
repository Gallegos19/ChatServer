import { Router } from "express";
import { getChatPrivado, getbyIdChatPrivado, PostChatPrivado,putChatPrivadoControlller, deleteChatPrivadoControlller } from "../controllers/chat.controller.js";
import { verificarJWT } from "../middleware/auth.middleware.js";
import { contador } from "../middleware/socketio/socketIo.js";
const chatRoute = Router();

chatRoute.get('/', getChatPrivado)
chatRoute.get('/:id', getbyIdChatPrivado)
chatRoute.post('/', verificarJWT, PostChatPrivado)
chatRoute.put('/:id',verificarJWT, putChatPrivadoControlller )
chatRoute.delete('/:id',verificarJWT, deleteChatPrivadoControlller)
chatRoute.get('/contador', function(req, res) {
    const sendResponse = () => {
        res.json({ contador });
    };

    if (req.query.contador !== String(contador)) {
        sendResponse();
    } else {
        const intervalId = setInterval(() => {
            if (req.query.contador !== String(contador)) {
                sendResponse();
                clearInterval(intervalId);
            }
        }, 1000);

        req.on('close', () => {
            clearInterval(intervalId);
        });
    }
});
export default chatRoute;
              