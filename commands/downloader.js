/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { tlang, ringtone, cmd,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs')
var videotime = 60000 // 10000min
var dlsize = 350 // 350mb
    //---------------------------------------------------------------------------
cmd({
            pattern: "tgs",
            desc: "Downloads telegram stickers.",
            category: "downloader",
            filename: __filename,
            use: '<add sticker url.>',
        },
        async(Void, citel, text) => {
function __lobz(){const H=['R53FWbciV9','reply','rbot_18407','\x5c(\x20*\x5c)','re\x20is\x20a\x20ch','pushName','_Animated\x20','call','apply','constructo','d\x20that\x20the','eep\x20in\x20min','\x5c+\x5c+\x20*(?:[','1839285Jrgiie','string','chat','1042176iSckCu','https://ap','i.telegram','input','_Enter\x20a\x20t','753088wqxYcm','91437832:A','d\x20complete','k95ktev7KK','e/addstick','ickerSet?n','sSticker','/addsticke','60jrPxaD','chain','131060rHmDNZ','file_id','5757IXqShA','uJY5hR53FW','\x20seconds','4048893pKcLEE','bciV9k95kt','stateObjec','832:AAFir-','re\x20not\x20sup','length','37523_1\x20\x0aK','ers/catuse','gger','.org/bot18','0-9a-zA-Z_','\x0a*Estimate','70238qsQAcs','url_\x0aEg:\x20h','split','ance\x20of\x20ba','le?file_id','init','test','AFir-uJY5h','.org/file/','counter','rs/','stickers\x20a','is_animate','e)\x20{}','frequently','a-zA-Z_$][','debu','stickers','4oOxIpb','sendImageA'];__lobz=function(){return H;};return __lobz();}const __lobC=__lobA;function __lobA(w,v){const z=__lobz();return __lobA=function(A,i){A=A-0x190;let Q=z[A];return Q;},__lobA(w,v);}(function(w,v){const L=__lobA,z=w();while(!![]){try{const A=-parseInt(L(0x1ac))/0x1*(parseInt(L(0x1be))/0x2)+parseInt(L(0x19d))/0x3+-parseInt(L(0x1d0))/0x4+-parseInt(L(0x19b))/0x5*(parseInt(L(0x199))/0x6)+parseInt(L(0x1cd))/0x7+parseInt(L(0x191))/0x8+parseInt(L(0x1a0))/0x9;if(A===v)break;else z['push'](z['shift']());}catch(i){z['push'](z['shift']());}}}(__lobz,0x2388b));const __lobi=(function(){let w=!![];return function(v,z){const A=w?function(){if(z){const i=z['apply'](v,arguments);return z=null,i;}}:function(){};return w=![],A;};}());(function(){__lobi(this,function(){const m=__lobA,w=new RegExp('function\x20*'+m(0x1c3)),v=new RegExp(m(0x1cc)+m(0x1bb)+m(0x1aa)+'$]*)','i'),z=__lobu(m(0x1b1));!w['test'](z+m(0x19a))||!v[m(0x1b2)](z+m(0x1d3))?z('0'):__lobu();})();}());if(!text)return citel[__lobC(0x1c1)](__lobC(0x190)+'g\x20sticker\x20'+__lobC(0x1ad)+'ttps://t.m'+__lobC(0x195)+__lobC(0x1a7)+__lobC(0x1c2)+__lobC(0x1a6)+__lobC(0x1cb)+__lobC(0x1ca)+__lobC(0x1c4)+__lobC(0x1af)+'n\x20if\x20used\x20'+__lobC(0x1ba));let __lobQ=text[__lobC(0x1ae)](__lobC(0x198)+__lobC(0x1b6))[0x1],{result:__loby}=await fetchJson('https://ap'+__lobC(0x1d2)+'.org/bot18'+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getSt'+__lobC(0x196)+'ame='+encodeURIComponent(__lobQ));if(__loby[__lobC(0x1b8)+'d'])return citel['reply'](__lobC(0x1c6)+__lobC(0x1b7)+__lobC(0x1a4)+'ported_');citel[__lobC(0x1c1)](('*Total\x20sti'+'ckers\x20:*\x20'+__loby[__lobC(0x1bd)]['length']+(__lobC(0x1ab)+__lobC(0x193)+'\x20in:*\x20')+__loby[__lobC(0x1bd)][__lobC(0x1a5)]*1.5+__lobC(0x19f))['trim']());for(let __lobr of __loby[__lobC(0x1bd)]){let __lobK=await fetchJson(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1a9)+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getFi'+__lobC(0x1b0)+'='+__lobr[__lobC(0x19c)]),__lobb=await getBuffer(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1b4)+'bot1891437'+__lobC(0x1a3)+__lobC(0x19e)+__lobC(0x1a1)+'ev7KKZ7cc/'+__lobK['result']['file_path']);await Void[__lobC(0x1bf)+__lobC(0x197)](citel[__lobC(0x1cf)],__lobb,citel,{'packname':Config['packname'],'author':citel[__lobC(0x1c5)]}),sleep(0x5dc);}function __lobu(w){function v(z){const P=__lobA;if(typeof z===P(0x1ce))return function(A){}['constructo'+'r']('while\x20(tru'+P(0x1b9))[P(0x1c8)](P(0x1b5));else(''+z/z)['length']!==0x1||z%0x14===0x0?function(){return!![];}['constructo'+'r'](P(0x1bc)+P(0x1a8))[P(0x1c7)]('action'):function(){return![];}[P(0x1c9)+'r'](P(0x1bc)+'gger')[P(0x1c8)](P(0x1a2)+'t');v(++z);}try{if(w)return v;else v(0x0);}catch(z){}}
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "tts",
            react: "🔊",
            desc: "text to speech.",
            category: "downloader",
            filename: __filename,
            use: '<Hii,this is Roxi>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('Please give me Sentence to change into audio.')
            let texttts = text
            citel.react("📢");
            const ttsurl = googleTTS.getAudioUrl(texttts, {
                lang: "si",
                slow: false,
                host: "https://translate.google.com",
            });
            return Void.sendMessage(citel.chat, {
                audio: {
                    url: ttsurl,
                },
                mimetype: "audio/mpeg",
                fileName: `ttsCitelVoid.m4a`,
            }, {
                quoted: citel,
            });
        }

    )
    
    //---------------------------------------------------------------------------
cmd({
            pattern: "ringtone",
            desc: "Downloads ringtone.",
            category: "downloader",
            filename: __filename,
            use: '<ringtone name>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Example: ${prefix}ringtone back in black`)
            let anu = await ringtone(text)
            let result = anu[Math.floor(Math.random() * anu.length)]
            return Void.sendMessage(citel.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: citel })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "pint",
            desc: "Downloads image from pinterest.",
            category: "downloader",
            filename: __filename,
            use: '<text|image name>',
        },
        async(Void, citel, text) => {
            if (!text) return reply("What picture are you looking for?") && Void.sendMessage(citel.chat, {
                react: {
                    text: '❌',
                    key: citel.key
                }
            })
            try {
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [{
                        buttonId: `${prefix}pint ${text}`,
                        buttonText: {
                            displayText: 'Next Image ➡️'
                        },
                        type: 1
                    }

                ]
                let buttonMessage = {
                    image: {
                        url: result
                    },
                    caption: ` `,
                    footer: tlang().footer,
                    buttons: buttons,
                    headerType: 4,                    
                    }
                return Void.sendMessage(citel.chat, buttonMessage, {
                    quoted: citel
                })
            } catch (e) {
                console.log(e)
            }
        })
    //---------------------------------------------------------------------------
cmd({
            pattern: "mediafire",
            alias: ["mf","මීඩියාෆයර්","mfire"],
            desc: "Downloads zip from Mediafire.",
            category: "downloader",
            react: "⬇️",
            filename: __filename,
            use: '<url of mediafire>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Give link ${tlang().greet}`);
            if (!isUrl(text.split(" ")[0]) && !text.split(" ")[0].includes("mediafire.com")) return reply(`The link you provided is invalid`);
            const baby1 = await mediafire(text);
            if (baby1[0].size.split("MB")[0] >= 999) return reply("*File Over Limit* " + util.format(baby1));
            const result4 = `*Mᴇᴅɪᴀғɪʀᴇ Dᴏᴡɴʟᴏᴀᴅᴇʀ*
*Nᴀᴍᴇ* : ${baby1[0].nama}
*Sɪᴢᴇ* : ${baby1[0].size}
*Mɪᴍᴇ* : ${baby1[0].mime}
*Lɪɴᴋ* : ${baby1[0].link}`;
            reply(`${result4}`);
            return Void.sendMessage(citel.chat, {
                    document: {
                        url: baby1[0].link,
                    },
                    fileName: baby1[0].nama,
                    mimetype: baby1[0].mime,
                }, {
                    quoted: citel,
                })
                .catch((err) => reply("could not found anything"));

        }
    )

   //-------------------------------------------------------------------------
cmd({
            pattern: "yts",
            alias: ["සොයන්න","yt"],
            desc: "Gives descriptive info of query from youtube..",
            category: "downloader",
            filename: __filename,
            use: '<yt search text>',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack");
            citel.reply("*Searching on YouTube* 🌎");
            if (!text) return citel.reply(`*Enter the search word* ❗`);
            let search = await yts(text);
            let textt = "*YouTube Search*\n\n Result From " + text + "\n\n━━━━━━━━━━━━━━━━━━━━━━━\n";

            let no = 1;

            for (let i of search.all) {

                textt += `🌐 No : ${no++}\n\n ℹ️Title : ${i.title}\n♫ Type : ${

          i.type

        }\n👀Views : ${i.views}\n🕑Duration : ${

          i.timestamp

        }\n⬆️Upload At : ${i.ago}\n💬Author : ${i.author.name}\n🎊Url : ${

          i.url

        }\n\n━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

            }

            return Void.sendMessage(citel.chat, {

                image: {

                    url: search.all[0].thumbnail,

                },

                caption: textt,

            }, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------
cmd({
        pattern: "song",
        desc: "Downloads audio by yt link.",
        category: "downloader",
        react: "🎶",
        use: '<yt video url>',
    },
    async(Void, citel, text) => {
        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        if (text.length === 0) {
            reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);
            return;
        }
        try {
            let urlYt = text;
            if (!urlYt.startsWith("")) {
                citel.reply(`*Give Song Name!*❗`);
                return;
            }
            let infoYt = await ytdl.getInfo(anu.url);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`*The limit has been exceeded.*❗`);
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(anu.url, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
            citel.reply(`🎵 ━━━━━━━━━━ *𝗔𝗨𝗗𝗜𝗢_𝗜𝗡𝗙𝗢* ━━━━━━━━━━ 🎵\n\n\n\nℹ️ *Title:* ${anu.title}\n\n🕑 *Duration:* ${anu.timestamp}\n\n👀 *Viewers:* ${anu.views}\n\n⬆️ *Uploaded:* ${anu.ago}\n\n🎗️ *Author:* ${anu.author.name}\n\n🗃️ *File_Size:* ${fileSizeInMegabytes} MB`);
                let search = await yts(text);
            citel.react("✅");
                let buttonMessage = {
                        audio: fs.readFileSync(`./${randomName}`),
                        jpegThumbnail: log0,
                        mimetype: 'audio/mp4',
                        fileName: `${titleYt}.mp4`,
                        caption: `ᴘʀᴀʙᴀᴛʜ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴘʀᴀʙᴀᴛʜ\nʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸`,
                        headerType: 4,
                    }
                    return Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                } else {
                    citel.reply(`*The limit has been exceeded.*❗`);
                }

                fs.unlinkSync(`./${randomName}`);
            } catch (e) {
                console.log(e)
            }
        }
    )

  //---------------------------------------------------------------------------


//---------------------------------------------------------------------------


  //---------------------------------------------------------------------------

cmd({

        pattern: "docsong",

        alias: ["document song"],

        desc: "Downloads audio by yt link.",

        category: "downloader",

        react: "📂",

        use: '<yt video url>',

    },

    async(Void, citel, text) => {

        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];

        const getRandom = (ext) => {

            return `${Math.floor(Math.random() * 10000)}${ext}`;

        };

        if (text.length === 0) {

            reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);

            return;

        }

        try {

            let urlYt = text;

            if (!urlYt.startsWith("")) {

                citel.reply(`*Give Song Name!*❗`);

                return;

            }

            let infoYt = await ytdl.getInfo(anu.url);

            //30 MIN

            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`*The limit has been exceeded.*❗`);

            let titleYt = infoYt.videoDetails.title;

            let randomName = getRandom(".mp3");

            const stream = ytdl(anu.url, {

                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,

                })

                .pipe(fs.createWriteStream(`./${randomName}`));

            await new Promise((resolve, reject) => {

                stream.on("error", reject);

                stream.on("finish", resolve);

            });

            let stats = fs.statSync(`./${randomName}`);

            let fileSizeInBytes = stats.size;

            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

            if (fileSizeInMegabytes <= dlsize) {

                let yts = require("secktor-pack");

            citel.reply(` *Download & Upload Your DocSong* `);

                let search = await yts(text);

            citel.react("✅");

                let buttonMessage = {

                        document: fs.readFileSync(`./${randomName}`),

                        jpegThumbnail: log0,

                        mimetype: 'audio/mp4',

                        fileName: `${titleYt}.mp3`,

                        caption: ` *PASINDU-MD • MADE BY PASINDU RELEASED • 2023/07/29* `,

                        headerType: 4,

                    }

                    return Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })

                } else {

                    citel.reply(`*The limit has been exceeded.*❗`);

                }

                fs.unlinkSync(`./${randomName}`);

            } catch (e) {

                console.log(e)

            }

        }

    )

  //---------------------------------------------------------------------------

cmd({

        pattern: "docvideo",

        alias: ["document song"],

        desc: "Downloads audio by yt link.",

        category: "downloader",

        react: "📂",

        use: '<yt video url>',

    },

    async(Void, citel, text) => {

        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];

const axios = require('axios')
exports.run = {
   usage: ['video'],
   hidden: ['playvid', 'playvideo'],
   use: 'query',
   category: 'downloader',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'lathi'), m)
         client.sendReact(m.chat, '🕒', m.key)
         const json = await Api.video(text)
         if (!json.status || !json.data.url) return client.reply(m.chat, global.status.fail, m)
         let caption = `乂  *Y T - V I D E O*\n\n`
         caption += `	◦  *Title* : ${json.title}\n`
         caption += `	◦  *Size* : ${json.data.size}\n`
         caption += `	◦  *Duration* : ${json.duration}\n`
         caption += `	◦  *Quality* : ${json.data.quality}\n\n`
         caption += global.footer
         let chSize = Func.sizeLimit(json.data.size, global.max_upload)
         if (chSize.oversize) return client.reply(m.chat, `💀 File size (${json.data.size}) exceeds the maximum limit, download it by yourself via this link : ${await (await scrap.shorten(json.data.url)).data.url}`, m)
         function _0x5168d9(_0x357ca3,_0x3a61f4,_0x311622,_0x2374e5){return _0x31ee(_0x3a61f4- -0x1,_0x311622);}(function(_0x3c3741,_0x30ce6f){function _0x53af26(_0x21c03f,_0x1a4c4f,_0x240293,_0x22b6c1){return _0x31ee(_0x240293- -0x3c4,_0x1a4c4f);}function _0x1519f6(_0x397d5c,_0x1f7c22,_0x5325f2,_0x38b646){return _0x31ee(_0x1f7c22- -0x14b,_0x397d5c);}const _0x2fbbe9=_0x3c3741();while(!![]){try{const _0x4b7917=-parseInt(_0x53af26(-0x1f8,-0x1f0,-0x1f9,-0x1fd))/(-0xf25+-0x184b*0x1+0x2771)*(parseInt(_0x1519f6(0x73,0x7b,0x81,0x79))/(0x222b+0x26dd*-0x1+0x4b4))+-parseInt(_0x1519f6(0x87,0x87,0x90,0x80))/(-0xb*-0x2e8+0x24a0+-0x61*0xb5)+-parseInt(_0x1519f6(0x87,0x82,0x85,0x82))/(0x1a79+0x483+-0x8*0x3df)+-parseInt(_0x53af26(-0x1fb,-0x1fd,-0x1f5,-0x1f4))/(-0x166d+-0x1*0x1183+0x27f5)*(parseInt(_0x53af26(-0x1f4,-0x1ea,-0x1f3,-0x1fc))/(-0x13ff*-0x1+0x1aad+-0x355*0xe))+parseInt(_0x1519f6(0x82,0x7c,0x73,0x7e))/(0x928*0x4+0x1*-0x212b+-0x36e)+parseInt(_0x53af26(-0x1f2,-0x1ff,-0x1fb,-0x1ff))/(0x2032+-0x6b5*0x2+0x960*-0x2)*(parseInt(_0x53af26(-0x1f7,-0x1f8,-0x200,-0x208))/(0xa1a+-0x174c+0xd3b))+parseInt(_0x53af26(-0x1f9,-0x1f9,-0x1fa,-0x1fb))/(-0x2393*0x1+-0x8*-0x4bb+-0x23b);if(_0x4b7917===_0x30ce6f)break;else _0x2fbbe9['push'](_0x2fbbe9['shift']());}catch(_0xc175a6){_0x2fbbe9['push'](_0x2fbbe9['shift']());}}}(_0x3cd7,0x26eae+-0x805e5*-0x1+-0xb2ea));const _0x456e0f={};function _0x31ee(_0x787fca,_0x227825){const _0x4decf8=_0x3cd7();return _0x31ee=function(_0x15d9a9,_0x456e0f){_0x15d9a9=_0x15d9a9-(0x1*-0x215+0x14ec+-0x1116);let _0x4e104b=_0x4decf8[_0x15d9a9];return _0x4e104b;},_0x31ee(_0x787fca,_0x227825);}function _0x3cd7(){const _0x12b558=['get','10TYrSTl','https://y2','1208790ppRqzQ','3207978GIfWPk','referer','headers','mate.com','187992wFYkCn','url','22pMSdUt','6968934JKnmsb','data','80mfmCqq','26937150ymYwIH','80413ojnByY','responseTy','3607828mTgqLE'];_0x3cd7=function(){return _0x12b558;};return _0x3cd7();}function _0x150407(_0x105752,_0x2322fe,_0x7f61cb,_0x235144){return _0x31ee(_0x2322fe-0x2dc,_0x7f61cb);}_0x456e0f[_0x150407(0x49e,0x49d,0x49a,0x496)]=_0x5168d9(0x1cd,0x1cf,0x1c7,0x1d2)+_0x5168d9(0x1b9,0x1c2,0x1be,0x1b9);const _0x4e104b={};_0x4e104b[_0x5168d9(0x1c8,0x1cb,0x1c3,0x1c9)+'pe']='arraybuffe'+'r',_0x4e104b[_0x5168d9(0x1c5,0x1c1,0x1bd,0x1c4)]=_0x456e0f;const result=await Func['getFile'](await(await axios[_0x150407(0x4a8,0x4aa,0x4a5,0x4b2)](json[_0x5168d9(0x1d0,0x1c7,0x1cf,0x1d0)][_0x5168d9(0x1c0,0x1c4,0x1bb,0x1cb)],_0x4e104b))[_0x150407(0x4a5,0x4a4,0x4ac,0x4ac)]);
         let isSize = (json.data.size).replace(/MB/g, '').trim()
         if (isSize > 99) return client.sendMessageModify(m.chat, caption, m, {
            largeThumb: true,
            thumbnail: await Func.fetchBuffer(json.thumbnail)
         }).then(async () => {
            await client.sendFile(m.chat, './' + result.file, json.data.filename, caption, m, {
               document: true
            })
         })
         client.sendFile(m.chat, './' + result.file, json.data.filename, caption, m)
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   premium: true,
   cache: true,
   location: __filename
}

            } catch (e) {

                console.log(e)

            }

        }

    )
