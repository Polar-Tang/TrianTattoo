FROM node:20 AS build

WORKDIR /app

COPY package*.json ./


RUN npm install

COPY . .

RUN npm run build

# FROM nginx:latest AS production

# COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

# COPY --from=build /app/dist/images /data/images/

# COPY --from=build /app/dist /data/www