import zod from "zod";

    const chat = zod.object({

    nombre: zod.string(
        {
        required_error : "nombre de chat es requerido",
        invalid_type_error : "nombre de chat debe ser un texto"
        }
    ),
    });

    export const validarChat = (usuarios) =>{
     return chat.safeParse(usuarios)
    }


    export const validarChatParcial = (ChatParcial) =>{
        return chat.partial().safeParse(ChatParcial)

    }

