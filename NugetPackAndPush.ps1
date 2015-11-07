#
# NugetPackAndPush.ps1
#
 nuget pack .\dist\MoosetrailNgCore.nuspec -OutputDirectory .\dist\
 nuget push .\dist\*.nupkg -s http://moosetrail-nuget.azurewebsites.net/ EA78g0vxKOZe5kS