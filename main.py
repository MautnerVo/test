hello = "Hello World"

seznam = []

for i in hello:
    seznam.append(i)

print(seznam)
helloworld = hello.split(" ")
hello,world = helloworld[0],helloworld[1]
print(hello,world)

if len(hello) < 10:
    print("True") 
else:
    print("False")
