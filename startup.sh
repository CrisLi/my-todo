export NODE_ENV=production
nohup node "bin/www" > "logs/my-todo.logs" 2>&1 & echo $! > "pid"