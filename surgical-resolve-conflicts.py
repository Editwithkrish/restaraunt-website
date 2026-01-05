
import os

def resolve_conflicts_in_file(path):
    try:
        with open(path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except Exception as e:
        print(f"Skipping {path}: {e}")
        return

    new_lines = []
    in_conflict = False
    keep_head = True
    
    modified = False
    for line in lines:
        if line.startswith('<<<<<<< HEAD'):
            in_conflict = True
            keep_head = True
            modified = True
            continue
        elif line.startswith('======='):
            keep_head = False
            modified = True
            continue
        elif line.startswith('>>>>>>>'):
            in_conflict = False
            modified = True
            continue
        
        if in_conflict:
            if keep_head:
                new_lines.append(line)
        else:
            new_lines.append(line)

    if modified:
        with open(path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"  Cleaned conflicts in {path}")

def walk_and_fix(root_dir):
    for root, dirs, files in os.walk(root_dir):
        if any(d in root for d in ['.git', 'node_modules', '.next']):
            continue
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.css')):
                resolve_conflicts_in_file(os.path.join(root, file))

walk_and_fix(os.getcwd())
print("Conflict cleanup completed.")
