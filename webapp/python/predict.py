import pickle
import sys
from urllib.request import urlopen

car_cylinders = 4
car_displacement = 400
car_horsepower = 150
car_weight = 3500
car_acceleration = 8
car_model_year = 81
car_origin = 1
car = [[car_cylinders, car_displacement, car_horsepower, car_weight, car_acceleration, car_model_year, car_origin]]

model = pickle.load(urlopen("https://cdn.glitch.com/0a65196d-d733-45ec-a558-c76040e35104%2Flr_model?v=1606134799623"))
result = model.predict(car)

print(result)