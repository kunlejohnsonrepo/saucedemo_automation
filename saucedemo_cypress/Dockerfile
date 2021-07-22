FROM cypress/included:6.8.0
RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.json .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT ["npm", "run"]

# FROM cypress/base:10


# WORKDIR /app

# COPY ./package.json ./package.json
# RUN npm i

# COPY ./cypress ./cypress
# COPY ./cypress.json ./cypress.json

# #RUN npm install --save-dev cypress
# RUN npx cypress run
# #RUN $(npm bin)/cypress verify
# #RUN $(npm bin)/cypress run