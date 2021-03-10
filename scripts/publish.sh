#!/bin/sh

rsync -avzz --delete -e "ssh -p $WS_PORT" "$WS_SOURCE" "$WS_USER@$WS_HOST:~/$WS_DIR"
