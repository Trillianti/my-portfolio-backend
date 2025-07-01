import prisma from '@/prisma/client';

export const getUsers = async () => {
    return prisma.user.findMany();
};
