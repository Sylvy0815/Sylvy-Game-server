# Sylvy-Game-server

실비겜 서비스의 백엔드 서버입니다.

## RUN

npm run start

## History

npm install -g @nestjs/cli
nest new sylvy-game-server
nest generate controller users
nest generate service users
nest generate controller ninokuniusers
nest generate service ninokuniusers
nest generate module ninokuniusers
npm install @nestjs/typeorm typeorm pg
npm install @nestjs/config

## DBeaver

## DBeaver를 사용하여 PostgreSQL 데이터베이스 생성하기

### 1. DBeaver 실행:

설치된 DBeaver 애플리케이션을 열고, 시작 화면이나 데이터베이스 탐색기에서 "New Database Connection"을 선택합니다.

### 2. PostgreSQL 선택:

데이터베이스 연결 마법사에서 "PostgreSQL"을 찾아 선택하고 "Next"를 클릭합니다.

### 3. 연결 설정:

- Host: 데이터베이스 서버의 호스트 주소를 입력합니다. 로컬에서 작업하는 경우, 이 값은 보통 localhost입니다.
- Port: PostgreSQL의 기본 포트는 5432입니다. 다른 포트를 사용하는 경우 해당 포트 번호를 입력합니다.
- Database: 이 단계에서는 기본적으로 설정된 데이터베이스(postgres 등)에 연결할 수 있습니다. 새 데이터베이스를 만들려면 먼저 이 기본 데이터베이스에 연결해야 합니다.
- User Name과 Password: PostgreSQL 데이터베이스에 접속할 때 사용할 사용자 이름과 비밀번호를 입력합니다.

### 4. "Finish" 클릭:

모든 정보를 입력한 후 "Finish"를 클릭하여 연결을 완료합니다.

### 5. 새 데이터베이스 생성:

- DBeaver의 데이터베이스 연결 탐색기에서 새로 만든 PostgreSQL 연결을 확장합니다.
- 마우스 오른쪽 버튼을 클릭하여 "Create" > "Database"를 선택합니다.
- 새 데이터베이스의 이름을 입력하고, 필요한 경우 다른 설정을 조정한 후 "OK" 또는 "Finish"를 클릭하여 데이터베이스를 생성합니다.

### 6. 새 데이터베이스 사용:

새로 만든 데이터베이스로 작업을 시작하기 전에, DBeaver에서 해당 데이터베이스를 선택하여 활성화해야 합니다. 이제 테이블 생성, 데이터 삽입, 쿼리 실행 등의 작업을 수행할 수 있습니다.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
