# Learn Programming: Summary

A **computer program** is a **recipe** for a computer. The computer reads the recipe and  you get a game like **Angry Birds**, a Word Processor like **Microsoft Office**, or a website like Youtube.

The **ingredients** of a program are called **variables**, and the **directions** are called **statements**. A **group of statements** is called a **function**. The most useful statement is the **print() statement**. It instructs the computer to display stuff on the screen. The print statement is a group of statements, so it is a function. Variables are named like **nouns** and functions are named like **verbs**.

<pre>
OUTPUT
print "A"
print 4
print 9.81
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

<pre>
# FUNCTION
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

There are different types of variables:

- character
- string
- integer
- float
- array
- dictionary
- tuple
- boolean

These *types* of variables are called **data types**.

<pre>
# VARIABLES & DATA TYPES

Character
middle_initial = "J"

String:
first_name = 'Raphael'
last_name = 'Smith'

Integer:
age = 29

Float
height = 6.3

Array:
hobbies = ['Art','Science','Programming','Game Development']

Dictionary:
definition = {
              'Program':'A recipe for a computer',
              'Variable':'The ingredient of a computer program',
              'Statement':'The instruction of a computer program',
              'Function':'A group of statements'
              }

Tuple:
location = (47.6,122.33) #Seattle Washington N/W

Boolean:
cool = True

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

If you only want to the computer to do something under certain **conditions**, you use **conditional statements**:

- if (if...)
- else if/elif (otherwise)
- else (if anything else...)

<pre>
# CONDITIONALS
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

If you want to **repeat** instructions you use loops:
- **while** (as long as....)
- **for** (until...)

<pre>
# LOOPS
time = 0
while time < 60:
	print time
	time = time+1

for t in range(60):
	print t

for s in range(45,60):
	print s
</pre>

You can give variables **properties** by putting them in a **class**. A variable that has a class becomes an **object**. Every object of that class is an **instance** of that class. an object can use its own variables and functions unique to it, and can inherit properties from higher/super classes.

- I am an instance of the human class, with properties like hair-color, name, height, ethnicity etc. Some functions in my class are walk(), jump(), speak() etc.
- An apple is an instance of the fruit class.

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

# MODULES/LIBRARIES
- Why bake bread from scratch when you can buy a loaf? Collections of classes, functions and variables made by other people, that you can use in your own program recipe are called Libraries.
- In order to use a library, it has to be imported into your program

<pre>
MODULES
import math
print math.pi
print math.e
print math.factorial(10)
</pre>
