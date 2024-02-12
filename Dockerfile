# Node.js 이미지를 기반으로 함
FROM node:14

# 앱 디렉토리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치
# package.json과 package-lock.json을 모두 복사
COPY package*.json ./

RUN npm install
# 프로덕션을 위한 코드라면, RUN npm ci --only=production 을 사용

# 앱 소스 추가
COPY . .

# 앱이 3000 포트에서 실행됨을 알림
EXPOSE 3000

CMD [ "node", "app.js" ]
