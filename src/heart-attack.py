import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.metrics import accuracy_score, classification_report
from sklearn.tree import DecisionTreeClassifier
import sys

# Kullanıcıdan alınan veriler
range_input = sys.argv[1:]

age = int(range_input[0])
sex = int(range_input[1])
diabetes = int(range_input[2])
family_history = int(range_input[3])
smoking = int(range_input[4])
obesity = int(range_input[5])
alcohol_consumption = int(range_input[6])
exercise_hours_per_week = float(range_input[7])
diet = int(range_input[8])
previous_heart_problems = int(range_input[9])
medication_use = int(range_input[10])
stress_level = int(range_input[11]) + 1
sedentary_hours_per_day = float(range_input[12])
bmi = float(range_input[13])
physical_activity_days_per_week = int(range_input[14])
sleep_hours_per_day = int(range_input[15])

# Veri kümesini yükleme
df = pd.read_csv("./src/heart_attack_prediction_dataset.csv")

# Gereksiz sütunları çıkarma
columns_to_drop = ['Patient ID', 'Country', 'Continent', 'Hemisphere', 'Triglycerides', 'Income', 'Cholesterol', 'Blood Pressure', 'Heart Rate']
df = df.drop(columns=columns_to_drop)

# 'Sex' sütununu sayısal değerlere dönüştürme
sex_mapping = {'Male': 0, 'Female': 1}
df['Sex'] = df['Sex'].map(sex_mapping)

# 'Diet' sütununu sayısal değerlere dönüştürme
diet_mapping = {'Unhealthy': 0, 'Average': 1, 'Healthy': 2}
df['Diet'] = df['Diet'].map(diet_mapping)

# Kategorik değişkenleri sayısal değerlere dönüştürme
df = pd.get_dummies(df, drop_first=True)

# Veriyi özellikler (X) ve hedef değişken (y) olarak ayırma
X = df.drop('Heart Attack Risk', axis=1)
y = df['Heart Attack Risk']

# Veriyi eğitim ve test setlerine ayırma
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Eksik değerleri işleme
imputer = SimpleImputer(strategy='mean')
X_train = imputer.fit_transform(X_train)
X_test = imputer.transform(X_test)

# Özellikleri standartlaştırma
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Decision Tree modelini tanımlama ve eğitme
model = DecisionTreeClassifier(random_state=42)
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

# Modeli değerlendirme
accuracy = accuracy_score(y_test, y_pred)

# Yeni bir veri ile tahmin yapma
new_data = np.array([[age, sex, diabetes, family_history, smoking, obesity, alcohol_consumption, 
                      exercise_hours_per_week, diet, previous_heart_problems, medication_use, 
                      stress_level, sedentary_hours_per_day, bmi, physical_activity_days_per_week, 
                      sleep_hours_per_day]])  # Örnek yeni veri
new_data = imputer.transform(new_data)  # Eksik değerleri işleme
new_data = scaler.transform(new_data)  # Standartlaştırma

# Tahmin yapma
prediction = model.predict(new_data)
print({prediction[0]})
