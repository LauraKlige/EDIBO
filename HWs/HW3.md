Binārā skaitīšanas sistēma/ASCII tabula.  
Šajā skaitīšanas sistēma bāze ir 2 un izmantojamie simboli ir 0 un 1.

![image](https://www.mathcs.emory.edu/~cheung/Courses/170/Syllabus/05/FIGS/0/ASCII.jpg)  

## Bāzes
• 2 — binārā (izmanto datorzinātnē) ## 0 un 1  
• 8 — oktālā (datorzinātnē)  
• 10 — decimālā - visplašāk lietotā skaitīšanas sistēma  
• 12 — duodecimālā (plaši izmantoja senatnē, dažreiz arī mūsdienās)  
• 16 — heksadecimālā (datorzinātnē)  
• 60 — heksagesimālā (izmanto leņķu mērīšanai, minūšu, sekunžu uzskaitei)   

### Dec2bin ar bash

  #! /bin/bash
  val=123
  D2B=({0..1}{0..1}{0..1}{0..1}{0..1}{0..1}{0..1}{0..1})

echo ${D2B[123]}

 #! /bin/bash
 n=123
 rezultats=0
 pakape=1

 while [ $n -ne 0 ]
 do
        atlikums=$(( $n % 2 ))
        rezultats=$(( $atlikums * $pakape + $rezultats ))
        pakape=$(( $pakape * 10 ))
        n=$(( $n / 2 ))
 done

 echo "Binārais skaitlis, skaitlim 123= $rezultats"
