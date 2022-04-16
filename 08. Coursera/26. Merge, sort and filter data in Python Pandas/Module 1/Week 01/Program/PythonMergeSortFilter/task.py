import pandas as pd
import matplotlib
import seaborn as sns
from matplotlib import pyplot as plt

df_temp = pd.read_csv(r'tempYearly.csv')
df_rain = pd.read_csv(r'rainYearly.csv')

print(df_temp)
print(df_rain)

df_temp.plot.scatter(x='Year', y='Temperature', label = 'Temperature and Year')

plt.show()

df_rain.plot.scatter(x='Year', y='Rainfall', label = 'Rainfall and Year')

plt.show()