FROM node:latest

ADD . /app/backend
WORKDIR /app/backend

RUN npm install
RUN npm install nodemon -g

EXPOSE 3000
CMD ["npm", "start"]