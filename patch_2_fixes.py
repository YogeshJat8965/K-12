import re

with open("src/home/HomeResponsive.css", "r") as f:
    content = f.read()

# I will just append the two exact blocks to the end of the file to override anything else.
# The !important tags and the placement at the very bottom will guarantee they work.

extra_css = """
/* =======================================================
   EXACT FIXES 1 & 2 
   ======================================================= */
@media (max-width: 768px) {
  /* FIX 1: Mission + Globally Aligned */
  .hm-inner {
    display: flex !important;
    flex-direction: column !important;
    width: 100% !important;
    gap: 16px !important;
  }

  .hm-left, .hm-right {
    width: 100% !important;
    min-width: 100% !important;
    flex: 1 1 100% !important;
    max-width: 100% !important;
  }

  .hm-left * {
    word-break: break-word !important;
    overflow-wrap: break-word !important;
    white-space: normal !important;
    overflow: visible !important;
    writing-mode: horizontal-tb !important;
    text-orientation: mixed !important;
    transform: none !important;
  }

  .hm-left img.hm-robot {
    max-width: 120px !important;
    height: auto !important;
    position: relative !important;
    margin: 20px auto 0 !important;
    display: block !important;
  }

  .hm-right .hm-tags {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
  }
  
  /* FIX 2: Our Learning Philosophy */
  .hp-item p,
  .hp-item > p,
  .hp-item-desc {
    text-align: left !important;
  }

  .hp-item {
    text-align: left !important;
    align-items: flex-start !important;
  }
}
"""

with open("src/home/HomeResponsive.css", "a") as f:
    f.write(extra_css)

