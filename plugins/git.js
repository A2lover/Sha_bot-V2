const Maalutty = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Maalutty.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/LDJa8Hm.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `💚Sha_bot-V2💜


*owner number sha* :https://wa.me/919526128516.
            

*github* : https://github.com/A2lover/Sha_bot-V2.

■□■□■□■□■□■□■□■□■□■□
💚Sha_bot-V2💜
▣▣ ~A2lover~🍭~ ▣▣

`}) 

}));
