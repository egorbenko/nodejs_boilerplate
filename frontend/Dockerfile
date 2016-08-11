FROM node:latest

ADD . /app/frontend
WORKDIR /app/frontend

RUN npm install

EXPOSE 8080
CMD ["npm", "start"]