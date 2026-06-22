import os
import re

files = [
    "HomeHero.tsx", "HomeMission.tsx", "HomeTrusted.tsx", "HomeAbout.tsx", 
    "HomeEcosystem.tsx", "HomeExecution.tsx", "HomeJourney.tsx", "HomePhilosophy.tsx", 
    "HomeAdobe.tsx", "HomeReady.tsx", "HomeCTA.tsx"
]

for f in files:
    path = os.path.join("src/home", f)
    if os.path.exists(path):
        with open(path, "r") as file:
            content = file.read()
            # find all classNames
            classes = set(re.findall(r'className="([^"]+)"', content))
            print(f"--- {f} ---")
            print([c for c in classes if c.startswith("h") or c.startswith("e") or c.startswith("m") or c.startswith("t") or c.startswith("a") or c.startswith("p") or c.startswith("r") or c.startswith("j") or c.startswith("c")])
