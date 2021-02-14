FROM node:12.18.2-stretch
RUN npm i -g @nestjs/cli
COPY /server/dist/ /app/dist
COPY /server/client/ /app/client
COPY /server/package.json /app/package.json
COPY /server/node_modules /app/node_modules
COPY /server/nest-cli.json /app/nest-cli.json
COPY /server/tsconfig.json /app/tsconfig.json
COPY /server/tsconfig.build.json /app/tsconfig.build.json
WORKDIR /app
EXPOSE 3000
# ENTRYPOINT [ "/bin/bash" ]
CMD ["yarn", "start"]