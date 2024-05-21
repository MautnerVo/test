import numpy as np
import matplotlib.pyplot  as plt
hello = "Hello"
world = "Universe"

print(np.random.randint(0,10)*np.random.randint(10,20))

plt.plot([int(x**2) for x in range(-20,20)])#plot
plt.plot([int((x**2)*-1) for x in range(-20,20)])#plot2
plt.show()