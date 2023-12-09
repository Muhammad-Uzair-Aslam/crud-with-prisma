import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
//npm install prisma --save-dev
//npx prisma init --datasource-provider mongodb
//npm install @prisma/client
//npx prisma generate
export default prisma