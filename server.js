import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL // Aqui usamos a variável de ambiente
      }
    }
  });
  

const app = express()

app.use(express.json())
app.use(cors())
/* 1- tipo de rota
   2- endereco
*/

app.post('/books', async (req, res) => {


    const { year } = req.body;

    const parsedYear = parseInt(year, 10);

    await prisma.book.create({
        data: {
            title: req.body.title,
            author: req.body.author,
            genero: req.body.genero,
            year: parsedYear,
            urlImage: req.body.urlImage
        }
    })
    res.status(201).json(req.body)
})

app.get('/books', async (req, res) => {

    let books = []
    
    if(req.query) {
        books = await prisma.book.findMany({
            where: {
                id: req.params.id,
            }
        }) 
    } else {
        books = await prisma.book.findMany()
    }

    res.status(200).json(books)
})

app.put('/books/:id', async (req, res) => {


    const { year } = req.body;

    const parsedYear = parseInt(year, 10);

    await prisma.book.update({
        where: {
            id: req.params.id
        },
        data: {
            title: req.body.title,
            author: req.body.author,
            genero: req.body.genero,
            year: parsedYear,
            urlImage: req.body.urlImage
        }
    })
    res.status(201).json(req.body)
})

app.delete('/books/:id', async (req, res) => {
    await prisma.book.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({message: "Livro deletado com sucesso"})
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});