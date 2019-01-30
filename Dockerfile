FROM node:9

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install bower and npm 
RUN npm i -g bower npm@latest @angular/cli

# Optional install nodemon for development 
# RUN npm i -g nodemon 

# Bundle app source
COPY . .

# Install dependencies 
RUN cd src/assets && bower install --allow-root
RUN npm install 

# Build the angular app for serving 
RUN ng build --prod
# RUN npm run build


EXPOSE 8888
EXPOSE 4200
# CMD [ "npm", "run", "ng", "serve" ]
CMD [ "npm", "start" ]

