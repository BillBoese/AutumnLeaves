# AutumnLeaves
P5.js animation of falling leaves in front of one of my watercolors


used the following command to make the video: ffmpeg -r 10 -i fll_webm.webm -c:a copy -c:v libx264 -b:v 5M -maxrate 5M fb10.mp4
framerate is 10
comment out the p5 frameRate when capturing, it seems to break it

updated framerate to 10, I used 30 when I captured it but set it to ten in ffmpeg
