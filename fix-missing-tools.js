const fs = require('fs');
const path = require('path');

// Read the manifest file
const manifestPath = path.join(__dirname, 'assets', 'js', 'manifest.js');
const manifestContent = fs.readFileSync(manifestPath, 'utf8');

// Extract the tools array from the manifest
const toolsMatch = manifestContent.match(/window\.TOOLS_MANIFEST\s*=\s*(\[.*?\]);/s);
if (!toolsMatch) {
  console.error('❌ Could not find TOOLS_MANIFEST in manifest.js');
  process.exit(1);
}

// Parse the tools array
const tools = eval(toolsMatch[1]);

// Track missing and existing tools
const missingTools = [];
const existingTools = [];

// Check each tool's HTML file
console.log('🔍 Checking tool files...\n');

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

  // Create missing tool files
  console.log('\n🛠️  Creating missing tool files...\n');
  
  missingTools.forEach(tool => {
    const toolPath = path.join(__dirname, tool.url);
    const dirPath = path.dirname(toolPath);
    
    try {
      // Create directory if it doesn't exist
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      
      // Create a basic tool HTML file
      const toolContent = `<!DOCTYPE html>
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
      text-align: center;
    }
    
    .tool-header {
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
    
    .tool-header p {
      color: #7f8c8d;
      font-size: 1.1rem;
      max-width: 700px;
      margin: 0 auto 20px;
    }
    
    .coming-soon-banner {
      background: #f8f9fa;
      border: 1px dashed #dee2e6;
      border-radius: 10px;
      padding: 40px 20px;
      margin: 30px 0;
    }
    
    .coming-soon-icon {
      font-size: 3.5rem;
      color: #4a6cf7;
      margin-bottom: 20px;
    }
    
    .coming-soon-title {
      font-size: 1.8rem;
      color: #2c3e50;
      margin-bottom: 15px;
    }
    
    .coming-soon-message {
      color: #6c757d;
      font-size: 1.1rem;
      line-height: 1.6;
      max-width: 600px;
      margin: 0 auto 30px;
    }
    
    .btn {
      display: inline-block;
      background: #4a6cf7;
      color: white;
      padding: 12px 25px;
      border-radius: 5px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }
    
    .btn:hover {
      background: #3a5ce4;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(74, 108, 247, 0.2);
    }
    
    .btn i {
      margin-right: 8px;
    }
    
    @media (max-width: 768px) {
      .tool-header h1 {
        font-size: 1.8rem;
      }
      
      .coming-soon-icon {
        font-size: 2.5rem;
      }
      
      .coming-soon-title {
        font-size: 1.5rem;
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
    
    <div class="coming-soon-banner">
      <div class="coming-soon-icon">
        <i class="fas fa-tools"></i>
      </div>
      <h2 class="coming-soon-title">${tool.name} is Coming Soon!</h2>
      <p class="coming-soon-message">
        We're currently working hard to bring you this amazing tool. Our team is putting the 
        finishing touches to ensure you get the best experience possible. 
        Please check back soon for updates!
      </p>
      <a href="../index.html" class="btn">
        <i class="fas fa-arrow-left"></i> Back to Home
      </a>
    </div>
    
    <div style="margin-top: 40px;">
      <h3>What to Expect</h3>
      <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-top: 20px;">
        <div style="flex: 1; min-width: 250px; background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center;">
          <i class="fas fa-bolt" style="font-size: 2rem; color: #4a6cf7; margin-bottom: 15px;"></i>
          <h4>Fast & Efficient</h4>
          <p style="color: #6c757d; font-size: 0.95rem;">Quick processing to save you time</p>
        </div>
        <div style="flex: 1; min-width: 250px; background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center;">
          <i class="fas fa-shield-alt" style="font-size: 2rem; color: #4a6cf7; margin-bottom: 15px;"></i>
          <h4>Secure & Private</h4>
          <p style="color: #6c757d; font-size: 0.95rem;">Your data stays on your device</p>
        </div>
        <div style="flex: 1; min-width: 250px; background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center;">
          <i class="fas fa-mobile-alt" style="font-size: 2rem; color: #4a6cf7; margin-bottom: 15px;"></i>
          <h4>Responsive Design</h4>
          <p style="color: #6c757d; font-size: 0.95rem;">Works on all devices</p>
        </div>
      </div>
    </div>
  </main>
  
  <div id="site-footer"></div>
  
  <script src="../assets/js/include.js"></script>
  <script>
    // Set active navigation
    document.addEventListener('DOMContentLoaded', function() {
      // Set active nav item
      const currentPage = '${tool.url.split('/').pop()}';
      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
        }
      });
    });
  </script>
</body>
</html>`;
      
      // Write the file
      fs.writeFileSync(toolPath, toolContent);
      console.log(`✅ Created: ${tool.url}`);
      
    } catch (error) {
      console.error(`❌ Failed to create ${tool.url}:`, error.message);
    }
  });
  
  console.log(`\n✨ Successfully created ${missingTools.length} tool files with "coming soon" placeholders.`);
  console.log('These tools will now show a proper coming soon page instead of the default message.');
} else {
  console.log('\n🎉 Great news! All tools in your manifest have corresponding HTML files.');
}

console.log('\n✅ Process completed!');
