
import os
import re

path = r"c:\Users\admin\Downloads\restaraunt-website-main\restaraunt-website-main\app\page.tsx"

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Resolve all git merge conflicts by keeping HEAD version
# Conflict pattern:
# <<<<<<< HEAD
# (content A)
# =======
# (content B)
# >>>>>>> (hash)

def resolve_conflicts(text):
    pattern = re.compile(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [a-f0-9]+', re.DOTALL)
    
    # We'll use a loop to handle nested/sequential conflicts if any (though usually they are flat)
    resolved_text = text
    while True:
        match = pattern.search(resolved_text)
        if not match:
            break
        # Keep version A (HEAD)
        head_version = match.group(1)
        resolved_text = resolved_text[:match.start()] + head_version + resolved_text[match.end():]
    
    return resolved_text

# Second pass for incomplete conflict markers if any
content = resolve_conflicts(content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Conflicts resolved in favor of HEAD.")
