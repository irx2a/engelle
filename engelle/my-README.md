

以下、構築手順。

git clone  https://github.com/angular/quickstart  my-proj
cd my-proj

rm -rf .git  # non-Windows
rd .git /S/Q # windows

git init
git add .
git commit -m "Initial commit"

----- my env required following command {

npm update -g npm
npm install -g n
n --latest
n latest

sudo npm postinstall

----- }

npm install
npm start



