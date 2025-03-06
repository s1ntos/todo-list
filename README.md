# todo-list

![Status](https://img.shields.io/badge/status-Em%20Desenvolvimento-yellow)

## 📌 Descrição

Este projeto é uma API desenvolvida para criar, ler, atualizar e deleta tarefas. Atualmente, a API está em fase de desenvolvimento e novas funcionalidades estão sendo implementadas.

## 🚀 Tecnologias Utilizadas

- **Linguagem:** [ Javascript]
- **Framework:** [Express.js]
- **Banco de Dados:** [MySQL]
- **Autenticação:** [JWT / OAuth2 ]
- **Ferramentas de Desenvolvimento:** [Docker / insomnia / Swagger / Github]

## 📂 Estrutura atual do Projeto

```
/backend
  ├── node_modules
  ├── src
  │   ├── models
  │   ├── app.js
  │   ├── router.js
  │   ├── server.js
  ├── package.json
  ├── package-lock.json
  ├── .gitignore
  ├── README.md
```

## 📌 Funcionalidades

- [ ] Criar um recurso
- [ ] Listar recursos
- [ ] Atualizar um recurso
- [ ] Deletar um recurso
- [ ] Autenticação e autorização
- [ ] Documentação com Swagger

## 🔧 Como Executar o Projeto

### Pré-requisitos
Antes de começar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) 
- [Docker](https://www.docker.com/) (opcional)
- Banco de dados configurado (caso necessário)

### Passos para execução

1. Clone o repositório:
   ```sh
   git clone https://github.com/s1ntos/todo-list.git
   cd todo-list
   ```

2. Configure as variáveis de ambiente:
   ```sh
   cp .env.example .env
   ```

3. Instale as dependências:
   ```sh
   npm install express  
   npm install dotenv
   npm install mysql2
   npm install nodemon -D
   npx eslint (opcional)
   ```

4. Execute a aplicação:
   ```sh
   npm run dev
   ```

5. Acesse a API via:
   ```sh
   http://localhost:3000  # Ou a porta que estiver configurada
   ```

## 📖 Documentação

A documentação da API será disponibilizada via Swagger: (ainda não foi documentado)
- **URL:** `http://localhost:3000/a`


## 📅 Roadmap

- [ ] Implementar endpoints principais
- [ ] Melhorar tratamento de erros
- [ ] Adicionar testes automatizados
- [ ] Implementar cache e otimizações

## 🤝 Contribuição

Se quiser contribuir, siga estas etapas:
1. Faça um fork do projeto
2. Crie uma branch com a sua feature (`git checkout -b minha-feature`)
3. Commit suas mudanças (`git commit -m 'Adicionando nova feature'`)
4. Faça push da branch (`git push origin minha-feature`)
5. Abra um Pull Request


 Em desenvolvimento por João paulo
