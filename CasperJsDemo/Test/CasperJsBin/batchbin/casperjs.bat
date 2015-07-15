@ECHO OFF
set CASPER_PATH=%~dp0libs\CasperJsBin
set CASPER_BIN=%CASPER_PATH%\bin\
set PHANTOMJS=%~dp0libs\PhantomJsBin\phantomjs.exe
set ARGV=%*

call "%PHANTOMJS%" "%CASPER_PATH%bootstrap.js" --casper-path="%CASPER_PATH%" --cli %ARGV%
