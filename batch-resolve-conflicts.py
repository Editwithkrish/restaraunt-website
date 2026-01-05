
import os
import re

def resolve_conflicts_in_file(path):
    try:
        with open(path, 'rb') as f:
            raw_content = f.read()
        content = raw_content.decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Skipping {path}: {e}")
        return

    if '<<<<<<< HEAD' not in content:
        return

    print(f"Resolving conflicts in {path}...")
    
    # Conflict pattern:
    # <<<<<<< HEAD
    # (content A)
    # =======
    # (content B)
    # >>>>>>> (hash)
    
    # Using \r?\n to handle Windows line endings
    # Also using a more flexible hash pattern
    pattern = re.compile(r'<<<<<<< HEAD\r?\n(.*?)\r?\n=======\r?\n(.*?)\r?\n>>>>>>> [a-f0-9]+', re.DOTALL)
    
    resolved_text = content
    count = 0
    while True:
        match = pattern.search(resolved_text)
        if not match:
            break
        head_version = match.group(1)
        resolved_text = resolved_text[:match.start()] + head_version + resolved_text[match.end():]
        count += 1
    
    if count > 0:
        with open(path, 'w', encoding='utf-8', newline='') as f:
            f.write(resolved_text)
        print(f"  Fixed {count} conflicts.")
    else:
        print("  Found marker but no match.")

def walk_and_fix(root_dir):
    for root, dirs, files in os.walk(root_dir):
        if '.git' in dirs:
            dirs.remove('.git')
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        if '.next' in dirs:
            dirs.remove('.next')
            
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.css')):
                resolve_conflicts_in_file(os.path.join(root, file))

walk_and_fix(os.getcwd())
print("Batch conflict resolution completed.")
