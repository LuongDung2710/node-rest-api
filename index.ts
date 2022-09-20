import { Telegraf } from 'telegraf';
import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const app = express();
const prisma = new PrismaClient()
const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL!;
app.use(express.json())
const bot = new Telegraf("5377807406:AAF2g-bvh7w0oSL-IPalVm5MsI9hfXOeL58");
app.get('/idle', function (_, res) {
    res.send('Hello World')
});

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

app.listen(PORT, async function () {
    console.log("Server is started at ", BASE_URL);
});