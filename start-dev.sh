# docker build -t kvkirthy/showcase:1.0 .
# docker run -it -p 80:3000 kvkirthy/showcase:1.0
# docker push kvkirthy/showcase:1.0
docker run -it -v /Users/m_110190/Code/docker/showcase-ui/docs/:/app/client -p 80:3000 kvkirthy/showcase:1.0 yarn start