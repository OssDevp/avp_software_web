import nodemailer from "nodemailer";

const emailRegistro = async (dato) => {
	const transport = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: process.env.EMAIL_PORT,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS
		}
	});

	const {email, nombre, token} = dato;
	//enviar email

	const info = await transport.sendMail({
		from: "APV - Administrador de Pacientes de Veterinaria",
		to: email,
		subject: 'Comprueba tu cuenta en APV',
		text: 'Comprueba tu cuenta en APV',
		html: `
			<h2>Bienvenido ${nombre}</h2>
			<p>Comprueba tu cuenta en APV</p>
			<a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
			<p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
		`
	})
}

export default emailRegistro;