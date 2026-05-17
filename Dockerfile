FROM node:16-bullseye

ENV DEBIAN_FRONTEND=noninteractive

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

RUN apt-get update && apt-get install -y \
    python3 \
    python3-distutils \
    python3-setuptools \
    make \
    gcc \
    g++ \
    build-essential \
    git \
    chromium \
    && rm -rf /var/lib/apt/lists/*

# 古い package が nodejs command を期待する場合への対応
RUN ln -sf /usr/local/bin/node /usr/bin/nodejs

WORKDIR /app

# npm/node-gyp に python 指定
RUN npm config set python /usr/bin/python3

# package install
COPY package*.json ./

RUN npm install

# source copy
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]