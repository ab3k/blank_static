#!/bin/sh

inkscape -w 180 -h 180 -o apple-touch-icon.png favicon.svg
inkscape -w 192 -h 192 -o icon-192.png favicon.svg
inkscape -w 512 -h 512 -o icon-512.png favicon.svg
ffmpeg -i icon-192.png -vf scale=48:48 favicon.ico
