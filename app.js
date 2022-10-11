var {Telegraf} = require('telegraf')
var app = new Telegraf('5558193681:AAGdonTRIM7vaOoO9alDO-36EkC8cgUA5jU')
var intro = require('./src/servicios/intro')
var generador = require('./src/servicios/generador')
var bombeo = require('./src/servicios/bombeo')
var baterias = require('./src/servicios/baterias')
var luminarias = require('./src/servicios/luminarias')
var baldor = require('./src/servicios/baldor')
var energia = require('./src/servicios/energia')
var pbaldor = require('./src/productos/baldor')
var pprometeo = require('./src/productos/prometeo')
var picaro = require('./src/productos/icaro')
var contacto = require('./src/servicios/contacto')

app.on(console.log('->>BOT_CONECTADO'))

//INICIO
app.start(chat => {
    app.telegram.sendPhoto(
        chat.chat.id,{source:`public/ed.jpg`},
        {caption:`Bienvenido a APS Electromecanica🔋 \n\n ${intro}`}
    )
    chat.reply(`Hola ${chat.chat.first_name} 👤`,{
        reply_markup:{
            keyboard:[
                [
                    {text:'Servicios 🗳'}
                ],

                [
                    {text:'Productos 💡'}
                ],

                [
                    {text:'Ubicacion 🗺'}
                ],

                [
                    {text:'Contacto 📱'}
                ]
            ],resize_keyboard:true
        }
    })
})

app.hears('Menu Principal Ⓜ️',chat => {
    chat.reply(`Menu Principal Ⓜ️`,{
        reply_markup:{
            keyboard:[
                [
                    {text:'Servicios 🗳'}
                ],

                [
                    {text:'Productos 💡'}
                ],

                [
                    {text:'Ubicacion 🗺'}
                ],

                [
                    {text:'Contacto 📱'}
                ]
            ],resize_keyboard:true
        }
    })
})

//SERVICIOS
app.hears('Servicios 🗳',chat => {
    chat.reply('Conoce Nuestros Servicios',{
        reply_markup:{
            keyboard:[
                [
                    {text:'Menu Principal Ⓜ️'}
                ],


                [
                    {text:'Generadores Electrcios🔋'}
                ],

                [
                    {text:'Bombeo Solar 🌕'}
                ],

                [
                    {text:'Baterias de Litio 📻'}
                ],

                [
                    {text:'Luminarias Solares 💡'}
                ],

                [
                    {text:'Baldor 🔄'}
                ],

                [
                    {text:'Eficiencia Energetica 🧱'}
                ]
            ],resize_keyboard:true
        }
    })
})

app.hears('Generadores Electrcios🔋',chat => {
    app.telegram.sendPhoto(
        chat.chat.id,{source:'public/i2.jpg'},
        {caption:generador}
    )
})

app.hears('Bombeo Solar 🌕',chat => {
    app.telegram.sendPhoto(
        chat.chat.id,{source:'public/i3.jpg'},
        {caption:bombeo}
    )
})

app.hears('Baterias de Litio 📻',chat => {
    app.telegram.sendPhoto(
        chat.chat.id,{source:'public/bateryd.jpg'},
        {caption:baterias}
    )
})

app.hears('Luminarias Solares 💡',chat => {
    app.telegram.sendPhoto(
        chat.chat.id,{source:'public/i4.jpg'},
        {caption:luminarias}
    )
})

app.hears('Baldor 🔄',chat => {
    app.telegram.sendPhoto(
        chat.chat.id,{source:'public/i5.jpg'},
        {caption:baldor}
    )
})

app.hears('Eficiencia Energetica 🧱',chat => {
    app.telegram.sendPhoto(
        chat.chat.id,{source:'public/i6.jpg'},
        {caption:energia}
    )
})


//PRODUCTOS
app.hears('Productos 💡',chat => {
   chat.reply('Seleccione un Producto\nPara ver mas informacion ℹ️',{
    reply_markup:{
        keyboard:[
            [
                {text:'Menu Principal Ⓜ️'}
            ],

            [
                {text:'Baldor 🔋'}
            ],

            [
                {text:'Prometeo 🔋'}
            ],

            [
                {text:'Icaro 🔋'}
            ],

            [
                {text:'Heavy Duty 🔋'}
            ]
        ],resize_keyboard:true
    }
   }) 
})

app.hears('Baldor 🔋',chat => {
    app.telegram.sendPhoto(
        chat.chat.id,{source:'public/i7.jpg'},
        {caption:pbaldor}
    )
})

app.hears('Prometeo 🔋',chat => {
    app.telegram.sendPhoto(
        chat.chat.id,{source:'public/i9.jpg'},
        {caption:pprometeo}
    )
})

app.hears('Icaro 🔋',chat => {
    app.telegram.sendPhoto(
        chat.chat.id,{source:'public/i8.jpg'},
        {caption:picaro}
    )
})

app.hears('Heavy Duty 🔋',chat => {
    chat.reply('Cargando......')
    app.telegram.sendDocument(
        chat.chat.id,{source:'public/hdbaldor.pdf'},
        {caption:'Heavy Duty Baldor 🧰'}
    )
    app.telegram.sendDocument(
        chat.chat.id,{source:'public/hdprometeo.pdf'},
        {caption:'Heavy Duty Prometeo 🧰'}
    )
})


//UBICACION
app.hears('Ubicacion 🗺',chat => {
    var latitude = '20.662689'
    var longitude = '-103.380526'
    app.telegram.sendLocation(chat.chat.id,latitude,longitude)
})


//CONTACTO
app.hears('Contacto 📱',chat => {
    app.telegram.sendPhoto(
        chat.chat.id,{source:'public/i10.jpg'},
        {caption:contacto}
    )
})

app.launch()