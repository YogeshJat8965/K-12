import re
with open("src/home/HomeLearningEcosystem.tsx", "r") as file:
    content = file.read()
    classes = set(re.findall(r'className="([^"]+)"', content))
    print([c for c in classes if c.startswith("h") or c.startswith("e") or c.startswith("m") or c.startswith("t") or c.startswith("a") or c.startswith("p") or c.startswith("r") or c.startswith("j") or c.startswith("c")])
