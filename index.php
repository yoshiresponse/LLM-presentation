<!DOCTYPE html>
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
        <?php include 'slides/slide-01-title.html'; ?>
        <?php include 'slides/slide-02-introduction.html'; ?>
        <?php include 'slides/slide-03-agentic-coder.html'; ?>
        <?php include 'slides/slide-04-in-ide-tools.html'; ?>
        <?php include 'slides/slide-05-cli-agents.html'; ?>
        <?php include 'slides/slide-06-use-cases.html'; ?>
        <?php include 'slides/slide-07-mcp.html'; ?>
        <?php include 'slides/slide-08-best-practices.html'; ?>
        <?php include 'slides/slide-09-future.html'; ?>
        <?php include 'slides/slide-10-qa.html'; ?>
    </div>

    <!-- Navigation -->
    <div class="fixed bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-50 flex justify-between items-center">
        <button id="prev-btn" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors">Previous</button>
        <div id="slide-counter" class="text-lg font-medium"></div>
        <button id="next-btn" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors">Next</button>
    </div>

    <script src="presentation.js"></script>
</body>
</html>
