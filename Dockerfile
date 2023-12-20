FROM node:18

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

CMD ["tail", "-f", "/dev/null"]

EXPOSE 3003