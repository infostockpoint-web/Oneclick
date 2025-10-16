// Offline manifest bundled to avoid fetch/CORS issues
window.TOOLS_MANIFEST = [
  
  {"name":"Image Resizer","desc":"Resize your images without losing quality","icon":"fas fa-expand-arrows-alt","url":"tools/image-resizer.html","category":"Image Tools"},
  
  {"name":"GIF Maker","desc":"Create GIFs from images","icon":"fas fa-film","url":"tools/gif-maker.html","category":"Image Tools"},
  {"name":"QR Code Generator","desc":"Create QR codes from text/URL","icon":"fas fa-qrcode","url":"tools/qr-code-generator.html","category":"Utility Tools"},
  {"name":"HTML to PDF","desc":"Convert HTML to PDF","icon":"fas fa-file-pdf","url":"tools/html-to-pdf.html","category":"Document Tools"},
  {"name":"JPG to PDF","desc":"Convert JPG to PDF","icon":"fas fa-file-pdf","url":"tools/jpg-to-pdf.html","category":"Document Tools"},
  {"name":"PNG to PDF","desc":"Convert PNG to PDF","icon":"fas fa-file-pdf","url":"tools/png-to-pdf.html","category":"Document Tools"},
  {"name":"Text to PDF","desc":"Convert text to PDF","icon":"fas fa-file-alt","url":"tools/text-to-pdf.html","category":"Document Tools"},
  {"name":"Word to PDF","desc":"Convert Word documents to PDF","icon":"fas fa-file-word","url":"tools/word-to-pdf.html","category":"Document Tools"},
  {"name":"PDF Merger & Splitter","desc":"Merge multiple PDFs or split by pages","icon":"fas fa-object-group","url":"tools/pdf-merger.html","category":"Document Tools"},
  {"name":"PDF Compressor","desc":"Reduce PDF file size (coming soon)","icon":"fas fa-compress","url":"tools/pdf-compressor.html","category":"Document Tools"},
  {"name":"PDF Lock/Unlock","desc":"Add or remove PDF passwords (coming soon)","icon":"fas fa-lock","url":"tools/pdf-lock.html","category":"Document Tools"},
  {"name":"eSign PDF","desc":"Sign your PDF documents (coming soon)","icon":"fas fa-signature","url":"tools/esign-pdf.html","category":"Document Tools"},
  {"name":"PDF to HTML","desc":"Convert PDF to HTML","icon":"fab fa-html5","url":"tools/pdf-to-html.html","category":"Document Tools"},
  {"name":"PDF to JPG","desc":"Convert PDF to JPG images","icon":"fas fa-file-image","url":"tools/pdf-to-jpg.html","category":"Document Tools"},
  {"name":"PDF to JSON","desc":"Extract PDF content to JSON","icon":"fas fa-brackets-curly","url":"tools/pdf-to-json.html","category":"Document Tools"},
  {"name":"PDF to PNG","desc":"Convert PDF to PNG images","icon":"fas fa-file-image","url":"tools/pdf-to-png.html","category":"Document Tools"},
  {"name":"PDF to Word","desc":"Convert PDF to Word (DOCX)","icon":"fas fa-file-word","url":"tools/pdf-to-word.html","category":"Document Tools"},
  {"name":"PDF to XML","desc":"Convert PDF to XML","icon":"fas fa-file-code","url":"tools/pdf-to-xml.html","category":"Document Tools"},
  {"name":"PDF to ZIP","desc":"Export PDF pages as ZIP","icon":"fas fa-file-archive","url":"tools/pdf-to-zip.html","category":"Document Tools"},
  {"name":"PDF to WebP","desc":"Convert PDF to WebP images","icon":"fas fa-file-image","url":"tools/pdf-to-webp.html","category":"Document Tools"},
  {"name":"PDF to Text","desc":"Extract plain text from PDF","icon":"fas fa-file-alt","url":"tools/pdf-to-text.html","category":"Document Tools"},
  {"name":"CSV to PDF","desc":"Convert CSV files to PDF","icon":"fas fa-file-csv","url":"tools/csv-to-pdf.html","category":"Document Tools"},
  {"name":"Excel to PDF","desc":"Convert Excel (XLS/XLSX) to PDF","icon":"fas fa-file-excel","url":"tools/excel-to-pdf.html","category":"Document Tools"},
  {"name":"Speech to PDF","desc":"Convert speech to a PDF document","icon":"fas fa-microphone","url":"tools/speech-to-pdf.html","category":"Document Tools"},
  {"name":"WebP to PDF","desc":"Convert WebP images to PDF","icon":"fas fa-file-image","url":"tools/webp-to-pdf.html","category":"Document Tools"},

  {"name":"Meta Tag Generator","desc":"Generate SEO meta tags for your site","icon":"fas fa-tags","url":"tools/meta-tag-generator.html","category":"SEO Tools"},
  {"name":"Keyword Density Checker","desc":"Analyze keyword density in text","icon":"fas fa-percentage","url":"tools/keyword-density-checker.html","category":"SEO Tools"},
  {"name":"Sitemap Generator","desc":"Create XML sitemaps for websites","icon":"fas fa-sitemap","url":"tools/sitemap-generator.html","category":"SEO Tools"},
  {"name":"Robots.txt Generator","desc":"Generate robots.txt file","icon":"fas fa-robot","url":"tools/robots-txt-generator.html","category":"SEO Tools"},
  {"name":"Google Index Checker","desc":"Check if a URL is indexed by Google","icon":"fab fa-google","url":"tools/google-index-checker.html","category":"SEO Tools"},
  {"name":"Domain Authority Checker","desc":"Check domain authority (DA)","icon":"fas fa-globe","url":"tools/domain-authority-checker.html","category":"SEO Tools"},
  {"name":"Backlink Checker","desc":"Check backlinks for a domain","icon":"fas fa-link","url":"tools/backlink-checker.html","category":"SEO Tools"},
  
  {"name":"Page Speed Checker","desc":"Test page load speed (Web Vitals)","icon":"fas fa-tachometer-alt","url":"tools/page-speed-checker.html","category":"SEO Tools"},
  {"name":"XML Sitemap Validator","desc":"Validate XML sitemaps","icon":"fas fa-check","url":"tools/xml-sitemap-validator.html","category":"SEO Tools"},
  {"name":"Mobile-Friendly Test","desc":"Mobile responsiveness test","icon":"fas fa-mobile-alt","url":"tools/mobile-friendly-test.html","category":"SEO Tools"},

  {"name":"Word Counter","desc":"Count words and characters in your text","icon":"fas fa-sort-amount-down","url":"tools/word-counter.html","category":"Text Tools"},
  {"name":"Character Counter","desc":"Count characters including spaces","icon":"fas fa-font","url":"tools/character-counter.html","category":"Text Tools"},
  {"name":"Case Converter","desc":"UPPERCASE, lowercase, Title Case","icon":"fas fa-text-height","url":"tools/case-converter.html","category":"Text Tools"},
  {"name":"Plagiarism Checker","desc":"Check text originality (basic)","icon":"fas fa-search","url":"tools/plagiarism-checker.html","category":"Text Tools"},
  {"name":"Grammar Checker","desc":"Basic grammar suggestions","icon":"fas fa-spell-check","url":"tools/grammar-checker.html","category":"Text Tools"},
  {"name":"Text-to-Speech","desc":"Convert text to speech","icon":"fas fa-volume-up","url":"tools/text-to-speech.html","category":"Text Tools"},
  {"name":"Speech-to-Text","desc":"Transcribe speech to text","icon":"fas fa-microphone","url":"tools/speech-to-text.html","category":"Text Tools"},
  {"name":"URL Encoder & Decoder","desc":"Encode and decode URLs","icon":"fas fa-link","url":"tools/url-encoder-decoder.html","category":"Text Tools"},
  {"name":"Fancy Text Generator","desc":"Generate stylish fancy text","icon":"fas fa-magic","url":"tools/fancy-text-generator.html","category":"Text Tools"},
  {"name":"Random Text Generator","desc":"Generate random lorem ipsum","icon":"fas fa-random","url":"tools/random-text-generator.html","category":"Text Tools"},
  {"name":"Remove Duplicate Lines","desc":"Delete duplicate lines with options","icon":"fas fa-eraser","url":"tools/remove-duplicates.html","category":"Text Tools"},
  {"name":"Text Sorter","desc":"Sort lines A–Z/Z–A, text or numeric","icon":"fas fa-sort-alpha-down","url":"tools/text-sorter.html","category":"Text Tools"},
  {"name":"Text Reverser","desc":"Reverse text by characters or words","icon":"fas fa-exchange-alt","url":"tools/text-reverser.html","category":"Text Tools"},

  
  
  {"name":"JavaScript Minifier","desc":"Minify JavaScript code","icon":"fab fa-js","url":"tools/javascript-minifier.html","category":"Developer Tools"},
  {"name":"SQL Formatter","desc":"Beautify SQL queries","icon":"fas fa-database","url":"tools/sql-formatter.html","category":"Developer Tools"},
  {"name":"JSON Formatter & Validator","desc":"Format and validate JSON data","icon":"fas fa-brackets-curly","url":"tools/json-formatter.html","category":"Developer Tools"},
  
  {"name":"Markdown to HTML Converter","desc":"Convert Markdown to HTML","icon":"fab fa-markdown","url":"tools/markdown-to-html.html","category":"Developer Tools"},
  {"name":"HTML to Markdown Converter","desc":"Convert HTML to Markdown","icon":"fab fa-markdown","url":"tools/html-to-markdown.html","category":"Developer Tools"},
  {"name":".htaccess Redirect Generator","desc":"Generate redirect rules for .htaccess","icon":"fas fa-route","url":"tools/htaccess-redirect-generator.html","category":"Developer Tools"},
  {"name":"Color Picker & Converter","desc":"Pick and convert color values","icon":"fas fa-eyedropper","url":"tools/color-picker.html","category":"Developer Tools"},
  
  {"name":"IP Address Lookup","desc":"Get your public IP and info","icon":"fas fa-network-wired","url":"tools/ip-lookup.html","category":"Developer Tools"},

  {"name":"Percentage Calculator","desc":"Calculate percentages easily","icon":"fas fa-percentage","url":"tools/percentage-calculator.html","category":"Math & Calculators"},
  {"name":"Age Calculator","desc":"Calculate age between two dates","icon":"fas fa-birthday-cake","url":"tools/age-calculator.html","category":"Math & Calculators"},
  {"name":"BMI Calculator","desc":"Calculate your Body Mass Index","icon":"fas fa-weight","url":"tools/bmi-calculator.html","category":"Math & Calculators"},
  {"name":"Loan EMI Calculator","desc":"Calculate monthly payments","icon":"fas fa-money-check-alt","url":"tools/loan-emi-calculator.html","category":"Math & Calculators"},
  {"name":"Scientific Calculator","desc":"Advanced operations and functions","icon":"fas fa-calculator","url":"tools/scientific-calculator.html","category":"Math & Calculators"},
  
  {"name":"Binary to Decimal Converter","desc":"Convert binary/decimal","icon":"fas fa-sort-numeric-up","url":"tools/binary-decimal-converter.html","category":"Math & Calculators"},
  

  {"name":"Length Converter","desc":"Convert meters, feet, inches","icon":"fas fa-ruler","url":"tools/length-converter.html","category":"Unit Converters"},
  {"name":"Weight Converter","desc":"Convert kg, lb, oz","icon":"fas fa-weight-hanging","url":"tools/weight-converter.html","category":"Unit Converters"},
  {"name":"Speed Converter","desc":"Convert km/h, mph","icon":"fas fa-tachometer-alt","url":"tools/speed-converter.html","category":"Unit Converters"},
  {"name":"Temperature Converter","desc":"Celsius, Fahrenheit, Kelvin","icon":"fas fa-thermometer-half","url":"tools/temperature-converter.html","category":"Unit Converters"},
  
  {"name":"Data Storage Converter","desc":"KB, MB, GB, TB","icon":"fas fa-hdd","url":"tools/data-storage-converter.html","category":"Unit Converters"},
  
  {"name":"Fuel Efficiency Converter","desc":"km/l, l/100km, mpg","icon":"fas fa-gas-pump","url":"tools/fuel-efficiency-converter.html","category":"Unit Converters"},
  {"name":"Angle Converter","desc":"Degrees, radians, grads","icon":"fas fa-drafting-compass","url":"tools/angle-converter.html","category":"Unit Converters"},

  
  
  {"name":"Password Generator","desc":"Generate strong passwords","icon":"fas fa-key","url":"tools/password-generator.html","category":"Security Tools"},
  {"name":"Random String Generator","desc":"Generate random strings","icon":"fas fa-random","url":"tools/random-string-generator.html","category":"Security Tools"},
  {"name":"URL Shortener","desc":"Shorten long URLs","icon":"fas fa-link","url":"tools/url-shortener.html","category":"Security Tools"},
  {"name":"SSL Certificate Checker","desc":"Check SSL certificate","icon":"fas fa-shield-alt","url":"tools/ssl-certificate-checker.html","category":"Security Tools"},
  {"name":"Privacy Policy Generator","desc":"Generate a privacy policy","icon":"fas fa-user-shield","url":"tools/privacy-policy-generator.html","category":"Security Tools"},

  {"name":"Instagram Photo Downloader","desc":"Download Instagram photos","icon":"fab fa-instagram","url":"tools/instagram-photo-downloader.html","category":"Social Media Tools"},
  
  {"name":"Facebook Video Downloader","desc":"Download Facebook videos","icon":"fab fa-facebook","url":"tools/facebook-downloader.html","category":"Social Media Tools"},
  {"name":"YouTube Video Downloader","desc":"Download YouTube videos (helper)","icon":"fab fa-youtube","url":"tools/youtube-video-downloader.html","category":"Video Tools"},
  {"name":"Instagram Video Downloader","desc":"Download Instagram videos (helper)","icon":"fab fa-instagram","url":"tools/instagram-downloader.html","category":"Social Media Tools"},
  {"name":"YouTube Tags Extractor","desc":"Extract tags from YouTube","icon":"fab fa-youtube","url":"tools/youtube-tags-extractor.html","category":"Social Media Tools"},
  {"name":"Hashtag Generator","desc":"Generate social hashtags","icon":"fas fa-hashtag","url":"tools/hashtag-generator.html","category":"Social Media Tools"},
  
  {"name":"Emoji Keyboard","desc":"Copy/paste emojis","icon":"far fa-smile","url":"tools/emoji-keyboard.html","category":"Social Media Tools"},
  

  {"name":"Barcode Generator","desc":"Generate barcodes","icon":"fas fa-barcode","url":"tools/barcode-generator.html","category":"Misc Tools"},
  {"name":"Meme Generator","desc":"Create memes with text","icon":"fas fa-laugh","url":"tools/meme-generator.html","category":"Misc Tools"},
  
  {"name":"Business Name Generator","desc":"Find brandable names","icon":"fas fa-briefcase","url":"tools/business-name-generator.html","category":"Misc Tools"},
  
  {"name":"Internet Speed Test","desc":"Basic browser speed test","icon":"fas fa-tachometer-alt","url":"tools/internet-speed-test.html","category":"Misc Tools"},

  {"name":"Daily Planner Creator","desc":"Create daily schedules","icon":"fas fa-calendar-day","url":"tools/daily-planner.html","category":"Misc Tools"},
  {"name":"Wedding Invitation Generator","desc":"Design wedding invites","icon":"fas fa-heart","url":"tools/wedding-invitation-generator.html","category":"Misc Tools"},
  {"name":"Story Plot Generator","desc":"Generate story prompts","icon":"fas fa-book","url":"tools/story-plot-generator.html","category":"Misc Tools"},
  {"name":"E-book Creator","desc":"Create simple ebooks (HTML to PDF)","icon":"fas fa-book-open","url":"tools/ebook-creator.html","category":"Misc Tools"},
  
  // New AI & ML Tools
  {"name":"AI Image Generator","desc":"Generate images from text prompts","icon":"fas fa-robot","url":"tools/ai-image-generator.html","category":"AI & ML Tools"},
  {"name":"Text Summarizer","desc":"Summarize long articles and documents","icon":"fas fa-file-contract","url":"tools/text-summarizer.html","category":"AI & ML Tools"},
  {"name":"Sentiment Analyzer","desc":"Analyze sentiment in text","icon":"fas fa-smile","url":"tools/sentiment-analyzer.html","category":"AI & ML Tools"},
  
  // New Productivity Tools
  
  
  
  // New Education Tools
  {"name":"Flashcard Maker","desc":"Create and study with digital flashcards","icon":"fas fa-lightbulb","url":"tools/flashcard-maker.html","category":"Education Tools"},
  {"name":"Equation Solver","desc":"Solve math equations step by step","icon":"fas fa-square-root-alt","url":"tools/equation-solver.html","category":"Education Tools"},
  
  // New Finance Tools
  {"name":"Loan Calculator","desc":"Calculate loan payments and interest","icon":"fas fa-calculator","url":"tools/loan-calculator.html","category":"Finance Tools"},
  {"name":"Currency Converter","desc":"Convert between world currencies","icon":"fas fa-exchange-alt","url":"tools/currency-converter.html","category":"Finance Tools"},
  {"name":"GST Calculator","desc":"Compute GST and totals","icon":"fas fa-percent","url":"tools/gst-calculator.html","category":"Finance Tools"},
  
  // New Developer Tools
  
  
  
  // New Design Tools
  {"name":"Color Palette Generator","desc":"Generate beautiful color schemes","icon":"fas fa-palette","url":"tools/color-palette-generator.html","category":"Design Tools"},
  {"name":"Font Pairing Tool","desc":"Find perfect font combinations","icon":"fas fa-font","url":"tools/font-pairing-tool.html","category":"Design Tools"},
  
  // New Social Media Tools
  
  
  
  // New Health & Fitness Tools
  {"name":"Calorie Calculator","desc":"Track your daily calorie intake","icon":"fas fa-utensils","url":"tools/calorie-calculator.html","category":"Health & Fitness"},
  {"name":"Workout Planner","desc":"Create custom workout plans","icon":"fas fa-dumbbell","url":"tools/workout-planner.html","category":"Health & Fitness"},
  
  // New Travel Tools
  {"name":"Trip Planner","desc":"Plan your next adventure","icon":"fas fa-route","url":"tools/trip-planner.html","category":"Travel Tools"},
  {"name":"Packing List Generator","desc":"Create packing lists for trips","icon":"fas fa-suitcase","url":"tools/packing-list-generator.html","category":"Travel Tools"},
  
  // New Business Tools
  {"name":"Invoice Generator","desc":"Create professional invoices","icon":"fas fa-file-invoice","url":"tools/invoice-generator.html","category":"Business Tools"},
  
  
  // New AI & ML Tools
  {"name":"AI Text Generator","desc":"Generate human-like text with AI","icon":"fas fa-robot","url":"tools/ai-text-generator.html","category":"AI & ML Tools"},
  {"name":"Image Recognition","desc":"Identify objects in images using AI","icon":"fas fa-eye","url":"tools/image-recognition.html","category":"AI & ML Tools"},
  {"name":"Language Translator","desc":"Translate text between languages","icon":"fas fa-language","url":"tools/language-translator.html","category":"AI & ML Tools"},
  
  // New Productivity Tools
  
  
  {"name":"Email Template Builder","desc":"Create professional email templates","icon":"fas fa-envelope","url":"tools/email-template-builder.html","category":"Productivity Tools"},
  
  // New Education Tools
  {"name":"Citation Generator","desc":"Generate citations in various formats","icon":"fas fa-quote-right","url":"tools/citation-generator.html","category":"Education Tools"},
  {"name":"Periodic Table","desc":"Interactive periodic table of elements","icon":"fas fa-atom","url":"tools/periodic-table.html","category":"Education Tools"},
  {"name":"Language Learning Assistant","desc":"Practice and learn new languages","icon":"fas fa-comments","url":"tools/language-learning-assistant.html","category":"Education Tools"},
  
  // New Finance Tools
  {"name":"Investment Calculator","desc":"Calculate investment returns","icon":"fas fa-chart-line","url":"tools/investment-calculator.html","category":"Finance Tools"},
  {"name":"Tax Calculator","desc":"Estimate your taxes","icon":"fas fa-receipt","url":"tools/tax-calculator.html","category":"Finance Tools"},
  
  // New Design Tools
  {"name":"Logo Maker","desc":"Create custom logos online","icon":"fas fa-paint-brush","url":"tools/logo-maker.html","category":"Design Tools"},
  {"name":"Mockup Generator","desc":"Create product mockups","icon":"fas fa-mobile-alt","url":"tools/mockup-generator.html","category":"Design Tools"},
  
  // New Health & Fitness Tools
  
  {"name":"Water Intake Tracker","desc":"Track your daily water consumption","icon":"fas fa-tint","url":"tools/water-intake-tracker.html","category":"Health & Fitness"},
  
  // New Travel Tools
  {"name":"Flight Tracker","desc":"Track flights in real-time","icon":"fas fa-plane","url":"tools/flight-tracker.html","category":"Travel Tools"},
  {"name":"Currency Exchange Calculator","desc":"Convert between world currencies","icon":"fas fa-money-bill-wave","url":"tools/currency-exchange-calculator.html","category":"Travel Tools"},
  
  // New Business Tools
  {"name":"Business Plan Generator","desc":"Create a business plan","icon":"fas fa-briefcase","url":"tools/business-plan-generator.html","category":"Business Tools"},
  {"name":"Invoice Template Creator","desc":"Design custom invoice templates","icon":"fas fa-file-invoice-dollar","url":"tools/invoice-template-creator.html","category":"Business Tools"},
  
  // New Developer Tools
  
  
  // New Social Media Tools
  {"name":"Social Media Post Scheduler","desc":"Schedule posts across platforms","icon":"fas fa-share-alt","url":"tools/social-media-scheduler.html","category":"Social Media Tools"},
  {"name":"YouTube Thumbnail Generator","desc":"Create eye-catching thumbnails","icon":"fab fa-youtube","url":"tools/thumbnail-generator.html","category":"Social Media Tools"},
  
  // New Utility Tools
  {"name":"Password Strength Checker","desc":"Check your password strength","icon":"fas fa-shield-alt","url":"tools/password-strength-checker.html","category":"Utility Tools"},
  {"name":"QR Code Reader","desc":"Scan and read QR codes","icon":"fas fa-qrcode","url":"tools/qr-code-reader.html","category":"Utility Tools"},
  
  // New Games
  {"name":"Memory Match Game","desc":"Test your memory with this card game","icon":"fas fa-brain","url":"tools/memory-match-game.html","category":"Games"},
  {"name":"Word Search Generator","desc":"Create custom word searches","icon":"fas fa-search","url":"tools/word-search-generator.html","category":"Games"},
  
  // New AI & ML Tools
  {"name":"AI Code Assistant","desc":"Get AI-powered coding help","icon":"fas fa-robot","url":"tools/ai-code-assistant.html","category":"AI & ML Tools"},
  {"name":"Sentiment Analysis","desc":"Analyze sentiment in text","icon":"fas fa-smile","url":"tools/sentiment-analysis.html","category":"AI & ML Tools"},
  
  // New Productivity Tools
  
  {"name":"Habit Tracker","desc":"Track and build new habits","icon":"fas fa-calendar-check","url":"tools/habit-tracker.html","category":"Productivity Tools"},
  
  // New Education Tools
  {"name":"Math Equation Solver","desc":"Solve complex math equations","icon":"fas fa-square-root-alt","url":"tools/math-equation-solver.html","category":"Education Tools"},
  {"name":"Vocabulary Builder","desc":"Expand your vocabulary","icon":"fas fa-book-reader","url":"tools/vocabulary-builder.html","category":"Education Tools"},
  
  // New Finance Tools
  {"name":"Retirement Calculator","desc":"Plan your retirement savings","icon":"fas fa-piggy-bank","url":"tools/retirement-calculator.html","category":"Finance Tools"},
  {"name":"Mortgage Calculator","desc":"Calculate mortgage payments","icon":"fas fa-home","url":"tools/mortgage-calculator.html","category":"Finance Tools"},
  
  // New Design Tools
  {"name":"Color Contrast Checker","desc":"Check color contrast ratios","icon":"fas fa-adjust","url":"tools/color-contrast-checker.html","category":"Design Tools"},
  {"name":"Font Pairing Suggestions","desc":"Find perfect font combinations","icon":"fas fa-font","url":"tools/font-pairing-suggestions.html","category":"Design Tools"},
  
  // New Health & Fitness
  {"name":"Calorie Counter","desc":"Track your daily calories","icon":"fas fa-utensils","url":"tools/calorie-counter.html","category":"Health & Fitness"},
  {"name":"Workout Log","desc":"Track your fitness journey","icon":"fas fa-dumbbell","url":"tools/workout-log.html","category":"Health & Fitness"},
  
  // New Travel Tools
  {"name":"Packing Checklist","desc":"Create custom packing lists","icon":"fas fa-suitcase-rolling","url":"tools/packing-checklist.html","category":"Travel Tools"},
  {"name":"Travel Budget Calculator","desc":"Plan your travel expenses","icon":"fas fa-wallet","url":"tools/travel-budget-calculator.html","category":"Travel Tools"},
  
  // New Business Tools
  {"name":"Business Model Canvas","desc":"Create business models","icon":"fas fa-project-diagram","url":"tools/business-model-canvas.html","category":"Business Tools"},
  {"name":"SWOT Analysis Tool","desc":"Conduct SWOT analysis","icon":"fas fa-chart-pie","url":"tools/swot-analysis-tool.html","category":"Business Tools"},
  
  // New Developer Tools
  
  
  
  // New Social Media Tools
  
  {"name":"Social Media Analytics","desc":"Analyze social media metrics","icon":"fas fa-chart-bar","url":"tools/social-media-analytics.html","category":"Social Media Tools"},
  
  // New Utility Tools
  {"name":"File Converter","desc":"Convert between file formats","icon":"fas fa-file-export","url":"tools/file-converter.html","category":"Utility Tools"},
  {"name":"Password Generator Pro","desc":"Generate secure passwords","icon":"fas fa-key","url":"tools/password-generator-pro.html","category":"Utility Tools"},
  
  // New Games
  {"name":"Sudoku Solver","desc":"Solve any Sudoku puzzle","icon":"fas fa-th","url":"tools/sudoku-solver.html","category":"Games"},
  {"name":"Crossword Puzzle Maker","desc":"Create custom crosswords","icon":"fas fa-font","url":"tools/crossword-puzzle-maker.html","category":"Games"},
  {"name":"Electric Bill Calculator","desc":"Estimate electricity bills","icon":"fas fa-bolt","url":"tools/electric-bill-calculator.html","category":"Misc Tools"},
  {"name":"Leap Year Checker","desc":"Check if a year is a leap year","icon":"fas fa-calendar","url":"tools/leap-year-checker.html","category":"Misc Tools"},
  {"name":"Name Numerology Calculator","desc":"Calculate name numerology","icon":"fas fa-magic","url":"tools/name-numerology-calculator.html","category":"Misc Tools"},

  {"name":"Image Watermark Adder","desc":"Add watermark to images","icon":"fas fa-water","url":"tools/image-watermark-adder.html","category":"Image Tools"},
  {"name":"Free Note App","desc":"Simple in-browser notes","icon":"fas fa-sticky-note","url":"tools/free-note-app.html","category":"Utility Tools"},
  {"name":"Thumbnail Downloader","desc":"Download thumbnails from URLs","icon":"fas fa-download","url":"tools/thumbnail-downloader.html","category":"Image Tools"},
  {"name":"PNG to JPG","desc":"Convert PNG images to JPG","icon":"fas fa-exchange-alt","url":"tools/png-to-jpg.html","category":"Image Tools"},
  {"name":"JPG to PNG","desc":"Convert JPG images to PNG","icon":"fas fa-exchange-alt","url":"tools/jpg-to-png.html","category":"Image Tools"},
  {"name":"Tic Tac Toe","desc":"Play tic-tac-toe","icon":"fas fa-gamepad","url":"tools/tic-tac-toe.html","category":"Games"},
  
  {"name":"SIP Calculator","desc":"Calculate SIP returns","icon":"fas fa-chart-line","url":"tools/sip-calculator.html","category":"Math & Calculators"},
  {"name":"Indian Railways PNR Status","desc":"Check PNR status","icon":"fas fa-train","url":"tools/pnr-status.html","category":"Indian Tools"},
  {"name":"CSS Gradient Generator","desc":"Create CSS gradients","icon":"fas fa-paint-brush","url":"tools/css-gradient-generator.html","category":"Color Tools"},

  // Additional AI & ML Tools
  {"name":"AI Code Assistant","desc":"Get AI-powered coding help","icon":"fas fa-robot","url":"tools/ai-code-assistant.html","category":"AI & ML Tools"},
  {"name":"Sentiment Analysis","desc":"Analyze sentiment in text","icon":"fas fa-smile","url":"tools/sentiment-analysis.html","category":"AI & ML Tools"},

  // Additional Education Tools
  {"name":"Math Equation Solver","desc":"Solve complex math equations","icon":"fas fa-square-root-alt","url":"tools/math-equation-solver.html","category":"Education Tools"},
  {"name":"Vocabulary Builder","desc":"Expand your vocabulary","icon":"fas fa-book-reader","url":"tools/vocabulary-builder.html","category":"Education Tools"},

  // Additional Finance Tools
  {"name":"Retirement Calculator","desc":"Plan your retirement savings","icon":"fas fa-piggy-bank","url":"tools/retirement-calculator.html","category":"Finance Tools"},
  {"name":"Mortgage Calculator","desc":"Calculate mortgage payments","icon":"fas fa-home","url":"tools/mortgage-calculator.html","category":"Finance Tools"},

  // Additional Design Tools
  {"name":"Color Contrast Checker","desc":"Check color contrast ratios","icon":"fas fa-adjust","url":"tools/color-contrast-checker.html","category":"Design Tools"},
  {"name":"Font Pairing Suggestions","desc":"Find perfect font combinations","icon":"fas fa-font","url":"tools/font-pairing-suggestions.html","category":"Design Tools"},

  // Additional Health & Fitness
  {"name":"Calorie Counter","desc":"Track your daily calories","icon":"fas fa-utensils","url":"tools/calorie-counter.html","category":"Health & Fitness"},
  {"name":"Workout Log","desc":"Track your fitness journey","icon":"fas fa-dumbbell","url":"tools/workout-log.html","category":"Health & Fitness"},

  // Additional Travel Tools
  {"name":"Packing Checklist","desc":"Create custom packing lists","icon":"fas fa-suitcase-rolling","url":"tools/packing-checklist.html","category":"Travel Tools"},
  {"name":"Travel Budget Calculator","desc":"Plan your travel expenses","icon":"fas fa-wallet","url":"tools/travel-budget-calculator.html","category":"Travel Tools"},

  // Additional Business Tools
  {"name":"Business Model Canvas","desc":"Create business models","icon":"fas fa-project-diagram","url":"tools/business-model-canvas.html","category":"Business Tools"},
  {"name":"SWOT Analysis Tool","desc":"Conduct SWOT analysis","icon":"fas fa-chart-pie","url":"tools/swot-analysis-tool.html","category":"Business Tools"},

  // Additional Games
  {"name":"Sudoku Solver","desc":"Solve any Sudoku puzzle","icon":"fas fa-th","url":"tools/sudoku-solver.html","category":"Games"},
  {"name":"Crossword Puzzle Maker","desc":"Create custom crosswords","icon":"fas fa-font","url":"tools/crossword-puzzle-maker.html","category":"Games"},

  // Additional Video Tools
  {"name":"Video Compressor","desc":"Compress video files","icon":"fas fa-compress","url":"tools/video-compressor.html","category":"Video Tools"},
  {"name":"Video Converter","desc":"Convert between video formats","icon":"fas fa-exchange-alt","url":"tools/video-converter.html","category":"Video Tools"},
  {"name":"Video Editor","desc":"Trim, crop, and edit videos","icon":"fas fa-film","url":"tools/video-editor.html","category":"Video Tools"},

  // Additional Color Tools
  {"name":"Color Wheel","desc":"Interactive color wheel","icon":"fas fa-circle","url":"tools/color-wheel.html","category":"Color Tools"},
  {"name":"Hex to RGB Converter","desc":"Convert hex colors to RGB","icon":"fas fa-palette","url":"tools/hex-to-rgb-converter.html","category":"Color Tools"},
  {"name":"Color Blindness Simulator","desc":"Simulate various color vision deficiencies","icon":"fas fa-low-vision","url":"tools/color-blindness-simulator.html","category":"Color Tools"}
];
