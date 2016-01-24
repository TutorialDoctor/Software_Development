# coding: utf-8
import sqlite3

# Connect to a database:
connection = sqlite3.connect('people.db')
# If people.db is does not already exist, it will be created.

# Create a cursor for querying (moving through) the database:
cursor = connection.cursor()

# Now we can create a table with the cursor called information:
cursor.execute("create table information (date text, name text, age integer, height real)")

# To insert data into the table with the cursor:
cursor.exectute("insert into information values ('1986-04-09','John Doe',28,6.1)")

# That is all you need to do to create a database!
# You can commit the changes to the connected database:
connection.commit()

# If you want the data to be saved you have to close the connection.
connection.close()

# You will get an error if you create a table twice as it will already exist. You may alter a table though.
# We will see how to do this later. 

