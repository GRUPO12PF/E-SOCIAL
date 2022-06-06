import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  var transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const info = await transport.sendMail({
    from: '"Books Market" <cuentas@booksmarket.com>',
    to: email,
    subject: "Books Market - Confirm your account",
    text: "Confirm your Books Market Account",
    html: `
        <h3>Hola ${nombre} por favor siga el enlace de abajo para confirmar su cuenta</h3>
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}"><h4>Confirmar Cuenta</h4></a>
        <p>Si no fuiste vos quien creó la cuenta podes ignorar este email</p>
            `,
  });
}

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  var transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const info = await transport.sendMail({
    from: '"Books Market" <cuentas@booksmarket.com>',
    to: email,
    subject: "Books Market - Reset your password",
    text: "Restablece la contraseña de tu cuenta en Books Market",
    html: `
        <p>Hola: ${nombre} haz click en el enlace para ingresar una nueva contraseña</p>
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}"> CAMBIAR PASSWORD </a>
        <p>Si no fuiste vos quien creó la cuenta podes ignorar este email</p>
            `,
  });
};