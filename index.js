const express = require('express')
const app = express()
const path = require('path')
const nodemailer = require('nodemailer')
require('dotenv').config()

const user = process.env.USER
const pass = process.env.PASS


app.use(express.static(path.join(__dirname, 'build')))

app.post('/contact', express.urlencoded({ extended: true }), (req, res) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: { user, pass },
        tls: {
            rejectUnauthorized: false
        }
    })

    async function run_email() {
        const mailSend = await transporter.sendMail({
            from: user,
            to: 'machadoekim@gmail.com',
            replyTo: req.body.email,
            subject: req.body.subject,
            html: `<p>${req.body.message}</p>
            <div>telefone de contato: ${req.body.phone} `
        }).then(info => info ).catch(error => console.log(error))
    }

    run_email()
})

app.listen(process.env.PORT || 3000)