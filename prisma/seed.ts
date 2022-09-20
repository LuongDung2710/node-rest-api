import { keywordGroupDatas } from './seed-data/keyword-group';
import { promotingMarketingDatas } from './seed-data/promote-marketing';
import { groupDatas } from './seed-data/group';
import { usefulInformationAffLinkDatas } from './seed-data/useful-information-aff-link';
import { bookDatas } from './seed-data/book';
import { PrismaClient } from '@prisma/client';
import { productDatas } from './seed-data/products';
import { systemUserDatas } from './seed-data/system-user';
import { usefulInformationImageDatas } from './seed-data/useful-information-images';
import { usefulInformationDatas } from './seed-data/useful-information';
const prisma = new PrismaClient();



async function main() {
  console.log(`Start seeding ...`);
  // //* Create system user 
  // for (const s of systemUserDatas) {
  //   const user = await prisma.systemUser.create({
  //     data: s,
  //   });
  //   console.log(`Created user with id: ${user.id}`);
  // }

  //* Create product
  // for (const p of productDatas) {
    // const product = await prisma.product.create({
      // data: p,
    // });
    // console.log(`Created product with id: ${product.id}`);
  // }

  // //* Create book
  // for (const b of bookDatas) {
  //   const book = await prisma.book.create({
  //     data: b
  //   });
  //   console.log(`Created book with id: ${book.id}`);
  // }

  //* Create useful information aff links
  // for (const l of usefulInformationAffLinkDatas) {
  //   const usefulInformationAffLink = await prisma.usefulInformationAffLink.create({
  //     data: l
  //   });
  //   console.log(`Created useful information aff links with id: ${usefulInformationAffLink.id}`);
  // }

  // //* Create useful information aff images
  // for (const i of usefulInformationImageDatas) {
  //   const usefulInformationImage = await prisma.usefulInformationImage.create({
  //     data: i
  //   });
  //   console.log(`Created useful information aff images with id: ${usefulInformationImage.id}`);
  // }

  // //* Create useful information
  //   const usefulInformation = await prisma.usefulInformation.createMany({
  //     data: usefulInformationDatas
  //   });

  //* Create group
  for (const g of groupDatas) {
    const group = await prisma.group.create({
      data: g
    });
    console.log(`Created group with id: ${group.id} ${group.name}`);
  }

  const usefulInformations = await prisma.usefulInformation.findMany({ where: { deletedAt: null } });
  const groups = await prisma.group.findMany({ where: { deletedAt: null } });

  const counterInformationPerDatas = [];
  //* Create Counter Per Group
  for (const g of groups) {
    for (const u of usefulInformations) {
      counterInformationPerDatas.push({
        groupId: g.id,
        usefulInformationId: u.id
      });
    }
  }

  // await prisma.counterPerGroup.createMany({
  //   data: counterInformationPerDatas
  // })

  const products = await prisma.product.findMany({ where: { deletedAt: null } });

  const counterProductPerDatas = [];
  //* Create Counter  Product Per Group
  for (const g of groups) {
    for (const p of products) {
      counterProductPerDatas.push({
        groupId: g.id,
        productId: p.id
      });
    }
  }

  // await prisma.counterProductPerGroup.createMany({
  //   data: counterProductPerDatas
  // });

  // //* Create promoting marketing
  // for (const p of promotingMarketingDatas) {
  //   const promoteMarketing = await prisma.promoteMarketing.create({
  //     data: p
  //   });
  //   console.log(`Created promote marketing with id: ${promoteMarketing.id}`);
  // }

  // //* Create keyword group 
  // for (const k of keywordGroupDatas) {
  //   const keywordGroup = await prisma.keywordGroup.create({
  //     data: k
  //   });
  //   console.log(`Created keyword group with id: ${keywordGroup.id}`);
  // }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
