FROM node:12

RUN curl https://install.meteor.com/ | sh

WORKDIR /app
COPY . .

RUN meteor npm install
RUN meteor build --directory . --server-only

WORKDIR /app/bundle/programs/server
RUN npm install

ENV PORT=3000

CMD ["node", "main.js"]