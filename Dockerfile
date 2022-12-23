FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install && npm install qrcode-terminal && node . --db 'mongodb+srv://holo:moon0987654@cluster0.ts4jpsk.mongodb.net/?retryWrites=true&w=majority'

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
