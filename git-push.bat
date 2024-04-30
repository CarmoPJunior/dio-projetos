@echo off
echo "# dio-projetos" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/CarmoPJunior/dio-projetos.git
git push -u origin main
pause
