# coding: utf-8
import sqlite3

# Connect to the database:
connection = sqlite3.connect('people.db')

# Creat a cursor for quwerying (moving through) the database
cursor = connection.cursor()

# To select from the database with the cursor:
for row in cursor.execute("select * from information"):
    print row

# The * means 'everything'. So we select everything from the information table

