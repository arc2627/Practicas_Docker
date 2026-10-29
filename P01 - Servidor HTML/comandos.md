mkdir html
docker pull nginx:alpine
docker run --rm -p 8080:80 nginx:alpine
http://localhost:8080
docker create --name web-server -p 8080:80 nginx:alpine
docker start web-server
chmod -R o+r ./html/
cp ./html/ web-server:/usr/share/nginx/html/.
docker exec -it web-server sh
