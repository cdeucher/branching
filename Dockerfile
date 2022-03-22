FROM node:14.19.0-stretch AS build
RUN mkdir -p /app
WORKDIR /app
COPY . /app/

RUN npm install -g -only=production
RUN npm run build

# --------------> The production image
FROM node:14.19.0-stretch AS node-prod
LABEL maintainer="C.Deucher" \
      node-custom.is-beta=true \
      node-custom.is-production=false \
      node-custom.version="0.0.1-beta" \
      node-custom.release-date="2022-03-20"
WORKDIR /app
ENV NODE_ENV=production
ENV CI=true
RUN npm install -g serve
RUN useradd --user-group --system --create-home --no-log-init nodejs
RUN chown -R nodejs:nodejs /app
COPY --chown=nodejs:nodejs --from=build /app/build /app/
USER nodejs
EXPOSE 80
ENTRYPOINT ["serve"]
CMD ["-s","."]
