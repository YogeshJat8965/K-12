import re

with open("src/home/HomeResponsive.css", "r") as f:
    content = f.read()

# Remove the old hm-inner blocks
content = re.sub(r'\.hm-inner\s*\{[^}]*\}', '', content)
content = re.sub(r'\.hm-left,\s*\.hm-right\s*\{[^}]*\}', '', content)
content = re.sub(r'\.hm-left \*\s*\{[^}]*\}', '', content)

with open("src/home/HomeResponsive.css", "w") as f:
    f.write(content)
