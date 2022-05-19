title=Bottle Rocket Sim
description=whoosh
date=2020-ish
category=Ballistics
status=Finished
%
# Bottle Rocket Simulator
### A fun combination of rigidbody dynamics, gas laws and naive aerodynamics


#### [img]

This project was directly after I grew a obsession with basic physics and I was disperate for a project to not only play with the subject. The idea emerged as my younger cousin had a Bottle Rocket kit and when visiting him I thought it would be cool to try and simulate the flight. 

Therefore a great a idea emerged and one that was not to terribly hard to do. 

All we need to do is the following:
- Calculate the force produced from the bottle rocket (pressurized air/water)
- Use these forces to simulate the dynamics of the rocket
- Add some aerodynamic forces to help achieve a semi-realistic result
The first part is what I thought was the hardest so we can start there. At first, I was confuzzled on how exactly to approach the problem, so I started with the basics. We know that throwing mass in the inverse of our desired direction produces thrust, so building on that, we need to know the mass and the velocity of the water/air we are pushing out of the rocket.

Boullneti equation