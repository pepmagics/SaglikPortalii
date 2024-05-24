import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score ,confusion_matrix ,classification_report
import numpy as np
import warnings
warnings.filterwarnings("ignore", category=UserWarning, module="sklearn")
import sys


range_input = sys.argv[1:]

age = int(range_input[0])
print("deneme", age)
gender = int(range_input[1])
airPollution = int(range_input[2])
alcoholUse = int(range_input[3])
dustAllergy = int(range_input[4])
occupationalHazards = int(range_input[5])
geneticRisk = int(range_input[6])
chronicLungDisease = int(range_input[7])
balancedDiet = int(range_input[8])
obesity = int(range_input[9])
smoking = int(range_input[10])
passiveSmoker = int(range_input[11])
chestPain = int(range_input[12])
coughingOfBlood = int(range_input[13])
fatigue = int(range_input[14])
weightLoss = int(range_input[15])
shortnessOfBreath = int(range_input[16])
wheezing = int(range_input[17])
swallowingDifficulty = int(range_input[18])
clubbingOfFingerNails = int(range_input[19])
frequentCold = int(range_input[20])
dryCough = int(range_input[21])
snoring = int(range_input[22])


data = pd.read_csv("./src/cancer_patient_data_sets.csv")

data = data.drop(['index','Patient Id'], axis=1)

data.isnull().sum()

data.shape

data.columns

data['Level'] = data['Level'].replace({'Low': 1, 'Medium': 2, 'High': 3})

data['Level'].value_counts()

data.duplicated().sum()

data.shape

x = data.drop('Level' , axis=1)
y = data[['Level']]

xtrain,xtest,ytrain,ytest = train_test_split(x,y ,random_state = 42 ,test_size = .30)

xtrain.shape

xtest.shape

dtc = DecisionTreeClassifier()

dtc.fit(xtrain,ytrain)

dtc.score(xtest,ytest)

dtc.score(xtrain,ytrain)

cm = confusion_matrix(ytest,dtc.predict(xtest))
cm

x_new = [[age, gender, airPollution, alcoholUse, dustAllergy, occupationalHazards, geneticRisk, chronicLungDisease, balancedDiet, obesity, smoking, passiveSmoker, chestPain, coughingOfBlood, fatigue, weightLoss, shortnessOfBreath, wheezing, swallowingDifficulty, clubbingOfFingerNails, frequentCold, dryCough, snoring]]

# Oluşturduğunuz modeli kullanarak tahmin yapın
prediction = dtc.predict(x_new)


# Tahmin sonucunu yazdırın
print(prediction)