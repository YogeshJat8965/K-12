import os
import re

directory = 'src/home'
for filename in os.listdir(directory):
    if filename.endswith('.tsx'):
        path = os.path.join(directory, filename)
        with open(path, 'r') as f:
            content = f.read()

        # Replace standard large paddings with smaller gaps
        # Matches: padding: 100px 0; or padding: 120px 0 100px;
        content = re.sub(r'padding:\s*(?:100|120|80|140|160|150)px 0(?: (?:100|120|80)px)?;', 'padding: 40px 0;', content)
        content = re.sub(r'padding:\s*100px 0 0 0;', 'padding: 40px 0 0 0;', content)
        
        # Replace clamps in HomeTrusted
        content = content.replace('clamp(60px,5vw,100px)', 'clamp(30px,3vw,50px)')
        content = content.replace('clamp(48px,4vw,80px)', 'clamp(30px,3vw,50px)')

        with open(path, 'w') as f:
            f.write(content)

print("Padding patched successfully.")
