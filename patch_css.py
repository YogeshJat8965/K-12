import re

with open("src/home/HomeResponsive.css", "r") as f:
    content = f.read()

# Remove the old section 5 and 11
content = re.sub(r'/\* ===+ SECTION 5.*?/\* ===+ SECTION 6', '/* === SECTION 6', content, flags=re.DOTALL)
content = re.sub(r'/\* ===+ SECTION 11.*?/\* ===+ SECTION 12', '/* === SECTION 12', content, flags=re.DOTALL)

# Now we construct the new CSS
new_css = """
/* =======================================================
   SECTION 5: FOUR PILLARS (HomeLearningEcosystem)
   ======================================================= */
@media (max-width: 1024px) {
  .hle-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
  .hle-img-wrap { height: 200px !important; }
  .hle-img-wrap img { height: 100% !important; object-fit: cover !important; width: 100% !important; }
}

@media (max-width: 768px) {
  .hle-grid { grid-template-columns: 1fr !important; }
  .hle-title { font-size: 1.8rem !important; text-align: center !important; }
  .hle-img-wrap { height: 200px !important; width: 100% !important; }
  .hle-card-subtitle { font-size: 0.7rem !important; }
  .hle-card-title { font-size: 1.3rem !important; }
  .hle-card-desc { font-size: 0.9rem !important; }
  .hle-card-btn { width: 32px !important; } /* Reset back from oval */
}

@media (max-width: 480px) {
  .hle-img-wrap { height: 180px !important; }
  .hle-card-title { font-size: 1.1rem !important; }
  .hle-card-desc { font-size: 0.85rem !important; }
}

/* =======================================================
   SECTION 11: BUILT FOR EVERY LEARNER (HomeEcosystem)
   ======================================================= */
@media (max-width: 1024px) {
  .he-card { padding: 24px !important; }
  .he-img-area { height: 180px !important; }
  .he-img-area img { height: 100% !important; object-fit: cover !important; }
  .he-bullets li { font-size: 0.85rem !important; }
}

@media (max-width: 768px) {
  .he-grid { grid-template-columns: 1fr !important; }
  .he-img-area { height: 200px !important; width: 100% !important; }
  .he-card-label { font-size: 0.7rem !important; }
  .he-card-title { font-size: 1.3rem !important; }
  .he-bullets li { font-size: 0.9rem !important; }
  .he-btn { width: 100% !important; text-align: center !important; }
  .he-title-base { font-size: 1.8rem !important; text-align: center !important; }
}

@media (max-width: 480px) {
  .he-img-area { height: 160px !important; }
  .he-bullets li { font-size: 0.82rem !important; }
}

/* =======================================================
   BADGES ALIGNMENT FIX
   ======================================================= */
@media (max-width: 768px) {
  .ha-label,
  .he-badge,
  .ef-label,
  .hp-badge,
  .hle-badge {
    margin-left: auto !important;
    margin-right: auto !important;
    display: flex !important;
    width: fit-content !important;
    justify-content: center !important;
    text-align: center !important;
    margin-bottom: 16px !important;
  }
}
"""

content += new_css

with open("src/home/HomeResponsive.css", "w") as f:
    f.write(content)

