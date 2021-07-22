# FROM cypress/included:6.8.0
FROM cypress/base:10

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm i 

COPY cypress /usr/src/app/cypress
COPY cypress.json /usr/src/app/

RUN ./node_modules/.bin/cypress verify


# CMD ["./node_modules/.bin/cypress", "run", "--spec", "./cypress/integration/tests/*.js"]
# CMD ["./node_modules/.bin/cypress", "run"]
CMD ["npx", "cypress", "run"]