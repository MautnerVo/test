hello = "Hello World"

seznam = []
cisla = [0,2,32,2,3,1,31,5]
for i in hello:
    seznam.append(i)

cisla_sum = sum(cisla)/len(cisla)

print(seznam)
helloworld = hello.split(" ")
hello,world = helloworld[0],helloworld[1]
print(hello,world)

if len(hello) < 10:
    print("True") 
else:
    print("False")
