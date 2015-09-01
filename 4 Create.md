<p style="
color:;
text-align:center;
font-size:">
Tuesday  Sep 1, 2015
</p>
<p style="
color:;
text-align:center;
font-size:">
by: The Tutorial Doctor
</p>

# Game Development Process (Rough Draft)
Saturday August 22, 2015 12:39:49 AM

By the Tutorial Doctor


# The Summarized Process
The main process for creating any product is:

- Describe
- Prototype
- Refine
- Polish
- Package

First, describe the product. The betC
ter the description, the easier it is to **stay true** to the idea. Create a prototype **Don't deviate** from the working prototype. Refine the product. Refining is the longest stage (**tweaking**). Polish the product. The polish stage shouldn't add new features, but **enhance** existing ones. Package your product in an **easy to access and use** way (consider this in the beginning).

## The Code/Development Process
___
My general process for programming software is:

- **Description**
- **Pseudocode** (Prototype)
- **Real Code** (Refine)
- **Api**, libraries, and custom functions (Refine)
- **Cleanup** (Polish)
- **Compile & Ship** (Package)

First, I write a **description** of what I want the program to do in English. 

Next, I note all **nouns** in the description (usually nouns can be translated to **variables**) and write them down, taking note of their **data type**. 

I then note all of the **verbs** in the description (verbs end up being **functions**) and write them down. Now, I create/declare the nouns (as variables). 

Then I sift through the **API** to see if I can find any functions or additional variables that do what I need. If not, I will have to either make a custom function, or search **google** for it. 

Lastly, I use conditional statements, loops, and classes (if necessary), to **write the program**. 

For complicated tasks, or for more efficient programs, you could try searching for **libraries/modules** online, and import them for your own use.

Note: Throughout the process  I use the **print** function to test stuff.

## The Art Process
___

- Point
- Line
- Shape
- Color
- Shade

A **point** describes a **location.** A **line** describes an **angle** and a **length**. A **shape** describes an **area** (the amount of space the object takes up) and a **perimeter** (the boundary of the shape). Color describes a color (it also conveys a mood). **Shade** describes a **change in color.**

The two most basic skills you should master is to be able to draw a **perfect line** (from any angle) and a **perfect circle**, at any size. Additionally, practice drawing primitive shapes several times, exactly the same. Practice!

**Curves are lines**. **Don't draw curves** (hard and usually inaccurate), draw straight lines (easy and accurate). You can modify them if you need to later (draw lightly at first).

### 2D Art Process
1. **Sketch** (Describe)
2. **Composition** (Prototype)
3. **Silhouetting** (Refine)
4. **Color** (Polish)
5. **Shading** (Polish)
6. **Details** (Polish)

Sketch the idea first. Compose the image using primitive shapes (square, triangle, circle). Refine the primitive shapes to get an accurate silhouette. Give a base color to the silhouette (usually the mid-tone). Add shapes for the highlights and shadows. Shade/blend between the mid-tones, highlights and shadows. Lastly, add details. Add only the information you need to convey the image. Nothing more!

![rock](https://cloud.githubusercontent.com/assets/12942803/9608739/d66a1214-509d-11e5-8533-e7b0a454815a.jpg)

### 3D Art Process
- **Sketch** (Describe)
- **Primitive modeling** (Prototype)
- **Meshing** (Refine)
- **Materials & Textures** (Polish)
- **Rigging and Animation** (Polish)
- **Lighting** (Polish)
- **Rendering** (Polish)

Sketch the idea first (or find **reference photos**). Compose the model using **primitive shapes** (cube, pyramid, cylinder, sphere). **Refine** the primitive shapes to get an accurate mesh. **UV unwrap** the mesh. Give a **base color** (diffuse color) to the mesh (usually the mid-tone).  Create the **materials and textures**. **Rig and animate** the mesh. **Light** the model. **Render** the model. **Post-processing** (optional). Add only the information you need to convey the model. Nothing more! Too much detail, if it is the wrong detail, is bad.

### Animation
-  **Sketch** (Describe)
- **Blocking & Keyframes** (no interpolation) (Prototype)
- **Breakdown** Poses (Refine)
- **Secondary** Poses (Refine)
- **Animation Principles** (Polish)
- **Dope sheet** and spline **graph editing** (Polish)
- **Lighting, Cameras, Rendering** (Polish)

### Realism?
If you want realism, just be more **accurate**.

- **Points** (location)
- **Lines** (location,angle,length)
- **Shape** (location,size,angles)
- **Color** (hue,saturation,brightness)
- **Shading** (tint,shade,tone)
  
  Same applies for 3d models (accuracy).
  
# Problem solving (logic & reasoning)
You will run into problems. Two types of problem solving are:

- Top-down
- Bottom-up
<iframe width="420" height="315" src="www.youtube.com/watch?v=SVVz6Yy9uhA" frameborder="0" allowfullscreen></iframe>

# Examples
## Enemy AI 
___
*I am using Python to model the program. The logic remains the same, no matter what language you use.*

### Description
If there is a player approaching you(within 10 pixels of you) at a speed greater than 8 pixels per second, then jump!

###Pseudocode
	if player_approaching==true and player_speed > 8, jump()

###Real Code
<pre>
class Player:
	def __init__(self):
		self.speed=0
		self.x=0
		self.y=0
		self.position=(self.x,self.y)
		
	def isApproaching(self,obj):
		near = 10
		distance = abs(abs(obj.x)-abs(self.x))
		if distance<=near:
			print distance
			return True
	
	def jump(self):
		print 'Jumping'

class Enemy():
	def __init__(self):
		self.speed=0
		self.x=0
		self.y=0
		self.position=(self.x,self.y)
	def jump(self):
	   print 'Jumping'


player = Player()
player.speed=9
player.x=1
enemy=Enemy()
enemy.x=5


if player.isApproaching(enemy):
	if player.speed > 8:
		enemy.jump()
</pre>
![diagram](https://cloud.githubusercontent.com/assets/12942803/9608729/d655c43a-509d-11e5-867e-0d4812784d54.jpg)
*This is a working prototype made with [Gamepress](http://www.gamepressapp.com)*


## Rock, Paper, Scissors
<pre>
# By the tutorial doctor

# Not in use right now
class Player:
	pass


print "rock, paper or scissors?"


def Play():
	p1 = raw_input("Player1? ")
	p2 = raw_input("Player2? ")

	choices = ["ROCK","PAPER","SCISSORS"]
	rock = False
	paper = False 
	scissors = False
	if p1==p2:
		print "Tie"

	if p1.upper()=="ROCK":
		rock=True
	if p2.upper()=="ROCK":
		rock=True

	if p1.upper()=="PAPER":
		paper=True 
	if p2.upper()=="PAPER":
		paper=True 

	if p1.upper()=="SCISSORS":
		scissors=True 
	if p2.upper()=="SCISSORS":
		scissors=True

	if rock and paper:
		print "paper wins"
	if rock and scissors:
		print "rock wins"
	if scissors and paper:
		print "scissors wins"

	if p1.upper() not in choices:
		print "Not valid player 1"
		Play()
	elif p2.upper() not in choices:
		print "Not valid player 2"
		Play()
	else:
		print "Game over"
		
Play()
</pre>


## Art

![2d 3d](https://cloud.githubusercontent.com/assets/12942803/9608727/d6519248-509d-11e5-8c20-071a7c56b38f.jpg)
![bx](https://cloud.githubusercontent.com/assets/12942803/9608728/d655abd0-509d-11e5-9936-cc6a13805384.jpg)
![bxs](https://cloud.githubusercontent.com/assets/12942803/9608731/d657523c-509d-11e5-9ed1-2c226185b1e5.jpg)
![bxsl](https://cloud.githubusercontent.com/assets/12942803/9608730/d656ff30-509d-11e5-9386-10a2410c20f7.jpg)
![cr](https://cloud.githubusercontent.com/assets/12942803/9608732/d65a180a-509d-11e5-8c08-722e8201e4f1.jpg)
![dr](https://cloud.githubusercontent.com/assets/12942803/9608733/d65b2e0c-509d-11e5-940e-6218107ba940.jpg)
![fin1](https://cloud.githubusercontent.com/assets/12942803/9608734/d65ef44c-509d-11e5-9c56-712c3e963c6a.jpg)
![fin2](https://cloud.githubusercontent.com/assets/12942803/9608735/d6626fdc-509d-11e5-8223-3b8e792e4eb5.jpg)
![image](https://cloud.githubusercontent.com/assets/12942803/9608737/d6649776-509d-11e5-80b8-0eaf9bacdd22.jpg)
![lamp](https://cloud.githubusercontent.com/assets/12942803/9608736/d66326d4-509d-11e5-9d11-f75e94889909.jpg)
![lg](https://cloud.githubusercontent.com/assets/12942803/9608738/d6653a00-509d-11e5-9404-c30c77dad62d.jpg)
![me](https://cloud.githubusercontent.com/assets/12942803/9608741/d66cb67c-509d-11e5-9d9a-5c8e888365aa.jpg)
![sho](https://cloud.githubusercontent.com/assets/12942803/9608740/d66c6820-509d-11e5-9438-d2d5ac8e6514.jpg)
![tap](https://cloud.githubusercontent.com/assets/12942803/9608744/d67186e8-509d-11e5-96dc-942de3dd9137.jpg)
![tow](https://cloud.githubusercontent.com/assets/12942803/9608743/d6717004-509d-11e5-8bed-ec9ee2729ea8.jpg)
![wal](https://cloud.githubusercontent.com/assets/12942803/9608742/d66f383e-509d-11e5-905a-0d850052fd3e.jpg)


