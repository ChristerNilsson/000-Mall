# Mall

* katalogen coffee innehåller din kod. Redigera med Code
* js-filer skapas automatiskt mha Code extension Run On Save
* index.html används när man vill köra programmet i Google Chrome.

## Detta gör du en enda gång

* Ladda ner Visual Studio Code
	* Installera Extension Live Server
	* Installera Extension Live Share
	* Installera Extension Run On Save
		* Klicka på Manage (kugghjulet)
		* Extension Settings
			* Klistra in följande json:
```		
    "emeraldwalk.runonsave": {
        "autoClearConsole":true,
        "commands": [
            {
                "match": "\\.coffee$",
                "cmd":  "cd ${workspaceRoot} && coffee -M -b -o js -c coffee",
            },
        ]
    },
```
* Ladda ner nodejs
	* npm install --global coffeescript
* Bli medlem i Github
* Forka ChristerNilsson 000-Mall
	* Settings | Template Repository

## Detta gör du när du skapar ett nytt projekt

* Gå till ditt eget 000-Mall repo
	* Klicka på knappen "Use this template"
	* Ge repot ett lämpligt namn
* Kopiera detta nya repo med "Clone or Download" + Copy
* Starta cmd eller Terminal i din github-katalog och ge kommandot "git clone" + ctrl-v

## Detta gör du när du utvecklar

* Gå in i rätt katalog och starta med t ex "code ." eller högerklicka i Explorer
* Transpilering sker automatiskt. 
	* Syntaxfel kan ses mha View|Output|Run On Save
* Visa både Code och Chrome samtidigt på skärmen.
* Använd F12 för att se Debuggern.