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

# Game Development Process 2 (Rough Draft)
Saturday August 22, 2015 12:39:49 AM

By the Tutorial Doctor

# The Summarized Process
The main process for creating any product is:

- Describe
- Prototype
- Refine
- Polish
- Package

First, describe the product. The better the description, the easier it is to **stay true** to the idea. Create a prototype **Don't deviate** from the working prototype. Refine the product. Refining is the longest stage (**tweaking**). Polish the product. The polish stage shouldn't add new features but **enhance** existing ones. Package your product in an **easy to access and use** way (consider this in the beginning).

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

Lastly, I use conditional statements, loops, and classes if necessary, to **write the program**. 

For complicated tasks or for more efficient programs, you could try searching for **libraries/modules** online and import them for your own use.

# Problem solving (logic & reasoning)
You will run into problems. Two types of problem solving are:

- Top-down
- Bottom-up

Watch the video [here](http://www.youtube.com/watch?v=SVVz6Yy9uhAI)

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
	if p1.upper()==p2.upper():
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

Note: Throughout the process  I use the **print** function to test stuff.
