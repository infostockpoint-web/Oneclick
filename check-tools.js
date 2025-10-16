const fs = require('fs');
const path = require('path');

// Read the manifest file
const manifestPath = path.join(__dirname, 'assets', 'js', 'manifest.js');
const manifestContent = fs.readFileSync(manifestPath, 'utf8');

// Extract the tools array from the manifest
const toolsMatch = manifestContent.match(/window\.TOOLS_MANIFEST\s*=\s*(\[.*?\]);/s);
if (!toolsMatch) {
  console.error('Could not find TOOLS_MANIFEST in manifest.js');
  process.exit(1);
}

// Parse the tools array
const tools = eval(toolsMatch[1]);

// Track missing and existing tools
const missingTools = [];
const existingTools = [];

// Check each tool's HTML file
console.log('Checking tool files...\n');

tools.forEach(tool => {
  const toolPath = path.join(__dirname, tool.url);
  const exists = fs.existsSync(toolPath);
  
  if (exists) {
    existingTools.push(tool);
  } else {
    missingTools.push(tool);
  }
});

// Print results
console.log(`✅ Found ${existingTools.length} existing tools`);
console.log(`❌ Found ${missingTools.length} missing tools\n`);

// Show missing tools
if (missingTools.length > 0) {
  console.log('Missing tools:');
  console.log('----------------------------------------');
  missingTools.forEach((tool, index) => {
    console.log(`${index + 1}. ${tool.name} (${tool.category})`);
    console.log(`   URL: ${tool.url}`);
    console.log(`   Description: ${tool.desc}`);
    console.log('----------------------------------------');
  });
}

// Function to create a basic tool HTML file
function createToolFile(tool) {
  const template = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${tool.name} - One Click Tools</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="../assets/css/style.css">
  <style>
    .tool-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 30px 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    .tool-header {
      text-align: center;
      margin-bottom: 30px;
    }
    
    .tool-header h1 {
      font-size: 2.2rem;
      color: #2c3e50;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    
    .tool-content {
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      padding: 30px;
      text-align: center;
    }
    
    .coming-soon-icon {
      font-size: 4rem;
      color: #4a6cf7;
      margin-bottom: 20px;
    }
    
    .coming-soon-message {
      font-size: 1.2rem;
      color: #7f8c8d;
      margin-bottom: 30px;
      line-height: 1.6;
    }
    
    .back-button {
      display: inline-block;
      background: #4a6cf7;
      color: white;
      padding: 12px 25px;
      border-radius: 5px;
      text-decoration: none;
      font-weight: 500;
      transition: background 0.3s ease;
    }
    
    .back-button:hover {
      background: #3a5ce4;
    }
    
    @media (max-width: 768px) {
      .tool-header h1 {
        font-size: 1.8rem;
      }
      
      .coming-soon-icon {
        font-size: 3rem;
      }
    }
  </style>
</head>
<body>
  <div id="site-header"></div>
  
  <main class="tool-container">
    <div class="tool-header">
      <h1><i class="${tool.icon}"></i> ${tool.name}</h1>
      <p>${tool.desc}</p>
    </div>
    
    <div class="tool-content">
      <div class="coming-soon-icon">
        <i class="fas fa-tools"></i>
      </div>
      <h2>${tool.name} is Coming Soon!</h2>
      <p class="coming-soon-message">
        We're currently working on this tool to bring you the best experience possible. 
        Please check back soon for updates!
      </p>
      <a href="../index.html" class="back-button">
        <i class="fas fa-arrow-left"></i> Back to Home
      </a>
    </div>
  </main>
  
  <div id="site-footer"></div>
  
  <script src="../assets/js/include.js"></script>
</body>
</html>`;

  return template;
}

// Ask if user wants to create missing tool files
if (missingTools.length > 0) {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question(`\nDo you want to create placeholder files for ${missingTools.length} missing tools? (y/n) `, async (answer) => {
    if (answer.toLowerCase() === 'y') {
      console.log('\nCreating missing tool files...');
      
      for (const tool of missingTools) {
        const toolPath = path.join(__dirname, tool.url);
        const dirPath = path.dirname(toolPath);
        
        try {
          // Create directory if it doesn't exist
          if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
          }
          
          // Create the tool HTML file
          fs.writeFileSync(toolPath, createToolFile(tool));
          console.log(`✅ Created: ${tool.url}`);
        } catch (error) {
          console.error(`❌ Failed to create ${tool.url}:`, error.message);
        }
      }
      
      console.log('\nAll missing tool files have been created with a "coming soon" message.');
    } else {
      console.log('\nSkipping file creation.');
    }
    
    readline.close();
  });
} else {
  console.log('\nNo missing tool files found!');
}
