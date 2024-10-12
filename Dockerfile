FROM node:20
COPY . /app
WORKDIR /app
RUN npm install && npx playwright install --with-deps chromium
CMD ["node", "server.mjs"]