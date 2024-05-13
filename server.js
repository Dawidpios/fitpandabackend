import express from 'express'
<<<<<<<< HEAD:index.ts
import user from './routes/user.ts'

========
import { PrismaClient } from "@prisma/client";
>>>>>>>> parent of c1db6e4 (Prisma, user controllers, routes, ts configs):server.js
const app = express();
app.use(express.json());

const prisma = new PrismaClient()

app.get("/", (req, res) => {
  res.json({message: "Udało się m"});
});

app.post('/add', async (req, res) => {

  const user = await prisma.user.create({data: req.body})

  res.json(user)
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

