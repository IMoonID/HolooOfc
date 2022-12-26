FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install

COPY . .

CMD ["node", ". --db 'mongodb+srv://holo:sho0987654@cluster0.ts4jpsk.mongodb.net/?retryWrites=true&w=majority'"]
