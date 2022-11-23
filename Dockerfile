FROM node:12.16.2-alpine
WORKDIR /
COPY . .
RUN yarn
EXPOSE 3000
CMD ["yarn", "dev"]