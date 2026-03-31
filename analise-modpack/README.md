# Local de analise do modpack

Use este script para encontrar `.jar` e `.zip` corrompidos na instancia.

## 1) Abrir o PowerShell nesta pasta

```powershell
cd C:\Users\evert\Desktop\portifolio\analise-modpack
```

## 2) Rodar a analise

```powershell
.\scan-modpack.ps1 -InstancePath "C:\Users\evert\AppData\Roaming\.minecraft\modpacks\1f83bbfa-9b1b-3014-9381-ae7506ba9ccc" -OutputPath ".\report"
```

## 3) Ver resultado

- Resumo: `.\report\scan-summary.txt`
- Lista completa: `.\report\scan-results.csv`

Se aparecer arquivo com `BROKEN`, ele e o principal suspeito para o erro `zip END header not found`.
