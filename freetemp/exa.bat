@echo off

SET app_path=%~dp0app\app.json

ECHO .. Writting to Firefox Registry
ECHO .. Key: HKCU\SOFTWARE\Mozilla\NativeMessagingHosts\FreeTemp
REG ADD "HKCU\SOFTWARE\Mozilla\NativeMessagingHosts\FreeTemp" /ve /t REG_SZ /d "%app_path%" /f
