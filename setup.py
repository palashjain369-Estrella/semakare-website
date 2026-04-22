import os, shutil

files = {
    "colors_and_type.css": "/home/claude/repo/project/colors_and_type.css",
    "components.jsx": "/home/claude/repo/project/ui_kits/website/components.jsx",
    "Hero.jsx": "/home/claude/repo/project/ui_kits/website/Hero.jsx",
    "HowItWorks.jsx": "/home/claude/repo/project/ui_kits/website/HowItWorks.jsx",
    "WhyPillars.jsx": "/home/claude/repo/project/ui_kits/website/WhyPillars.jsx",
    "PatientStories.jsx": "/home/claude/repo/project/ui_kits/website/PatientStories.jsx",
    "FAQ.jsx": "/home/claude/repo/project/ui_kits/website/FAQ.jsx",
    "HCP.jsx": "/home/claude/repo/project/ui_kits/website/HCP.jsx",
    "HCPFooter.jsx": "/home/claude/repo/project/ui_kits/website/HCPFooter.jsx",
    "Tools.jsx": "/home/claude/repo/project/ui_kits/website/Tools.jsx",
    "Affordability.jsx": "/home/claude/repo/project/ui_kits/website/Affordability.jsx",
    "GetSupport.jsx": "/home/claude/repo/project/ui_kits/website/GetSupport.jsx",
    "index.html": "/home/claude/repo/project/ui_kits/website/index.html",
    "hcp.html": "/home/claude/repo/project/ui_kits/website/hcp.html",
    "tools.html": "/home/claude/repo/project/ui_kits/website/tools.html",
    "affordability.html": "/home/claude/repo/project/ui_kits/website/affordability.html",
    "getsupport.html": "/home/claude/repo/project/ui_kits/website/getsupport.html",
}

for dest, src in files.items():
    with open(src, 'r') as f:
        content = f.read()
    with open(dest, 'w') as f:
        f.write(content)
    print(f"✓ {dest}")

print("\nAll done! Open index.html in your browser.")
