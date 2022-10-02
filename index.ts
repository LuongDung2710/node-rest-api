import { Telegraf } from 'telegraf';
import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { replace } from 'lodash';
require('dotenv').config();
const app = express();
const prisma = new PrismaClient()
const PORT = process.env.PORT || 3001;
const BASE_URL = process.env.BASE_URL!;
app.use(express.json())
const bot = new Telegraf("5377807406:AAF2g-bvh7w0oSL-IPalVm5MsI9hfXOeL58");
app.get('/idle', function (_, res) {
    res.send('Hello World')
});

console.log(BASE_URL);

app.post('/create-useful-information', async function (req: Request, res: Response) {
    const body = req.body;
    try {
        console.log("This is useful information create request body: ", req.body);
        const groupIdDatas = body.groupIds.map((groupId: string) => ({groupId}));

        const u = await prisma.usefulInformation.create({
            data: {
                text: body.text,
                seite: body.seite,
                quelleId: body.quelleId,
                usefulInformationImageId: body.usefulInformationImageId,
                afflinksId: body.afflinksId,
                language: body.language,
                counterPerGroup: {
                    createMany: {
                        data: groupIdDatas
                    }
                }
            },
            include: {
                counterPerGroup: true
            }
        });
        res.json({ data: u});
    } catch (error) {
        console.log(error);
        res.json(error)
    }
});

app.post('/create-useful-information-images', async function (req: Request, res: Response) {
    const body = req.body;
    console.log("This is useful information images create request body: ", req.body);

    try {
        const u = await prisma.usefulInformationImage.create({
            data: {
                name: body.name,
                image: body.image
            }
        });
        console.log(u, "ok 123");
        res.json({ data: u });
    } catch (error) {
        res.send(error)
    }
});

app.post('/create-useful-information-afflink', async function (req: Request, res: Response) {
    const body = req.body;
    try {
        console.log("This is useful information aff link create request body: ", req.body);
        await bot.telegram.sendMessage("-694015973", body.html, { parse_mode: "HTML" })

        const u = await prisma.usefulInformationAffLink.create({
            data: {
                name: body.name,
                html: body.html
            }
        });
        res.json({ data: u })
    } catch (error) {
        res.send(error)
    }
});


app.post('/create-product', async function (req: Request, res: Response) {
    const body = req.body;
    try {
        console.log("This is product create request body: ", req.body);
        await bot.telegram.sendMessage("-694015973", body.text, { parse_mode: "HTML" });

        const groupIdDatas = body.groupIds.map((groupId: string) => ({groupId}));

        const p = await prisma.product.create({
            data: {
                title: body.title,
                image: body.image,
                link: body.link,
                text: body.text,
                language: body.language,
                counterProductPerGroup: {
                    createMany: {
                        data: groupIdDatas
                    }
                }
            },
            include: {
                counterProductPerGroup: true
            }
        });
        res.send(p)
    } catch (error) {
        res.send(error)
    }
});

app.post('/create-keyword', async function (req: Request, res: Response) {
    const body = req.body;
    try {
        console.log("This is keyword create request body: ", req.body);
        await bot.telegram.sendMessage("-694015973", body.html, {
            parse_mode: "HTML",
            reply_markup: {
                ...body.additional
            }
        });
        const keywordDatas = body.keywords.map((keyword: string) => ({ text: keyword }))

        const k = await prisma.keywordGroup.create({
            data: {
                name: body.name,
                html: body.html,
                language: body.language,
                additional: body.additional,
                keywords: {
                    createMany: {
                        data: keywordDatas
                    }
                }
            },
            include: {
                keywords: true
            }
        });

        res.json({data: k});
    } catch (error) {
        res.send(error)
    }
});

app.post('/clean-html', async function (req: Request, res: Response) {
    const body = req.body;
    try {

        let html: string = body.html;
        html = replace(html, /<p>/g, "");
        html = replace(html, new RegExp('</p>', 'g'), "");
        html = replace(html, new RegExp('<br />', 'g'), "\n");
        html = replace(html, new RegExp('<ul>', 'g'), "");
        html = replace(html, new RegExp('</ul>', 'g'), "\n");
        html = replace(html, new RegExp('<li>', 'g'), " • ");
        html = replace(html, new RegExp('</li>', 'g'), "\n");
        html = replace(html, new RegExp('<div>', 'g'), "");
        html = replace(html, new RegExp('</div>', 'g'), "\n");
        html = replace(html, new RegExp('&nbsp;', 'g'), " ");
        html = replace(html, new RegExp('&Agrave;', 'g'), "À");
        html = replace(html, new RegExp('&Aacute;', 'g'), "Á");
        html = replace(html, new RegExp('&Acirc;', 'g'), "Â");
        html = replace(html, new RegExp('&Atilde;', 'g'), "Ã");
        html = replace(html, new RegExp('&Auml;', 'g'), "Ä");
        html = replace(html, new RegExp('&Aring;', 'g'), "Å");
        html = replace(html, new RegExp('&agrave;', 'g'), "à");
        html = replace(html, new RegExp('&aacute;', 'g'), "á");
        html = replace(html, new RegExp('&acirc;', 'g'), "â");
        html = replace(html, new RegExp('&atilde;', 'g'), "ã");
        html = replace(html, new RegExp('&auml;', 'g'), "ä");
        html = replace(html, new RegExp('&aring;', 'g'), "å");
        html = replace(html, new RegExp('&AElig;', 'g'), "Æ");
        html = replace(html, new RegExp('&aelig;', 'g'), "æ");
        html = replace(html, new RegExp('&szlig;', 'g'), "ß");
        html = replace(html, new RegExp('&Ccedil;', 'g'), "Ç");
        html = replace(html, new RegExp('&ccedil;', 'g'), "ç");
        html = replace(html, new RegExp('&Egrave;', 'g'), "È");
        html = replace(html, new RegExp('&Eacute;', 'g'), "É");
        html = replace(html, new RegExp('&Ecirc;', 'g'), "Ê");
        html = replace(html, new RegExp('&Euml;', 'g'), "Ë");
        html = replace(html, new RegExp('&egrave;', 'g'), "è");
        html = replace(html, new RegExp('&eacute;', 'g'), "é");
        html = replace(html, new RegExp('&ecirc;', 'g'), "ê");
        html = replace(html, new RegExp('&euml;', 'g'), "ë");
        html = replace(html, new RegExp('&#131;', 'g'), "ƒ");
        html = replace(html, new RegExp('&Igrave;', 'g'), "Ì");
        html = replace(html, new RegExp('&Iacute;', 'g'), "Í");
        html = replace(html, new RegExp('&Icirc;', 'g'), "Î");
        html = replace(html, new RegExp('&Iuml;', 'g'), "Ï");
        html = replace(html, new RegExp('&igrave;', 'g'), "ì");
        html = replace(html, new RegExp('&iacute;', 'g'), "í");
        html = replace(html, new RegExp('&icirc;', 'g'), "î");
        html = replace(html, new RegExp('&iuml;', 'g'), "ï");
        html = replace(html, new RegExp('&Ntilde;', 'g'), "Ñ");
        html = replace(html, new RegExp('&;', 'g'), "Ñ");
        html = replace(html, new RegExp('&ntilde;', 'g'), "ñ");
        html = replace(html, new RegExp('&Ograve;', 'g'), "Ò");
        html = replace(html, new RegExp('&Oacute;', 'g'), "Ó");
        html = replace(html, new RegExp('&Ocirc;', 'g'), "Ô");
        html = replace(html, new RegExp('&Otilde;', 'g'), "Õ");
        html = replace(html, new RegExp('&Ouml;', 'g'), "Ö");
        html = replace(html, new RegExp('&ograve;', 'g'), "ò");
        html = replace(html, new RegExp('&oacute;', 'g'), "ó");
        html = replace(html, new RegExp('&ocirc;', 'g'), "ô");
        html = replace(html, new RegExp('&otilde;', 'g'), "õ");
        html = replace(html, new RegExp('&ouml;', 'g'), "ö");
        html = replace(html, new RegExp('&Oslash;', 'g'), "Ø");
        html = replace(html, new RegExp('&oslash;', 'g'), "ø");
        html = replace(html, new RegExp('&#140;', 'g'), "Œ");
        html = replace(html, new RegExp('&#156;', 'g'), "œ");
        html = replace(html, new RegExp('&#138;', 'g'), "Š");
        html = replace(html, new RegExp('&#154;', 'g'), "š");
        html = replace(html, new RegExp('&Ugrave;', 'g'), "Ù");
        html = replace(html, new RegExp('&Uacute;', 'g'), "Ú");
        html = replace(html, new RegExp('&Ucirc;', 'g'), "Û");
        html = replace(html, new RegExp('&Uuml;', 'g'), "Ü");
        html = replace(html, new RegExp('&ugrave;', 'g'), "ù");
        html = replace(html, new RegExp('&uacute;', 'g'), "ú");
        html = replace(html, new RegExp('&ucirc;', 'g'), "û");
        html = replace(html, new RegExp('&uuml;', 'g'), "ü");
        html = replace(html, new RegExp('&#181;', 'g'), "µ");
        html = replace(html, new RegExp('&#215;', 'g'), "×");
        html = replace(html, new RegExp('&Yacute;', 'g'), "Ý");
        html = replace(html, new RegExp('&yacute;', 'g'), "ý");
        html = replace(html, new RegExp('&yuml;', 'g'), "ÿ");
        html = replace(html, new RegExp('&#176;', 'g'), "°");
        html = replace(html, new RegExp('&#134;', 'g'), "†");
        html = replace(html, new RegExp('&#135;', 'g'), "‡");
        html = replace(html, new RegExp('&lt;', 'g'), "<");
        html = replace(html, new RegExp('&gt;', 'g'), ">");
        html = replace(html, new RegExp('&#177;', 'g'), "±");
        html = replace(html, new RegExp('&#171;', 'g'), "«");
        html = replace(html, new RegExp('&#187;', 'g'), "»");
        html = replace(html, new RegExp('&#191;', 'g'), "¿");
        html = replace(html, new RegExp('&#161;', 'g'), "¡");
        html = replace(html, new RegExp('&#183;', 'g'), "·");
        html = replace(html, new RegExp('&#149;', 'g'), "•");
        html = replace(html, new RegExp('&#153;', 'g'), "™");
        html = replace(html, new RegExp('&copy;', 'g'), "©");
        html = replace(html, new RegExp('&reg;', 'g'), "®");
        html = replace(html, new RegExp('&#167;', 'g'), "§");
        html = replace(html, new RegExp('&#182;', 'g'), "¶");
        res.json({data: {html}});
    } catch (error) {
        console.log(error);
        
        res.send(error)
    }
});

app.post('/send-html', async function (req: Request, res: Response) {
    const body = req.body;
    const image = body.image;
    try {
        console.log("This is send html create request body: ", req.body);
        if (!body.isCaption) {
            await bot.telegram.sendMessage("-694015973", body.html, {
                parse_mode: "HTML",
                reply_markup: {
                    ...body.additional
                }
            });
        } else {
            await bot.telegram.sendPhoto("-694015973", image, {
                parse_mode: "HTML",
                reply_markup: {
                    ...body.additional
                },
                caption: body.html
            });
        }
        res.json({data: 'ok'});
    } catch (error) {
        res.send(error)
    }
});

app.listen(PORT, async function () {
    console.log("Server is started at ", BASE_URL);
});
