import random

def get_word_and_definition(rastring):
    word, definition = rawstring.split(',', 1)
    return word, definition


#Import the file, read the file, put the content in a list and print the list
fh = open("Vocabulary_list.csv", "r")
wd_list = fh.readlines()

wd_list.pop(0) #Remove the first entry in the list
wd_set = set(wd_list) #Remove duplicate
fh = open("Vocabulary_set.csv", "w")#Open for writing
fh.writelines(wd_set)

word_dict = dict()
for rawstring in wd_set:
    word, definition = get_word_and_definition(rawstring)
    word_dict[word] = definition
    print(word)