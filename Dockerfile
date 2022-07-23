FROM node:16-bullseye
COPY deps.txt ./deps.txt
RUN apt update
RUN apt install $(cat deps.txt) -y
COPY . .
RUN yarn install
RUN yarn build
CMD [ "yarn", "next", "start", "-p", "80"]