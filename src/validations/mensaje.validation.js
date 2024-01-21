import zod from "zod";

    const mensaje = zod.object({

    mensaje: zod.string(
        {
        required_error : "Mensaje es requerido",
        invalid_type_error : "Mensaje debe ser un texto"
        }
    ),
    fecha: zod.string(
        {
        required_error : "fecha es requerido",
        invalid_type_error : "fecha debe ser un numero"
         }
    ),
    idUsuario: zod.number(
        {
        required_error : "idUsuario es requerido",
        invalid_type_error : "idUsuario debe ser un numero"
         }
    ),
    idChatPrivado: zod.number(
        {
        required_error : "idChatPrivado es requerido",
        invalid_type_error : "idChatPrivado debe ser un texto"
         }
    ),
    
    });

    export const validarMensaje = (mensajes) =>{

     return mensaje.safeParse(mensajes)
    }

    export const validarMensajeParcial = (mensajeParcial) =>{
        return mensaje.partial().safeParse(mensajeParcial)

    }

