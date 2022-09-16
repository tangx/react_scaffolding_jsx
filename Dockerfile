FROM node:16 as env
RUN yarn config set registry https://registry.npm.taobao.org/
RUN npm config set registry https://registry.npm.taobao.org/

FROM env as builder
WORKDIR /app
ADD . .
RUN yarn build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

