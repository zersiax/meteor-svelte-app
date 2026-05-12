FROM node:14-bullseye

RUN curl "https://install.meteor.com/?release=2.13.3" | sh

WORKDIR /app
COPY . .

RUN meteor npm install
RUN meteor --allow-superuser build --directory . --server-only

WORKDIR /app/bundle/programs/server
RUN npm install

WORKDIR /app/bundle
ENV PORT=3000

CMD ["node", "main.js"]
