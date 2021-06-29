#!/usr/bin/python3

print("content-type: text/html")
print()

import subprocess 
import cgi


fields =cgi.FieldStorage()

result =fields.getvalue("command")

x=subprocess.getoutput("sudo " +result)
print(x)

