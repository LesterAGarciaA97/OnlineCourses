#Import the file, read the file, put the content in a list and print the list
fh = open("Vocabulary_list.csv", "r")
wd_list = fh.readlines()
print(wd_list)

wd_list.pop(0) #Remove the first entry in the list
wd_set = set(wd_list) #Remove duplicate
fh = open("Vocabulary_set.csv", "w")#Open for writing
fh.writelines(wd_set)