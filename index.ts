import { Telegraf } from 'telegraf';
import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { replace, sample } from 'lodash';
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
        const groupIdDatas = body.groupIds.map((groupId: string) => ({ groupId }));

        const afflink = await prisma.usefulInformationAffLink.findUnique({
            where: { id: body.afflinksId }
        });
        let image;
        if (body.usefulInformationImageId) {
            image = await prisma.usefulInformationImage.findUnique({
                where: { id: body.usefulInformationImageId }
            });
        }

        if (body.text.length > 950) {
            res.json({ data: {error: 'Your text is longer than 950'} });
        }


        if (image && image.image.length !== 0) {
            await bot.telegram.sendPhoto("-694015973", sample(image!.image), { parse_mode: "HTML", caption: body.text });
        } 
        if (afflink) {
            await bot.telegram.sendMessage("-694015973", afflink!.html, { parse_mode: "HTML" })
        }

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

        res.json({ data: u });
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
        if (body.image) {
            await bot.telegram.sendPhoto("-694015973", body.image, { parse_mode: "HTML", caption: body.text });
        } else {
            await bot.telegram.sendMessage("-694015973", body.text, { parse_mode: "HTML", disable_web_page_preview: true });
        }

        if (body.optionText) {
            await bot.telegram.sendMessage("-694015973", body.optionText, { parse_mode: "HTML", disable_web_page_preview: true });
        }

        const groupIdDatas = body.groupIds.map((groupId: string) => ({ groupId }));

        const p = await prisma.product.create({
            data: {
                title: body.title,
                image: body.image,
                link: body.link,
                text: body.text,
                optionText: body.optionText,
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

        res.json({ data: k });
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
        html = replace(html, new RegExp('<br/>', 'g'), "\n");
        html = replace(html, new RegExp('<ul>', 'g'), "");
        html = replace(html, new RegExp('</ul>', 'g'), "\n");
        html = replace(html, new RegExp('<li>', 'g'), " ??? ");
        html = replace(html, new RegExp('</li>', 'g'), "\n");
        html = replace(html, new RegExp('<div>', 'g'), "");
        html = replace(html, new RegExp('</div>', 'g'), "\n");
        html = replace(html, new RegExp('&nbsp;', 'g'), " ");
        html = replace(html, new RegExp('&Agrave;', 'g'), "??");
        html = replace(html, new RegExp('&Aacute;', 'g'), "??");
        html = replace(html, new RegExp('&Acirc;', 'g'), "??");
        html = replace(html, new RegExp('&Atilde;', 'g'), "??");
        html = replace(html, new RegExp('&Auml;', 'g'), "??");
        html = replace(html, new RegExp('&Aring;', 'g'), "??");
        html = replace(html, new RegExp('&agrave;', 'g'), "??");
        html = replace(html, new RegExp('&aacute;', 'g'), "??");
        html = replace(html, new RegExp('&acirc;', 'g'), "??");
        html = replace(html, new RegExp('&atilde;', 'g'), "??");
        html = replace(html, new RegExp('&auml;', 'g'), "??");
        html = replace(html, new RegExp('&aring;', 'g'), "??");
        html = replace(html, new RegExp('&AElig;', 'g'), "??");
        html = replace(html, new RegExp('&aelig;', 'g'), "??");
        html = replace(html, new RegExp('&szlig;', 'g'), "??");
        html = replace(html, new RegExp('&Ccedil;', 'g'), "??");
        html = replace(html, new RegExp('&ccedil;', 'g'), "??");
        html = replace(html, new RegExp('&Egrave;', 'g'), "??");
        html = replace(html, new RegExp('&Eacute;', 'g'), "??");
        html = replace(html, new RegExp('&Ecirc;', 'g'), "??");
        html = replace(html, new RegExp('&Euml;', 'g'), "??");
        html = replace(html, new RegExp('&egrave;', 'g'), "??");
        html = replace(html, new RegExp('&eacute;', 'g'), "??");
        html = replace(html, new RegExp('&ecirc;', 'g'), "??");
        html = replace(html, new RegExp('&euml;', 'g'), "??");
        html = replace(html, new RegExp('&#131;', 'g'), "??");
        html = replace(html, new RegExp('&Igrave;', 'g'), "??");
        html = replace(html, new RegExp('&Iacute;', 'g'), "??");
        html = replace(html, new RegExp('&Icirc;', 'g'), "??");
        html = replace(html, new RegExp('&Iuml;', 'g'), "??");
        html = replace(html, new RegExp('&igrave;', 'g'), "??");
        html = replace(html, new RegExp('&iacute;', 'g'), "??");
        html = replace(html, new RegExp('&icirc;', 'g'), "??");
        html = replace(html, new RegExp('&iuml;', 'g'), "??");
        html = replace(html, new RegExp('&Ntilde;', 'g'), "??");
        html = replace(html, new RegExp('&;', 'g'), "??");
        html = replace(html, new RegExp('&ntilde;', 'g'), "??");
        html = replace(html, new RegExp('&Ograve;', 'g'), "??");
        html = replace(html, new RegExp('&Oacute;', 'g'), "??");
        html = replace(html, new RegExp('&Ocirc;', 'g'), "??");
        html = replace(html, new RegExp('&Otilde;', 'g'), "??");
        html = replace(html, new RegExp('&Ouml;', 'g'), "??");
        html = replace(html, new RegExp('&ograve;', 'g'), "??");
        html = replace(html, new RegExp('&oacute;', 'g'), "??");
        html = replace(html, new RegExp('&ocirc;', 'g'), "??");
        html = replace(html, new RegExp('&otilde;', 'g'), "??");
        html = replace(html, new RegExp('&ouml;', 'g'), "??");
        html = replace(html, new RegExp('&Oslash;', 'g'), "??");
        html = replace(html, new RegExp('&oslash;', 'g'), "??");
        html = replace(html, new RegExp('&#140;', 'g'), "??");
        html = replace(html, new RegExp('&#156;', 'g'), "??");
        html = replace(html, new RegExp('&#138;', 'g'), "??");
        html = replace(html, new RegExp('&#154;', 'g'), "??");
        html = replace(html, new RegExp('&Ugrave;', 'g'), "??");
        html = replace(html, new RegExp('&Uacute;', 'g'), "??");
        html = replace(html, new RegExp('&Ucirc;', 'g'), "??");
        html = replace(html, new RegExp('&Uuml;', 'g'), "??");
        html = replace(html, new RegExp('&ugrave;', 'g'), "??");
        html = replace(html, new RegExp('&uacute;', 'g'), "??");
        html = replace(html, new RegExp('&ucirc;', 'g'), "??");
        html = replace(html, new RegExp('&uuml;', 'g'), "??");
        html = replace(html, new RegExp('&#181;', 'g'), "??");
        html = replace(html, new RegExp('&#215;', 'g'), "??");
        html = replace(html, new RegExp('&Yacute;', 'g'), "??");
        html = replace(html, new RegExp('&yacute;', 'g'), "??");
        html = replace(html, new RegExp('&yuml;', 'g'), "??");
        html = replace(html, new RegExp('&#176;', 'g'), "??");
        html = replace(html, new RegExp('&#134;', 'g'), "???");
        html = replace(html, new RegExp('&#135;', 'g'), "???");
        html = replace(html, new RegExp('&lt;', 'g'), "<");
        html = replace(html, new RegExp('&gt;', 'g'), ">");
        html = replace(html, new RegExp('&#177;', 'g'), "??");
        html = replace(html, new RegExp('&#171;', 'g'), "??");
        html = replace(html, new RegExp('&#187;', 'g'), "??");
        html = replace(html, new RegExp('&#191;', 'g'), "??");
        html = replace(html, new RegExp('&#161;', 'g'), "??");
        html = replace(html, new RegExp('&#183;', 'g'), "??");
        html = replace(html, new RegExp('&#149;', 'g'), "???");
        html = replace(html, new RegExp('&#153;', 'g'), "???");
        html = replace(html, new RegExp('&copy;', 'g'), "??");
        html = replace(html, new RegExp('&reg;', 'g'), "??");
        html = replace(html, new RegExp('&#167;', 'g'), "??");
        html = replace(html, new RegExp('&#182;', 'g'), "??");
        res.json({ data: { html } });
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
        res.json({ data: 'ok' });
    } catch (error) {
        res.send(error)
    }
});

app.post('/create-group', async function (req: Request, res: Response) {
    const body = req.body;
    try {
        console.log("This is group create request body: ", req.body);
        const g = await prisma.group.create({
            data: {
                id: body.id,
                groupId: body.groupId,
                name: body.name,
                language: body.language
            }
        });
        res.json({ data: g });
    } catch (error) {
        res.send(error)
    }
});


app.post('/create-book', async function (req: Request, res: Response) {
    const body = req.body;
    try {
        console.log("This is book create request body: ", req.body);
        const g = await prisma.book.create({
            data: {
                title: body.title,
                link: body.link,
                weiter: body.weiter, 
                voucher: body.voucher, 
            }
        });
        res.json({ data: g });
    } catch (error) {
        res.send(error)
    }
});


app.listen(PORT, async function () {
    console.log("Server is started at ", BASE_URL);
});
