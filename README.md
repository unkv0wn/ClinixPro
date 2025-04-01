# Clinixpro

O ClinixPRO é um projeto visando o gerenciamento de antedimentos e controle financeiro de uma clinica em geral.
Sendo possivel utilizar em uma clinica odontologica, medica, fisioterapia etc..

## Tecnologias utilizadas

- Angular Versão 19.20.0
- Tailwind CSS Versão 4.0.0
- NestJS
- PostgreSQL

## Estrutura de pastas

Como a tecnologia utilizada nao tem a estruturação de pastas definidas foi seguido o seguinte modelo.

```
app/
├── assets/              # Pasta para arquivos estáticos (imagens, fontes, etc.)
├── components/          # Componentes reutilizáveis da aplicação
│   ├── modals/          # Componentes de modais(Dialogs...)
├── models/              # Definições de interfaces e classes de dados
└── pages/               # Páginas da aplicação

```

Baseando na estrutura do MVC (Model, View, Controler), para ter uma simples organização.

## Iniciando o Projeto

```
- npm install
- ng serve
- ng server --host 0.0.0.0 (possivel para vizualizar no mobile)
```

