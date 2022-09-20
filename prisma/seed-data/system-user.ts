import { Prisma, UserType } from "@prisma/client";

export const systemUserDatas: Prisma.SystemUserUncheckedCreateInput[] = [
    {
        id: 'cl3mp14df00210zmigu9x8o7p',
        roleId: null,
        email: null,
        department: null,
        photoUrl: null,
        userName: 'luongdung27012002@gmail.com',
        systemCreatedBy: null,
        createdAt: new Date(),
        systemUpdatedBy: null,
        updatedAt: new Date(),
        hidden: true,
        userType: UserType.INTERNAL
    }
]
