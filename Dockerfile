FROM node:16.2-alpine3.13 as build

RUN apk add --update --no-cache curl py-pip g++ make

RUN npm install npm -g

# Prepare the build directory
RUN mkdir -p /opt/build;

WORKDIR /opt/build

# If your build step requires environment variables too, add them here

# Copy required files
# Note: I specify each file directly here to avoid copying over
# existing /dist folder or other dev files like .env
COPY ./src ./src
COPY [ "package.json", "yarn.lock", "tsconfig.json", "knexfile.ts", "tsconfig.json", "tsoa.json", "babel.config.js" ,  "./" ]

RUN yarn install --no-progress && yarn build


#################################################################
# Step 2: Fetch production-only dependencies                    #
#################################################################
# Note: Make sure the right version of node your application    #
# requires is set here and in all other build steps.            #
#################################################################
FROM node:16.2 as dependencies

# Set environment to production
ENV NODE_ENV='production'

RUN mkdir -p /opt/build;

WORKDIR /opt/build

COPY --from=build [ "/opt/build/package.json", "/opt/build/yarn.lock", "./" ]

RUN yarn install --production=true --no-progress


#################################################################
# Step 3: Build done, create the deployable/runnable image step #
#################################################################
# Note: Make sure the right version of node your application    #
# requires is set here and in all other build steps.            #
#################################################################
FROM node:16.2-slim as release

# Set environment to production
ENV NODE_ENV='production'

# Prepare the app directory
RUN mkdir -p /opt/app;

WORKDIR /opt/app

# Add any and all environment variables your application needs here:
ENV NODE_ENV=production


# Copy dependencies and compiled application from previous steps
COPY --from=dependencies /opt/build/node_modules /opt/app/node_modules
COPY --from=build /opt/build/dist /opt/app/dist

WORKDIR /opt/app

# Run the application using node
ENTRYPOINT [ "node", "dist/index.js" ]
