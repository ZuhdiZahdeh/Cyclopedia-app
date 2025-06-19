
import os
from pathlib import Path

# المسار إلى مجلد الصور الرئيسي
base_path = Path("images")  # ← غيّره إذا كان المجلد في مكان آخر

# البحث في جميع المجلدات الفرعية
for folder in base_path.glob("*"):
    if folder.is_dir():
        for file in folder.glob("*.*"):
            old_name = file.name
            new_name = old_name.lower()

            if old_name != new_name:
                new_path = file.with_name(new_name)
                file.rename(new_path)
                print(f"✅ Renamed: {old_name} → {new_name}")
