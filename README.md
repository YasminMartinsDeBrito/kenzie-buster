
[Dependencias do projeto]

yarn init -y

yarn add typeorm reflect-metadata && yarn add ts-node-dev @types/node -D

yarn typeorm init --database postgres

yarn add dotenv && yarn add @types/dotenv -D

yarn add express && yarn add @type
s/express -D

<!-- so se tiver que colocar senha -->
 yarn add bcrypt && yarn add @types/bcrypt

yarn add jsonwebtoken

yarn add yup && yarn add @types/yup -D

 <!--  depois de tudo pronto as entidades  -->
 yarn migration:create ./src/migrations/initialCommit

 yarn migration:generate ./src/migrations/initialCommit



<!--  mechi na middlawere de verifytoken -->
<!-- mexi no index do router -->
<!-- Precisa somente da tela do LOGIN e CADASTRO do USER -->