import numpy as np
import pandas
import matplotlib.pyplot as plt

plt.violinplot(dataset=np.random.randn(200, 10) + np.random.randn(10))
plt.xlabel("Action")
plt.ylabel("Reward distribution")
plt.show()
