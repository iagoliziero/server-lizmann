# 📚 Digital Library - Back-end

[![Deploy no Vercel](https://img.shields.io/badge/Vercel-Digital--Library-blue)](https://digital-library-lizmann.vercel.app/)

<img width="450" alt="Image" src="https://github.com/user-attachments/assets/0f4bab9d-5640-48e4-b6bd-2185c9cef2bd" />
<br><br>

Este repositório contém o **back-end** do sistema **Digital Library**. A aplicação gerencia uma biblioteca de livros, permitindo a **listagem, adição, edição e remoção** de livros através de uma API RESTful desenvolvida com **Node.js** e **Express**. O banco de dados utilizado é o **MongoDB Atlas**, com **Prisma** como ORM.

## 🚀 Tecnologias

O back-end foi desenvolvido utilizando as seguintes tecnologias:

- **Node.js** – Ambiente de execução para JavaScript no servidor
- **Express.js** – Framework para criação de APIs
- **Prisma** – ORM para simplificar as interações com o banco de dados
- **MongoDB Atlas** – Banco de dados NoSQL na nuvem
- **dotenv** – Gerenciamento de variáveis de ambiente
- **CORS** – Para permitir requisições de domínios diferentes

## 🛠️ Funcionalidades da API

A API RESTful fornece as seguintes funcionalidades para o gerenciamento de livros:

✅ **Listagem de livros** disponíveis na biblioteca  
✅ **Adição de novos livros** ao catálogo  
✅ **Edição de livros** com base no ID  
✅ **Remoção de livros** da biblioteca  

## 🔗 Rotas da API

A API disponibiliza as seguintes rotas para interação com os livros:

### `POST /books`
Cria um novo livro na biblioteca.

**Request Body:**

```json
{
  "title": "Título do Livro",
  "author": "Autor do Livro",
  "genero": "Gênero do Livro",
  "year": 2022,
  "urlImage": "URL da Imagem"
}
```

### `GET /books`
Retorna a lista de todos os livros cadastrados.

**Query Params (opcional):**

- `id`: Filtra o livro pelo ID.

### `PUT /books/:id`
Atualiza os dados de um livro já existente com o ID fornecido.

**Request Body:**

```json
{
  "title": "Novo Título",
  "author": "Novo Autor",
  "genero": "Novo Gênero",
  "year": 2023,
  "urlImage": "URL Atualizada"
}
```

### `DELETE /books/:id`
Deleta um livro da biblioteca com base no ID.

**Resposta:**

```json
{
  "message": "Livro deletado com sucesso"
}
```

## ⚙️ Configuração

### Variáveis de ambiente

Para rodar o back-end localmente, crie um arquivo `.env` na raiz do projeto com a seguinte variável de ambiente:

```plaintext
DATABASE_URL=mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/digital-library?retryWrites=true&w=majority
```

Substitua `<usuario>` e `<senha>` pelas suas credenciais do MongoDB Atlas.

### Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/digital-library-backend.git
cd digital-library-backend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
npm start
```

O servidor estará rodando em `http://localhost:3000`.


## 🔗 Conexão com a API (Back-end)

O arquivo `api.js` dentro da pasta **services** é responsável pela comunicação com o banco de dados MongoDB Atlas. Utiliza-se o **Prisma** para realizar as operações CRUD de forma eficiente e estruturada.

## 🌍 Deploy
O projeto está hospedado no Render.



