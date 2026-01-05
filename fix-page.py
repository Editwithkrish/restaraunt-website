
import os

path = r"c:\Users\admin\Downloads\restaraunt-website-main\restaraunt-website-main\app\page.tsx"

with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Lines to remove: 221 to 225 (indices 220 to 224)
# We remove in reverse order to keep indices valid
for i in range(224, 219, -1):
    if i < len(lines):
        print(f"Removing line {i+1}: {lines[i].strip()}")
        lines.pop(i)

# Fix stats icons (lines 357 and 358)
# Since we popped 5 lines, the new indices are 356-5 = 351 (for 357) and 352 (for 358)
# Wait, let's find the lines by content to be safer
for i, line in enumerate(lines):
    if '{ label: "Authentic Dishes"' in line:
        lines[i] = line.replace('icon: "ðŸ ²"', 'icon: <Utensils className="h-5 w-5" />')
    if '{ label: "Expert Chefs"' in line:
        lines[i] = line.replace('icon: "ðŸ‘¨â€ ðŸ ³"', 'icon: <Crown className="h-5 w-5" />')

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Fix completed.")
