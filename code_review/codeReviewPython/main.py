from classes.cars import Car
from classes.motorcycles import Motorcycle

# vehicule data
vehicles = [
    {
        "type": "car",
        "make": "Toyota",
        "model": "Camry",
        "owner": "John",
    },
    {
        "type": "car",
        "make": "Honda",
        "model": "Civic",
        "owner": "Alice",
    },
    {
        "type": "motorcycle",
        "make": "Harley-Davidson",
        "model": "Street 750",
        "owner": "Bob",
    }
]

 
vehicle_instances = []

for item in vehicles:
    if item["type"] == "car":
        # create an instance of "car" class for cars
        vehicle = Car(item["make"], item["model"], item["owner"])
        
    elif item["type"] == "motorcycle" :
        # create an instance of "motorcycle" class for motorcycles
        vehicle = Motorcycle(item["make"], item["model"], item["owner"])
    vehicle_instances.append(vehicle)
    print("\n")
    print("*"*50)
    print("\n")
    print(f"added to vehicule instance {vehicle.display_info()}")
    
print("\n")
print("*"*50)
print("\n")

vehicle_instances[0].update_owner("mo7sen")

print(vehicle_instances[0].display_info())


for vehicle in vehicle_instances:
    print(f"vehicle info : {vehicle.display_info()}")