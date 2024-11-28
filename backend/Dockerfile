FROM node:16

WORKDIR /app

COPY package*.json ./

# Install dependencies within the container
RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
