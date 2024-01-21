import database from "../config/database.js";

export const getMensaje = () => {
  return new Promise((resolve, reject) => {
    const consQuery = "SELECT * FROM mensaje";

    database
      .execute(consQuery)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => reject(err));
  });
};

export const getbyIdMensaje = (id) => {
  return new Promise((resolve, reject) => {
    const consQuery = "SELECT * FROM mensaje where idMensaje = ? limit 1";
    database
      .execute(consQuery, [id])
      .then((result) => {
       
        resolve(result[0]);
      })
      .catch((err) => reject(err));
  });
};

export const PostUMensaje = (mensaje,fecha,idUsuario,idChat) => {
    return new Promise((resolve, reject) => {
       const consQuery = "INSERT INTO usuario (mensaje,fecha,idUsuario,idChatPrivado) values (?,?,?,?)";
      database
        .execute(consQuery, [mensaje,fecha,idUsuario,idChat])
        .then((result) => {
          resolve(result);
        })
        .catch((err) => reject(err));
    });
  };

  
  export const DeleteMensaje = (id) => {
    return new Promise((resolve, reject) => {
        const consQuery = "DELETE FROM mensaje WHERE idMensaje = ?";
       database
         .execute(consQuery, [id])
         .then((result) => {
           resolve(result);
         })
         .catch((err) => reject(err));
     });
}