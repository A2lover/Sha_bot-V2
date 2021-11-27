const Maalutty = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Maalutty.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/LDJa8Hm.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `💚Sha_bot-V2💜


Sha_bot-V2 created by A2lover.
            *SHA*


🍭 *𝙈𝙚𝙙𝙞𝙖 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* 🍭

🧚‍♂️ -song <text>
🍭 Downloads song for you.
🎶.song  baby love

🧚‍♂️ -video <yt link>
🍭 Downloads video from YouTube link.

🧚‍♂️  -insta <link>
🍭   Downloads content from instagram.

🧚‍♂️  -yt<text>
🍭   Gives you YT links.

🧚‍♂️  -show <show name>
🍭   Get info related to tv series and shows.

🧚‍♂️ -gif 
🍭 Converts video to gif.

🧚‍♂️ -tomp3 
🍭 Converts video into audio.

🧚‍♂️ -say <text>
🍭 Converts text into voice.

🧚‍♂️ -img <text>
🍭 It sends image from google.

🧚‍♂️ -trt <language code>
🍭 Translate the text you tag.

🧚‍♂️ -wiki <text>
🍭 It sends Wikipedia result.

🧚‍♂️ -lyric <text>
🍭 Finds the lyrics of the song.

🧚‍♂️ -covid <country code>
🍭 Send the covid stats of your country.

🧚‍♂️ -weather <city>
🍭 Tells you about the weather of your place.

🧚‍♂️ -removebg 
🍭 Removes the background of tge image.

🧚‍♂️ -ocr
🍭 Finds the text written on the image.

🧚‍♂️ -wallpaper
🍭 It sends you random wallpaper.

💚Sha_bot-V2💜
💚 *𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* 💜

🧚‍♂️ -joke 
🍭 It sends a random joke.
 
🧚‍♂️ -meme <text>
🍭 Cations the image into a meme.

🧚‍♂️ -quote 
🍭 It sends a random quote.

🧚‍♂️ -ss <website link>
🍭 It sends the screenshot of the website.

🧚‍♂️ -changesay <text>
🍭 Converts text into changesay meme image.

🧚‍♂️ -trumpsay
🍭 Convert text into Trump's tweet.

🧚‍♂️ -compliment 
🍭 Gives you a compliment.

🧚‍♂️  -bitly <link>
🍭   Shorten your link.

🧚‍♂️  -dict 
🍭   Dictionary [-dict en;anime]

🧚‍♂️  -zodiac <leo> 
🍭   Tells you about your horoscope.

🧚‍♂️  -qr <text>
🍭   Converts text into qr code.

🧚‍♂️  -movie 
🍭  Gives you info about movie.
🎶movie master

🧚‍♂️  -anime <text>
🍭  Gives you info about anime.
🎶anime Maalutty
💚Sha_bot-V2💜
💚 *𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* 💜

🧚‍♂️ -sticker 
🍭 Converts img/gif into a sticker.

🧚‍♂️ -photo 
🍭 Converts sticker into image.

🧚‍♂️ -attp <text>
🍭 Converts text into glowing sticker.
🎶ex  attp maalutty
■□■□■□■□■□■□■□■□■□■□
💚Sha_bot-V2💜
▣▣ ~A2lover~🍭~ ▣▣

`}) 

}));
