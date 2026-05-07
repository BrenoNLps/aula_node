# Armazenamento de Dados

Este projeto foi desenvolvido como material prático da disciplina de **Desenvolvimento de Software** da **FATEC Porto Ferreira**, ministrada pelo **Prof. M. Sc. Felipe Ivo da Silva**.

O objetivo desta aula é demonstrar as diferentes formas de armazenar dados em uma aplicação web — desde o armazenamento no navegador até a persistência em banco de dados real na nuvem. O projeto utiliza uma API REST construída com Node.js e Express, integrada ao PostgreSQL via Sequelize, além de exemplos de Cache API, IndexedDB e Storage API no lado do cliente.

## Conteúdo abordado

- Por que dados somem sem banco de dados
- Bancos relacionais e SQL básico
- Criação e configuração do PostgreSQL no Render
- Conexão com o banco usando Sequelize (ORM)
- Criação de models e sincronização com o banco
- Rotas GET, POST, PUT, PATCH e DELETE integradas ao banco
- Cache API — armazenamento de respostas HTTP no navegador
- IndexedDB — banco de dados local no navegador
- Storage API — gerenciamento do armazenamento do navegador

## Estrutura do projeto

```
api/
├── public/
│   ├── sw.js
│   ├── indexeddb.js
│   ├── storage.js
│   └── index.html
├── models/
│   └── Usuario.js
├── views/
│   ├── index.ejs
│   └── usuario.ejs
├── .env
├── .gitignore
├── db.js
├── index.js
├── package.json
├── routes.js
└── server.js
```

## Como rodar

```bash
npm install
node index.js
```

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com:

```
PORT=3000
DATABASE_URL=sua_url_do_postgresql_aqui
```

## Deploy

O projeto está hospedado no **Render** com banco de dados **PostgreSQL**.
