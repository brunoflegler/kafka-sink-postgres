FROM node:16.13.0-slim as base

COPY . .

RUN npm install