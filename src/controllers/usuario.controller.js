import { PostofUsuario, loginUsuario, getIdUser } from '../services/usuario.service.js';

export const createUser = async (req, res) => {
    try {
        const data = req.body;
        await PostofUsuario(data);
        return res.status(201).json({
            message: 'Usuario creado exitosamente'
        });
    } catch (error) {
        console.error('Error al crear usuario:', error);

        return res.status(500).json({
            message: 'Ocurrió un error al crear usuario',
            error: error.message,
        });
    }
};
export const getbyIdUser = async (req, res) => {
    try {
      const {id} = req.params;
      const result = await getIdUser(id);
  
      return res.status(200).json({
        message: "¡Funciona correctamente!",
        data: result,
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };
export const login = async (req, res) =>{
    try {
        const {correo, contrasena} = req.body;
        const resp = await loginUsuario(correo, contrasena);
        console.log('', resp);

        if (resp) {
            // Aquí puedes hacer algo con la respuesta
            res.status(200).json({
                message: 'Acceso permitido',
                token: resp.token ,// Supongamos que la respuesta tiene un token
                id: resp.id
            });
        } else {
            res.status(401).json({
                message: 'Credenciales inválidas'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message:'Error al validar credenciales',
            error: error.message
        });
    }
};
