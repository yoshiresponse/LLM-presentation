#!/usr/bin/env python3
"""
Build script to generate index.html from individual slide files
"""
import os
import json

def build_presentation():
    # Read the slides configuration
    with open('slides.json', 'r') as f:
        config = json.load(f)
    
    # Start building the HTML content
    html_content = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LLM Coding Presentation</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body class="bg-gray-900 text-white">

    <div id="presentation-container" class="relative w-screen h-screen">
'''
    
    # Add each slide
    for i, slide_config in enumerate(config['slides']):
        slide_file = slide_config['file']
        try:
            with open(slide_file, 'r') as f:
                slide_content = f.read()
                # Remove the HTML comments and just keep the div content
                slide_content = slide_content.strip()
                if slide_content.startswith('<!--') and slide_content.find('-->') != -1:
                    # Remove comment, but keep it for reference
                    comment_end = slide_content.find('-->') + 3
                    comment = slide_content[:comment_end]
                    slide_div = slide_content[comment_end:].strip()
                    html_content += f"        {comment}\n        {slide_div}\n\n"
                else:
                    html_content += f"        {slide_content}\n\n"
        except FileNotFoundError:
            print(f"Warning: Could not find slide file {slide_file}")
    
    # Add the closing HTML
    html_content += '''    </div>

    <!-- Navigation -->
    <div class="fixed bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-50 flex justify-between items-center">
        <button id="prev-btn" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors">Previous</button>
        <div id="slide-counter" class="text-lg font-medium"></div>
        <button id="next-btn" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors">Next</button>
    </div>

    <script src="presentation.js"></script>
</body>
</html>'''
    
    # Write the final HTML file
    with open('index.html', 'w') as f:
        f.write(html_content)
    
    print("✅ Successfully built index.html from slide files!")
    print(f"📄 Included {len(config['slides'])} slides")

if __name__ == "__main__":
    build_presentation()
