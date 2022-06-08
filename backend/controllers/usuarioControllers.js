
import Usuario from "../models/Usuario.js";
import generarId from "../helpers/generarId.js";
import generarJWT from "../helpers/generarJWT.js";
import { emailRegistro, emailOlvidePassword } from "../helpers/emails.js";

const registrar = async (req, res) => {
    //Evitar registros duplicados
    const { email } = req.body;
    const existeUsuario = await Usuario.findOne({ email })

    if (existeUsuario) {
        const error = new Error('Usuario ya registrado');
        return res.status(400).json({ msg: error.message });
    }

    try {
        const usuario = new Usuario(req.body);
        usuario.token = generarId();
        const usuarioAlmacenado = await usuario.save()

        emailRegistro({
            email: usuario.email,
            nombre: usuario.nombre,
            token: usuario.token,
        });

        res.json(usuarioAlmacenado);
    } catch (error) {
        console.log(error);
    }
};

const autenticar = async (req, res) => {

    const { email, password } = req.body;

    //Comprobar si el usuario existe
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
        const error = new Error(" El usuario no existe");
        return res.status(404).json({ msg: error.message });
    }

    //Comprobar si el usuario esta confirmado 
    if (!usuario.confirmado) {
        const error = new Error("Tu Cuenta no ah sido Confirmada");
        return res.status(403).json({ msg: error.message });
    }

    //Comprobar su password
    if (await usuario.comprobarPassword(password)) {
        res.json({
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarJWT(usuario._id),
        })
    } else {
        const error = new Error("El Password es Incorrecto");
        return res.status(403).json({ msg: error.message });
    }
};

const confirmar = async (req, res) => {
    const { token } = req.params
    const usuarioConfirmar = await Usuario.findOne({ token });
    if (!usuarioConfirmar) {
        const error = new Error("Token no Valido");
        return res.status(403).json({ msg: error.message });
    }
    try {
        usuarioConfirmar.confirmado = true;
        usuarioConfirmar.token = "";
        await usuarioConfirmar.save();
        res.json({ msg: "Usuario Confirmado Correctamente" });

    } catch (error) {
        console.log(error)
    }
};

const olvidePassword = async (req, res) => {
    const { email } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
        const error = new Error(" El usuario no existe");
        return res.status(404).json({ msg: error.message });
    }
    try {
        usuario.token = generarId();
        await usuario.save();

        emailOlvidePassword({
            email: usuario.email,
            nombre: usuario.nombre,
            token: usuario.token,
        });

        res.json({ msg: 'Hemos enviado un email con las intrucciones' });
    } catch (error) {
        console.log(error)

    }
};

const comprobarToken = async (req, res) => {
    const { token } = req.params;

    const tokenValido = await Usuario.findOne({ token });

    if (tokenValido) {
        res.json({ msg: 'Token valido y el Usuario existe' })
    } else {
        const error = new Error("Token no valido");
        return res.status(404).json({ msg: error.message });
    }
};

const nuevoPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    const usuario = await Usuario.findOne({ token });

    if (usuario) {
        usuario.password = password;
        usuario.token = '';
        try {
            await usuario.save();
            res.json({ msg: "Password Modificado Correctamente" });
        } catch (error) {
            console.log(error)
        }
    } else {
        const error = new Error("Token no valido");
        return res.status(404).json({ msg: error.message });
    }
}

const perfil = async (req, res) => {
    const usuario = await Usuario.findOne({ nombre: req.usuario.nombre }).select(
        "-password -email -confirmado -createdAt -updatedAt -__v"
    );
    res.json(usuario);
}

const usuario = async (req, res) => {
    try {
        const user = await Usuario.findOne({ nombre: req.usuario.nombre })
            .select(" -moderador -password -confirmado  -createdAt -updatedAt -__v -token");
        return res.send(user);
    } catch (e) {
        return res.status(400).json({ msg: "Error" });
    }
};

const traerUsuarios = async (req, res) => {
    //traigo todos los user y los mapeo para que solo me muestre el ID, Nombre, Imagen y Libros
    await Usuario.find({}).then((results) => {
        let userMapeado = results.map((el) => {
            return {
                id: el.id,
                name: el.nombre,
                image: el.image,
                books: el.books,
            };
        });
        return res.json(userMapeado);
    });
};

const cambiarImage = async (req, res) => {
    const nombre = req.usuario.nombre;
    const formatos = ["png", "jpg", "webp", "gif"];
    if (
        !formatos.includes(
            req.files.image.name.split(".")[
            req.files.image.name.split(".").length - 1
            ]
        )
    ) {
        return res
            .status(400)
            .send({ msg: "Invalid image format (jpg, png, webp or gif)" });
    }
    try {
        if (req.files.image) {
            const user = await Usuario.findOne({ nombre });
            const response = await uploadImage(req.files.image.tempFilePath);
            await fs.remove(req.files.image.tempFilePath);

            const image = {
                url: response.secure_url,
                public_id: response.public_id,
            };

            user.image = image;
            await user.save();
            return res.json({ msg: "Image updated" });
        }
    } catch (e) {
        return res.status(400).json({ msg: "Error" });
    }
};


export {
    registrar,
    autenticar,
    confirmar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    perfil,
    usuario,
    traerUsuarios,
    cambiarImage,
};