import re

with open("src/home/HomeResponsive.css", "r") as f:
    content = f.read()

# Replace the FIX 1 in HomeResponsive.css with a block-based layout instead of flex
new_fix = """  /* FIX 1: Mission + Globally Aligned */
  .hm-inner {
    display: block !important;
    width: 100% !important;
  }

  .hm-left, .hm-right {
    display: block !important;
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
    margin-bottom: 24px !important;
    box-sizing: border-box !important;
  }

  .hm-left * {
    word-break: normal !important;
    overflow-wrap: normal !important;
    white-space: normal !important;
  }"""

# Use regex to replace the old block
content = re.sub(r'/\* FIX 1: Mission \+ Globally Aligned \*/.*?/\* FIX 2:', new_fix + '\n\n  /* FIX 2:', content, flags=re.DOTALL)

with open("src/home/HomeResponsive.css", "w") as f:
    f.write(content)

