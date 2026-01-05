
import os

path = r"c:\Users\admin\Downloads\restaraunt-website-main\restaraunt-website-main\app\page.tsx"

with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if '{ label: "Authentic Dishes"' in line:
        print(f"Found line {i+1}, replacing...")
        lines[i] = '              { label: "Authentic Dishes", value: "150+", icon: <Utensils className="h-5 w-5" /> },\n'
    elif '{ label: "Expert Chefs"' in line:
        print(f"Found line {i+1}, replacing...")
        lines[i] = '              { label: "Expert Chefs", value: "10+", icon: <Crown className="h-5 w-5" /> }\n'

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Fix completed.")
