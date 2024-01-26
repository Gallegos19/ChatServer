import { Router } from "express";
// import { getFestividades, getbyIdFestividades, PostFestividades,putFestividadesControlller, deleteFestividadesControlller } from "../controllers/festividad.controller.js";
import { createUser, login, getbyIdUser } from "../controllers/usuario.controller.js";
const usuarioRoute = Router();

// usuarioRoute.get('/', getUsuarioes)
usuarioRoute.get('/:id', getbyIdUser)
usuarioRoute.post('/', createUser)
usuarioRoute.post('/auth', login)
// usuarioRoute.put('/:id', putUsuarioesControlller )
// usuarioRoute.delete('/:id', deleteFestividadesControlller)
export default usuarioRoute;
              