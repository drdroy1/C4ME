import csv
import sys
import json

from pymongo import MongoClient

# connect to MongoDB
client = MongoClient(port=27017)
db = client.c4me

# maximizing csv value
csv.field_size_limit(sys.maxsize)
i = 0
with open('tmp/data.csv', 'r') as csvfile:
	spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
	for row in spamreader:
		if i == 1:
			str1 = ''
			str1 = str1.join(row)
			nlist = str1.split(',')
			entry = json.dumps(nlist)
			result = db.scoreCard.insert_one(entry)
			print(result)
		i = i + 1	
