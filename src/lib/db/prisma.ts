// import { PrismaClient as MongoClient } from '@/../prisma/generated/mongo-client'
import { PrismaClient } from '@/../prisma/generated'


// let prismaPostgres: PostgresClient;
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
    // prismaPostgres = new PostgresClient();
} else {
    if (!(global as any).prisma) {
        (global as any).prisma = new PrismaClient();
    }
    // if (!(global as any).prismaMongo) {
    //     (global as any).prismaMongo = new MongoClient();
    // }
    prisma = (global as any).prisma;
    // prismaMongo = (global as any).prismaMongo;
}

export default prisma;
