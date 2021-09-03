echo 'commit message: '
read message
git pull && git add . && git commit -m "$message" && git push