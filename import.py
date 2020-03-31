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
		thisdict={}
		str1 = ''
		str1 = str1.join(row)
		nlist = str1.split(',')
	
		thisdict['unitId'] = nlist[0]
		thisdict['college'] = nlist[3]
		thisdict['city'] = nlist[4]
		thisdict['zip'] = nlist[6]
		thisdict['cost'] = nlist[316]
		thisdict['gRate'] = nlist[387]
		thisdict['act_e'] = nlist[57]
		thisdict['act_f'] = nlist[58]  
		thisdict['act_g'] = nlist[59]
		thisdict['sat_avg'] = nlist[60]  			
		
		thisdict['sat_25_R'] = nlist[39]
		thisdict['sat_75_R'] = nlist[40]
		thisdict['sat_25_M'] = nlist[41]
		thisdict['sat_75_M'] = nlist[42]
		thisdict['sat_25_W'] = nlist[43]
		thisdict['sat_75_W'] = nlist[44]
	
		result = db.scoreCard.insert_one(thisdict)
		print(result)
	i = i + 1	
