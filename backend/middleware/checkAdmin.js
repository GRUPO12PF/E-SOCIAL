import jwt from 'jsonwebtoken'
import Usuario from '../models/Usuario.js';

const checkAdmin = async (req, res, next) => {
    // let token;
    // if (
    //     req.headers.authorization &&
    //     req.headers.authorization.startsWith('Bearer')
    // ) {
    //     try {
    //         token = req.headers.authorization.split(' ')[1];
    //         const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //         req.usuario = await Usuario.findById(decoded.id).select(
    //             "-password -confirmado -token -createdAt -updatedAt -__v" 
    //             );
    //         return next();
    //     } catch (error) {
    //         return res.status(404).json({msg: 'Hubo un error'});
    //     }
    // };
    // if(!token) {
    //     const error = new Error('Tokken no valido');
    //     return res.status(401).json({ msg: error.message });
    // }
    // next();


    let token;
    token = req.headers.authorization.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("desde acáaaaaa", decoded)
    
    const user = await Usuario.findById({_id: decoded.id}).select(
        "-password -confirmado -token -createdAt -updatedAt -__v" 
        );
    console.log("usuario por decoded",user)

    if (user.moderador === 'false') {
        // //   const users = await Usuario.findByUsers(user._id)
          
           res.status(200).json({ msg: "no eres admin" }) 
           next(); 
        } else {
           res.status(200).json({ msg: 'síiii eres admin' })
           next();
     }
     next();
};
  export default checkAdmin;