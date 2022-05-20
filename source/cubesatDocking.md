title=CubeSat Docking
description=its hard
date=12/2022
category=Gifted
status=Finished
%
# CubeSat Docking 
### TLDR: it is really really hard, and is therefore really really cool

*Links are at the bottom*

This project consisted of three parts:
- A video, detailing what tools and processes a satellite requires in order to dock (and if its practical)
- My own docking port that I designed in Fusion 360
- A very naive simulation that works to create a basic control scheme for a electromagnet based docking port


## The Video
In very practical terms, this sucked to make, I did not realize how hard it was to edit videos, especially with all the content I wanted to include.

I used DaVinci Resolve for the editing, and it was pretty easy to tamper with. Instead of using something like Google Slides/Powerpoint for the composure I just did it all in the editor, which made it look clean and good but took forever. This is a very long winded way of saying that it took 6 straight hours of constant work and I didn't sleep for that entire day.

Oh yeah also I made all the animations my self in blender and majority of the satellite models I modeled myself in Fusion 360. All that was tricky, but considerably more fun as I enjoyed messing with the earth shader/material and the associated lighting.

As for the actual contents of the script, I succeeded at arguing an opinion on the matter of the practicality of CubeSat docking (A success compared to my prior project). I first outlined the basic concepts anyone needs to know:

- What is a CubeSat, and their associated scope (context)
- Basic Control Science, and the actuators used
- Docking Ports themselves, different variations, basic functionality

I also went on some small, but (what I like to think) helpful tangents that explain why majority of CubeSat operations are autonomous, and some basic computer vision stuff (ficudals).

Regardless, for this project I definitely employed the Kaplan Objectives (a, b) to persue further insight into the project. I explained how from the topic of CubeSatellite Docking, we can explain how they provide a netbenefit for the space industry and researchers alike, providing a low barrier of entry into this domain.

## The Simulation

The simulation is a jupyter notebook and has a much more through explanation (and code).

I had successfully created my video and presentation about the subject, but I thought t was lame and boring that I did not further extrapolate on the subject. Therefore, I made a fairly basic simulation that attempts to compute the processes required to dock two different CubeSatellites using a electromagnet based scheme. The CubeSatellites are both are outfitted with their own electromagnet (simulated as a naive point magnet, simulating a gross field of magnetism is way way way out of the scope), and they use a somewhat-tuned PID loop that works to modulate the "current" to the electromagnet. The system is designed to produce a output that scales inversely to the distance between them, with the hope they won't smash into each other. The notebook (see the link) has images with various waveforms that help with this explanation.

## 3D Model
In additition to the above, I also made various 3D models for docking ports/CubeSats for the video. One of these models was a actual, somewhat engineered design that was designed to be a symetrical docking port that could easily mount to a CubeSat face. It is specified to be capable of transferring data via SPI/I2C and transferring power of course. It is equiped with a camera for identifying and positioning and a actuated latchng system to mate the two vehicles permenetenly. 

*Video (cringe warning)*: 
<https://drive.google.com/file/d/1qPq73ubcXuK4QaiFoE8lMGtGwph8bZpo/view?usp=sharing>

*Video's Script*:
<https://docs.google.com/document/d/1xeVrRnU_AQ8knSjysSR3VEIBlIdDrIV9t7OS3PIccf0/edit?usp=sharing>

*Simulation*: 
<https://drive.google.com/file/d/11h4MznWY5nqlX7k8JvhWYgiDmmlDdC8W/view?usp=sharing>

*3D Model*: coming soon