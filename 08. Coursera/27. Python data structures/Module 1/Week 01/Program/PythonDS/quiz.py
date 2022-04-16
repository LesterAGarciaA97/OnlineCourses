#Import the file, read the file, put the content in a list and print the list
fh = open("Vocabulary_list.csv", "r")
wd_list = fh.readlines()
print(wd_list)

