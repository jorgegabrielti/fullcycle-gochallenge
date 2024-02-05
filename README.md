# **FullCycle 3.0 - Docker Node.js Challenge**
![img](./img/logo.png)

Table of contents
==========
<!--ts-->
   * [Desafio](#desafio)
   * [Requisito](#requisito)
   * [Imagem no dockerhub](#imagem-no-dockerhub)
   * [Imagem local](#imagem-local)
   * [Executando a imagem](#executando-a-imagem)

<!--te-->

## Desafio:
 A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:
```
<h1>Full Cycle Rocks!</h1>
```
```
Lista de nomes cadastrada no banco de dados
```
### Requisito:
Disponibilizar o acesso ao nginx na porta 8080.

### Executando o docker-compose
```
docker-compose up -d 
```
![img](./img/)

# O que preciso fazer:
- Subir o mysql em Container e criar a base e tabela
- Subir o nodejs em container e conectar ao banco de dados e inserir os dados na tabela.
- Subir o nginx em container e conectá-lo como proxy reverso ao nodejs. O nginx dever responder na porta 8080