mkdir html
docker pull nginx:alpine
docker run --rm -p 8080:80 nginx:alpine
curl http://localhost:8080
docker create --name web-server -p 8080:80 nginx:alpine
docker start web-server
chmod -R o+r ./html/
docker cp ./html/. web-server:/usr/share/nginx/html/.
docker exec -it web-server sh
docker logs web-server
docker commit web-server arc2627/mi-web:v1
docker run --rm -p 8081:80 arc2627/mi-web:v1
curl http://localhost:8081
docker save -o MiWebServer.tar arc2627/mi-web:v1
docker rmi arc2627/mi-web:v1
docker images
docker load -i MiWebServer.tar
docker images
docker run --rm -p 8081:80 arc2627/mi-web:v1
curl http://localhost:8081
