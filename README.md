# EDIBO
EDIBO projekta elektroniskā klade

Mans pirmais ieraksts!

[Formatēšanas piemēri Github'ā] (https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax)

Noderīgi paņēmieni
echo $0 ar kāda shell palīdzību komunicē
Ctrl+Alt+t jauns termināls
Ctrl+Shift+t jauns tabs
Ctrl+l notīra ekrānu
echo $0 kādi objekti piedāvājami
Tab +character(s)+Tab
man command_name (quit with q)
command_name -key(s) argument(s)
ls -tl saraksta sakārtošana alfabēta? laika sec

### day2: 

https://www.py4e.com/lessons- pwd
- ls -cl
- mkdir 
- cat 
- tail 
- wc 
- date 
- history
- ls -l - drwxrwxrwx
 adreses - absolute (/ - root directory), relative (., .., ~)  
 
 
 hexdump -C (hex code or ASCII symbol) 
 ASCII tabula- paskatīties!!!
 xxd -b (binary code)
 1 byte = 8biti (0/1 - katrā 2 stāvokļi) => unique codes 2^8 = 256
 "whereis" var noskaidrot kur atrodas atslēgas vārda objekts un tas objekts ir fails ar izpildīšanas tiesībām.
 $PATH ja objekta atrtašanās būs ceļos viņu parādīs atradīs. komandām jābūt atrodāmām un izpildāmām.
 PATH=$PATH:~
 chmod 740 1 visu 4 read 0 neko (saimnieks/saimnieka grupa/visi pārējie)
 
 ## Day 4
 ls -l  
 df  
 du  
 df -m  
 df -h
 df -lh  
 ls /dev/  
 df --help  
 df -h  
 
Labs paraugs kā izgriezt vienu kolonnu no rindas https://unix.stackexchange.com/questions/42047/cut-grep-and-df-h  
echo `awk "BEGIN {printf \"%.4f\n\", a/b}"`"%" lai apreiķinātu precizāku % --> echo `awk "BEGIN {printf\"%.2f\n\",66290508/103292152*100}"`"%"

loop test https://www.tecmint.com/run-repeat-linux-command-every-x-seconds/

## Day 5  

Gnuplot  
if komstrukcija  
ping

## Day 6

wget  
man wget  

https://www.py4e.com/lessons  noskatīties..

10.07.
pascal triangle

n=int(input("Enter number of rows: "))
## paprasīs cik rindas
a=[]

for i in range(n):
    a.append([])
    a[i].append(1)
    for j in range(1,i):
        a[i].append(a[i-1][j-1]+a[i-1][j])
    if(n!=0):
        a[i].append(1)
for i in range(n):
    print("   "*(n-i),end=" ",sep=" ")
    for j in range(0,i+1):
        print('{0:6}'.format(a[i][j]),end=" ",sep=" ")
    print()
    
    
    
    In [60]: s = """
    ...: Godjāmais x, 
    ...: Jums ir pienācis naudas pārvedums
    ...: ar vērtību y EUR
    ...: Lai saņemtu naudu, atsūtiet 
    ...: īsziņu uz tlf. numuru z
    ...: 
    ...: Cieņā,
    ...:         atraitne
    ...: """

Angular...
pa soļiem  
(copy paste)
export NVM_DIR="$HOME/.nvm" && (
git clone https://github.com/nvm-sh/nvm.git "$NVM_DIR"
cd "$NVM_DIR"
git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" $(git rev-list --tags --max-count=1)`
) && \. "$NVM_DIR/nvm.sh"

nvm i 12

npm install -g @angular/cli  
ng new my-dream-app  
cd my-dream-app  
ng serve  
ng add @angular/material  


