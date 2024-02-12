# Node.js 이미지를 기반으로 함
FROM node:14

# 앱 디렉토리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치
COPY package*.json ./
RUN npm install

# 앱 소스 추가
COPY . .

# TypeScript 컴파일
RUN npm run build

# 앱이 3000 포트에서 실행됨을 알림
EXPOSE 3000

# 컴파일된 JavaScript 파일 실행
CMD [ "node", "dist/main" ]
