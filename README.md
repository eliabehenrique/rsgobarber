# Go Barber Web Application (Backend)

**Requisites**

Pre-requisites:
  - install [Nodejs](https://nodejs.org/pt-br/download/)
  - install or run an instance database relational(SQL) PostgresDB as a container(recommended) on [Docker (ENG)](https://hackernoon.com/dont-install-postgres-docker-pull-postgres-bee20e200198) | [Docker (PT-BR)](https://medium.com/@renato.groffe/postgresql-docker-executando-uma-inst%C3%A2ncia-e-o-pgadmin-4-a-partir-de-containers-ad783e85b1a4)
  - install or run an instance of database no-relational(NoSQL) MongoDB as a container(recommended) on [Docker (ENG)](https://www.thepolyglotdeveloper.com/2019/01/getting-started-mongodb-docker-container-deployment/) or [Docker (PT-BR)](https://medium.com/dockerbr/mongodb-no-docker-dd3b72c7efb7)
  - inst... no no no... run an instance data store structured(key/value) Redis as a container(can be the Redis-Alpine version) on [Docker (ENG)](https://hub.docker.com/_/redis/) | [Docker (PT-BR)](https://medium.com/@prog.tiago/redis-instalando-via-docker-58cb1d2cfb3b)
  - I think it's just this ;D.

Optional: install [yarn (recommended)](https://yarnpkg.com/pt-BR/docs/getting-started) or use npm


**Steps for working**

1. clone or get .zip of this project.

2. within folder project, create archive .env and set all configurations like archive .env.example.
   1. obs: database Postgres; Mail for tests Mailtrap.io; Exceptions handler with Sentry.io.

3. yet within folder project, run: yarn (for downloading of packages)

##### PS: Uma implementação seguindo o conteúdo sobre API Go Barber da Rocketseat - Bootcamp (GoStack 7.0)




