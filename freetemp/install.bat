@echo off

SET path=%~dp0app\app.json

ECHO .. Writting to Firefox Registry
ECHO .. Key: HKCU\SOFTWARE\Mozilla\NativeMessagingHosts\FreeTemp
REG ADD HKCU\SOFTWARE\Mozilla\NativeMessagingHosts\FreeTemp /v "p" /t REG_SZ /d %path% 
