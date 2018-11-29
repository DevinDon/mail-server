FROM node
WORKDIR /app
COPY ["package-lock.json", "package.json", "ormconfig.json", "tsconfig.json", "tslint.json", "./"]
RUN npm i
COPY ["src", "src"]
CMD [ "npm", "start" ]
