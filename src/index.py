import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
import numpy as np
import warnings
warnings.filterwarnings("ignore", category=UserWarning, module="sklearn")
import sys

range_input = sys.argv[1:]

# Correct the feature assignments based on the new structure
age = int(range_input[0])
gender = int(range_input[1])
airPollution = int(range_input[2]) + 1
alcoholUse = int(range_input[3]) + 1
dustAllergy = int(range_input[4]) + 1
occupationalHazards = int(range_input[5]) + 1
geneticRisk = int(range_input[6]) + 1
chronicLungDisease = int(range_input[7]) + 1
obesity = int(range_input[8]) + 1
smoking = int(range_input[9]) + 1
passiveSmoker = int(range_input[10]) + 1
chestPain = int(range_input[11]) + 1
coughingOfBlood = int(range_input[12]) + 1
fatigue = int(range_input[13]) + 1
weightLoss = int(range_input[14]) + 1
shortnessOfBreath = int(range_input[15]) + 1
wheezing = int(range_input[16]) + 1
swallowingDifficulty = int(range_input[17]) + 1
clubbingOfFingerNails = int(range_input[18]) + 1
frequentCold = int(range_input[19]) + 1
dryCough = int(range_input[20]) + 1
snoring = int(range_input[21]) + 1

# Load and preprocess the dataset
data = pd.read_csv("./src/cancer_patient_data_sets.csv")

# Remove unnecessary columns
data = data.drop(['index', 'Patient Id', 'Balanced Diet'], axis=1)

# Encode target variable
data['Level'] = data['Level'].replace({'Low': 1, 'Medium': 2, 'High': 3})

# Define features and target
x = data.drop('Level', axis=1)
y = data[['Level']]

# Split the data into training and testing sets
xtrain, xtest, ytrain, ytest = train_test_split(x, y, random_state=42, test_size=0.30)

# Train the DecisionTreeClassifier
dtc = DecisionTreeClassifier()
dtc.fit(xtrain, ytrain)

# Validate model
cm = confusion_matrix(ytest, dtc.predict(xtest))

# Prepare new input for prediction
x_new = [[age, gender, airPollution, alcoholUse, dustAllergy, occupationalHazards, geneticRisk, chronicLungDisease, obesity, smoking, passiveSmoker, chestPain, coughingOfBlood, fatigue, weightLoss, shortnessOfBreath, wheezing, swallowingDifficulty, clubbingOfFingerNails, frequentCold, dryCough, snoring]]

# Predict using the trained model
prediction = dtc.predict(x_new)

print(prediction)
