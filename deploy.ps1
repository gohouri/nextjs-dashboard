# Script PowerShell pour déployer Next.js Dashboard
Write-Host "🚀 Déploiement Next.js Dashboard pour GitHub Pages..." -ForegroundColor Green

# 1. Construire l'application
Write-Host "📦 Construction de l'application..." -ForegroundColor Yellow
npm run build

# 2. Copier les fichiers vers docs
Write-Host "📁 Copie des fichiers vers docs..." -ForegroundColor Yellow
if (Test-Path "docs") {
    Remove-Item "docs" -Recurse -Force
}
Copy-Item "out" -Destination "docs" -Recurse

# 3. Ajouter le fichier .nojekyll
Write-Host "🔧 Ajout du fichier .nojekyll..." -ForegroundColor Yellow
New-Item -Path "docs\.nojekyll" -ItemType File -Force

# 4. Vérifier l'état git
Write-Host "📊 État Git:" -ForegroundColor Yellow
git status

Write-Host "✅ Déploiement terminé !" -ForegroundColor Green
Write-Host "🌐 Maintenant allez sur GitHub pour configurer Pages:" -ForegroundColor Cyan
Write-Host "   - Repository: nextjs-dashboard" -ForegroundColor White
Write-Host "   - Source: Deploy from a branch" -ForegroundColor White
Write-Host "   - Branch: master" -ForegroundColor White
Write-Host "   - Folder: /docs" -ForegroundColor White
