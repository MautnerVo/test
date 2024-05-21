hello = "Hello World" #string

seznam = []

for i in hello:
    seznam.append(i)

print(seznam)
print(hello.split(" "))

if len(hello) < 10: #pokud delka stringu vetsi jak 10
    print("True") 
else:
    print("False")
