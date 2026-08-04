#!/bin/bash
# Find all PNG/JPG/JPEG files that have a corresponding .webp version
# and verify the original is NOT imported anywhere in source code.

DELETED=0
SKIPPED=0
SAVED_BYTES=0

find src/assets -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.PNG" -o -name "*.jpeg" \) | while read orig; do
  # Get the base path without extension
  base="${orig%.*}"
  
  # Check if a .webp version exists
  if [ -f "${base}.webp" ]; then
    # Get just the filename for grep
    filename=$(basename "$orig")
    
    # Check if ANY source code imports this specific non-webp file
    if grep -rq "$filename" src/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" 2>/dev/null; then
      echo "SKIP (still imported): $orig"
      SKIPPED=$((SKIPPED + 1))
    else
      size=$(stat -c%s "$orig" 2>/dev/null || echo 0)
      echo "DELETE: $orig  ($(echo "scale=1; $size/1024/1024" | bc) MB)"
      rm "$orig"
      DELETED=$((DELETED + 1))
      SAVED_BYTES=$((SAVED_BYTES + size))
    fi
  fi
done

echo ""
echo "=== SUMMARY ==="
echo "Files deleted: see above"
echo "Done!"
