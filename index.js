
const express = require("express");
const app = express();
const Canvas = require('discord-canvas');
const { RankCard } = require("rankcard");
const { alldl } = require('rahad-all-downloader');






async function downloadVideo(url) {
  try {
    const result = await alldl(url);
    return result
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function goodBayPro(usuarioVip,celularVip,mienbrosVip,nombredelgrupoVip,linkavatarVip,linkbackgroundVip) {
  var canvas = new Canvas.Goodbye()
    .setUsername(usuarioVip)
    .setDiscriminator(celularVip)
    .setMemberCount(mienbrosVip)
    .setGuildName(nombredelgrupoVip)
    .setAvatar(linkavatarVip)
    .setColor('border', '#4169E1')
    .setColor('username-box', '#4169E1')
    .setColor('discriminator-box', '#4169E1')
    .setColor('message-box', '#4169E1')
    .setColor('title', '#4169E1')
    .setColor('avatar', '#4169E1')
    .setBackground(linkbackgroundVip);

  var image = await canvas.toAttachment();
  var buffer = image.toBuffer();
  return buffer
}

async function welcomePro(usuarioVip,celularVip,mienbrosVip,nombredelgrupoVip,linkavatarVip,linkbackgroundVip) {
  var canvas = new Canvas.Welcome()
    .setUsername(usuarioVip)
    .setDiscriminator(celularVip)
    .setMemberCount(mienbrosVip)
    .setGuildName(nombredelgrupoVip)
    .setAvatar(linkavatarVip)
    .setColor('border', '#4169E1')
    .setColor('username-box', '#4169E1')
    .setColor('discriminator-box', '#4169E1')
    .setColor('message-box', '#4169E1')
    .setColor('title', '#4169E1')
    .setColor('avatar', '#4169E1')
    .setBackground(linkbackgroundVip);

  var image = await canvas.toAttachment();


  var buffer = image.toBuffer();
  return buffer
}

async function rankingPersonal(nombre,level,imagen,porcentaje,posiciontabla,levelactual,leveltotal) {
  const rankcard = RankCard({
      name: nombre,
      level: level,
      color: "auto",
      brightness: "50", // 0 to 100
      avatar: imagen,
      progress: porcentaje,
      rank: posiciontabla,
      requiredXp: levelactual,
      currentXp: leveltotal,
      showXp: true,
      shape: 'square' // circle
})
return  rankcard
 }





app.get('/', async (req, res, next) => {
res.json("Bienvenido")
    })
    

app.get('/canvas/welcomePro', async (req, res, next) => {
    var usuarioVip = req.query.usuario;
    var celularVip = req.query.celular
    var mienbrosVip = req.query.mienbros;
    var nombredelgrupoVip = req.query.nombredelgrupo;
    var linkavatarVip = req.query.linkavatar;
    var linkbackgroundVip = req.query.linkbackground
    try{
    data = await welcomePro(usuarioVip,celularVip,mienbrosVip,nombredelgrupoVip,linkavatarVip,linkbackgroundVip);
res.json({url : data })
    } catch {
    res.json("error")  
    }
    })
    
app.get('/canvas/goodBayPro', async (req, res, next) => {
    var usuarioVip = req.query.usuario;
    var celularVip = req.query.celular
    var mienbrosVip = req.query.mienbros;
    var nombredelgrupoVip = req.query.nombredelgrupo;
    var linkavatarVip = req.query.linkavatar;
    var linkbackgroundVip = req.query.linkbackground
    try{
    data = await goodBayPro(usuarioVip,celularVip,mienbrosVip,nombredelgrupoVip,linkavatarVip,linkbackgroundVip);
res.json({url : data })
    } catch {
    res.json("error")  
    }
    })    

    app.get('/canvas/ranking', async (req, res, next) => {
      var usuario = req.query.usuario;
      var level = req.query.level
      var imagen = req.query.imagen;
      var porcentaje = req.query.porcentaje;
      var posiciontabla = req.query.posiciontabla;
      var levelactual = req.query.levelactual;
      var leveltotal = req.query.leveltotal;
      try{
      data = await rankingPersonal(usuario,level,imagen,porcentaje,posiciontabla,levelactual,leveltotal)
  res.json({url : data })
      } catch {
      res.json("error")  
      }
      })    
      app.get('/download/descargador', async (req, res, next) => {
        var linkDescargador = req.query.link
        try{
        data = await downloadVideo(linkDescargador);
    res.json({url : data.data.videoUrl })
        } catch {
        res.json("error")  
        }
        }) 





  app.listen(4102, ()=> {
    console.log("Api rest Funciona en el puerto 4102")
  })