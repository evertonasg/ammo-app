# Ammo-teste
Single Page Application de uma lista de produtos com campo de busca e paginação consumindo uma WebApi

#Application
##BUILD:
Para consumir a WebApi que estará rodando em ambiente local deve-se executar a seguinte linha de comando: 
`ng build`

Para consumir a WebApi que publicada em ambiente de produção deve-se executar a seguinte linha de comando: 
`ng build --prod`

**A atribuição das URL's que definem o endereço da WebApi este em `src/environments/`
arquivo `environment.js` (ambiente local) e `environment.prod.ts` (ambiente de produção)

**Os artefatos serão armazenados no diretório `dist/`.

##RUN:
Para rodar o projeto deve-se executar a seguinte linha de comando em seu terminal npm:
`ng serve --open`