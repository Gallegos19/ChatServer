import database from "../config/database.js";

export const getChatPrivado = () => {
  return new Promise((resolve, reject) => {
    const consQuery = "SELECT * FROM chatprivado";

    database
      .execute(consQuery)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => reject(err));
  });
};

export const getbyIdChatPrivado = (correo) => {
  return new Promise((resolve, reject) => {
    const consQuery = "SELECT * FROM chatprivado where idChatPrivado = ? limit 1";
    database
      .execute(consQuery, [correo])
      .then((result) => {
       
        resolve(result[0]);
      })
      .catch((err) => reject(err));
  });
};

export const PostChatPrivado = (nombre) => {
    return new Promise((resolve, reject) => {
       const consQuery = "INSERT INTO chatprivado (nombreChat) values (?)";
      database
        .execute(consQuery, [nombre])
        .then((result) => {
          resolve(result);
        })
        .catch((err) => reject(err));
    });
  };

  export const putChatPrivado = (id, nombre) => {
    return new Promise((resolve, reject) => {
      const consQuery = "UPDATE chatprivado SET nombreChat = ? WHERE idChatPrivado = ?";
      database
        .execute(consQuery, [nombre, id]) // Cambiado el orden de los valores aquí
        .then((result) => {
          resolve(result);
        })
        .catch((err) => reject(err));
    });
  };
  
export const DeleteChatPrivado = (id) => {
    return new Promise((resolve, reject) => {
        const consQuery = "DELETE FROM chatprivado WHERE idChatPrivado = ?";
       database
         .execute(consQuery, [id])
         .then((result) => {
           resolve(result);
         })
         .catch((err) => reject(err));
     });
}