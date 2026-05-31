const TOPICS = {
  core: "Big Data Core",
  small: "Big vs Small",
  foundations: "Data Foundations",
  applications: "Analytics Applications",
  visuals: "Visual Analytics",
  literacy: "Data Literacy",
  gdpr: "GDPR Essentials",
  policy: "ACG Privacy Policy",
  ai: "AI & Cybersecurity",
  smart: "Smart Cities",
  storytelling: "Visual Storytelling",
};

const single = (category, prompt, options, answer, explanation) => ({
  category, prompt, options, answer, explanation, type: "single",
});
const multi = (category, prompt, options, answer, explanation) => ({
  category, prompt, options, answer, explanation, type: "multi",
});
const tf = (category, prompt, answer, explanation) => ({
  category, prompt, options: ["True", "False"], answer: answer ? "True" : "False",
  explanation, type: "truefalse",
});
const matching = (category, prompt, pairs, explanation) => ({
  category, prompt, pairs, explanation, type: "matching",
  answer: Object.fromEntries(pairs),
  options: pairs.map(([, value]) => value),
});

const questions = [
  // Big Data Core
  multi(TOPICS.core, "Which dimensions form the expanded 4V model of Big Data?",
    ["Volume", "Velocity", "Variety", "Veracity", "Visualization", "Visibility"],
    ["Volume", "Velocity", "Variety", "Veracity"],
    "The reading defines four dimensions: Volume, Velocity, Variety, and Veracity. The instructor slides also use the classic 3V shorthand without Veracity."),
  single(TOPICS.core, "Which Big Data dimension refers to the amount of data created or collected over time?",
    ["Volume", "Velocity", "Variety", "Veracity"], "Volume",
    "Volume is the quantity of data being created, collected, processed, or stored."),
  single(TOPICS.core, "Which Big Data dimension focuses on the speed at which data is created, transmitted, collected, and processed?",
    ["Volume", "Velocity", "Variety", "Veracity"], "Velocity",
    "Velocity concerns speed, often including the need for near-instant processing."),
  single(TOPICS.core, "A company combines transaction records, emails, voice recordings, browser cookies, and social posts. Which V is most clearly illustrated?",
    ["Volume", "Velocity", "Variety", "Veracity"], "Variety",
    "Variety is the diversity of data sources, types, formats, and structures."),
  single(TOPICS.core, "Missing values, questionable sources, and inaccurate records create a problem with which V?",
    ["Volume", "Velocity", "Variety", "Veracity"], "Veracity",
    "Veracity concerns the quality, accuracy, integrity, credibility, and trustworthiness of data."),
  tf(TOPICS.core, "Big Data means only that an organization has a lot of data.", false,
    "Size matters, but Big Data also involves speed, variety, complexity, trust, and the systems required to process it."),
  tf(TOPICS.core, "Traditional data management tools may be unable to store or process Big Data efficiently.", true,
    "Big Data is large and complex enough that traditional tools often cannot handle it efficiently."),
  single(TOPICS.core, "Which description best fits Big Data?",
    ["A small, fixed spreadsheet designed for one manager", "A large and complex collection that grows rapidly and may require specialized processing", "Any table with more than ten columns", "Only social media data"],
    "A large and complex collection that grows rapidly and may require specialized processing",
    "Big Data is defined by scale, complexity, growth, and processing demands, not by one file type or source."),
  multi(TOPICS.core, "Which are sources of Big Data listed in the instructor presentation?",
    ["Mobile phone sensors", "Online shopping", "Surveillance cameras", "Social media", "Only paper invoices"],
    ["Mobile phone sensors", "Online shopping", "Surveillance cameras", "Social media"],
    "The deck groups sources into movement and location data, consumer behavior data, visual data, and social and opinion data."),
  single(TOPICS.core, "Mobile phone sensors and GPS-enabled devices are examples of which source category?",
    ["Movement and location data", "Consumer behavior data", "Social and opinion data", "Historical warehouse data"],
    "Movement and location data",
    "The slides identify sensors and GPS-enabled devices as sources of movement and location data."),
  single(TOPICS.core, "Online shopping is an example of which source category?",
    ["Movement and location data", "Consumer behavior data", "Visual data", "Social and opinion data"],
    "Consumer behavior data",
    "Online shopping behavior provides consumer behavior data."),
  single(TOPICS.core, "Digital photographs and surveillance cameras are examples of which source category?",
    ["Visual data", "Consumer behavior data", "Social and opinion data", "Direct input only"],
    "Visual data",
    "The source table places digital photographs, GPS cameras, and surveillance cameras under visual data."),
  tf(TOPICS.core, "For Big Data to be useful, organizations often need to pull it from multiple sources, clean it, and organize it.", true,
    "The slides describe Big Data as raw material that must be polished through organization, management, and cleansing."),
  single(TOPICS.core, "Why is raw Big Data not automatically useful information?",
    ["It must be cleaned and organized first", "It always arrives as a finished dashboard", "It contains only numeric values", "It cannot be processed by any technology"],
    "It must be cleaned and organized first",
    "Big Data can be complex, messy, and distributed. Cleaning and organization are needed before it can support decisions."),
  matching(TOPICS.core, "Match each unit to the unit immediately below it in the scale sequence.", [
    ["Kilobyte (KB)", "1,024 bytes"],
    ["Megabyte (MB)", "1,024 KB"],
    ["Gigabyte (GB)", "1,024 MB"],
    ["Terabyte (TB)", "1,024 GB"],
  ], "The instructor deck uses a binary progression: each listed unit is 1,024 of the preceding unit."),
  single(TOPICS.core, "Which sequence correctly moves from smaller to larger data units?",
    ["Byte, KB, MB, GB, TB, PB, EB, ZB", "Byte, MB, KB, TB, GB, ZB, PB, EB", "KB, Byte, GB, MB, PB, TB, ZB, EB", "Byte, GB, KB, MB, EB, TB, PB, ZB"],
    "Byte, KB, MB, GB, TB, PB, EB, ZB",
    "The presentation orders the units Byte, Kilobyte, Megabyte, Gigabyte, Terabyte, Petabyte, Exabyte, and Zettabyte."),
  single(TOPICS.core, "According to the instructor deck, approximately how much good-quality video can fit in a terabyte?",
    ["30 minutes", "30 hours", "300 hours", "3,000 hours"], "300 hours",
    "The slide uses roughly 300 hours of good-quality video as its terabyte example."),
  single(TOPICS.core, "Which technology does the reading say Big Data analytics often uses to find previously unnoticed correlations?",
    ["Machine learning", "Paper filing", "Manual sorting only", "Word processing"], "Machine learning",
    "The reading contrasts traditional predefined statistical relationships with machine learning approaches that can uncover unnoticed correlations."),
  tf(TOPICS.core, "Big Data analytics can identify unnoticed patterns in real time.", true,
    "Real-time pattern discovery is one of the reading's important contrasts with slower traditional approaches."),
  single(TOPICS.core, "What problem can affect traditional data analysis compared with real-time Big Data analytics?",
    ["The time lag problem", "The color palette problem", "The byte shortage problem", "The form entry problem"], "The time lag problem",
    "The reading notes that traditional approaches can suffer from a delay between data collection, analysis, and action."),

  // Big Data vs Small Data
  tf(TOPICS.small, "A spreadsheet application such as Excel is generally suitable for storing and analyzing Big Data.", false,
    "Spreadsheets are flat tools commonly used with Small Data. Big Data requires systems designed for its scale and complexity."),
  tf(TOPICS.small, "Small Data is often closer to the end user and focuses on the user's experience.", true,
    "The instructor slides describe Small Data as closer to end users and easier for stakeholders to understand."),
  single(TOPICS.small, "Why may organizations turn Big Data into Small Data?",
    ["To make insights easier for stakeholders and decision-makers to understand", "To guarantee that every record is deleted", "To remove every structured field", "To avoid using any analysis"],
    "To make insights easier for stakeholders and decision-makers to understand",
    "Big Data often needs to be summarized or translated into understandable Small Data for decision-making."),
  single(TOPICS.small, "Who is most likely to be needed to interpret raw Big Data?",
    ["Data scientists and other experts", "Only customers", "No one, because raw data explains itself", "Only graphic designers"],
    "Data scientists and other experts",
    "The slides contrast expert interpretation of Big Data with the wider accessibility of Small Data."),
  tf(TOPICS.small, "When data gets bigger, only the computer needs to adjust by becoming faster and adding memory and storage.", false,
    "Big Data also requires changes in storage architecture, management processes, data cleaning, analysis methods, and expertise."),
  tf(TOPICS.small, "Small Data projects can still be expensive.", true,
    "Small does not automatically mean cheap. Cost and data scale are separate considerations."),
  multi(TOPICS.small, "Which are commonly presented as differences between Big Data and Small Data?",
    ["Goals", "Longevity", "Data preparation", "Introspection", "Font size"],
    ["Goals", "Longevity", "Data preparation", "Introspection"],
    "The supplied formative specifically checks goals, longevity, data preparation, and introspection as points of difference."),
  single(TOPICS.small, "Small Data projects are typically repeatable, while Big Data projects may be difficult or impossible to replicate. What is this difference called?",
    ["Reproducibility", "Visibility", "Stakes", "Velocity"], "Reproducibility",
    "Reproducibility is the ability to repeat a project or analysis and obtain comparable results."),
  multi(TOPICS.small, "Which statements accurately describe common Big Data and Small Data distinctions?",
    ["Small Data is often highly structured", "Big Data must be able to absorb unstructured data", "Verifying Big Data quality is challenging", "Big Data is always prepared by one user for one personal purpose"],
    ["Small Data is often highly structured", "Big Data must be able to absorb unstructured data", "Verifying Big Data quality is challenging"],
    "Big Data can be distributed, heterogeneous, and difficult to verify. It is not usually one user's personally prepared dataset."),
  single(TOPICS.small, "Which data is generally easier to collect and translate into information and business intelligence?",
    ["Small Data", "Raw distributed Big Data", "Only unstructured data", "Only streaming data"], "Small Data",
    "The instructor deck says Small Data is usually easier to collect and translate into information and business intelligence."),
  tf(TOPICS.small, "Most companies use Small Data in some form.", true,
    "The instructor presentation explicitly notes that most companies use Small Data."),
  single(TOPICS.small, "Which is the best example of a Small Data tool?",
    ["A flat spreadsheet with rows and columns", "A raw data lake holding video and sensor streams", "A globally distributed clickstream platform", "A large-scale IoT stream processor"],
    "A flat spreadsheet with rows and columns",
    "Spreadsheets are flat two-dimensional tools commonly used to analyze Small Data."),
  tf(TOPICS.small, "Big Data is usually designed to answer one narrow, predefined question.", false,
    "Big Data is often collected broadly and explored for multiple questions, patterns, and future uses."),
  tf(TOPICS.small, "Big Data may be distributed across multiple servers located in different places.", true,
    "The formative highlights that Big Data can be spread throughout electronic space across multiple servers."),

  // Data Foundations
  single(TOPICS.foundations, "What is the primary focus of data management?",
    ["Storing, organizing, and maintaining data", "Only visualizing charts", "Only developing prediction algorithms", "Writing advertising copy"],
    "Storing, organizing, and maintaining data",
    "Data management includes collecting, storing, organizing, and maintaining an organization's data."),
  multi(TOPICS.foundations, "Effective data management aims to ensure that data is:",
    ["Accurate", "Available", "Accessible", "Decorative", "Always public"],
    ["Accurate", "Available", "Accessible"],
    "The instructor presentation emphasizes accuracy, availability, and accessibility."),
  tf(TOPICS.foundations, "Users should be involved in the data management process.", true,
    "The data management slide explicitly notes that users must be involved."),
  single(TOPICS.foundations, "A collection of related files is a:",
    ["Database", "Query", "Spreadsheet cell", "Chart legend"], "Database",
    "A database organizes related files or table-like structures through common fields."),
  single(TOPICS.foundations, "In a database, which object helps users input data?",
    ["Form", "Query", "Cube", "Outlier"], "Form",
    "Forms support data input into a database."),
  single(TOPICS.foundations, "In a database, which object is used to retrieve data?",
    ["Query", "Form", "Symbol", "Sensor"], "Query",
    "Queries retrieve requested data from a database."),
  matching(TOPICS.foundations, "Match each database concept to its role.", [
    ["File", "A table-like structure"],
    ["Form", "Helps users input data"],
    ["Query", "Retrieves requested data"],
    ["Database", "A collection of related files"],
  ], "Files are related through common fields in a database; forms enter data and queries retrieve it."),
  single(TOPICS.foundations, "Which system consolidates current and historical data from multiple sources for analytical purposes?",
    ["Data warehouse", "Word processor", "Form", "Social network"], "Data warehouse",
    "A data warehouse stores data extracted from various databases and commonly includes historical data."),
  tf(TOPICS.foundations, "Data warehouses commonly include historical data.", true,
    "Historical data is a major warehouse feature because warehouses support analysis over time."),
  single(TOPICS.foundations, "What does data mining do?",
    ["Searches, retrieves, and analyzes data to discover hidden patterns and trends", "Only creates backups", "Only checks spelling", "Only changes file names"],
    "Searches, retrieves, and analyzes data to discover hidden patterns and trends",
    "Data mining uses analytical techniques to find hidden patterns and trends, often in warehouse data."),
  single(TOPICS.foundations, "Market Basket Analysis is an example of:",
    ["Data mining", "Semiotics", "Form entry", "Data deletion"], "Data mining",
    "The data warehouse slide gives Market Basket Analysis as a data mining example."),
  single(TOPICS.foundations, "Warehouses may use multidimensional databases and what structure instead of only flat tables?",
    ["Cubes", "Paragraphs", "Flags", "Folders"], "Cubes",
    "The instructor deck mentions multidimensional databases and cubes."),
  single(TOPICS.foundations, "Which description best fits a data lake?",
    ["A centralized repository that stores raw structured, semi-structured, and unstructured data", "A finished chart only", "A database limited to one predefined table", "A spreadsheet formula"],
    "A centralized repository that stores raw structured, semi-structured, and unstructured data",
    "A lake keeps diverse data in its raw format for flexible exploration, analysis, and processing."),
  tf(TOPICS.foundations, "Data in a data lake must be organized according to a predefined schema before storage.", false,
    "A data lake is flexible because raw data can be stored without a predefined schema or organization."),
  multi(TOPICS.foundations, "Which are examples of unstructured data?",
    ["Free-text documents", "Images", "Motion pictures", "Sound recordings", "A clean transaction table with fixed columns"],
    ["Free-text documents", "Images", "Motion pictures", "Sound recordings"],
    "Unstructured data does not fit neatly into standard row-column relational structures."),
  single(TOPICS.foundations, "An email with a free-text body plus sender, recipient, subject, and date is an example of:",
    ["Semi-structured data", "Only structured data", "Only unstructured data", "A data cube"], "Semi-structured data",
    "Email combines an unstructured body with structured metadata fields."),
  single(TOPICS.foundations, "Financial records, statistics, and transaction data organized in SQL databases are typically:",
    ["Structured data", "Unstructured data", "Preattentive data", "Behavioral reflection only"], "Structured data",
    "Structured data follows an organized format such as spreadsheet rows and columns or SQL tables."),
  matching(TOPICS.foundations, "Match each storage or structure concept to the best description.", [
    ["Structured data", "Organized fields such as transaction rows"],
    ["Semi-structured data", "A hybrid such as email plus metadata"],
    ["Unstructured data", "Media or free text without a standard row-column fit"],
    ["Data lake", "Raw diverse data without a predefined schema"],
  ], "The key distinction is how strongly the data conforms to a predefined organization."),
  single(TOPICS.foundations, "What is data analysis?",
    ["Transforming data into useful information", "Only maintaining storage hardware", "Only entering records into a form", "Only collecting raw files"],
    "Transforming data into useful information",
    "The instructor presentation defines analysis as transforming data into useful information."),
  multi(TOPICS.foundations, "Which tools are presented as data analysis tools?",
    ["Excel", "Python", "R", "Tableau", "Microsoft Power BI", "Only paper forms"],
    ["Excel", "Python", "R", "Tableau", "Microsoft Power BI"],
    "The data analysis slide lists Excel, Python, R, Tableau, and Microsoft Power BI."),
  multi(TOPICS.foundations, "Which tools or features are commonly found in spreadsheet analysis workflows rather than core DBMS applications?",
    ["Pivot Table", "Solver", "Power Query", "Form", "Report"],
    ["Pivot Table", "Solver", "Power Query"],
    "Pivot tables, Solver, and Power Query are spreadsheet analysis tools. Forms and reports are common DBMS features."),
  multi(TOPICS.foundations, "Which objects are commonly found in DBMS applications?",
    ["Query", "Form", "Report", "Pivot Table", "Solver"],
    ["Query", "Form", "Report"],
    "Queries, forms, and reports are standard DBMS application tools; Pivot Table and Solver are spreadsheet-oriented."),
  tf(TOPICS.foundations, "Spreadsheets are flat, two-dimensional files organized into rows and columns.", true,
    "This row-column structure makes spreadsheets practical for many Small Data analysis tasks."),

  // Analytics Applications
  single(TOPICS.applications, "Big Data and data analytics are:",
    ["Different concepts", "Exactly the same thing", "Both names for a spreadsheet", "Both limited to healthcare"], "Different concepts",
    "Big Data is a kind of dataset with special characteristics. Data analytics is the process of extracting insights from data."),
  tf(TOPICS.applications, "All rewarding data analytics requires Big Data.", false,
    "The reading notes that useful analysis can also be performed on simple datasets."),
  single(TOPICS.applications, "Which process is most suitable for uncovering hidden patterns in years of retail transaction data?",
    ["Data mining", "Payroll processing", "Inventory labeling", "File renaming"], "Data mining",
    "Data mining is used to discover hidden patterns and trends in large collections of data."),
  single(TOPICS.applications, "A retailer forecasts holiday demand and adjusts inventory early. Which use case is this?",
    ["Predictive analytics", "Semiotics", "Data entry", "Closure"], "Predictive analytics",
    "Predictive analytics uses historical evidence to estimate what is likely to happen next."),
  single(TOPICS.applications, "A bank flags a credit card used in two countries within a short time. Which use case is this?",
    ["Fraud detection", "Data visualization", "Course design", "File organization"], "Fraud detection",
    "Fraud detection checks whether activity is normal or suspicious."),
  single(TOPICS.applications, "An online store sends different promotions based on previous purchases and interests. Which use case is this?",
    ["Personalized marketing", "Closure", "Data backup", "Network forecasting"], "Personalized marketing",
    "Personalized marketing uses customer profiles and behavior to tailor messages and offers."),
  single(TOPICS.applications, "A streaming platform suggests a show because similar users enjoyed it. Which use case is this?",
    ["Recommendation system", "Form processing", "Schema design", "Data cleansing only"], "Recommendation system",
    "Recommendation systems use history, preferences, and behavior of similar users to suggest content."),
  single(TOPICS.applications, "A company sees negative customer reviews increase after a product update. Which use case helps identify this?",
    ["Customer sentiment analysis", "Market basket analysis only", "Data entry", "Continuity"], "Customer sentiment analysis",
    "Sentiment analysis examines reviews, posts, surveys, and feedback to understand how customers feel."),
  single(TOPICS.applications, "Doctors identify patients at higher risk of disease and recommend earlier screening. Which use case is this?",
    ["Health analytics", "Visual semiotics", "Spreadsheet formatting", "Location tagging"], "Health analytics",
    "Health analytics can improve diagnosis, treatment, prevention, and patient outcomes."),
  single(TOPICS.applications, "A building reduces heating during low-occupancy periods using sensor and weather data. Which use case is this?",
    ["Energy management", "Consumer sentiment", "Data warehousing", "Social media vetting"], "Energy management",
    "Energy analytics can predict, monitor, and reduce energy usage."),
  single(TOPICS.applications, "A city changes traffic lights in real time to reduce congestion. Which use case is this?",
    ["Smart cities", "E-commerce pricing", "Form design", "Anscombe's Quartet"], "Smart cities",
    "Smart city analytics combines transport, sensor, emergency, and environmental data to improve urban systems."),
  single(TOPICS.applications, "A factory machine reports warning signs before it fails. Which use case is this?",
    ["Internet of Things analytics", "Data deletion", "Semiotics", "Historical archiving only"], "Internet of Things analytics",
    "IoT analytics uses connected devices and real-time sensor data to trigger action."),
  single(TOPICS.applications, "Analyzing click-through streams to improve an online storefront is an example of analytics in:",
    ["E-commerce", "Law enforcement only", "Education only", "Database form entry"], "E-commerce",
    "E-commerce analytics uses browsing behavior, demand, prices, and transactions to improve offerings and conversion."),
  single(TOPICS.applications, "Using ROI analysis to choose the best channels for a campaign is an example of analytics in:",
    ["Marketing", "Storage hardware", "Data lake schema design", "Geotagging only"], "Marketing",
    "Marketing analytics helps identify audiences, personalize communication, allocate budget, and monitor campaigns."),
  single(TOPICS.applications, "An LMS tracks engagement, progress, and assessment data to identify struggling students. Which area is this?",
    ["Education analytics", "Fraud detection", "Visual data", "Database backup"], "Education analytics",
    "Education analytics can personalize instruction and support targeted intervention."),
  single(TOPICS.applications, "Forecasting future network demand using call volumes, data usage, and peak hours is an example of:",
    ["Telecommunications analytics", "Semiotics", "Market basket analysis", "Direct input"], "Telecommunications analytics",
    "Telecommunications providers use analytics to forecast capacity and improve service."),
  single(TOPICS.applications, "Using crime data to identify hotspots and allocate resources is an example of:",
    ["Government analytics", "Only visual design", "Only form processing", "Recommendation systems"], "Government analytics",
    "Government analytics can support public services, resource allocation, crime prevention, and detection."),
  matching(TOPICS.applications, "Match each analytics application to its example.", [
    ["Recommendation systems", "Suggesting a movie based on viewing history"],
    ["Fraud detection", "Flagging a suspicious cross-country transaction"],
    ["Sentiment analysis", "Tracking rising negative product reviews"],
    ["Predictive analytics", "Forecasting holiday product demand"],
  ], "Each application answers a different practical question: what to suggest, what looks suspicious, how people feel, or what may happen next."),
  matching(TOPICS.applications, "Match each industry to a typical use of analytics.", [
    ["Education", "Personalize support for struggling learners"],
    ["Banking", "Anticipate customer needs from transaction patterns"],
    ["Telecommunications", "Forecast network capacity"],
    ["Government", "Improve services and allocate public resources"],
  ], "The reading applies analytics to business, public, and social contexts."),
  single(TOPICS.applications, "According to the reading's industry comparison, Banking and Securities has very strong Big Data potential particularly because of:",
    ["Large volume and high speed", "Low variety and no historical records", "Only paper-based data", "The absence of transactions"],
    "Large volume and high speed",
    "The reading describes Banking and Securities as very hot for volume and velocity."),
  single(TOPICS.applications, "According to the reading, Government's Big Data potential is especially supported by:",
    ["Large volume and wide variety", "Only high speed", "Only customer ratings", "Only streaming video"],
    "Large volume and wide variety",
    "The reading points to Government's volume and variety, with speed playing a somewhat smaller role."),

  // Visual Analytics
  single(TOPICS.visuals, "What does data visualization do?",
    ["Transforms raw data into meaningful visual elements", "Deletes all raw data", "Stores only passwords", "Replaces analysis with decoration"],
    "Transforms raw data into meaningful visual elements",
    "Visualizations such as graphs, charts, images, and video help people understand data and discover patterns."),
  tf(TOPICS.visuals, "A visualization is only decoration and does not communicate meaning.", false,
    "Visualizations communicate. Their signs, colors, shapes, and structure influence interpretation."),
  multi(TOPICS.visuals, "Visual analytics helps people:",
    ["Explore", "Detect", "Compare", "Explain", "Ignore outliers"],
    ["Explore", "Detect", "Compare", "Explain"],
    "The instructor deck frames visual analytics as a tool to explore, detect, compare, and explain."),
  single(TOPICS.visuals, "A dashboard reveals where sales are falling, which region is affected, and when the decline started. This is an example of:",
    ["Visual analytics", "Only data storage", "Only form design", "Only direct input"], "Visual analytics",
    "Visual analytics helps viewers move from seeing data to identifying a useful action."),
  single(TOPICS.visuals, "What is semiotics?",
    ["The study of how signs, symbols, colors, and shapes create meaning", "The storage of raw data without schema", "A technique for forecasting demand", "A database query language"],
    "The study of how signs, symbols, colors, and shapes create meaning",
    "Semiotics explains how visual communication is interpreted through learned meaning and context."),
  single(TOPICS.visuals, "A logo or flag is best described as a:",
    ["Symbol", "Query", "Warehouse", "Velocity measure"], "Symbol",
    "A symbol is a sign whose meaning is learned."),
  tf(TOPICS.visuals, "The same visual symbol can mean different things to different audiences.", true,
    "Meaning depends on context, audience, culture, and situation."),
  single(TOPICS.visuals, "A red warning icon communicates before a user reads text. Which visual communication concept does this illustrate?",
    ["Semiotics", "Data warehousing", "Reproducibility", "Direct input"], "Semiotics",
    "Icons, colors, and symbols are signs that carry interpreted meaning."),
  single(TOPICS.visuals, "What are preattentive attributes?",
    ["Visual cues noticed almost instantly before conscious attention", "Only spreadsheet formulas", "Historical records in warehouses", "Schema rules for a database"],
    "Visual cues noticed almost instantly before conscious attention",
    "Preattentive attributes guide viewers toward patterns, differences, outliers, and key messages quickly."),
  multi(TOPICS.visuals, "Which are common preattentive attributes?",
    ["Color", "Size", "Shape", "Position", "Orientation", "Length", "Database query"],
    ["Color", "Size", "Shape", "Position", "Orientation", "Length"],
    "The slide lists color, size, shape, position, orientation, and length."),
  tf(TOPICS.visuals, "A good chart should use as many preattentive attributes as possible at the same time.", false,
    "Use attributes deliberately. Too many competing signals reduce clarity."),
  single(TOPICS.visuals, "One red mark among many neutral marks is noticed immediately. Which attribute is doing the work?",
    ["Color", "Schema", "Veracity", "Query"], "Color",
    "Color can create fast visual contrast and draw attention to an outlier or warning."),
  single(TOPICS.visuals, "Gestalt is a German term meaning:",
    ["Unified whole", "Hidden query", "Raw lake", "Fast signal"], "Unified whole",
    "Gestalt principles describe how people naturally organize visual information into patterns and meaningful wholes."),
  single(TOPICS.visuals, "Objects close together are perceived as related. Which Gestalt principle is this?",
    ["Proximity", "Similarity", "Closure", "Continuity"], "Proximity",
    "Proximity groups items through physical closeness."),
  single(TOPICS.visuals, "Objects with the same color, shape, or size appear grouped. Which Gestalt principle is this?",
    ["Similarity", "Proximity", "Closure", "Continuity"], "Similarity",
    "Similarity uses shared visual attributes to imply a relationship."),
  single(TOPICS.visuals, "The mind fills in missing parts of a shape. Which Gestalt principle is this?",
    ["Closure", "Continuity", "Similarity", "Proximity"], "Closure",
    "Closure describes the mind's tendency to complete incomplete forms."),
  single(TOPICS.visuals, "The eye follows smooth paths and lines. Which Gestalt principle is this?",
    ["Continuity", "Closure", "Similarity", "Proximity"], "Continuity",
    "Continuity describes the natural tendency to follow aligned paths and flowing lines."),
  matching(TOPICS.visuals, "Match each Gestalt principle to its meaning.", [
    ["Proximity", "Nearby objects look related"],
    ["Similarity", "Shared visual traits imply a group"],
    ["Closure", "The mind completes missing parts"],
    ["Continuity", "The eye follows smooth paths"],
  ], "These principles help designers guide perception and make visual relationships easy to understand."),
  multi(TOPICS.visuals, "Which practices improve Gestalt-based data visualization?",
    ["Place labels near the data they explain", "Keep styling consistent for the same category", "Use white space to show hierarchy", "Place unrelated items very close together", "Keep layouts simple"],
    ["Place labels near the data they explain", "Keep styling consistent for the same category", "Use white space to show hierarchy", "Keep layouts simple"],
    "Deliberate grouping improves clarity; false grouping and too many competing signals make visuals harder to read."),
  tf(TOPICS.visuals, "A well-designed chart should be able to stand alone without requiring the viewer to inspect the source table first.", true,
    "The instructor slide says that if a chart can stand alone without its source data, it is doing its job well."),
  single(TOPICS.visuals, "What does Anscombe's Quartet demonstrate?",
    ["Datasets with similar summary statistics can reveal very different patterns when plotted", "Every visualization should be a pie chart", "Summary statistics are never useful", "Tables must always be avoided"],
    "Datasets with similar summary statistics can reveal very different patterns when plotted",
    "The quartet shows why tables, statistics, and visualizations each contribute a different form of understanding."),
  tf(TOPICS.visuals, "The four datasets in Anscombe's Quartet have very different correlations and regression lines.", false,
    "Their summary statistics, correlations, and best-fit lines are nearly identical, while their plots look dramatically different."),
  matching(TOPICS.visuals, "Match each way of presenting data to its unique value.", [
    ["Tables", "Show individual values with precision"],
    ["Statistics", "Summarize central tendency and dispersion"],
    ["Visualizations", "Reveal patterns in the data"],
  ], "The reading argues that each presentation form has value rather than treating visualization as the only useful form."),

  // Data Literacy
  single(TOPICS.literacy, "Choosing a movie on a streaming service, how long you watch, and when you watch are examples of:",
    ["Behavioral reflection", "Direct input", "Closure", "A predefined schema"], "Behavioral reflection",
    "Behavioral reflection is data generated through what a user does."),
  single(TOPICS.literacy, "Rating a movie after watching it is an example of:",
    ["Direct input", "Behavioral reflection only", "Continuity", "Data mining"], "Direct input",
    "A rating is deliberately supplied by the user, so it is direct input."),
  matching(TOPICS.literacy, "Match the Netflix-style action to the way data is collected.", [
    ["Selecting a movie", "Behavioral reflection"],
    ["Time spent watching", "Behavioral reflection"],
    ["Pressing a rating button", "Direct input"],
  ], "Actions can leave a behavioral trail, while explicit responses are direct input."),
  single(TOPICS.literacy, "Why is chain of custody important when considering veracity?",
    ["It identifies where data came from and the context in which it was collected", "It guarantees every chart uses red", "It increases file size", "It removes the need to validate data"],
    "It identifies where data came from and the context in which it was collected",
    "Trust depends on understanding sources, collection methods, and context."),
  single(TOPICS.literacy, "What did IBM Watson help the US Open improve?",
    ["The fan experience and player insight", "Only spreadsheet formatting", "Only ticket printing", "The definition of a byte"],
    "The fan experience and player insight",
    "The reading uses the US Open as an example of data helping fans navigate, learn, and view highlights while helping players understand performance."),
  tf(TOPICS.literacy, "Social media is inherently good in every context.", false,
    "The reading calls social media a two-sided sword: its effect depends on how it is used."),
  multi(TOPICS.literacy, "Which are potential benefits of technology and social media?",
    ["Staying in touch with people around the world", "Quick access to research and information", "Online education and job-skill development", "Marketing brands, goods, and services", "A guarantee that every online claim is true"],
    ["Staying in touch with people around the world", "Quick access to research and information", "Online education and job-skill development", "Marketing brands, goods, and services"],
    "Social media can improve connection, information access, education, civic participation, marketing, and employment exploration."),
  multi(TOPICS.literacy, "Why should online information be vetted carefully?",
    ["Anyone can post information", "Online information can be fake", "Posts may not be checked carefully", "Every post is guaranteed to be peer-reviewed"],
    ["Anyone can post information", "Online information can be fake", "Posts may not be checked carefully"],
    "Freedom to post is valuable, but it means online information is not automatically reliable."),
  single(TOPICS.literacy, "What problem affected the reported average income of Yale's class of 1924?",
    ["Bias from self-reporting and selective responses", "A data lake stored too many images", "The chart used proximity", "The sample contained every graduate equally"],
    "Bias from self-reporting and selective responses",
    "The reading explains that self-reporting, response bias, and who could be located made the reported average misleadingly high."),
  multi(TOPICS.literacy, "Which factors can inflate a self-reported alumni income survey?",
    ["People exaggerating their income", "Only people who choose to respond being counted", "Successful alumni being easier to locate", "Perfect participation from every graduate"],
    ["People exaggerating their income", "Only people who choose to respond being counted", "Successful alumni being easier to locate"],
    "The Yale example illustrates self-reporting bias, non-response bias, and selection bias."),
  tf(TOPICS.literacy, "A large amount of doubtful-quality data can create more confusion than insight.", true,
    "More data is not automatically better; low veracity can undermine the value of a large dataset."),
  single(TOPICS.literacy, "In healthcare data collection, why must laboratory measures be properly designed?",
    ["To ensure data produces the desired information rather than irrelevant results", "To increase the number of colors in a chart", "To avoid collecting any data", "To replace all third-party data"],
    "To ensure data produces the desired information rather than irrelevant results",
    "The reading uses healthcare to show how collection design and reliable sources support veracity."),
  tf(TOPICS.literacy, "The meaning of data depends partly on the context in which it was collected.", true,
    "Collection context is important for interpreting credibility, relevance, and meaning."),
  single(TOPICS.literacy, "What is the most appropriate reaction to a plausible but surprising statistic shared online?",
    ["Check its source, collection method, and possible bias", "Accept it immediately", "Reject every statistic automatically", "Only inspect its font"],
    "Check its source, collection method, and possible bias",
    "Data literacy means vetting claims rather than accepting or rejecting them without evidence."),
];

questions.forEach((question) => {
  question.week = 1;
});

const week2Questions = [
  // GDPR Essentials
  single(TOPICS.gdpr, "What does GDPR stand for?",
    ["General Data Protection Regulation", "Global Data Processing Register", "General Digital Privacy Report", "Government Data Protection Record"],
    "General Data Protection Regulation",
    "GDPR stands for General Data Protection Regulation."),
  single(TOPICS.gdpr, "Which description best fits GDPR?",
    ["A voluntary chart-design guideline", "A legally enforced EU regulation governing the use and integrity of personal data", "A spreadsheet storage standard", "A rule that applies only to paper records"],
    "A legally enforced EU regulation governing the use and integrity of personal data",
    "GDPR governs the processing and protection of personal data."),
  tf(TOPICS.gdpr, "GDPR can impose obligations on an organization outside the EU if it targets or collects data relating to people in the EU.", true,
    "The GDPR presentation emphasizes its reach beyond an organization's physical location."),
  single(TOPICS.gdpr, "What is personal data?",
    ["Any information relating to an individual who can be directly or indirectly identified", "Only a person's passport number", "Only financial records", "Only information stored online"],
    "Any information relating to an individual who can be directly or indirectly identified",
    "Personal data is broader than obvious identifiers such as a name. It can include location information, cookies, and other identifying data."),
  tf(TOPICS.gdpr, "Personal data refers only to information that identifies a person directly by name.", false,
    "A person may also be identified indirectly through information such as location, online identifiers, or combined records."),
  single(TOPICS.gdpr, "What does processing mean under GDPR?",
    ["Any action performed on personal data, whether automated or manual", "Only deleting a database", "Only collecting consent forms", "Only running AI models"],
    "Any action performed on personal data, whether automated or manual",
    "Processing includes actions such as collecting, storing, using, sharing, altering, and deleting data."),
  single(TOPICS.gdpr, "Who is the data subject?",
    ["The individual the personal data concerns", "The company that designs a database", "The authority that writes every policy", "Only an external processor"],
    "The individual the personal data concerns",
    "A data subject is the person identified or identifiable through personal data."),
  single(TOPICS.gdpr, "Who decides why and how personal data will be processed?",
    ["Data controller", "Data subject", "Data processor", "Database query"],
    "Data controller",
    "The controller determines the purposes and means of processing."),
  single(TOPICS.gdpr, "What is a data processor?",
    ["A third party that processes personal data on behalf of a controller", "The person whose data is collected", "A chart used to compare values", "A public authority in every case"],
    "A third party that processes personal data on behalf of a controller",
    "A processor handles personal data for the controller."),
  matching(TOPICS.gdpr, "Match each GDPR term to its meaning.", [
    ["Personal data", "Information that can directly or indirectly identify a person"],
    ["Processing", "Any manual or automated action performed on data"],
    ["Data subject", "The individual the data concerns"],
    ["Data controller", "The party that decides why and how processing occurs"],
    ["Data processor", "A party processing data on behalf of a controller"],
  ], "These roles and definitions are the foundation of the GDPR presentation."),
  multi(TOPICS.gdpr, "Which are special categories of personal data?",
    ["Racial or ethnic origin", "Religious or philosophical beliefs", "Genetic data", "Sexual orientation", "Political opinions", "Profession or occupation"],
    ["Racial or ethnic origin", "Religious or philosophical beliefs", "Genetic data", "Sexual orientation", "Political opinions"],
    "Special categories receive greater protection. A profession or occupation is personal data but is not one of the listed sensitive categories."),
  multi(TOPICS.gdpr, "Which additional examples belong to special categories of personal data?",
    ["Trade union membership", "Biometric data used to identify a person", "Health data", "A natural person's sex life", "Favorite chart type"],
    ["Trade union membership", "Biometric data used to identify a person", "Health data", "A natural person's sex life"],
    "GDPR gives greater protection to these sensitive forms of personal data."),
  single(TOPICS.gdpr, "Which principle requires processing to be lawful, fair, and transparent to the data subject?",
    ["Lawfulness, fairness and transparency", "Purpose limitation", "Storage limitation", "Accuracy"],
    "Lawfulness, fairness and transparency",
    "The first principle requires lawful, fair, and transparent processing."),
  single(TOPICS.gdpr, "Which principle says data must be processed only for the legitimate purposes specified when it was collected?",
    ["Purpose limitation", "Data minimization", "Accountability", "Portability"],
    "Purpose limitation",
    "Purpose limitation prevents data from being reused incompatibly without an appropriate basis."),
  single(TOPICS.gdpr, "Which principle says organizations should collect and process only as much data as necessary?",
    ["Data minimization", "Storage limitation", "Accuracy", "Right to access"],
    "Data minimization",
    "Data minimization limits collection to what is necessary for the specified purpose."),
  single(TOPICS.gdpr, "Which principle requires personal data to be kept accurate and up to date?",
    ["Accuracy", "Accountability", "Purpose limitation", "Data portability"],
    "Accuracy",
    "The accuracy principle concerns correctness and updates."),
  single(TOPICS.gdpr, "Which principle says personal data should not be stored longer than necessary?",
    ["Storage limitation", "Integrity and confidentiality", "Purpose limitation", "Right to object"],
    "Storage limitation",
    "Storage limitation connects retention time to the reason for processing."),
  single(TOPICS.gdpr, "Which principle requires appropriate security, integrity, and confidentiality, such as encryption?",
    ["Integrity and confidentiality", "Accuracy", "Public interest", "Rectification"],
    "Integrity and confidentiality",
    "Personal data must be protected against inappropriate access, loss, or disclosure."),
  single(TOPICS.gdpr, "Which principle makes the controller responsible for demonstrating compliance with the GDPR principles?",
    ["Accountability", "Data portability", "Storage limitation", "Consent"],
    "Accountability",
    "Accountability means the controller must be able to show that the principles are followed."),
  matching(TOPICS.gdpr, "Match each GDPR principle to its meaning.", [
    ["Purpose limitation", "Use data for the specified legitimate purposes"],
    ["Data minimization", "Collect only what is necessary"],
    ["Accuracy", "Keep personal data correct and up to date"],
    ["Storage limitation", "Keep data no longer than necessary"],
    ["Integrity and confidentiality", "Protect security and confidentiality"],
  ], "The seven principles guide responsible personal-data processing."),
  multi(TOPICS.gdpr, "Which are lawful bases for processing personal data?",
    ["Consent", "Contract", "Legal obligation", "Vital interests", "Public interest or official function", "Legitimate interests", "Curiosity alone"],
    ["Consent", "Contract", "Legal obligation", "Vital interests", "Public interest or official function", "Legitimate interests"],
    "Processing requires an appropriate lawful basis. Curiosity alone is not one."),
  single(TOPICS.gdpr, "A company processes customer survey feedback to improve services without overriding customer rights. Which lawful basis may apply?",
    ["Legitimate interests", "Storage limitation", "Rectification", "Data portability"],
    "Legitimate interests",
    "Legitimate interests can be used when they do not override the subject's fundamental rights and freedoms."),
  multi(TOPICS.gdpr, "Valid consent must be:",
    ["Freely given", "Specific", "Informed", "Unambiguous", "Hidden among unrelated matters", "Documented"],
    ["Freely given", "Specific", "Informed", "Unambiguous", "Documented"],
    "Consent requests must use clear language, stand apart from other matters, and be evidenced."),
  tf(TOPICS.gdpr, "A data subject can withdraw previously given consent.", true,
    "Consent must be withdrawable, and the organization must honor that decision."),
  tf(TOPICS.gdpr, "After a subject withdraws consent, an organization can simply relabel the same processing under a different legal basis without justification.", false,
    "The GDPR presentation warns that the organization cannot simply switch legal bases after withdrawal."),
  multi(TOPICS.gdpr, "Which are rights of data subjects under GDPR?",
    ["Right of access", "Right to rectification", "Right to erasure", "Right to restrict processing", "Right to data portability", "Right to object", "Right to compare private records with another subject's records"],
    ["Right of access", "Right to rectification", "Right to erasure", "Right to restrict processing", "Right to data portability", "Right to object"],
    "Data subjects have several rights over their information. They do not gain access to other subjects' private records."),
  single(TOPICS.gdpr, "Which right allows an individual to correct inaccurate or incomplete personal data?",
    ["Right to rectification", "Right to object", "Right to erasure", "Right to access"],
    "Right to rectification",
    "Rectification concerns correcting inaccuracies and completing incomplete data."),
  single(TOPICS.gdpr, "Which right allows an individual to learn the purposes, retention period, and recipients of their data?",
    ["Right to be informed", "Right to portability", "Right to erasure", "Right to profiling"],
    "Right to be informed",
    "Individuals should receive clear information about how their personal data is used."),
  single(TOPICS.gdpr, "Which right is absolute when personal data is used for direct marketing?",
    ["Right to object", "Right to compare records", "Right to publish", "Right to hide every online identity"],
    "Right to object",
    "Individuals have an absolute right to stop their personal data being used for direct marketing."),
  matching(TOPICS.gdpr, "Match each privacy right to an example.", [
    ["Access", "Ask for a copy of the personal data held about you"],
    ["Rectification", "Correct an inaccurate address"],
    ["Erasure", "Request deletion where the legal conditions apply"],
    ["Restriction", "Request temporary non-use of disputed data"],
    ["Portability", "Receive eligible data in a structured machine-readable format"],
    ["Object", "Stop personal data being used for direct marketing"],
  ], "The exercise of a right can be subject to GDPR conditions and exceptions."),

  // ACG policy and breaches
  single(TOPICS.policy, "Under the ACG Personal Data Protection Policy, who is the data controller?",
    ["The American College of Greece", "Every student individually", "The Open University only", "Every external vendor automatically"],
    "The American College of Greece",
    "ACG decides why and how the personal data covered by its policy is processed."),
  multi(TOPICS.policy, "Who is responsible for adhering to ACG's Personal Data Protection Policy?",
    ["Faculty", "Staff", "Students", "Only the Data Protection Officer"],
    ["Faculty", "Staff", "Students"],
    "The policy states that all faculty, staff, and students are responsible for adhering to it."),
  single(TOPICS.policy, "Who should be contacted immediately if an ACG community member becomes aware of a personal-data breach?",
    ["The Data Protection Officer", "A social media account", "Any external vendor", "Only a classmate"],
    "The Data Protection Officer",
    "ACG's policy says suspected breaches should be reported immediately to the DPO."),
  single(TOPICS.policy, "Which email address is listed for ACG's Data Protection Officer?",
    ["dpo@acg.edu", "privacy@example.com", "grades@acg.edu", "library@acg.edu"],
    "dpo@acg.edu",
    "The ACG policy lists dpo@acg.edu for privacy questions, rights requests, and breach reporting."),
  multi(TOPICS.policy, "Which situations are examples of personal-data breaches?",
    ["Personal data is accidentally deleted", "Unauthorized access to personal data", "A network intrusion such as phishing or malware", "Equipment containing personal data is stolen", "Personal data is emailed to the wrong recipient", "An employee changes their own password securely"],
    ["Personal data is accidentally deleted", "Unauthorized access to personal data", "A network intrusion such as phishing or malware", "Equipment containing personal data is stolen", "Personal data is emailed to the wrong recipient"],
    "A breach includes accidental or unlawful destruction, loss, alteration, disclosure, or access."),
  single(TOPICS.policy, "Which is NOT an indicative example of a personal-data breach?",
    ["Someone shares their own password with a colleague", "A laptop containing personal data is stolen", "Personal data is sent to the wrong recipient", "A hacker gains unauthorized access to personal data"],
    "Someone shares their own password with a colleague",
    "Sharing a password is poor security practice, but the supplied quiz distinguishes it from an actual personal-data breach unless personal data is exposed."),
  multi(TOPICS.policy, "When distributing files containing medical, salary, or social-security data, which safeguards should be used?",
    ["Password-protect electronic files", "Use sealed envelopes for printed files sent directly to authorized recipients", "Apply anonymization principles such as IDs instead of names", "Post the files in a public folder"],
    ["Password-protect electronic files", "Use sealed envelopes for printed files sent directly to authorized recipients", "Apply anonymization principles such as IDs instead of names"],
    "Sensitive data requires practical safeguards appropriate to the format and recipients."),
  tf(TOPICS.policy, "ACG may publish photos of students or professors without prior written consent whenever the person is an adult.", false,
    "The supplied quiz expects prior written consent rather than an unrestricted permission to publish adult subjects' photos."),
  single(TOPICS.policy, "If a student needs to collect or process personal data for their studies, whose written agreement must they obtain first?",
    ["Their tutor or supervisor", "Any fellow student", "Only an external vendor", "No agreement is required"],
    "Their tutor or supervisor",
    "The ACG Student Privacy Policy requires written agreement that the processing is necessary and written notice to the DPO."),
  tf(TOPICS.policy, "Use of human research participants by an ACG student requires Institutional Review Board approval.", true,
    "The Student Privacy Policy says human-participant use requires IRB approval without exception."),
  single(TOPICS.policy, "Can a student require ACG to delete the electronic records needed to reproduce grade transcripts?",
    ["No, those records are retained permanently to provide transcripts and safeguard awarded degrees", "Yes, in every circumstance", "Yes, after one semester", "Only if the student changes address"],
    "No, those records are retained permanently to provide transcripts and safeguard awarded degrees",
    "The ACG Data Retention Policy keeps the list of students and electronic transcript-reproduction records permanently."),
  multi(TOPICS.policy, "Which types of student information may ACG collect or process?",
    ["Academic records and grades", "Identity and contact details", "Financial information", "Health or disability information in relevant circumstances", "Participation information from student systems", "Only a student's name"],
    ["Academic records and grades", "Identity and contact details", "Financial information", "Health or disability information in relevant circumstances", "Participation information from student systems"],
    "The Student Privacy Policy lists a wide range of information needed for educational services, operations, legal duties, and support."),
  multi(TOPICS.policy, "Which are examples of parties with whom ACG may share specific student information for defined purposes?",
    ["Accreditation or validation institutions", "Public authorities where required", "Partner universities or foundations", "Parents or guardians with student consent", "Authorized vendors", "Every visitor to the college website"],
    ["Accreditation or validation institutions", "Public authorities where required", "Partner universities or foundations", "Parents or guardians with student consent", "Authorized vendors"],
    "The policy lists purpose-specific recipients and aims to safeguard student privacy rights."),
  tf(TOPICS.policy, "The right to erasure applies without exceptions, conditions, or limitations.", false,
    "Rights are important but may be limited by other lawful obligations, purposes, and GDPR conditions."),
  single(TOPICS.policy, "Which official ACG policy focuses specifically on students' personal data?",
    ["ACG Student Privacy Policy", "Only the alumni benefits page", "The chart-design policy", "The parking policy"],
    "ACG Student Privacy Policy",
    "The Student Privacy Policy explains student-data collection, use, sharing, retention, and rights."),

  // AI and cybersecurity
  single(TOPICS.ai, "In what year was the term artificial intelligence coined?",
    ["1956", "1786", "1973", "2016"], "1956",
    "The reading states that the term artificial intelligence was coined in 1956."),
  single(TOPICS.ai, "What key feature distinguishes AI from a traditional program that only repeats fixed human-written rules?",
    ["AI can analyze training data, identify patterns, and adjust parameters for future outputs", "AI never requires data", "AI always makes correct decisions", "AI works only on simple repetitive tasks"],
    "AI can analyze training data, identify patterns, and adjust parameters for future outputs",
    "The reading emphasizes AI's learning capability."),
  single(TOPICS.ai, "What is training data?",
    ["Input data and corresponding output results supplied so an AI model can learn parameters", "Only a final chart", "A password list", "A GDPR retention schedule"],
    "Input data and corresponding output results supplied so an AI model can learn parameters",
    "An AI model iteratively adjusts parameters so calculated results fit training examples."),
  single(TOPICS.ai, "Which description best fits Weak AI?",
    ["AI designed for specific tasks within a limited domain", "AI that surpasses human intelligence in every aspect", "Human-level general intelligence already in common use", "A system that never processes data"],
    "AI designed for specific tasks within a limited domain",
    "Weak AI is also called Narrow AI or Artificial Narrow Intelligence."),
  multi(TOPICS.ai, "Which are examples of Weak AI?",
    ["Voice assistants", "Recommendation algorithms", "Netflix suggested movies", "Amazon recommended purchases", "A proven self-aware superintelligence"],
    ["Voice assistants", "Recommendation algorithms", "Netflix suggested movies", "Amazon recommended purchases"],
    "Weak AI performs defined tasks efficiently without broad human-like intelligence."),
  single(TOPICS.ai, "Which description best fits Strong AI?",
    ["Theoretical AI capable of understanding and learning any intellectual task a human can", "A spreadsheet pivot table", "A recommendation algorithm limited to movies", "A fixed rule-based calculator"],
    "Theoretical AI capable of understanding and learning any intellectual task a human can",
    "Strong AI is also called Artificial General Intelligence and remains theoretical in the reading."),
  single(TOPICS.ai, "Which description best fits Super AI?",
    ["A speculative intelligence surpassing human capabilities in virtually every cognitive aspect", "Any smartphone app", "A password manager", "A database query"],
    "A speculative intelligence surpassing human capabilities in virtually every cognitive aspect",
    "Artificial Superintelligence remains speculative and raises questions of control, safety, ethics, and power."),
  matching(TOPICS.ai, "Match each AI category to its description.", [
    ["Weak AI", "Limited-domain systems such as recommendations"],
    ["Strong AI", "Theoretical human-level general intelligence"],
    ["Super AI", "Speculative intelligence beyond human capability"],
  ], "The categories describe an increasing breadth of capability."),
  multi(TOPICS.ai, "Why is data literacy important when working with AI?",
    ["Assess training-data quality, relevance, and bias", "Critically evaluate output limitations and reliability", "Use outputs effectively for informed decisions", "Reason about privacy, protection, and ethics", "Remove the need for human ethical judgment"],
    ["Assess training-data quality, relevance, and bias", "Critically evaluate output limitations and reliability", "Use outputs effectively for informed decisions", "Reason about privacy, protection, and ethics"],
    "Data literacy strengthens responsible use of AI; it does not eliminate judgment."),
  single(TOPICS.ai, "Which statement best reflects responsible use of AI outputs?",
    ["Interpret outputs with awareness of data quality, bias, context, and limitations", "Trust every output because algorithms are objective", "Reject every output automatically", "Use outputs without considering the training data"],
    "Interpret outputs with awareness of data quality, bias, context, and limitations",
    "AI outputs can be useful while still inheriting problems from data and modeling choices."),
  multi(TOPICS.ai, "Which are drawbacks or concerns related to AI identified in the reading?",
    ["Development and maintenance cost", "Limited creativity and human touch", "Job replacement and the need for reskilling", "Reduced personal effort to think through tasks", "A guarantee that bias disappears"],
    ["Development and maintenance cost", "Limited creativity and human touch", "Job replacement and the need for reskilling", "Reduced personal effort to think through tasks"],
    "The reading balances AI benefits with financial, social, cognitive, and ethical concerns."),
  tf(TOPICS.ai, "A correctly programmed AI model is automatically free of bias.", false,
    "Biases, shortcuts, and generalizations may be carried into an algorithm through its training data."),
  single(TOPICS.ai, "What is cybersecurity?",
    ["Protecting systems, networks, and data from unauthorized access, damage, or theft", "Only designing charts", "Only storing raw data", "Only collecting biometric data"],
    "Protecting systems, networks, and data from unauthorized access, damage, or theft",
    "Cybersecurity includes detection, prevention, and response to threats."),
  multi(TOPICS.ai, "Which are examples of cyber threats?",
    ["Hacking", "Malware", "Phishing", "Unauthorized manipulation", "A well-labeled chart"],
    ["Hacking", "Malware", "Phishing", "Unauthorized manipulation"],
    "Cybersecurity protects data and systems against several forms of attack."),
  multi(TOPICS.ai, "Big Data and AI rely heavily on which qualities of data?",
    ["Availability", "Confidentiality", "Integrity", "Decorative styling"],
    ["Availability", "Confidentiality", "Integrity"],
    "Cybersecurity supports trusted Big Data and AI by protecting availability, confidentiality, and integrity."),
  tf(TOPICS.ai, "Data literacy can help people recognize phishing attempts and make more prudent decisions about sharing data.", true,
    "The reading connects cybersecurity awareness with practical data-literacy decisions."),

  // Smart cities
  single(TOPICS.smart, "What is a smart city?",
    ["A data- and technology-enabled approach to improving urban living and services", "A city with only more parking meters", "Any city with a spreadsheet", "A city where no personal data is ever collected"],
    "A data- and technology-enabled approach to improving urban living and services",
    "Smart cities use data, innovation, and human capital to improve responsiveness, efficiency, and quality of life."),
  multi(TOPICS.smart, "Which are the six smart-city themes in the reading?",
    ["Smart living", "Smart economy", "Smart people", "Smart governance", "Smart mobility", "Smart environment", "Smart font"],
    ["Smart living", "Smart economy", "Smart people", "Smart governance", "Smart mobility", "Smart environment"],
    "The framework connects technology and repeated data analysis with six areas of urban development."),
  matching(TOPICS.smart, "Match each smart-city theme to an example.", [
    ["Smart living", "Digital ID access to public services"],
    ["Smart economy", "Digital infrastructure that supports trade and investment"],
    ["Smart governance", "Platforms for citizen policy feedback"],
    ["Smart mobility", "Traffic systems and parking guidance"],
    ["Smart environment", "Air-quality sensors and targeted interventions"],
  ], "Each theme uses technology and data to improve a different part of urban life."),
  single(TOPICS.smart, "Which smart-city theme focuses on talent development, adaptability, critical thinking, and lifelong learning?",
    ["Smart people", "Smart mobility", "Smart environment", "Smart economy"],
    "Smart people",
    "Smart people emphasizes an adaptive population equipped for technological change."),
  single(TOPICS.smart, "Why can smart-city systems raise privacy concerns?",
    ["Connected devices continually collect data about personal activities", "They use no sensors", "They remove all digital records", "They only process anonymous weather data"],
    "Connected devices continually collect data about personal activities",
    "Wearables, cars, toll systems, and electronic wallets can reveal sensitive patterns."),
  multi(TOPICS.smart, "Which connected devices or systems may reveal personal daily patterns?",
    ["Wearables", "Cars", "Electronic toll collection", "Electronic wallets", "Blank paper"],
    ["Wearables", "Cars", "Electronic toll collection", "Electronic wallets"],
    "Smart-city convenience can involve continual personal-data collection."),
  single(TOPICS.smart, "What did Kaohsiung's traffic-control system use to reduce congestion?",
    ["Surveillance cameras, traffic detectors, controllers, and data-driven arrangements", "Only wider roads", "Only paper signs", "Only parking coins"],
    "Surveillance cameras, traffic detectors, controllers, and data-driven arrangements",
    "The reading describes a responsive system that acts when traffic volume exceeds thresholds."),
  multi(TOPICS.smart, "Which are features of a smart parking meter described in the reading?",
    ["Remote payment extension", "Sensors detecting whether a space is occupied", "Radar sensors for illegal parking", "Cameras sending information to a cloud server", "Only coin-based payment"],
    ["Remote payment extension", "Sensors detecting whether a space is occupied", "Radar sensors for illegal parking", "Cameras sending information to a cloud server"],
    "The smart meter uses connected data and technology to improve convenience and enforcement."),
  single(TOPICS.smart, "Biometrics in online banking are presented as an example of:",
    ["Smart living", "Smart environment", "Smart mobility", "Purpose limitation"],
    "Smart living",
    "Biometric authentication helps people access financial services through digital technology."),
  multi(TOPICS.smart, "Which biometric methods are described for online-banking authentication?",
    ["Fingerprint authentication", "Facial recognition", "Voice recognition", "Eye scanning", "Favorite-color matching"],
    ["Fingerprint authentication", "Facial recognition", "Voice recognition", "Eye scanning"],
    "Devices can collect several types of biometric data for pattern matching."),
  single(TOPICS.smart, "How does biometric authentication grant access?",
    ["Collected biometric data is matched against a bank record within a predefined confidence level", "A user chooses any matching photo", "The system ignores stored records", "Every scan is accepted"],
    "Collected biometric data is matched against a bank record within a predefined confidence level",
    "Access is granted when the biometric pattern sufficiently matches the stored record."),

  // Visual storytelling
  tf(TOPICS.storytelling, "Grouping related items together in an infographic helps them appear as one component.", true,
    "This uses visual grouping to make information easier to interpret."),
  single(TOPICS.storytelling, "Which statement is NOT true about data visualization?",
    ["Data visualization is simply a numeric representation of data", "It can make complex data more understandable", "It can help analyze large amounts of data", "It can improve accessibility of information"],
    "Data visualization is simply a numeric representation of data",
    "Visualization turns data into visual forms that support interpretation; it is not merely numeric representation."),
  tf(TOPICS.storytelling, "A pie chart is generally the best choice when you want to precisely compare two sets of values.", false,
    "Bar or column charts usually support more precise comparison through position on a common scale."),
  single(TOPICS.storytelling, "What does the Law of Prägnanz suggest?",
    ["People interpret ambiguous or complex visuals in the simplest way possible", "All charts should use the maximum number of colors", "Every chart should be a pie chart", "Context should be removed"],
    "People interpret ambiguous or complex visuals in the simplest way possible",
    "The storyteller should carry the burden of comprehension and make visuals clear."),
  single(TOPICS.storytelling, "What does the Gestalt principle of enclosure describe?",
    ["Elements surrounded by a line or object are perceived as a group", "The eye follows a smooth line", "Nearby items appear related", "Moving objects are always ignored"],
    "Elements surrounded by a line or object are perceived as a group",
    "Enclosure uses a boundary to imply grouping."),
  single(TOPICS.storytelling, "What does the Gestalt principle of connection describe?",
    ["Elements connected by lines are perceived as related", "Only similarly colored items are grouped", "The mind fills missing gaps", "Foreground and background are identical"],
    "Elements connected by lines are perceived as related",
    "Connecting marks imply relationships."),
  single(TOPICS.storytelling, "What does the Gestalt principle of figure-ground describe?",
    ["Foreground objects are seen as separate from the background", "Objects moving together are grouped", "Nearby objects look related", "Incomplete forms are completed"],
    "Foreground objects are seen as separate from the background",
    "Figure-ground distinguishes prominent objects from their background."),
  single(TOPICS.storytelling, "What does the Gestalt principle of common fate describe?",
    ["Objects moving in the same direction and speed are perceived as a group", "All static bars share a baseline", "Every symbol has one meaning", "Data should be stored indefinitely"],
    "Objects moving in the same direction and speed are perceived as a group",
    "Common fate is particularly relevant to animated graphics."),
  matching(TOPICS.storytelling, "Match each expanded Gestalt principle to its meaning.", [
    ["Enclosure", "A boundary makes elements appear grouped"],
    ["Connection", "Lines imply that elements are related"],
    ["Figure-ground", "Foreground objects appear separate from the background"],
    ["Common fate", "Objects moving together appear grouped"],
  ], "Week 2 extends the initial Gestalt list with additional ways visual elements form perceived groups."),
  single(TOPICS.storytelling, "Why are bar and column charts mainstays for basic comparisons?",
    ["They use position along a common scale, supporting accurate comparisons", "They always require more ink", "They remove the need for context", "They use only angle and area"],
    "They use position along a common scale, supporting accurate comparisons",
    "Cleveland and McGill's work helps explain why common-baseline comparisons work well."),
  single(TOPICS.storytelling, "Why do pie and donut charts become harder to interpret when they contain many similarly sized slices?",
    ["Slices rely on angle, area, and arc-position comparisons without a shared baseline", "They always use too much text", "They cannot represent proportions", "They are databases rather than charts"],
    "Slices rely on angle, area, and arc-position comparisons without a shared baseline",
    "Labels often become necessary because precise slice comparison is difficult."),
  single(TOPICS.storytelling, "What chart type can show paired changes over time using connected lines?",
    ["Slopegraph", "Data lake", "Query form", "Pie chart only"],
    "Slopegraph",
    "Slopegraphs can highlight rates of change or ranking switches across paired values."),
  single(TOPICS.storytelling, "What is a dumbbell chart useful for?",
    ["Focusing attention on differences between two or more values", "Storing biometric data", "Replacing GDPR consent", "Showing only raw text"],
    "Focusing attention on differences between two or more values",
    "A dumbbell chart turns the variance between values into a visible line."),
  multi(TOPICS.storytelling, "Which practices help calibrate visuals to a message?",
    ["Keep comparisons in close proximity", "Provide a common baseline where possible", "Use consistent scales, colors, and labeling across comparable charts", "Force the audience to remember earlier slides", "Align chart structure with the central comparison"],
    ["Keep comparisons in close proximity", "Provide a common baseline where possible", "Use consistent scales, colors, and labeling across comparable charts", "Align chart structure with the central comparison"],
    "The chart's orientation and styling should help the audience perceive the intended comparison."),
  tf(TOPICS.storytelling, "The same dataset can communicate a different message when its chart orientation or contextual data changes.", true,
    "Structure and context affect which comparisons are visible and how results are interpreted."),
  single(TOPICS.storytelling, "Why can contextual data improve a visualization?",
    ["It helps the audience judge whether a result is positive, negative, or neutral", "It guarantees every dataset is accurate", "It replaces all labels", "It makes comparisons unnecessary"],
    "It helps the audience judge whether a result is positive, negative, or neutral",
    "A number often becomes meaningful only when compared with a baseline, prior period, or peer."),
];

week2Questions.forEach((question) => {
  question.week = 2;
});
questions.push(...week2Questions);

questions.forEach((question, index) => {
  question.id = `q-${index + 1}`;
});

const typeLabels = {
  single: "Multiple choice",
  multi: "Select all that apply",
  truefalse: "True or false",
  matching: "Matching",
};

const examQuotas = {
  [TOPICS.core]: 5,
  [TOPICS.small]: 3,
  [TOPICS.foundations]: 4,
  [TOPICS.applications]: 3,
  [TOPICS.visuals]: 3,
  [TOPICS.literacy]: 2,
  [TOPICS.gdpr]: 10,
  [TOPICS.policy]: 6,
  [TOPICS.ai]: 5,
  [TOPICS.smart]: 4,
  [TOPICS.storytelling]: 5,
};

const state = {
  session: [],
  mode: "",
  modeLabel: "",
  index: 0,
  responses: {},
  checked: new Set(),
  correct: {},
  lastConfig: null,
};

const $ = (selector) => document.querySelector(selector);
const overlay = $("#quiz-overlay");
const quizBody = $("#quiz-body");
const results = $("#results");
const answerArea = $("#answer-area");
const feedback = $("#feedback");

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function sample(items, amount) {
  return shuffle(items).slice(0, amount);
}

function getStoredStats() {
  try {
    return JSON.parse(localStorage.getItem("signal-lab-stats")) || { attempts: 0, best: null };
  } catch {
    return { attempts: 0, best: null };
  }
}

function saveStats(score) {
  const stats = getStoredStats();
  stats.attempts += 1;
  if (state.mode === "exam" && (stats.best === null || score > stats.best)) stats.best = score;
  localStorage.setItem("signal-lab-stats", JSON.stringify(stats));
  updateDashboardStats();
}

function updateDashboardStats() {
  const stats = getStoredStats();
  $("#bank-total").textContent = questions.length;
  $("#attempt-count").textContent = stats.attempts;
  $("#best-score").textContent = stats.best === null ? "--" : `${stats.best}%`;
}

function createSession(config) {
  if (config.mode === "exam") {
    return shuffle(Object.entries(examQuotas).flatMap(([topic, quota]) => (
      sample(questions.filter((question) => question.category === topic), quota)
    )));
  }
  if (config.mode === "quick") return sample(questions, 15);
  if (config.mode === "week1") return shuffle(questions.filter((question) => question.week === 1));
  if (config.mode === "week2") return shuffle(questions.filter((question) => question.week === 2));
  if (config.mode === "topic") return shuffle(questions.filter((question) => question.category === config.topic));
  return shuffle(questions);
}

function startQuiz(config) {
  const labels = {
    exam: "50-question Blackboard mock",
    quick: "15-question quick pulse",
    all: "Complete question bank",
    week1: "Complete Week 1 drill",
    week2: "Complete Week 2 GDPR drill",
    topic: `${config.topic} focus drill`,
  };
  state.session = createSession(config);
  state.mode = config.mode;
  state.modeLabel = labels[config.mode];
  state.index = 0;
  state.responses = {};
  state.checked = new Set();
  state.correct = {};
  state.lastConfig = config;
  $("#quiz-mode-label").textContent = state.modeLabel;
  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  results.classList.add("hidden");
  quizBody.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const question = state.session[state.index];
  const isChecked = state.checked.has(question.id);
  $("#quiz-progress-text").textContent = `Question ${state.index + 1} of ${state.session.length}`;
  $("#quiz-progress-bar").style.width = `${((state.index + 1) / state.session.length) * 100}%`;
  $("#question-category").textContent = question.category;
  $("#question-type").textContent = typeLabels[question.type];
  $("#question-prompt").textContent = question.prompt;
  $("#question-help").textContent = question.type === "multi"
    ? "Select every correct answer, then check your response."
    : question.type === "matching"
      ? "Choose one match for each item, then check your response."
      : "Choose the best answer, then check your response.";
  feedback.className = "feedback";
  feedback.innerHTML = "";
  answerArea.innerHTML = "";

  if (question.type === "matching") renderMatching(question, isChecked);
  else renderOptions(question, isChecked);

  if (isChecked) showFeedback(question);
  $("#previous-question").disabled = state.index === 0;
  $("#submit-answer").classList.toggle("hidden", isChecked);
  $("#next-question").classList.toggle("hidden", !isChecked);
  $("#next-question").innerHTML = state.index === state.session.length - 1
    ? "Finish session <span>→</span>"
    : "Next question <span>→</span>";
  renderDots();
}

function renderOptions(question, isChecked) {
  const current = state.responses[question.id];
  question.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = `answer-option ${question.type === "multi" ? "multi" : ""}`;
    const input = document.createElement("input");
    input.type = question.type === "multi" ? "checkbox" : "radio";
    input.name = "answer";
    input.value = option;
    input.disabled = isChecked;
    input.checked = question.type === "multi"
      ? Array.isArray(current) && current.includes(option)
      : current === option;
    input.addEventListener("change", () => captureResponse(question));
    const marker = document.createElement("span");
    marker.className = "choice-marker";
    marker.textContent = String.fromCharCode(65 + index);
    const copy = document.createElement("span");
    copy.textContent = option;
    label.append(input, marker, copy);
    answerArea.append(label);
  });
}

function renderMatching(question, isChecked) {
  const grid = document.createElement("div");
  grid.className = "matching-grid";
  const current = state.responses[question.id] || {};
  question.pairs.forEach(([term]) => {
    const row = document.createElement("div");
    row.className = "matching-row";
    const label = document.createElement("label");
    label.textContent = term;
    const select = document.createElement("select");
    select.dataset.term = term;
    select.disabled = isChecked;
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Choose a match";
    select.append(placeholder);
    question.options.forEach((option) => {
      const item = document.createElement("option");
      item.value = option;
      item.textContent = option;
      item.selected = current[term] === option;
      select.append(item);
    });
    select.addEventListener("change", () => captureResponse(question));
    row.append(label, select);
    grid.append(row);
  });
  answerArea.append(grid);
}

function captureResponse(question) {
  if (question.type === "matching") {
    state.responses[question.id] = Object.fromEntries(
      [...answerArea.querySelectorAll("select")].map((select) => [select.dataset.term, select.value])
    );
  } else if (question.type === "multi") {
    state.responses[question.id] = [...answerArea.querySelectorAll("input:checked")].map((input) => input.value);
  } else {
    state.responses[question.id] = answerArea.querySelector("input:checked")?.value || "";
  }
}

function hasResponse(question) {
  const response = state.responses[question.id];
  if (question.type === "matching") {
    return response && question.pairs.every(([term]) => response[term]);
  }
  if (question.type === "multi") return Array.isArray(response) && response.length > 0;
  return Boolean(response);
}

function arraysMatch(left, right) {
  return [...left].sort().join("||") === [...right].sort().join("||");
}

function isCorrect(question) {
  const response = state.responses[question.id];
  if (question.type === "matching") {
    return question.pairs.every(([term, value]) => response[term] === value);
  }
  if (question.type === "multi") return arraysMatch(response, question.answer);
  return response === question.answer;
}

function formatCorrectAnswer(question) {
  if (question.type === "matching") {
    return question.pairs.map(([term, value]) => `${term} → ${value}`).join("; ");
  }
  if (question.type === "multi") return question.answer.join(", ");
  return question.answer;
}

function submitAnswer() {
  const question = state.session[state.index];
  captureResponse(question);
  if (!hasResponse(question)) {
    feedback.className = "feedback visible incorrect";
    feedback.innerHTML = "<b>Complete your response first.</b>Select an answer for every required item.";
    return;
  }
  state.checked.add(question.id);
  state.correct[question.id] = isCorrect(question);
  renderQuestion();
}

function showFeedback(question) {
  const correct = state.correct[question.id];
  feedback.className = `feedback visible ${correct ? "" : "incorrect"}`;
  feedback.innerHTML = `<b>${correct ? "Correct." : `Not quite. Correct answer: ${formatCorrectAnswer(question)}`}</b>${question.explanation}`;
}

function renderDots() {
  const dots = $("#question-dots");
  dots.innerHTML = "";
  state.session.forEach((question, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "question-dot";
    if (state.checked.has(question.id)) dot.classList.add("done");
    if (index === state.index) dot.classList.add("current");
    dot.textContent = index + 1;
    dot.setAttribute("aria-label", `Go to question ${index + 1}`);
    dot.addEventListener("click", () => {
      state.index = index;
      renderQuestion();
    });
    dots.append(dot);
  });
}

function nextQuestion() {
  if (state.index < state.session.length - 1) {
    state.index += 1;
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const missed = state.session.filter((question) => !state.correct[question.id]);
  const correctCount = state.session.length - missed.length;
  const score = Math.round((correctCount / state.session.length) * 100);
  saveStats(score);
  quizBody.classList.add("hidden");
  results.classList.remove("hidden");
  $("#results-score").textContent = `${score}%`;
  $("#results-fraction").textContent = `${correctCount} / ${state.session.length} correct`;
  $("#results-title").textContent = score >= 90 ? "Excellent signal." : score >= 70 ? "Solid foundation." : "Keep tuning.";
  $("#results-copy").textContent = score >= 90
    ? "You are reading the material with precision. Review any misses, then run another shuffled set."
    : score >= 70
      ? "The core concepts are in place. The missed-answer review will show where to tighten recall."
      : "Use the missed-answer review and the study guide, then try a focused drill before another mock.";
  renderBreakdown();
  renderMistakes(missed);
  $("#review-mistakes").classList.toggle("hidden", missed.length === 0);
  $("#mistake-review").classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderBreakdown() {
  const box = $("#results-breakdown");
  box.innerHTML = "";
  Object.values(TOPICS).forEach((topic) => {
    const topicQuestions = state.session.filter((question) => question.category === topic);
    if (!topicQuestions.length) return;
    const correct = topicQuestions.filter((question) => state.correct[question.id]).length;
    const card = document.createElement("div");
    card.className = "breakdown-card";
    card.innerHTML = `<strong>${correct}/${topicQuestions.length}</strong><span>${topic}</span>`;
    box.append(card);
  });
}

function renderMistakes(missed) {
  const box = $("#mistake-review");
  box.innerHTML = "";
  missed.forEach((question) => {
    const card = document.createElement("article");
    card.className = "review-card";
    card.innerHTML = `<b>${question.prompt}</b><p>Correct answer: ${formatCorrectAnswer(question)}</p><small>${question.explanation}</small>`;
    box.append(card);
  });
}

function closeQuiz() {
  overlay.classList.remove("active");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setupTopics() {
  const container = $("#topic-chips");
  Object.values(TOPICS).forEach((topic) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "topic-chip";
    const count = questions.filter((question) => question.category === topic).length;
    button.textContent = `${topic} · ${count}`;
    button.addEventListener("click", () => startQuiz({ mode: "topic", topic }));
    container.append(button);
  });
}

document.querySelectorAll("[data-start]").forEach((button) => {
  button.addEventListener("click", () => startQuiz({ mode: button.dataset.start }));
});
$("#submit-answer").addEventListener("click", submitAnswer);
$("#next-question").addEventListener("click", nextQuestion);
$("#previous-question").addEventListener("click", () => {
  if (state.index > 0) {
    state.index -= 1;
    renderQuestion();
  }
});
$("#close-quiz").addEventListener("click", closeQuiz);
$("#return-dashboard").addEventListener("click", closeQuiz);
$("#retry-quiz").addEventListener("click", () => startQuiz(state.lastConfig));
$("#review-mistakes").addEventListener("click", () => $("#mistake-review").classList.toggle("hidden"));
$("#reset-progress").addEventListener("click", () => {
  if (window.confirm("Reset your saved Signal Lab session stats?")) {
    localStorage.removeItem("signal-lab-stats");
    updateDashboardStats();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && overlay.classList.contains("active")) closeQuiz();
});

setupTopics();
updateDashboardStats();
