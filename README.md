# 🎓 Dot School Web

Sistema de gestão de cursos e matrículas desenvolvido com React, TypeScript e Vite. Uma aplicação web moderna para gerenciar cursos, usuários e matrículas de forma intuitiva e eficiente.

## 🎯 Sobre o Projeto

O Dot School Web é uma plataforma de gestão educacional que permite:
- Visualizar e filtrar cursos disponíveis
- Gerenciar usuários do sistema
- Realizar matrículas em turmas
- Acompanhar vagas disponíveis
- Filtrar cursos por título e temas

## 📸 Screenshots

Veja como a aplicação funciona através das capturas de tela abaixo:

### Página de Cursos - Listagem e Filtros
![Página de Cursos](./public/screenshot%201.png)
*Visualização da página principal com listagem de cursos, filtros por título e temas, e informações detalhadas das turmas.*

### Cadastro de Usuários
![Cadastro de Usuários](./public/screenshot%202.png)
*Interface para cadastro de novos usuários e visualização da lista de usuários já cadastrados no sistema.*

### Sistema de Matrículas
![Sistema de Matrículas](./public/screenshot%203.png)
*Tela de matrículas mostrando o histórico de inscrições e status das matrículas realizadas.*

### Modal e Tratamento de erros
![Modal e Tratamento de erros](./public/screenshot%204.png)
*Demonstração do modal de matriculo e tratamento de erros.*

### Interface Responsiva
![Interface Responsiva](./public/screenshot%206.png)
*Demonstração da responsividade do projeto, com tabelas adaptadas para telas menores*

## ✨ Funcionalidades

### 📚 Gestão de Cursos
- **Listagem de cursos**: Visualização de todos os cursos disponíveis
- **Filtros avançados**: Busca por título e filtragem por temas
- **Detalhes do curso**: Descrição, imagem e temas relacionados
- **Visualização de turmas**: Informações sobre vagas, datas e descrição

### 👥 Gestão de Usuários
- **Cadastro de novos usuários**: Formulário para criação de usuários
- **Listagem de usuários**: Visualização de todos os usuários cadastrados
- **Informações básicas**: Nome e e-mail dos usuários

### 📝 Sistema de Matrículas
- **Matrícula em turmas**: Sistema de inscrição em cursos
- **Controle de vagas**: Visualização de vagas ocupadas vs. disponíveis
- **Histórico de matrículas**: Acompanhamento das inscrições

## 🛠 Tecnologias Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca para construção da interface
- **TypeScript 5.8.3** - Superset do JavaScript com tipagem estática
- **Vite 7.1.2** - Build tool e dev server extremamente rápido
- **React Router 7.8.2** - Roteamento para aplicações React

### Gerenciamento de Estado e Dados
- **TanStack Query 5.85.6** - Gerenciamento de estado do servidor
- **Axios 1.11.0** - Cliente HTTP para requisições à API

### Desenvolvimento
- **ESLint** - Linter para manter qualidade do código
- **TanStack Query DevTools** - Ferramentas de desenvolvimento para debugging

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Git** para clonagem do repositório

## 🚀 Como Rodar o Projeto

### 1. Descompacte o arquivo Zip

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o backend da aplicação

### Executando a aplicação

#### Modo desenvolvimento:

```bash
npm run dev
```

#### Modo produção:

```bash
npm run build
npm run preview
```

### 6. Acesse a aplicação
A aplicação estará disponível em: `http://localhost:5173` (desenvolvimento) ou `http://localhost:5174` (produção)

## 🔌 API e Backend

A aplicação consome uma API REST que deve estar rodando em `http://localhost:3333/api` (configurável via variável de ambiente `VITE_API_URL`).

### Endpoints esperados:
- `GET /courses` - Lista cursos com filtros
- `GET /users` - Lista usuários
- `GET /themes` - Lista temas disponíveis
- `POST /users` - Cria novo usuário
- `POST /class/:classId:user` - Cria nova matrícula para usuário

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter para verificar qualidade do código

## 🔍 Funcionalidades Detalhadas

### Página de Cursos (`/`)
- **Filtros**: Por título e temas específicos
- **Informações do curso**: Título, descrição, imagem e temas
- **Listagem de turmas**: Vagas disponíveis, datas de início e fim
- **Ação de matrícula**: Dialog para inscrição em turmas

### Página de Usuários (`/usuarios`)
- **Cadastro**: Formulário para criação de novos usuários
- **Listagem**: Tabela com todos os usuários cadastrados

### Página de Matrículas (`/matriculas`)
- **Histórico**: Visualização das matrículas realizadas
- **Status**: Acompanhamento do status das inscrições

## ⚠ Observações Importantes

### Dependências de Backend
- Este é apenas o frontend da aplicação
- Requer uma API backend rodando para funcionar completamente
- A URL da API pode ser configurada via variável de ambiente `VITE_API_URL`

### Desenvolvimento
- Utiliza **React 19** com as mais recentes funcionalidades
- **TypeScript** configurado para máxima segurança de tipos
- **ESLint** configurado com regras específicas para React e TypeScript
- **Path mapping** configurado (`@/` aponta para `src/`)

### Performance
- **Lazy loading** implementado nas rotas para melhor performance
- **TanStack Query** para cache eficiente de dados do servidor
- **Vite** para bundling ultra-rápido

### Responsividade
- Layout responsivo implementado com CSS customizado
- Tabelas adaptáveis para diferentes tamanhos de tela
- Design mobile-first

## 👨‍💻 Autor

<div align="center">
  <img src="https://github.com/marquesmaycon.png" width="100px" style="border-radius: 50%"/>
  <br/>
  <strong>Maycon Marques</strong>
  <br/>
  <br/>
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mayconhenrique/)
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/marquesmaycon)
  [![Email](https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:mayconmarquesh@gmail.com)

  ### Feito com ❤️ e muita 🎵
</div>