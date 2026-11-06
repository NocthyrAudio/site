@echo off
setlocal

set "GIT_NAME="
set "GIT_EMAIL="
set "ROOT=%~dp0."

git -c "safe.directory=%ROOT%" -C "%ROOT%" rev-parse --show-toplevel >nul 2>&1
if errorlevel 1 (
    echo Erro: esta pasta nao e um repositorio Git valido.
    pause
    exit /b 1
)

for /f "delims=" %%B in ('git -c "safe.directory=%ROOT%" -C "%ROOT%" branch --show-current') do set "BRANCH=%%B"
if not defined BRANCH (
    echo Erro: nao foi possivel identificar a branch atual.
    pause
    exit /b 1
)

echo.
echo Repositorio: Nocthyr Audio
echo Branch: %BRANCH%
echo.
echo Alteracoes atuais:
git -c "safe.directory=%ROOT%" -C "%ROOT%" status --short
echo.
echo Este script vai adicionar TODAS as alteracoes, criar um commit e enviar para origin.
choice /C SN /N /M "Continuar? [S/N] "
if errorlevel 2 (
    echo Publicacao cancelada.
    pause
    exit /b 0
)

for /f "delims=" %%N in ('git -c "safe.directory=%ROOT%" -C "%ROOT%" config user.name') do set "GIT_NAME=%%N"
if not defined GIT_NAME call :configure_name
if errorlevel 1 (
    pause
    exit /b 1
)

for /f "delims=" %%E in ('git -c "safe.directory=%ROOT%" -C "%ROOT%" config user.email') do set "GIT_EMAIL=%%E"
if not defined GIT_EMAIL call :configure_email
if errorlevel 1 (
    pause
    exit /b 1
)

git -c "safe.directory=%ROOT%" -C "%ROOT%" var GIT_AUTHOR_IDENT
if errorlevel 1 (
    echo Erro: a identidade Git nao e valida. Verifique nome e e-mail.
    pause
    exit /b 1
)

git -c "safe.directory=%ROOT%" -C "%ROOT%" add -A
if errorlevel 1 (
    echo Erro ao preparar as alteracoes.
    pause
    exit /b 1
)

echo.
echo Alteracoes preparadas:
git -c "safe.directory=%ROOT%" -C "%ROOT%" diff --cached --stat
echo.
set "COMMIT_MSG=Atualizacao da versao 1.3"
echo Mensagem do commit: %COMMIT_MSG%

echo.
choice /C SN /N /M "Confirmar commit e envio para o GitHub? [S/N] "
if errorlevel 2 (
    echo Publicacao cancelada. As alteracoes continuam preparadas no Git.
    pause
    exit /b 0
)

git -c "safe.directory=%ROOT%" -C "%ROOT%" commit -m "%COMMIT_MSG%"
if errorlevel 1 (
    echo Erro ao criar o commit. Nada foi enviado.
    pause
    exit /b 1
)

git -c "safe.directory=%ROOT%" -C "%ROOT%" push -u origin "%BRANCH%"
if errorlevel 1 (
    echo Erro ao enviar para o GitHub. O commit foi mantido localmente.
    pause
    exit /b 1
)

echo.
echo Publicacao concluida com sucesso.
pause
exit /b 0

:configure_name
echo.
echo O Git precisa do seu nome para identificar o autor do commit.
set /p "GIT_NAME=Nome: "
if not defined GIT_NAME (
    echo Erro: o nome nao pode ficar vazio.
    exit /b 1
)
git -c "safe.directory=%ROOT%" -C "%ROOT%" config --local user.name "%GIT_NAME%"
if errorlevel 1 (
    echo Erro ao configurar o nome neste repositorio.
    exit /b 1
)
exit /b 0

:configure_email
echo.
echo Informe o e-mail associado a sua conta GitHub.
set /p "GIT_EMAIL=E-mail: "
if not defined GIT_EMAIL (
    echo Erro: o e-mail nao pode ficar vazio.
    exit /b 1
)
git -c "safe.directory=%ROOT%" -C "%ROOT%" config --local user.email "%GIT_EMAIL%"
if errorlevel 1 (
    echo Erro ao configurar o e-mail neste repositorio.
    exit /b 1
)
exit /b 0
