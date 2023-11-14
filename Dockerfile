FROM node:18.10.0

RUN mkdir -p /app
WORKDIR /app
ADD . /app
# mkdir로 /app 폴더를 만들어서
# 경로를 /app으로 이동한 뒤에
# ADD로 모든 파일을 /app으로 복사한다

RUN npm install --legacy-peer-deps
# yarn 이면 yarn install or yarn build
# 에러가 발생하면 바꿔주기

ENV HOST 0.0.0.0
EXPOSE 3000
# 모든 IP에서 접근 가능
# 3000 port, 개발 port 여러개를 개발하려면, EXPOSE 3000 80 이렇게 써주면 됨

CMD ["npm", "start"]
# CMD는 여러개 적을 수도 있지만, 마지막에 작성된 CMD만 작동한다.
# 컨테이너에서 작동될 명령을 입력한다. yarn이면 yarn start로 적어주기
