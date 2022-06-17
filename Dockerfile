FROM node:12.20.1-slim as base

COPY . .

RUN npm install