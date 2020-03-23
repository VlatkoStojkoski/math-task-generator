from googletrans import Translator

translator = Translator()

with open("forTrans.js", "r") as f:
    forTrans = f.read()

tempString = ""
translation = ""
rawTrans = ""

translated = ""

flag = False

for c in forTrans:
    isStringInit = c=="'" or c=="\""
    
    if isStringInit:
        flag = not flag
        if not flag:
            rawTrans=translator.translate(tempString, src='en', dest='mk').text
            translation=input(translator.translate(tempString, src='en', dest='mk').text)
            if translation=="":
                translated+=rawTrans
            else:
                translated+=translation
            tempString=translation=""
    
    if flag and not isStringInit:
        tempString+=c
        continue
    
    translated+=c

with open("translated.js", "w") as f:
    f.write(translated)
