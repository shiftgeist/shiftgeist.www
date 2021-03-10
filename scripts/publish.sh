#!/bin/sh

set -eu

# Set deploy key
SSH_PATH="$HOME/.ssh"
mkdir -p "$SSH_PATH"
echo "$SSH_KEY" > "$SSH_PATH/deploy_key"
chmod 600 "$SSH_PATH/deploy_key"

# Do deployment
rsync -avzz --delete -e "ssh -p $WS_PORT -i $SSH_PATH/deploy_key -o StrictHostKeyChecking=no" "$WS_SOURCE" "$SSH_USER@$WS_HOST:~/$WS_HOME_DIR"
