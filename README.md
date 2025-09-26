# Bem vindo ao Codex! 📜 <br>
## Codex é uma API de gerenciar suas leituras e promover melhor o seu hábito de ler de uma forma leve e divertida. <br>

- Por que Codex?  
  - Codex era um tipo de livro usado na Antiguidade e na Idade Média, feito de folhas de pergaminho ou papiro encadernadas. Além disso, lembra código, algo que amamos por aqui 😎 <br>

## 👩‍💻 Tecnologias da API do Codex

- Linguagem / Ambiente de Execução  
  - [![My Skills](https://skillicons.dev/icons?i=js)](https://skillicons.dev)  
  - [![My Skills](https://skillicons.dev/icons?i=nodejs)](https://skillicons.dev)  

- Banco de dados  
  - [![My Skills](https://skillicons.dev/icons?i=postgres)](https://skillicons.dev)  
  - [![My Skills](https://skillicons.dev/icons?i=prisma)](https://skillicons.dev)  

- Frameworks  
  - [![My Skills](https://skillicons.dev/icons?i=express)](https://skillicons.dev)  

- Ferramentas de Desenvolvimento / Ambiente  
  - [![My Skills](https://skillicons.dev/icons?i=docker)](https://skillicons.dev)  

- Serviços Externos  
  - Google Books API: A API externa que usamos como nossa fonte de dados para todas as informações sobre os livros. <br>

## ⛳ Endpoints já implementados

| Método HTTP | Endpoint | Descrição | Autenticação Necessária |
| :--- | :--- | :--- | :--- |
| POST | /users/register | Cadastra um novo usuário e envia um código de verificação por e-mail. | Não |
| POST | /users/verify | Valida a conta do usuário com o código de verificação recebido. | Não |
| POST | /users/login | Cria uma nova sessão (login) para um usuário verificado e retorna um Token JWT. | Não |
| GET | /users/profile | Lista as informações do perfil do usuário que está logado. | Sim |
| PATCH | /users/profile | Atualiza informações do perfil do usuário logado (nome, descrição, etc.). | Sim |
| POST | /users/profile/request-email-change | Inicia o processo de alteração de e-mail, enviando um código para o novo endereço. | Sim |
| POST | /users/profile/confirm-email-change | Confirma a alteração de e-mail com o código de verificação. | Sim |
| GET | /books/search | Busca livros na API externa (Google Books) usando um termo de pesquisa. | Não |