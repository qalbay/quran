ng build
cd dist
cd quran
git init
git add .
git commit -m "build deploying"
git remote add heroku "https://git.heroku.com/quran-and-duas.git"
git push -f heroku master

echo Build completed/deployed Press Enter to close...
read
