import nodemailer from "nodemailer";

const emailOlvidePassword = async (dato) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const { email, nombre, token } = dato;
    //enviar email

    const info = await transport.sendMail({
        from: "APV - Administrador de Pacientes de Veterinaria",
        to: email,
        subject: 'Reestablece tu password',
        text: 'Reestablece tu password',
        html: `
			<h2>Hola, ${nombre}</h2>
			<p>Has solicitado reestablecer tu password, sigue el siguiente enlace</p>
			<a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablece tu Password</a>
			
            <p>Si tu no solicitaste este proceso, puedes ignorar este mensaje</p>
		`
    })
}

export default emailOlvidePassword;