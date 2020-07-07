#! /usr/bin/gnuplot
 
set size 1.5, 1.5
set term png size 600, 500
set output "figure.png"

plot [-20:15] sin(x),atan(x),cos(x)


