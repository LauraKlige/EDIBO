#! /usr/bin/gnuplot
 
set size 1.0, 1.0
set term png size 600, 500
set output "figure.png"

plot [-20:15] sin(x),atan(x),cos(x)


