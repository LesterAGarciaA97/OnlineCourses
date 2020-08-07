import pandas as  pd

#Create a key:value collection of series to use
#to populate the datafram for testing
data = {'Month':pd.Series(['January', 'February', 'March', 'April', 
'May', 'June', 'July', 'August', 'September', 'October', 
'November', 'December']),
'Rainfall':pd.Series([1.65, 1.25, 1.94, 2.75, 2.75, 3.65, 5.05, 1.50,
1.33, 0.07, 0.50, 2.30]),
}


#Create a dataframe using the static data

#df = pd.DataFrame(data)
#print ("Our data frame:")
#print (df, "\n")

#dfc = pd.read_csv(r'./rain.csv')
#print ("Our data frame:")
#print (dfc, "\n")

df = pd.read_json(r'./rain.json')
print ("Our data frame:")
print (df, "\n")

#Fill in the missing values with zeros
#dfzeros = df.fillna(0)
#print ("Our data with zeros values: ", dfzeros)

#Remove rows with the missing values
dfclean = df.dropna(0)
print ("Our data with dropped values: \n", dfclean)

#Create a count of all rows contain Nans
count = 0
for index, row in df.iterrows():
    if any(row.isnull()):
        count = count + 1
print("\nNumber of rows with NaNs: " + str(count))


print("Mean:")
print(dfclean.mean())

print("\n", "Median:")
print(dfclean.median())

print("\n", "Standard deviation:")
print(dfclean.std())


#Print the rainfall and mean for few months
rainfall = dfclean['Rainfall'][0:3]
print(rainfall, "\n")
print("Mean Rainfall: ", rainfall.mean(), "\n")

print("\n Just temperature and rainfall data")

dfTempRain = (dfclean[['Temperature', 'Rainfall']])
print(dfTempRain)
print("mean: \n", dfTempRain.mean())

index = dfclean['Month']
dfIndexed = dfclean.set_index(index)

#Requires a properly indexed dataframe
print("Finds a row by value \n", dfIndexed.loc['March'])