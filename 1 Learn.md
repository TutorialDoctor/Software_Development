# Learn: Programming Basics with Python

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

0. Intro
	0. User and Developer
	0. Printing
1. Variables
	1. Types
2. Functions
	1. Arguments
	2. Return Value
3. Conditionals
	1. If
	2. Elif
	3. Else
4. Loops
	1. For
	2. While
5. Classes
	1. Sup/Sub
	2. Method
	3. Object
6. Modules
	1. Importing
7. API
8. SDK

# Intro 
___
A **computer program** is a **recipe** for a computer. The computer reads the recipe and  you get a game like **Angry Birds**, a Word Processor like **Microsoft Office**, or a website like Youtube.

Recipes have various **ingredients**. They also have directions/ **instructions** for using those ingredients.	

The **ingredients** of a computer program are called **variables**.
The **instructions** of a computer program are called **statements**.
And a **group of statements** is called a **function**.


# User and Developer
___
A person who **uses** a program is called a **user**.
A person who **creates** a program is called a **developer**

# Printing
___
The most useful instruction you can give to a computer is to tell it to **print** something to the screen.	
<pre>
OUTPUT
print 'Tutorial Doctor'
print 1+2
print 10-4
print 6*8
print 18/3
print 9%4
print 2<4
print 4>9
print 5==6
print 3==3
print 4!=4
print 'hello'=='hellow'
print 'yup'=='yup'

print 'hello'+'world'
print 'hello'*23

INPUT
input('How old are you? ')
raw_input('What is your name? ')
</pre>

# Variables
___
**Variables** are named like **nouns**. If there were an apple in your recipe, the apple would be a noun(variable). A blender would be a noun, and therfore a variable.

An apple is a type of fruit. A pecan is  type of nut. A male is a type of person. When you give a **variable** a **type** in computer programming, you are giving it a **data type**.

The basic types of variables in a computer program are the:

- Data Types
	- Character
	- String
	- Integer
	- Float
	- Array
	- Dictionary
	- Boolean	

<pre>
VARIABLES
first_name = 'Raphael'
last_name = 'Smith'

age = 29

height = 6.3

hobbies = ['Art','Science','Programming','Game Development']

definition = {
              'Program':'A recipe for a computer',
              'Variable':'The ingredient of a computer program',
              'Statement':'The instruction of a computer program',
              'Function':'A group of statements'
              }

location = (47.6,122.33) #Seattle Washington N/W

print first_name + last_name
print age
print height
print hobbies
print definition['Function']
print location

print first_name[0]
print hobbies[0]
print location[0]
</pre>


# Functions
___
A **function** is a group of statements. They are usually named like verbs, because functions can **do stuff** to **verbs**. You can blend() an apple. You can also cut() an apple. blend() and cut() would be functions in your program.

<pre>
FUNCTION
def printInfo():
	print first_name,age,height,hobbies,definition['Statement'],location
printInfo()

def blend(a):
	print 'Blending ' + str(a)
blend('pizza')

def sum(a,b):
	return a+b
print sum(93943,542434)
</pre>

## Arguments 
- You can blend apples as well as oranges. You can cut fruit, as well as onions. An argument is a variable that can be **switched out** for another.

## Return Value
- A blender could just blend() an apple. But often you want it to blend() the apple and then return the fruit smoothie. The smoothie would be the return value of the blend() function. The blend() **function  returns** an apple **smoothie**.

# Conditionals(Flow control) (Flow control)
___
- Perhaps you only want to blend() an apple under **certain conditions**. Perhaps you only want to blend() the apple if the apple has already been diced. To create condtitions in a program you use **Conditional Statements**.

- A condtional statement is a statement  like:
		*"If the the apple has been diced, blend the apple. Otherwise, if the apple has not been diced, do not blend the apple. If the apple is anything else, then do nothing."*	

- Things will only happen if a conditon is met.
	
## If
- The way you say "**if**" to a computer program is by using the "if" keyword.

## Else If
- The way you say "**otherwise**" to a computer program is by using the "**else  if**" or, in Python, "**elif**" keyword.

## Else
- The way you say "**if  anything else**" to a computer program is by using the "**else**" keyword.

<pre>
CONDITIONALS
def checkAge():
	if age > 18:
		print 'You are too old for Coderdojo.'
		print 'You could sign up to be a mentor though.'
	elif age < 7:
		print 'You are too young for Coderdojo.'
	else:
		print 'You are the right age for Coderdojo.'
checkAge()
</pre>

# Loops
___
- A loops is how you make a computer **repeat** an instruction. You could make it repeat a single statment or a whole function. There are **two main types** of loop statements. There is the while loop and the for loop.

## While
- A While Loop is like saying "**as long as**...." Short for "as long as" is "while." The computer will do something while a condtion is met.	

- You might say, "Blend the apple as long as the time is less than 10 seconds."

- While the appple has been blending for less than 10 seconds, the computer will blend the apple.		

*"While seconds is less than 10"*

##For 
- A For Loop is like saying, "**Until**...." The computer will do something "until" a condition is met.

- You might say, "Blend the apple until ten seconds has passed."

- The blend() function will blend, and it will keep blending until it has been blending for 10 seconds.

- "For ten seconds"
- "For between 8 and 10 seconds."

<pre>
LOOPS
time = 0
while time < 60:
	print time
	time = time+1

for t in range(60):
	print t

for s in range(45,60):
	print s
</pre>

# Classes
___
- You can make your own **custom data types** (which are composed of the basic data types).

- Custom data types are made using classes. Classes **classify** your variables.	

- Classes allow you to give variables **properties**, making them more like objects from **real life**. 

- A variable with properties is called an **object**.

- These objects can have their own properties and functions.	
Humans are a part of the  Human Class. Inside of this Human Class there are male and female variables.

- Functions inside of the Human Class can be walk(), talk(), speak() etc.

- Classes should be named like **types of things**. An apple is a type of fruit and belongs in a Fruit Class. 

- Another way to name classes is as a **subject**. 
	- Functions in a math class would be **add()**, **subtract()**, **multiply()**, **divide()**.
	- Of course, these math functions would do something to **integer** and **float** variables.

## Superclass/Subclass 
- One class  can be **part of another class**.
- A woman is part of the female class, and a female is part of the human class. 
- If there were an object named Sarah, she would be part of the woman class, and she would also **inherit traits** /properties from the female and human classes.
- A class inherting traits from another is called **Inheritance**.

## Method
A **function** that is **in a class** is called a **method** (sometimes used interchangeably with the word "function")

## Objects
- Each object you create from a class is called an instance of that class, because it retains the properties of that class, though it is a unique **entity**.

- Now we can instruct our Sarah object to cut() apples and oranges and blend() them for 10 seconds.

- Then we can have our John object drink the blended apples and oranges. Yum!

- Programming that uses objects is called **Object Oriented Programming** or **OOP** for short.

## Instance/Member Variable
- A variable defined in a class is called an instance/member variable.		

- An apple is part of the Fruit Class, in which there are variables like taste, color, type, etc. Taste, color, and type are member variables. They are variables unique to the Fruit Class.

<pre>
# CLASSES
class MathGenius:
	PI = 3.14159265359
	E = 2.71828182846
	#avogadro
	#universal constant
	def __init__(self):
		pass
	
	def Add(self,a,b):
		print a+b
	
	def Subtract(self,a,b):
		print a-b
	
	def Multiply(self,a,b):
		print a*b
	
	def Divide(self,a,b):
		print a/b

class SuperMathGenius(MathGenius):
	def __init__(self):
		MathGenius.__init__(self)
	def Pow(self,a,b):
		print a**b
	def FindTriangleArea(self,b,h):
		print b*h
	def FindRectangleArea(self,s1,s2):
		print 2*s1*s2
	def FindCircleArea(self,r):
		print MathGenius.PI*(r*r)
	def FindSlope(self,x2,x1,y2,y1):
		rise = x2-x1
		run = y2-y1
		slope =float(rise)/run
		print 'Slope'
		print slope

Joe = MathGenius()
Joe.Add(1,3)
Joe.Subtract(393929292,8282932)
Joe.Multiply(839393,9393903)
Joe.Divide(839393939393,8383)

Sarah = SuperMathGenius()
print MathGenius.PI
print MathGenius.E
print

Sarah.Add(2,4)
Sarah.Pow(2,3)
Sarah.FindTriangleArea(2,5)
Sarah.FindCircleArea(7)
Sarah.FindSlope(-9,3,7,-12)
</pre>

# Modules/Libraries
___
- Why bake bread from scratch when you can buy a loaf? Collections of classes, functions and variables made by other people, that you can use in your own program recipe are called Libraries.

## Importing
- In order to use a library, it has to be imported into your program

<pre>
MODULES
import math
print math.pi
print math.e
print math.factorial(10)
</pre>

# API
___
An API (**Application programming Interface**) is a **collection** of classes, functions and variables for another program, that are made available to you for the purpose for programming for the other program. 

In order to have access to some APIs you must been given a key to access it.
Event then, only certain parts of the API may be made accessible to you.

If you wanted to make your own Twitter app that can post to Twitter, you have to use Twitter's API. Twitter has to give you a key to access parts of their API.

Twitter's API is Twitter's recipe, and you are allowed to use part of their API to use part of their recipe.

# SDK
An **SDK** or **Software  Development** kit is a **tool  bag** provided to you for the purpose of developing programs. It is a collection of classes and functions and variables that help you make programs faster. 
Both IOS and Android have  SDKs.

#Additional Info
___
## IDE

If you want to write a computer program, you need something to **write it in**.  You use a word processor to write essays and you write programs in an IDE (**Integrated Development Environment**).

It is an environment  that you develop in! Develop what? Develope programs -- those super tasty code recipe masterpieces! **XCODE** is Apple's IDE. You make iPhone apps in XCODE and Android apps in **Eclipse**.

## SOURCE CODE

In compter programming, your **entire recipe** with its ingredients and instructions is called your **source code**.

A lot of programmers keep their source code a secret, like a secret recipe. Programs that are not secret are called **Open Source** programs.

##  SYNTAX

There are different types of langauges you can write in, and each language has its own grammar rules. The **grammar rules** of computer programming is called the **syntax** of the language.

If your syntax is not correct, the computer will not understand what you are saying. In some languages they use a simicolon to end a statement, just like we use a period to end a sentence -- different syntax.

## PROGRAMMING STYLE
Your programming style is the way in which the developer **styles their source code**, usually according to a set of rules or standards.

Just as there are various styles for writing poems , there are different styles to writing programs. 

Some rules a style might follow are:

- Indent all function code
- capitalize the first letter in a function name
- white-space between statements.

By default, the Python programming language forces you to indent function code  (for style purposes). Styles are sometimes chosen for readability (by other developers).


## DEBUGGING

Say that you finish your game or app and run it, and nothing works! That means that somewhere, there is a mistake in your code. The process of **correcting errors** in your code is called **debugging**.

## ALGORITHMS

When people write recipes, there is a **certain order** in which you are supposed to cook or prepare the food or supplies. In computer programming, it is called an **algorithm**.

For instance, you might tell the computer to gather all of the supplies first, and then you tell it to do stuff with those supplies. One main reason games or apps lag is because they have bad algorithms.

For example, I might tell the computer to Cut() and Butter() the bread after I tell it to Eat() the bread. The computer cannot cut and butter bread that it has already eaten, so you get an **error**.

Although a bad algorithm might not give you an error, it could take too much time, when there is an easier way. 

I once saw a computer program that was a page long, and all it did was make an object follow the mouse cursor. I did the same thing with one line of code, and it was faster!

## MEMORY

Computers, much like humans, can only remember so much at one time. Anything stored in the memory of the computer can be accessed quicker than something that isn't.

Most data/directions go into the **RAM** (Random Access Memory) part of the computer brain. Another place information is stored is in the **ROM** (Read-only memory). I am no nerosurgeon so I will stop there. All you need to know is that you shouldn't overload the computer with instructions when it can only remember so much.

I wrote a program that made my computer calculate the ccurrent Year, Month, Day, Hour, Minute, and Second 20,000 times fast. My computer fan started humming

## INTERACTIVITY

Interativity is a way for **users** like you and me to **interact with** and change the code of a **program** without having to open the code in an IDE and change variables or functions.

For example, when you select a number in the timer section of the clock app on your iPhone, you are actually changing the value of a variable in the code. Let's say the name of that variable is *timer*.

When you tap the "Start" button, you are starting a function (remember that functions do something to variables). If I had to guess, the start function counts down from the timer number.

All you had to do was scroll and tap to manipulte the code. You *interacted* with the program.

## EVENTS, EVENT LISTENERS, EVENT HANDLERS

When you **press a key** on your keyboard, that is an event. When you **click a button** on your mouse or **swipe or pinch** on your ipad, that is an **event**.

The **event listener** is a function that **detects the event**, and the **event handler** is a function that  **links that event** to a function or class in your program.

Events are what connect our physical actions to the didgital actions of the computer, making it interactive.

## COMPILE
After you write your program you have to translate it back into something the computer actually understands (into machine language). This process is called **compiling**. A **compiler** is a program that compiles programs.

## EXECUTE
When you finally run your program, the computer executes it. In other words the instructions in the recipe are carried out by the computer. An .exe file is a type of "executable file." 

## PROGRAMMING LANGUAGES

### HIGH-LEVEL LANGUAGES
The easier the language you program in is to understand by humans, the higher its level is (most of the time).
A programming language like LUA is a high-level language. They say it is more "**human-readable**". 

### LOW-LEVEL LANGUAGES
Computers cannot understand high-level programming languages. Computers understand what is called "**machine language**." Machine language is the lowest level language. **Assembly** is the second lowest low-level programming language.

Assembly is the middleman language between machine code and human-readable code.

Machine code is a collection of 1s and 0s to the effect of "0001110110," that signify instructions to the CPU --central processing unit-- of the computer. 

### COMPILED LANGUAGES
A compiled programming language is a program that gets compiled (into machine language) and thereafter, read by the computer.
- C
- C++
- BASIC
- Lisp
- Objective C
- Pascal
- COBOL
- Java

### INTERPRETED LANGUAGES
An interpreted programming language is one that is not translated, but interpreted, by means of an **interpreter**. The interpreter executes the program directly, without having to translate it to machine code.
- Python
- Ruby
- Javascript


## Operating System
-  An **Operating System** is a **big program** that **runs other programs** like:
	-  Windows
	-  Mac OSx 
	-  Linux
- There are even mobile operating systems:
	- IOS
	- Android
	- Windows RT
	
## Virus
-  A **Virus** is a **program that corrupts** other programs.

## Hacker
-  A **Hacker** is a **person** who **uses unconventional means** to access something. 
- There are three types of hackers
	- White Hat hackers
	- Grey Hat hackers
	- Black Hat hackers

## Pseudocode
- Pseudocode-- false/ **fake code**, is the steps of a program written in plain English. No knowledge of syntax is required. 

## Fork
- A fork is a copy of your program that can be edited without changing your original program.
- A fork occurs when a person modifies your secret recipe/source-code, making it distinctly different, and creates a separate, new program. This usually creates a schism between users. 

- Forks happen when users or developers want to modify or upgrade the original program with new features.

## Recursion
A function calling itself.
## Server
A server is a **computer** that **offers services** to another computer. At a restaurant, the restaurant server serves food to other people. in the same way, a file server, serves files to other computers. A media server serves media (photos, movies) to other computers.
# Steps To Making a Program
___
1. First, I write a description of what I want the program to do.
2. Next, I note all **nouns** in the description (usually nouns can be translated to **variables**) and write them down, taking note of their **data type**.
3. I then note all of the **verbs** in the description (verbs end up being **functions**) and write them down.
4. Now, I create/declare the nouns (as variables).
5. I then sift through the **API** to see if I can find any functions or additional variables that do what I need. If not, I will have to either make a custom function, or search google for it.
6. Lastly, I use conditional statements, loops, and classes (if necessary), to **write the program**.
7. For complicated tasks, or for more efficient programs, you could try searching for **libraries/modules** online, and import them for your own use.

Note: Throughout the process  I use the **print** function to test stuff.

To get started with python, check out my [Python Syntax](https://gist.github.com/TutorialDoctor/dda76e58fc43d7375856) tutorial.
