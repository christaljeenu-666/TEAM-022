/* ============================================
   AI Crop Rotation & Companion Planting Planner
   Plantix-Style Script with Tamil + Two-Page Flow
   ============================================ */

// ========== MULTI-LANGUAGE TRANSLATIONS ==========
const translations = {
  en: {
    lang: 'English',
    welcomeTitle: 'AI Crop Rotation & Companion Planting Planner',
    welcomeSub: 'Choose your language and enter your name to get started.',
    lblName: 'Your Name',
    phName: 'Enter your name',
    btnStart: 'Get Started',
    greeting: 'Welcome',
    navBrand: 'CropPlanner AI',
    changeLang: '🌐 Language',
    heroTitle: 'Smart Farming Starts Here',
    heroSub: 'Get AI-powered crop rotation advice, companion planting suggestions, and weather-based irrigation tips — all in seconds.',
    heroBadge: '🌱 AI-Powered Agriculture',
    stat1Num: '20+', stat1Label: 'Crops Supported',
    stat2Num: '7', stat2Label: 'Soil Types',
    stat3Num: '3', stat3Label: 'Seasons',
    feat1Title: 'Crop Rotation', feat1Desc: 'Know what to plant next for healthier soil.',
    feat2Title: 'Companion Planting', feat2Desc: 'Grow crops that help each other thrive.',
    feat3Title: 'Smart Irrigation', feat3Desc: 'Watering advice based on your season & crop.',
    formLabel: 'PLAN YOUR FIELD',
    formTitle: 'Enter Your Farm Details',
    formSub: 'Select your current crop, soil type, season and city to get personalized recommendations.',
    lblCrop: 'Current Crop', lblSoil: 'Soil Type', lblSeason: 'Season', lblCity: 'City',
    phCrop: '— Select Crop —', phSoil: '— Select Soil —', phSeason: '— Select Season —', phCity: 'e.g. Hyderabad, Pune, Delhi',
    btnSubmit: 'Get Recommendation',
    loaderText: 'Analyzing your farm data…',
    resultLabel: 'YOUR RESULTS',
    resultTitle: "Here's What We Suggest for Your Farm",
    lblSuggestion: 'Our Suggestion', lblSoilMatch: 'Best Soil for Your Crop', lblCropMatch: 'Best Crops for Your Soil',
    lblNextCrop: 'What to Grow Next', lblCompanion: 'Best Crop to Grow Together',
    lblTemp: 'Expected Weather', lblHumidity: 'Moisture in Air', lblWatering: 'Watering Guide', lblTip: 'Helpful Farming Tip',
    lblCityBestCrops: 'Best Crops for Your City', lblCityWeather: 'City Weather Info',
    lblCropCityMismatch: 'Crop Not Ideal for Your City',
    cropCityMismatch: '⚠️ "{crop}" is not among the best crops for {city}. We recommend growing: {bestCrops}',
    lblCityCropSuggestion: 'Recommended Crops for Your City',
    cityCropMatch: '✅ Great choice! "{crop}" is one of the best crops for {city}.',
    footerMsg: 'Sustainable Farming for a Better Future',
    alertCrop: 'Please select your current crop 🌾', alertSoil: 'Please select your soil type 🪨',
    alertSeason: 'Please select the season ☀️', alertCity: 'Please enter your city name 🏙️',
    alertName: 'Please enter your name to continue.',
    alertNoData: 'Sorry, no data available for this combination.',
    alertCityNotFound: 'City "{city}" not found in our database. Showing season-based weather instead.',
    toastSuccess: 'Recommendation generated successfully!',
    seasonKharif: 'Kharif (Jun–Oct)', seasonRabi: 'Rabi (Nov–Mar)', seasonZaid: 'Zaid (Apr–Jun)',
    compatGood: '✅ Great match! {crop} grows very well in {soil} soil.',
    compatOk: '⚠️ {crop} can grow in {soil} soil, but it is not the best choice.',
    compatBad: '❌ {crop} does not grow well in {soil} soil. See our suggestions below.',
    lblCropMismatch: '⚠️ Crop Not Ideal for Your City',
    mismatchWarning: '{crop} is not among the recommended crops for {city}.',
    mismatchRecommend: '🌱 Recommended crops for {city}: {crops}',
    tourTitle1: 'Welcome to CropPlanner AI! 🌾', tourText1: 'Let us show you how to plan your farm like a pro.',
    tourTitle2: 'Choose Your Language 🌐', tourText2: 'Select your preferred language to get started.',
    tourTitle3: 'Tell Us Your Name 👋', tourText3: 'Enter your name so we can personalize your experience.',
    tourTitle4: 'Design Your Field 📋', tourText4: 'Select your current crop, soil, and season to get AI advice.',
    tourTitle5: 'Enter Your City 🏙️', tourText5: 'Provide your city for climate-specific recommendations.',
    tourTitle6: 'Get Your Results 📊', tourText6: 'Click here to generate your personalized farming plan!',
    btnNext: 'Next', btnPrev: 'Back', btnDone: 'Done',
    btnLongTerm: 'Generate 3-Year Rotation Plan',
    btnPlanStrategy: 'Plan Strategy',
    lblYear1: '1 Year', lblYear2: '2 Years', lblYear3: '3 Years',
    lblSumCrop: 'Selected Crop', lblSumSoil: 'Soil Type', lblSumCity: 'City',
    lblRotationYears: 'Plan for Years:', btnUpdatePlan: 'Update Plan',
    lblDuration: 'Duration',
    btnToggleCustomCompanion: 'Find Custom Companion',
    btnFetchCustomCompanion: 'Get Combination',
    lblCustomCompCrop: 'Crop', lblCustomCompSoil: 'Soil',
    planLabel: '📅 SUSTAINABLE FUTURE',
    planTitle: 'Your 3-Year Crop Rotation Strategy',
    planSub: 'A long-term approach to soil health and maximum yield.',
    backLabel: '← Back to Results',
    yearLabel: 'Year',
    benefitLabel: 'Benefit'
  },
  ta: {
    lang: 'தமிழ்',
    welcomeTitle: 'AI பயிர் சுழற்சி & துணை பயிர் திட்டமிடல்',
    welcomeSub: 'உங்கள் மொழியை தேர்ந்தெடுத்து, தொடங்க உங்கள் பெயரை உள்ளிடுங்கள்.',
    lblName: 'உங்கள் பெயர்',
    phName: 'உங்கள் பெயரை உள்ளிடுங்கள்',
    btnStart: 'தொடங்கு',
    greeting: 'வணக்கம்',
    navBrand: 'பயிர் திட்டமிடல் AI',
    changeLang: '🌐 மொழி',
    heroTitle: 'புத்திசாலி விவசாயம் இங்கே தொடங்குகிறது',
    heroSub: 'AI மூலம் பயிர் சுழற்சி ஆலோசனை, துணைப் பயிர் பரிந்துரைகள் மற்றும் நீர்பாசன குறிப்புகள் பெறுங்கள்.',
    heroBadge: '🌱 AI சேவை விவசாயம்',
    stat1Num: '20+', stat1Label: 'பயிர்கள்',
    stat2Num: '7', stat2Label: 'மண் வகைகள்',
    stat3Num: '3', stat3Label: 'பருவங்கள்',
    feat1Title: 'பயிர் சுழற்சி', feat1Desc: 'ஆரோக்கியமான மண்ணுக்கு அடுத்து என்ன நடவு செய்ய வேண்டும் என்று அறியுங்கள்.',
    feat2Title: 'துணை பயிர்', feat2Desc: 'ஒன்றுக்கொன்று உதவும் பயிர்களை வளர்க்கவும்.',
    feat3Title: 'புத்திசாலி நீர்பாசனம்', feat3Desc: 'பருவம் & பயிருக்கு ஏற்ற நீர்பாசன ஆலோசனை.',
    formLabel: 'உங்கள் நிலத்தை திட்டமிடுங்கள்',
    formTitle: 'உங்கள் பண்ணை விவரங்களை உள்ளிடுங்கள்',
    formSub: 'தனிப்பயனாக்கப்பட்ட பரிந்துரைகளைப் பெற உங்கள் தற்போதைய பயிர், மண் வகை, பருவம் மற்றும் நகரத்தைத் தேர்ந்தெடுக்கவும்.',
    lblCrop: 'தற்போதைய பயிர்', lblSoil: 'மண் வகை', lblSeason: 'பருவம்', lblCity: 'நகரம்',
    phCrop: '— பயிரைத் தேர்ந்தெடுக்கவும் —', phSoil: '— மண்ணைத் தேர்ந்தெடுக்கவும் —',
    phSeason: '— பருவத்தைத் தேர்ந்தெடுக்கவும் —', phCity: 'எ.கா. சென்னை, மதுரை, கோவை',
    btnSubmit: 'பரிந்துரையைப் பெறுங்கள்',
    loaderText: 'உங்கள் பண்ணை தரவை பகுப்பாய்வு செய்கிறது…',
    resultLabel: 'உங்கள் முடிவுகள்',
    resultTitle: 'உங்கள் பண்ணைக்கு நாங்கள் பரிந்துரைப்பது',
    lblSuggestion: 'எங்கள் பரிந்துரை', lblSoilMatch: 'உங்கள் பயிருக்கான சிறந்த மண்', lblCropMatch: 'உங்கள் மண்ணுக்கான சிறந்த பயிர்கள்',
    lblNextCrop: 'அடுத்து என்ன வளர்க்கலாம்', lblCompanion: 'சேர்ந்து வளர்க்க சிறந்த பயிர்',
    lblTemp: 'எதிர்பார்க்கப்படும் வானிலை', lblHumidity: 'காற்றில் ஈரப்பதம்', lblWatering: 'நீர்பாசன வழிகாட்டி', lblTip: 'பயனுள்ள விவசாய குறிப்பு',
    lblCityBestCrops: 'உங்கள் நகருக்கான சிறந்த பயிர்கள்', lblCityWeather: 'நகர வானிலை தகவல்',
    lblCropCityMismatch: 'உங்கள் நகருக்கு பயிர் ஏற்றதல்ல',
    cropCityMismatch: '⚠️ "{crop}" {city} நகருக்கான சிறந்த பயிர்களில் இல்லை. பரிந்துரைக்கப்படும் பயிர்கள்: {bestCrops}',
    lblCityCropSuggestion: 'உங்கள் நகருக்கான பரிந்துரைக்கப்பட்ட பயிர்கள்',
    cityCropMatch: '✅ சிறந்த தேர்வு! "{crop}" {city} நகருக்கான சிறந்த பயிர்களில் ஒன்று.',
    footerMsg: 'சிறந்த எதிர்காலத்திற்கான நிலையான விவசாயம்',
    alertCrop: 'உங்கள் தற்போதைய பயிரைத் தேர்ந்தெடுக்கவும் 🌾', alertSoil: 'மண் வகையைத் தேர்ந்தெடுக்கவும் 🪨',
    alertSeason: 'பருவத்தைத் தேர்ந்தெடுக்கவும் ☀️', alertCity: 'உங்கள் நகர பெயரை உள்ளிடுங்கள் 🏙️',
    alertName: 'தொடர உங்கள் பெயரை உள்ளிடவும்.',
    alertNoData: 'மன்னிக்கவும், இந்த கலவைக்கு தரவு இல்லை.',
    alertCityNotFound: '"{city}" நகரம் எங்கள் தரவுத்தளத்தில் இல்லை. பருவ அடிப்படையிலான வானிலை காட்டப்படுகிறது.',
    toastSuccess: 'பரிந்துரை வெற்றிகரமாக உருவாக்கப்பட்டது!',
    seasonKharif: 'கார் (ஜூன்–அக்)', seasonRabi: 'ரபி (நவம்–மார்)', seasonZaid: 'சையத் (ஏப்–ஜூன்)',
    compatGood: '✅ சிறந்த பொருத்தம்! {crop} {soil} மண்ணில் மிகவும் நன்றாக வளரும்.',
    compatOk: '⚠️ {crop} {soil} மண்ணில் வளரும், ஆனால் இது சிறந்த தேர்வு அல்ல.',
    compatBad: '❌ {crop} {soil} மண்ணில் நன்றாக வளராது. கீழே உள்ள பரிந்துரைகளைப் பார்க்கவும்.',
    lblCropMismatch: '⚠️ உங்கள் நகருக்கு ஏற்ற பயிர் அல்ல',
    mismatchWarning: '{crop} {city} நகரில் பரிந்துரைக்கப்பட்ட பயிர்களில் இல்லை.',
    mismatchRecommend: '🌱 {city} க்கு பரிந்துரைக்கப்பட்ட பயிர்கள்: {crops}',
    tourTitle1: 'CropPlanner AI-க்கு வரவேற்கிறோம்! 🌾', tourText1: 'உங்கள் பண்ணையை ஒரு நிபுணரைப் போல எவ்வாறு திட்டமிடுவது என்பதை நாங்கள் உங்களுக்குக் காட்டுகிறோம்.',
    tourTitle2: 'உங்கள் மொழியைத் தேர்வு செய்யவும் 🌐', tourText2: 'தொடங்குவதற்கு உங்களுக்கு விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்.',
    tourTitle3: 'உங்கள் பெயரை எங்களிடம் கூறுங்கள் 👋', tourText3: 'உங்கள் அனுபவத்தைத் தனிப்பயனாக்க உங்கள் பெயரை உள்ளிடவும்.',
    tourTitle4: 'உங்கள் நிலத்தை வடிவமைக்கவும் 📋', tourText4: 'AI ஆலோசனையைப் பெற உங்கள் தற்போதைய பயிர், மண் மற்றும் பருவத்தைத் தேர்ந்தெடுக்கவும்.',
    tourTitle5: 'உங்கள் நகரத்தை உள்ளிடவும் 🏙️', tourText5: 'வானிலை சார்ந்த பரிந்துரைகளுக்கு உங்கள் நகரத்தை வழங்கவும்.',
    tourTitle6: 'உங்கள் முடிவுகளைப் பெறுங்கள் 📊', tourText6: 'உங்கள் தனிப்பயனாக்கப்பட்ட விவசாயத் திட்டத்தை உருவாக்க இங்கே கிளிக் செய்யவும்!',
    btnNext: 'அடுத்து', btnPrev: 'பின்னால்', btnDone: 'முடிந்தது',
    btnLongTerm: '3 ஆண்டு சுழற்சி திட்டத்தை உருவாக்குங்கள்',
    btnPlanStrategy: 'திட்ட உத்தி',
    lblYear1: '1 ஆண்டு', lblYear2: '2 ஆண்டுகள்', lblYear3: '3 ஆண்டுகள்',
    lblSumCrop: 'தேர்ந்தெடுக்கப்பட்ட பயிர்', lblSumSoil: 'மண் வகை', lblSumCity: 'நகரம்',
    lblRotationYears: 'ஆண்டுத் திட்டம்:', btnUpdatePlan: 'திட்டத்தைப் புதுப்பிக்கவும்',
    lblDuration: 'காலம்',
    btnToggleCustomCompanion: 'தனிப்பயன் துணையைத் தேடுங்கள்',
    btnFetchCustomCompanion: 'கலவையை பெறவும்',
    lblCustomCompCrop: 'பயிர்', lblCustomCompSoil: 'மண்',
    planLabel: '📅 நிலையான எதிர்காலம்',
    planTitle: 'உங்கள் 3 ஆண்டுகால பயிர் சுழற்சி உத்தி',
    planSub: 'மண்ணின் ஆரோக்கியம் மற்றும் அதிகபட்ச மகசூலுக்கான நீண்டகால அணுகுமுறை.',
    backLabel: '← முடிவுகளுக்குத் திரும்பு',
    yearLabel: 'ஆண்டு',
    benefitLabel: 'நன்மை'
  },
  hi: {
    lang: 'हिन्दी',
    welcomeTitle: 'AI फसल चक्र और साथी फसल योजनाकार',
    welcomeSub: 'अपनी भाषा चुनें और शुरू करने के लिए अपना नाम दर्ज करें।',
    lblName: 'आपका नाम',
    phName: 'अपना नाम दर्ज करें',
    btnStart: 'शुरू करें',
    greeting: 'नमस्ते',
    navBrand: 'फसल योजनाकार AI',
    changeLang: '🌐 भाषा',
    heroTitle: 'स्मार्ट खेती यहाँ शुरू होती है',
    heroSub: 'AI द्वारा फसल चक्र सलाह, साथी पौधे सुझाव और मौसम-आधारित सिंचाई युक्तियाँ प्राप्त करें।',
    heroBadge: '🌱 AI संचालित कृषि',
    stat1Num: '20+', stat1Label: 'फसलें',
    stat2Num: '7', stat2Label: 'मिट्टी प्रकार',
    stat3Num: '3', stat3Label: 'मौसम',
    feat1Title: 'फसल चक्र', feat1Desc: 'स्वस्थ मिट्टी के लिए अगली फसल जानें।',
    feat2Title: 'साथी फसल', feat2Desc: 'एक-दूसरे की मदद करने वाली फसलें उगाएं।',
    feat3Title: 'स्मार्ट सिंचाई', feat3Desc: 'मौसम और फसल के अनुसार पानी की सलाह।',
    formLabel: 'अपने खेत की योजना बनाएं',
    formTitle: 'अपने खेत की जानकारी दर्ज करें',
    formSub: 'व्यक्तिगत सिफारिशें पाने के लिए अपनी वर्तमान फसल, मिट्टी, मौसम और शहर चुनें।',
    lblCrop: 'वर्तमान फसल', lblSoil: 'मिट्टी का प्रकार', lblSeason: 'मौसम', lblCity: 'शहर',
    phCrop: '— फसल चुनें —', phSoil: '— मिट्टी चुनें —', phSeason: '— मौसम चुनें —', phCity: 'जैसे हैदराबाद, पुणे, दिल्ली',
    btnSubmit: 'सिफारिश प्राप्त करें',
    loaderText: 'आपके खेत का विश्लेषण हो रहा है…',
    resultLabel: 'आपके परिणाम',
    resultTitle: 'आपके खेत के लिए हमारे सुझाव',
    lblSuggestion: 'हमारा सुझाव', lblSoilMatch: 'आपकी फसल के लिए सबसे अच्छी मिट्टी', lblCropMatch: 'आपकी मिट्टी के लिए सबसे अच्छी फसलें',
    lblNextCrop: 'अगली फसल क्या उगाएं', lblCompanion: 'साथ में उगाने के लिए सबसे अच्छी फसल',
    lblTemp: 'अपेक्षित मौसम', lblHumidity: 'हवा में नमी', lblWatering: 'सिंचाई गाइड', lblTip: 'उपयोगी खेती टिप',
    lblCityBestCrops: 'आपके शहर के लिए सर्वोत्तम फसलें', lblCityWeather: 'शहर का मौसम',
    lblCropCityMismatch: 'आपके शहर के लिए फसल उपयुक्त नहीं',
    cropCityMismatch: '⚠️ "{crop}" {city} के लिए सर्वोत्तम फसलों में नहीं है। हम सुझाव देते हैं: {bestCrops}',
    lblCityCropSuggestion: 'आपके शहर के लिए अनुशंसित फसलें',
    cityCropMatch: '✅ बढ़िया चुनाव! "{crop}" {city} के लिए सर्वोत्तम फसलों में से एक है।',
    footerMsg: 'बेहतर भविष्य के लिए टिकाऊ खेती',
    alertCrop: 'कृपया अपनी वर्तमान फसल चुनें 🌾', alertSoil: 'कृपया मिट्टी का प्रकार चुनें 🪨',
    alertSeason: 'कृपया मौसम चुनें ☀️', alertCity: 'कृपया अपने शहर का नाम दर्ज करें 🏙️',
    alertName: 'कृपया जारी रखने के लिए अपना नाम दर्ज करें।',
    alertNoData: 'क्षमा करें, इस संयोजन के लिए डेटा उपलब्ध नहीं है।',
    alertCityNotFound: '"{city}" शहर हमारे डेटाबेस में नहीं मिला। मौसम आधारित जानकारी दिखाई जा रही है।',
    toastSuccess: 'सिफारिश सफलतापूर्वक तैयार!',
    seasonKharif: 'खरीफ (जून–अक्टू)', seasonRabi: 'रबी (नवं–मार्च)', seasonZaid: 'ज़ायद (अप्रैल–जून)',
    compatGood: '✅ बढ़िया! {crop} {soil} मिट्टी में बहुत अच्छी तरह उगती है।',
    compatOk: '⚠️ {crop} {soil} मिट्टी में उग सकती है, लेकिन यह सबसे अच्छा विकल्प नहीं है।',
    compatBad: '❌ {crop} {soil} मिट्टी में अच्छी तरह नहीं उगती। नीचे हमारे सुझाव देखें।',
    lblCropMismatch: '⚠️ आपके शहर के लिए उपयुक्त फसल नहीं',
    mismatchWarning: '{crop} {city} के लिए अनुशंसित फसलों में नहीं है।',
    mismatchRecommend: '🌱 {city} के लिए अनुशंसित फसलें: {crops}',
    btnPlanStrategy: 'योजना रणनीति',
    lblYear1: '1 वर्ष', lblYear2: '2 वर्ष', lblYear3: '3 वर्ष',
    lblDuration: 'अवधि',
    planLabel: '📅 टिकाऊ भविष्य',
    planTitle: 'आपकी 3-वर्षीय फसल चक्र रणनीति',
    planSub: 'मिट्टी के स्वास्थ्य और अधिकतम उपज के लिए एक दीर्घकालिक दृष्टिकोण।',
    backLabel: '← वापस परिणामों पर',
    yearLabel: 'वर्ष',
    benefitLabel: 'लाभ'
  },
  es: {
    lang: 'Español',
    welcomeTitle: 'Planificador de Rotación de Cultivos con IA',
    welcomeSub: 'Elija su idioma e ingrese su nombre para comenzar.',
    lblName: 'Su nombre',
    phName: 'Ingrese su nombre',
    btnStart: 'Comenzar',
    greeting: 'Hola',
    navBrand: 'CropPlanner AI',
    changeLang: '🌐 Idioma',
    heroTitle: 'La agricultura inteligente comienza aquí',
    heroSub: 'Obtenga consejos de rotación de cultivos, sugerencias de siembra y consejos de riego.',
    heroBadge: '🌱 Agricultura con IA',
    stat1Num: '20+', stat1Label: 'Cultivos',
    stat2Num: '7', stat2Label: 'Tipos de suelo',
    stat3Num: '3', stat3Label: 'Temporadas',
    feat1Title: 'Rotación de cultivos', feat1Desc: 'Sepa qué plantar a continuación.',
    feat2Title: 'Siembra asociada', feat2Desc: 'Cultive plantas que se ayudan mutuamente.',
    feat3Title: 'Riego inteligente', feat3Desc: 'Consejos de riego según temporada y cultivo.',
    formLabel: 'PLANIFIQUE SU CAMPO',
    formTitle: 'Ingrese los datos de su granja',
    formSub: 'Seleccione su cultivo, tipo de suelo, temporada y ciudad para obtener recomendaciones.',
    lblCrop: 'Cultivo actual', lblSoil: 'Tipo de suelo', lblSeason: 'Temporada', lblCity: 'Ciudad',
    phCrop: '— Seleccionar cultivo —', phSoil: '— Seleccionar suelo —', phSeason: '— Seleccionar temporada —', phCity: 'ej. Madrid, Lima',
    btnSubmit: 'Obtener recomendación',
    loaderText: 'Analizando datos de su granja…',
    resultLabel: 'SUS RESULTADOS',
    resultTitle: 'Lo que sugerimos para su granja',
    lblSuggestion: 'Nuestra sugerencia', lblSoilMatch: 'Mejor suelo para su cultivo', lblCropMatch: 'Mejores cultivos para su suelo',
    lblNextCrop: 'Qué cultivar después', lblCompanion: 'Mejor cultivo para asociar',
    lblTemp: 'Clima esperado', lblHumidity: 'Humedad del aire', lblWatering: 'Guía de riego', lblTip: 'Consejo útil',
    lblCityBestCrops: 'Mejores cultivos para su ciudad', lblCityWeather: 'Clima de la ciudad',
    lblCropCityMismatch: 'Cultivo no ideal para su ciudad',
    cropCityMismatch: '⚠️ "{crop}" no está entre los mejores cultivos para {city}. Recomendamos: {bestCrops}',
    lblCityCropSuggestion: 'Cultivos recomendados para su ciudad',
    cityCropMatch: '✅ ¡Excelente elección! "{crop}" es uno de los mejores cultivos para {city}.',
    footerMsg: 'Agricultura sostenible para un futuro mejor',
    alertCrop: 'Seleccione su cultivo 🌾', alertSoil: 'Seleccione el tipo de suelo 🪨',
    alertSeason: 'Seleccione la temporada ☀️', alertCity: 'Ingrese su ciudad 🏙️',
    alertName: 'Ingrese su nombre para continuar.',
    alertNoData: 'Lo sentimos, no hay datos para esta combinación.',
    alertCityNotFound: 'Ciudad "{city}" no encontrada. Mostrando clima basado en temporada.',
    toastSuccess: '¡Recomendación generada!',
    seasonKharif: 'Kharif (Jun–Oct)', seasonRabi: 'Rabi (Nov–Mar)', seasonZaid: 'Zaid (Abr–Jun)',
    compatGood: '✅ ¡Excelente! {crop} crece muy bien en suelo {soil}.',
    compatOk: '⚠️ {crop} puede crecer en suelo {soil}, pero no es la mejor opción.',
    compatBad: '❌ {crop} no crece bien en suelo {soil}. Vea nuestras sugerencias.',
    lblCropMismatch: '⚠️ Cultivo no ideal para su ciudad',
    mismatchWarning: '{crop} no está entre los cultivos recomendados para {city}.',
    mismatchRecommend: '🌱 Cultivos recomendados para {city}: {crops}',
    btnPlanStrategy: 'Estrategia de Planificación',
    lblYear1: '1 Año', lblYear2: '2 Años', lblYear3: '3 Años',
    lblDuration: 'Duración',
    planLabel: '📅 FUTURO SOSTENIBLE',
    planTitle: 'Su Estrategia de Rotación de Cultivos de 3 Años',
    planSub: 'Un enfoque a largo plazo para la salud del suelo y el rendimiento máximo.',
    backLabel: '← Volver a los Resultados',
    yearLabel: 'Año',
    benefitLabel: 'Beneficio'
  },
  fr: {
    lang: 'Français',
    welcomeTitle: 'Planificateur de Rotation des Cultures par IA',
    welcomeSub: 'Choisissez votre langue et entrez votre nom pour commencer.',
    lblName: 'Votre nom',
    phName: 'Entrez votre nom',
    btnStart: 'Commencer',
    greeting: 'Bonjour',
    navBrand: 'CropPlanner AI',
    changeLang: '🌐 Langue',
    heroTitle: "L'agriculture intelligente commence ici",
    heroSub: "Obtenez des conseils de rotation des cultures, des suggestions d'association et des conseils d'irrigation.",
    heroBadge: '🌱 Agriculture par IA',
    stat1Num: '20+', stat1Label: 'Cultures',
    stat2Num: '7', stat2Label: 'Types de sol',
    stat3Num: '3', stat3Label: 'Saisons',
    feat1Title: 'Rotation des cultures', feat1Desc: 'Sachez quoi planter ensuite.',
    feat2Title: 'Association de plantes', feat2Desc: "Cultivez des plantes qui s'entraident.",
    feat3Title: 'Irrigation intelligente', feat3Desc: "Conseils d'arrosage selon la saison.",
    formLabel: 'PLANIFIEZ VOTRE CHAMP',
    formTitle: 'Entrez les détails de votre ferme',
    formSub: 'Sélectionnez votre culture, type de sol, saison et ville pour obtenir des recommandations.',
    lblCrop: 'Culture actuelle', lblSoil: 'Type de sol', lblSeason: 'Saison', lblCity: 'Ville',
    phCrop: '— Sélectionner —', phSoil: '— Sélectionner —', phSeason: '— Sélectionner —', phCity: 'ex. Paris, Lyon',
    btnSubmit: 'Obtenir une recommandation',
    loaderText: 'Analyse de vos données…',
    resultLabel: 'VOS RÉSULTATS',
    resultTitle: 'Ce que nous suggérons',
    lblSuggestion: 'Notre suggestion', lblSoilMatch: 'Meilleur sol pour votre culture', lblCropMatch: 'Meilleures cultures pour votre sol',
    lblNextCrop: 'Que cultiver ensuite', lblCompanion: 'Culture à associer',
    lblTemp: 'Météo prévue', lblHumidity: "Humidité de l'air", lblWatering: "Guide d'arrosage", lblTip: 'Conseil utile',
    lblCityBestCrops: 'Meilleures cultures pour votre ville', lblCityWeather: 'Météo de la ville',
    lblCropCityMismatch: 'Culture non idéale pour votre ville',
    cropCityMismatch: '⚠️ "{crop}" ne fait pas partie des meilleures cultures pour {city}. Nous recommandons : {bestCrops}',
    lblCityCropSuggestion: 'Cultures recommandées pour votre ville',
    cityCropMatch: '✅ Excellent choix ! "{crop}" est l\'une des meilleures cultures pour {city}.',
    footerMsg: 'Agriculture durable pour un avenir meilleur',
    alertCrop: 'Sélectionnez votre culture 🌾', alertSoil: 'Sélectionnez le sol 🪨',
    alertSeason: 'Sélectionnez la saison ☀️', alertCity: 'Entrez votre ville 🏙️',
    alertName: 'Entrez votre nom pour continuer.',
    alertNoData: 'Désolé, aucune donnée disponible.',
    alertCityNotFound: 'Ville "{city}" non trouvée. Affichage de la météo saisonnière.',
    toastSuccess: 'Recommandation générée !',
    seasonKharif: 'Kharif (Juin–Oct)', seasonRabi: 'Rabi (Nov–Mars)', seasonZaid: 'Zaid (Avr–Juin)',
    compatGood: '✅ Excellent ! {crop} pousse très bien dans un sol {soil}.',
    compatOk: "⚠️ {crop} peut pousser dans un sol {soil}, mais ce n'est pas idéal.",
    compatBad: '❌ {crop} ne pousse pas bien dans un sol {soil}. Voyez nos suggestions.',
    lblCropMismatch: '⚠️ Culture non idéale pour votre ville',
    mismatchWarning: '{crop} ne figure pas parmi les cultures recommandées pour {city}.',
    mismatchRecommend: '🌱 Cultures recommandées pour {city} : {crops}',
    btnPlanStrategy: 'Stratégie de Planification',
    lblYear1: '1 An', lblYear2: '2 Ans', lblYear3: '3 Ans',
    lblDuration: 'Durée',
    planLabel: '📅 FUTUR DURABLE',
    planTitle: 'Votre Stratégie de Rotation des Cultures sur 3 Ans',
    planSub: 'Une approche à long terme pour la santé du sol et un rendement maximal.',
    backLabel: '← Retour aux Résultats',
    yearLabel: 'Année',
    benefitLabel: 'Bénéfice'
  },
  zh: {
    lang: '中文',
    welcomeTitle: 'AI 作物轮作与伴生种植规划器',
    welcomeSub: '选择您的语言并输入姓名开始使用。',
    lblName: '您的姓名',
    phName: '请输入姓名',
    btnStart: '开始使用',
    greeting: '你好',
    navBrand: '作物规划 AI',
    changeLang: '🌐 语言',
    heroTitle: '智慧农业从这里开始',
    heroSub: '获取AI驱动的作物轮作建议、伴生种植推荐和灌溉提示。',
    heroBadge: '🌱 AI智慧农业',
    stat1Num: '20+', stat1Label: '作物',
    stat2Num: '7', stat2Label: '土壤类型',
    stat3Num: '3', stat3Label: '季节',
    feat1Title: '作物轮作', feat1Desc: '了解下一步种什么。',
    feat2Title: '伴生种植', feat2Desc: '种植互助的作物。',
    feat3Title: '智慧灌溉', feat3Desc: '根据季节和作物的浇水建议。',
    formLabel: '规划您的田地',
    formTitle: '输入您的农场信息',
    formSub: '选择您的作物、土壤类型、季节和城市以获取个性化建议。',
    lblCrop: '当前作物', lblSoil: '土壤类型', lblSeason: '季节', lblCity: '城市',
    phCrop: '— 选择作物 —', phSoil: '— 选择土壤 —', phSeason: '— 选择季节 —', phCity: '例如 北京、上海',
    btnSubmit: '获取建议',
    loaderText: '正在分析您的农场数据…',
    resultLabel: '您的结果',
    resultTitle: '我们对您农场的建议',
    lblSuggestion: '我们的建议', lblSoilMatch: '您作物的最佳土壤', lblCropMatch: '您土壤的最佳作物',
    lblNextCrop: '下一步种什么', lblCompanion: '最佳伴生作物',
    lblTemp: '预期天气', lblHumidity: '空气湿度', lblWatering: '灌溉指南', lblTip: '实用提示',
    lblCityBestCrops: '您所在城市的最佳作物', lblCityWeather: '城市天气信息',
    lblCropCityMismatch: '作物不适合您的城市',
    cropCityMismatch: '⚠️ "{crop}"不在{city}的最佳作物中。建议种植：{bestCrops}',
    lblCityCropSuggestion: '您所在城市的推荐作物',
    cityCropMatch: '✅ 好选择！"{crop}"是{city}的最佳作物之一。',
    footerMsg: '可持续农业，创造更美好的未来',
    alertCrop: '请选择作物 🌾', alertSoil: '请选择土壤 🪨',
    alertSeason: '请选择季节 ☀️', alertCity: '请输入城市 🏙️',
    alertName: '请输入姓名以继续。',
    alertNoData: '抱歉，没有此组合的数据。',
    alertCityNotFound: '未找到"{city}"城市。显示季节性天气信息。',
    toastSuccess: '建议生成成功！',
    seasonKharif: '雨季 (6–10月)', seasonRabi: '冬季 (11–3月)', seasonZaid: '夏季 (4–6月)',
    compatGood: '✅ 很好！{crop}在{soil}土壤中生长良好。',
    compatOk: '⚠️ {crop}可以在{soil}土壤中生长，但不是最佳选择。',
    compatBad: '❌ {crop}不适合在{soil}土壤中种植。请看建议。',
    lblCropMismatch: '⚠️ 该作物不适合您所在城市',
    mismatchWarning: '{crop}不在{city}的推荐作物之列。',
    mismatchRecommend: '🌱 {city}的推荐作物：{crops}',
    btnPlanStrategy: '计划策略',
    lblYear1: '1年', lblYear2: '2年', lblYear3: '3年',
    lblDuration: '时长',
    planLabel: '📅 可持续未来',
    planTitle: '您的3年作物轮作策略',
    planSub: '维护土地健康和最大化产量的长期方法。',
    backLabel: '← 返回结果',
    yearLabel: '年份',
    benefitLabel: '效益'
  },
  ar: {
    lang: 'العربية',
    welcomeTitle: 'مخطط تدوير المحاصيل بالذكاء الاصطناعي',
    welcomeSub: 'اختر لغتك وأدخل اسمك للبدء.',
    lblName: 'اسمك',
    phName: 'أدخل اسمك',
    btnStart: 'ابدأ',
    greeting: 'مرحباً',
    navBrand: 'مخطط المحاصيل',
    changeLang: '🌐 اللغة',
    heroTitle: 'الزراعة الذكية تبدأ هنا',
    heroSub: 'احصل على نصائح تدوير المحاصيل والزراعة المصاحبة ونصائح الري.',
    heroBadge: '🌱 زراعة بالذكاء الاصطناعي',
    stat1Num: '20+', stat1Label: 'محاصيل',
    stat2Num: '7', stat2Label: 'أنواع تربة',
    stat3Num: '3', stat3Label: 'مواسم',
    feat1Title: 'تدوير المحاصيل', feat1Desc: 'اعرف ماذا تزرع بعد ذلك.',
    feat2Title: 'الزراعة المصاحبة', feat2Desc: 'ازرع نباتات تساعد بعضها.',
    feat3Title: 'ري ذكي', feat3Desc: 'نصائح ري حسب الموسم والمحصول.',
    formLabel: 'خطط لحقلك',
    formTitle: 'أدخل تفاصيل مزرعتك',
    formSub: 'اختر محصولك ونوع التربة والموسم والمدينة للحصول على توصيات.',
    lblCrop: 'المحصول الحالي', lblSoil: 'نوع التربة', lblSeason: 'الموسم', lblCity: 'المدينة',
    phCrop: '— اختر المحصول —', phSoil: '— اختر التربة —', phSeason: '— اختر الموسم —', phCity: 'مثلاً القاهرة، الرياض',
    btnSubmit: 'احصل على التوصية',
    loaderText: 'جارٍ تحليل بيانات مزرعتك…',
    resultLabel: 'نتائجك',
    resultTitle: 'ما نقترحه لمزرعتك',
    lblSuggestion: 'اقتراحنا', lblSoilMatch: 'أفضل تربة لمحصولك', lblCropMatch: 'أفضل محاصيل لتربتك',
    lblNextCrop: 'ماذا تزرع بعد ذلك', lblCompanion: 'أفضل محصول مصاحب',
    lblTemp: 'الطقس المتوقع', lblHumidity: 'رطوبة الهواء', lblWatering: 'دليل الري', lblTip: 'نصيحة زراعية',
    lblCityBestCrops: 'أفضل محاصيل لمدينتك', lblCityWeather: 'طقس المدينة',
    lblCropCityMismatch: 'المحصول غير مناسب لمدينتك',
    cropCityMismatch: '⚠️ "{crop}" ليس من أفضل المحاصيل لـ {city}. نوصي بزراعة: {bestCrops}',
    lblCityCropSuggestion: 'المحاصيل المُوصى بها لمدينتك',
    cityCropMatch: '✅ اختيار رائع! "{crop}" من أفضل المحاصيل لـ {city}.',
    footerMsg: 'زراعة مستدامة لمستقبل أفضل',
    alertCrop: 'اختر المحصول 🌾', alertSoil: 'اختر التربة 🪨',
    alertSeason: 'اختر الموسم ☀️', alertCity: 'أدخل مدينتك 🏙️',
    alertName: 'أدخل اسمك للمتابعة.',
    alertNoData: 'عذراً، لا توجد بيانات لهذا المزيج.',
    alertCityNotFound: 'المدينة "{city}" غير موجودة. عرض طقس الموسم.',
    toastSuccess: 'تم إنشاء التوصية!',
    seasonKharif: 'خريف (يونيو–أكتوبر)', seasonRabi: 'ربيع (نوفمبر–مارس)', seasonZaid: 'صيف (أبريل–يونيو)',
    compatGood: '✅ ممتاز! {crop} ينمو جيداً في تربة {soil}.',
    compatOk: '⚠️ {crop} يمكن أن ينمو في تربة {soil}، لكنه ليس الأفضل.',
    compatBad: '❌ {crop} لا ينمو جيداً في تربة {soil}. انظر اقتراحاتنا.',
    lblCropMismatch: '⚠️ هذا المحصول غير مناسب لمدينتك',
    mismatchWarning: '{crop} ليس ضمن المحاصيل الموصى بها لـ {city}.',
    mismatchRecommend: '🌱 المحاصيل الموصى بها لـ {city}: {crops}',
    btnPlanStrategy: 'استراتيجية التخطيط',
    lblYear1: 'عام واحد', lblYear2: 'عامان', lblYear3: '3 أعوام',
    lblDuration: 'المدة',
    planLabel: '📅 مستقبل مستدام',
    planTitle: 'استراتيجيتك لتدوير المحاصيل لمدة 3 سنوات',
    planSub: 'نهج طويل الأمد لصحة التربة وأقصى إنتاجية.',
    backLabel: '← العودة إلى النتائج',
    yearLabel: 'عام',
    benefitLabel: 'الفائدة'
  }
};

let currentLang = 'en';
let userName = '';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations['en'][key] || key;
}

// ========== CROP-SOIL COMPATIBILITY ==========
const cropSoilCompat = {
  Rice: { Alluvial: 'good', Black: 'ok', Red: 'bad', Laterite: 'bad', Sandy: 'bad', Clay: 'good', Loamy: 'good' },
  Wheat: { Alluvial: 'good', Black: 'good', Red: 'ok', Laterite: 'bad', Sandy: 'bad', Clay: 'bad', Loamy: 'good' },
  Corn: { Alluvial: 'good', Black: 'good', Red: 'ok', Laterite: 'ok', Sandy: 'ok', Clay: 'bad', Loamy: 'good' },
  Soybean: { Alluvial: 'good', Black: 'good', Red: 'ok', Laterite: 'bad', Sandy: 'bad', Clay: 'ok', Loamy: 'good' },
  Cotton: { Alluvial: 'ok', Black: 'good', Red: 'ok', Laterite: 'bad', Sandy: 'bad', Clay: 'ok', Loamy: 'good' },
  Sugarcane: { Alluvial: 'good', Black: 'good', Red: 'ok', Laterite: 'bad', Sandy: 'bad', Clay: 'ok', Loamy: 'good' },
  Tomato: { Alluvial: 'good', Black: 'ok', Red: 'good', Laterite: 'ok', Sandy: 'ok', Clay: 'bad', Loamy: 'good' },
  Potato: { Alluvial: 'good', Black: 'ok', Red: 'good', Laterite: 'ok', Sandy: 'good', Clay: 'bad', Loamy: 'good' },
  Onion: { Alluvial: 'good', Black: 'ok', Red: 'good', Laterite: 'ok', Sandy: 'ok', Clay: 'bad', Loamy: 'good' },
  Groundnut: { Alluvial: 'ok', Black: 'ok', Red: 'good', Laterite: 'ok', Sandy: 'good', Clay: 'bad', Loamy: 'good' },
  Mustard: { Alluvial: 'good', Black: 'good', Red: 'ok', Laterite: 'bad', Sandy: 'ok', Clay: 'bad', Loamy: 'good' },
  'Mung Bean': { Alluvial: 'good', Black: 'good', Red: 'good', Laterite: 'ok', Sandy: 'ok', Clay: 'bad', Loamy: 'good' },
  Lentils: { Alluvial: 'good', Black: 'good', Red: 'ok', Laterite: 'bad', Sandy: 'ok', Clay: 'bad', Loamy: 'good' },
  'Black Gram': { Alluvial: 'good', Black: 'good', Red: 'ok', Laterite: 'bad', Sandy: 'ok', Clay: 'ok', Loamy: 'good' },
  Cabbage: { Alluvial: 'good', Black: 'ok', Red: 'ok', Laterite: 'bad', Sandy: 'ok', Clay: 'bad', Loamy: 'good' },
  Maize: { Alluvial: 'good', Black: 'good', Red: 'ok', Laterite: 'ok', Sandy: 'ok', Clay: 'bad', Loamy: 'good' },
  Cucumber: { Alluvial: 'good', Black: 'ok', Red: 'ok', Laterite: 'bad', Sandy: 'good', Clay: 'bad', Loamy: 'good' },
  Sunflower: { Alluvial: 'good', Black: 'good', Red: 'ok', Laterite: 'bad', Sandy: 'ok', Clay: 'bad', Loamy: 'good' },
  'Gram (Chickpea)': { Alluvial: 'good', Black: 'good', Red: 'ok', Laterite: 'bad', Sandy: 'ok', Clay: 'bad', Loamy: 'good' },
  Sorghum: { Alluvial: 'good', Black: 'good', Red: 'good', Laterite: 'ok', Sandy: 'ok', Clay: 'ok', Loamy: 'good' }
};

const bestSoilForCrop = {
  Rice: 'Alluvial, Clay, Loamy', Wheat: 'Alluvial, Black, Loamy', Corn: 'Alluvial, Black, Loamy',
  Soybean: 'Alluvial, Black, Loamy', Cotton: 'Black, Loamy', Sugarcane: 'Alluvial, Black, Loamy',
  Tomato: 'Alluvial, Red, Loamy', Potato: 'Alluvial, Red, Sandy, Loamy', Onion: 'Alluvial, Red, Loamy',
  Groundnut: 'Red, Sandy, Loamy',
  Mustard: 'Alluvial, Black, Loamy', 'Mung Bean': 'Alluvial, Red, Loamy', Lentils: 'Alluvial, Black, Loamy',
  'Black Gram': 'Alluvial, Black, Loamy', Cabbage: 'Alluvial, Loamy', Maize: 'Alluvial, Black, Loamy',
  Cucumber: 'Alluvial, Sandy, Loamy', Sunflower: 'Alluvial, Black, Loamy', 'Gram (Chickpea)': 'Alluvial, Black, Loamy',
  Sorghum: 'Alluvial, Black, Red, Loamy'
};

const bestCropsForSoil = {
  Alluvial: 'Rice, Wheat, Corn, Sugarcane, Potato', Black: 'Cotton, Wheat, Soybean, Corn, Sugarcane',
  Red: 'Tomato, Potato, Onion, Groundnut', Laterite: 'Tomato, Corn, Potato',
  Sandy: 'Potato, Groundnut', Clay: 'Rice', Loamy: 'Almost all crops — Loamy is the best!'
};

const recommendations = {
  Rice: { next: 'Wheat', companion: 'Lentils', irrigation: 'Reduce watering gradually. Wheat needs moderate irrigation — every 5–7 days.' },
  Wheat: { next: 'Mung Bean', companion: 'Mustard', irrigation: 'Mung beans need light watering. Irrigate every 4–5 days; avoid waterlogging.' },
  Corn: { next: 'Soybean', companion: 'Squash & Beans', irrigation: 'Soybeans prefer consistent moisture. Drip irrigation every 3–4 days.' },
  Soybean: { next: 'Corn', companion: 'Corn & Clover', irrigation: 'Corn requires deep watering. Irrigate every 5 days during growth.' },
  Cotton: { next: 'Groundnut', companion: 'Sorghum', irrigation: 'Groundnut needs moderate moisture. Irrigate every 7–10 days.' },
  Sugarcane: { next: 'Rice', companion: 'Black Gram', irrigation: 'Rice paddies need standing water (5–7 cm). Flood irrigation is ideal.' },
  Tomato: { next: 'Cabbage', companion: 'Basil & Carrot', irrigation: 'Cabbage prefers consistent moisture. Water every 4–5 days.' },
  Potato: { next: 'Maize', companion: 'Beans & Horseradish', irrigation: 'Maize needs deep watering during tasseling. Every 5–6 days.' },
  Onion: { next: 'Cucumber', companion: 'Carrot & Lettuce', irrigation: 'Cucumbers love moisture. Water daily or every 2 days.' },
  Groundnut: { next: 'Cotton', companion: 'Sunflower', irrigation: 'Cotton needs moderate irrigation during boll formation. Every 7–10 days.' },
  Mustard: { next: 'Rice', companion: 'Wheat', irrigation: 'Irrigate sparsely. Once before flowering, once at pod formation.' },
  'Mung Bean': { next: 'Wheat', companion: 'Corn', irrigation: 'Requires very little water. Irrigate if prolonged dry spell.' },
  Lentils: { next: 'Rice', companion: 'Mustard', irrigation: 'Drought tolerant. Avoid waterlogging.' },
  'Black Gram': { next: 'Wheat', companion: 'Sorghum', irrigation: 'Irrigate during flowering if dry.' },
  Cabbage: { next: 'Tomato', companion: 'Onion', irrigation: 'Requires constant moisture. Drip irrigation recommended.' },
  Maize: { next: 'Soybean', companion: 'Beans', irrigation: 'Irrigate deeply during silking and tasseling.' },
  Cucumber: { next: 'Cabbage', companion: 'Corn', irrigation: 'Frequent watering needed for juicy fruits.' },
  Sunflower: { next: 'Gram (Chickpea)', companion: 'Groundnut', irrigation: 'Drought resistant, but needs water during bud formation.' },
  'Gram (Chickpea)': { next: 'Maize', companion: 'Wheat', irrigation: 'Requires pre-sowing irrigation and once at pod development.' },
  Sorghum: { next: 'Cotton', companion: 'Pigeon Pea', irrigation: 'Highly drought tolerant. Needs water during grain filling.' }
};

const seasonWeather = {
  Kharif: { temp: '28–35°C', humidity: '70–85%', tip: 'Rainy season is here! Make sure water does not stay in your field for too long. Grow crops that can handle lots of rain.' },
  Rabi: { temp: '12–22°C', humidity: '40–60%', tip: 'Weather will be cool and dry. Great time to grow wheat and dal crops. Cover the soil with dry leaves or straw to keep it moist.' },
  Zaid: { temp: '30–40°C', humidity: '25–45%', tip: 'Very hot days ahead! Give your plants extra water and use shade to protect young plants from the sun.' }
};

// ========== CITY-CLIMATE DATABASE ==========
// Maps cities to their climate zone, average weather, and best crops
const cityClimateDB = {
  // --- INDIA ---
  'delhi': { climate: 'Semi-Arid', temp: '25–45°C (Summer) / 5–20°C (Winter)', humidity: '30–80%', bestCrops: 'Wheat, Rice, Sugarcane, Mustard, Potato', tip: 'Delhi has extreme summers and cold winters. Grow wheat in Rabi and rice in Kharif for best results.' },
  'mumbai': { climate: 'Tropical Wet', temp: '24–35°C', humidity: '60–90%', bestCrops: 'Rice, Coconut, Mango, Sugarcane, Groundnut', tip: 'Mumbai gets heavy monsoon rains. Choose water-loving crops during Kharif and protect fields from waterlogging.' },
  'chennai': { climate: 'Tropical Wet & Dry', temp: '24–40°C', humidity: '55–85%', bestCrops: 'Rice, Sugarcane, Groundnut, Cotton, Banana', tip: 'Chennai has hot summers and receives rain from the northeast monsoon (Oct–Dec). Plan rice cultivation accordingly.' },
  'hyderabad': { climate: 'Semi-Arid', temp: '20–42°C', humidity: '35–75%', bestCrops: 'Rice, Cotton, Corn, Soybean, Groundnut, Tomato', tip: 'Hyderabad has a hot and dry climate. Use drip irrigation and mulching to conserve water during summer.' },
  'bangalore': { climate: 'Tropical Savanna', temp: '15–35°C', humidity: '40–80%', bestCrops: 'Tomato, Potato, Onion, Corn, Beans, Coffee', tip: 'Bangalore has a mild climate year-round — great for vegetables. Tomatoes and onions grow very well here.' },
  'bengaluru': { climate: 'Tropical Savanna', temp: '15–35°C', humidity: '40–80%', bestCrops: 'Tomato, Potato, Onion, Corn, Beans, Coffee', tip: 'Bengaluru has a mild climate year-round — great for vegetables. Tomatoes and onions grow very well here.' },
  'kolkata': { climate: 'Tropical Wet & Dry', temp: '18–38°C', humidity: '55–90%', bestCrops: 'Rice, Jute, Sugarcane, Potato, Wheat', tip: 'Kolkata has hot humid summers and monsoon rains. Rice and jute thrive in Kharif season.' },
  'pune': { climate: 'Semi-Arid', temp: '15–40°C', humidity: '30–75%', bestCrops: 'Sugarcane, Tomato, Onion, Soybean, Wheat, Grapes', tip: 'Pune has moderate rainfall. Great for sugarcane and onion farming. Use raised beds during monsoon.' },
  'jaipur': { climate: 'Arid / Desert', temp: '8–45°C', humidity: '20–55%', bestCrops: 'Wheat, Mustard, Groundnut, Pearl Millet (Bajra)', tip: 'Jaipur is very hot and dry. Focus on drought-resistant crops and use drip irrigation to save water.' },
  'lucknow': { climate: 'Humid Subtropical', temp: '10–45°C', humidity: '35–85%', bestCrops: 'Wheat, Rice, Sugarcane, Potato, Mango', tip: 'Lucknow has extreme summers and mild winters. Wheat in Rabi and rice in Kharif give the best yield.' },
  'ahmedabad': { climate: 'Arid / Semi-Arid', temp: '15–45°C', humidity: '20–70%', bestCrops: 'Cotton, Groundnut, Wheat, Castor, Cumin', tip: 'Ahmedabad is hot and dry. Cotton and groundnut are ideal. Ensure proper irrigation during dry spells.' },
  'chandigarh': { climate: 'Humid Subtropical', temp: '5–42°C', humidity: '30–80%', bestCrops: 'Wheat, Rice, Corn, Sugarcane, Potato', tip: 'Chandigarh has cold winters and hot summers. Wheat is the best Rabi crop here.' },
  'madurai': { climate: 'Semi-Arid', temp: '22–40°C', humidity: '45–80%', bestCrops: 'Rice, Cotton, Groundnut, Sugarcane, Corn', tip: 'Madurai is hot most of the year. Choose heat-tolerant crop varieties and irrigate regularly.' },
  'coimbatore': { climate: 'Semi-Arid', temp: '20–38°C', humidity: '40–75%', bestCrops: 'Cotton, Corn, Groundnut, Tomato, Onion, Coconut', tip: 'Coimbatore has moderate weather. Cotton and vegetables grow well. Use mulch to retain soil moisture.' },
  'nagpur': { climate: 'Tropical Wet & Dry', temp: '12–48°C', humidity: '25–80%', bestCrops: 'Cotton, Soybean, Wheat, Orange, Rice', tip: 'Nagpur is famous for oranges! Cotton and soybean are top Kharif crops here.' },
  'indore': { climate: 'Humid Subtropical', temp: '12–42°C', humidity: '30–80%', bestCrops: 'Soybean, Wheat, Cotton, Corn, Onion', tip: 'Indore is the soybean capital of India. Soybean in Kharif and wheat in Rabi are the best choices.' },
  'bhopal': { climate: 'Humid Subtropical', temp: '10–44°C', humidity: '30–85%', bestCrops: 'Soybean, Wheat, Corn, Rice, Sugarcane', tip: 'Bhopal gets moderate rainfall. Soybean and wheat rotation is highly recommended.' },
  'patna': { climate: 'Humid Subtropical', temp: '10–42°C', humidity: '40–85%', bestCrops: 'Rice, Wheat, Corn, Sugarcane, Potato', tip: 'Patna has fertile alluvial soil. Rice in Kharif and wheat in Rabi give excellent results.' },
  'visakhapatnam': { climate: 'Tropical Wet & Dry', temp: '20–38°C', humidity: '55–85%', bestCrops: 'Rice, Sugarcane, Groundnut, Cotton, Cashew', tip: 'Vizag gets good coastal rainfall. Rice and sugarcane thrive in the Kharif season.' },
  'vizag': { climate: 'Tropical Wet & Dry', temp: '20–38°C', humidity: '55–85%', bestCrops: 'Rice, Sugarcane, Groundnut, Cotton, Cashew', tip: 'Vizag gets good coastal rainfall. Rice and sugarcane thrive in the Kharif season.' },
  'kochi': { climate: 'Tropical Monsoon', temp: '23–33°C', humidity: '65–95%', bestCrops: 'Rice, Coconut, Rubber, Spices (Pepper, Cardamom)', tip: 'Kochi gets very heavy monsoon rainfall. Grow coconut and spice crops for high returns.' },
  'thiruvananthapuram': { climate: 'Tropical Monsoon', temp: '23–33°C', humidity: '65–90%', bestCrops: 'Rice, Coconut, Rubber, Banana, Tapioca', tip: 'Heavy monsoon rain suits rice and coconut. Avoid waterlogging during peak monsoon.' },
  'surat': { climate: 'Tropical Wet & Dry', temp: '18–42°C', humidity: '40–85%', bestCrops: 'Cotton, Sugarcane, Rice, Groundnut, Mango', tip: 'Surat benefits from the Tapi river basin. Sugarcane and cotton are key crops.' },
  'varanasi': { climate: 'Humid Subtropical', temp: '10–45°C', humidity: '30–85%', bestCrops: 'Wheat, Rice, Sugarcane, Potato, Peas', tip: 'Varanasi has Gangetic alluvial soil — very fertile. Wheat and rice rotation is ideal.' },
  'amritsar': { climate: 'Humid Subtropical', temp: '2–45°C', humidity: '30–75%', bestCrops: 'Wheat, Rice, Cotton, Sugarcane, Potato', tip: 'Amritsar has very cold winters and hot summers. Wheat is the star Rabi crop in Punjab.' },
  'ranchi': { climate: 'Humid Subtropical', temp: '10–38°C', humidity: '40–85%', bestCrops: 'Rice, Corn, Potato, Wheat, Vegetables', tip: 'Ranchi has moderate temperatures. Vegetables and rice grow well during the monsoon.' },
  'guwahati': { climate: 'Humid Subtropical', temp: '10–35°C', humidity: '60–90%', bestCrops: 'Rice, Tea, Jute, Sugarcane, Potato', tip: 'Guwahati gets heavy rainfall. Rice and tea cultivation are the best agricultural activities.' },
  'dehradun': { climate: 'Humid Subtropical', temp: '5–36°C', humidity: '40–85%', bestCrops: 'Rice, Wheat, Sugarcane, Litchi, Basmati Rice', tip: 'Dehradun valley soil is rich. Basmati rice is a specialty crop here.' },
  // --- INTERNATIONAL ---
  'london': { climate: 'Temperate Oceanic', temp: '2–25°C', humidity: '70–85%', bestCrops: 'Wheat, Barley, Potato, Oats, Rapeseed', tip: 'London has cool, wet weather. Wheat and root vegetables do very well here.' },
  'tokyo': { climate: 'Humid Subtropical', temp: '2–32°C', humidity: '50–80%', bestCrops: 'Rice, Soybeans, Tea, Sweet Potato, Cabbage', tip: 'Japan has a distinct monsoon season. Rice paddy fields are ideal during summer.' },
  'cairo': { climate: 'Hot Desert', temp: '12–40°C', humidity: '20–50%', bestCrops: 'Cotton, Rice (Nile), Wheat, Corn, Citrus', tip: 'Cairo is extremely dry. Irrigation from the Nile is essential for all crops.' },
  'nairobi': { climate: 'Subtropical Highland', temp: '10–28°C', humidity: '45–70%', bestCrops: 'Tea, Coffee, Corn, Beans, Wheat', tip: 'Nairobi has pleasant weather. Tea and coffee are major export crops.' },
  'beijing': { climate: 'Humid Continental', temp: '-5–35°C', humidity: '30–75%', bestCrops: 'Wheat, Corn, Soybean, Rice, Sweet Potato', tip: 'Beijing has cold winters and hot summers. Wheat in spring and corn in summer work well.' },
  'sydney': { climate: 'Humid Subtropical', temp: '10–28°C', humidity: '50–75%', bestCrops: 'Wheat, Cotton, Rice, Sugarcane, Grapes', tip: 'Sydney has mild winters and warm summers. Great for year-round vegetable farming.' },
  'dubai': { climate: 'Hot Desert', temp: '18–48°C', humidity: '30–65%', bestCrops: 'Date Palm, Tomato (greenhouse), Cucumber, Herbs', tip: 'Dubai is extremely hot and dry. Use hydroponics or greenhouses for vegetable farming.' },
  'new york': { climate: 'Humid Subtropical', temp: '-3–32°C', humidity: '55–75%', bestCrops: 'Corn, Soybean, Wheat, Apples, Grapes', tip: 'New York has cold winters. Focus on cold-hardy crops and plan planting after last frost.' },
  'paris': { climate: 'Temperate Oceanic', temp: '3–26°C', humidity: '60–80%', bestCrops: 'Wheat, Barley, Corn, Grapes, Sugar Beet', tip: 'France is Europe\'s breadbasket. Wheat and grapes (for wine) are top crops.' },
  'riyadh': { climate: 'Hot Desert', temp: '10–50°C', humidity: '10–40%', bestCrops: 'Date Palm, Wheat (irrigated), Tomato, Alfalfa', tip: 'Riyadh is extremely hot and arid. Drip irrigation and shade structures are essential.' },
  'bangkok': { climate: 'Tropical Monsoon', temp: '25–36°C', humidity: '60–90%', bestCrops: 'Rice, Sugarcane, Rubber, Cassava, Tropical Fruits', tip: 'Bangkok has abundant rainfall and heat. Rice production dominates the region.' },
  'madrid': { climate: 'Semi-Arid Mediterranean', temp: '2–36°C', humidity: '30–65%', bestCrops: 'Wheat, Olives, Grapes, Sunflower, Barley', tip: 'Madrid has hot dry summers and cold winters. Olives and grapes are traditional crops.' },
  'lima': { climate: 'Arid / Coastal Desert', temp: '15–28°C', humidity: '75–90%', bestCrops: 'Potato, Corn, Asparagus, Grapes, Quinoa', tip: 'Lima is arid but humid. Potato and corn are staple crops of Peru.' }
};

// ========== CITY LOOKUP ==========
function lookupCity(cityName) {
  const normalized = cityName.toLowerCase().trim();
  // Exact match
  if (cityClimateDB[normalized]) return { ...cityClimateDB[normalized], matchedCity: cityName };
  // Partial / fuzzy match — find city that starts with or contains the input
  for (const key of Object.keys(cityClimateDB)) {
    if (key.startsWith(normalized) || normalized.startsWith(key) || key.includes(normalized) || normalized.includes(key)) {
      return { ...cityClimateDB[key], matchedCity: key.charAt(0).toUpperCase() + key.slice(1) };
    }
  }
  return null;
}

// ========== CROP-CITY MATCH CHECK ==========
// Returns true if the selected crop is found in the city's bestCrops list
function isCropSuitableForCity(crop, cityInfo) {
  if (!cityInfo || !cityInfo.bestCrops) return true; // no data → no warning
  const bestCropsList = cityInfo.bestCrops.toLowerCase();
  return bestCropsList.includes(crop.toLowerCase());
}

// ========== PAGE NAVIGATION ==========
function goToApp() {
  const nameInput = document.getElementById('userName');
  const name = nameInput.value.trim();
  if (!name) { showToast(t('alertName')); nameInput.focus(); return; }

  userName = name;
  document.getElementById('welcomePage').style.display = 'none';
  document.getElementById('appPage').classList.add('active');
  applyLanguageToApp();
}

function goToWelcome() {
  document.getElementById('appPage').classList.remove('active');
  document.getElementById('welcomePage').style.display = 'flex';
  // Hide results when going back
  document.getElementById('resultsSection').classList.remove('visible');
}

// ========== LANGUAGE ==========
function selectLanguage(langCode) {
  currentLang = langCode;
  // Update welcome page text
  document.querySelectorAll('.lang-option').forEach(el => {
    el.classList.toggle('selected', el.dataset.lang === langCode);
  });
  applyLanguageToWelcome();
  document.documentElement.dir = (langCode === 'ar') ? 'rtl' : 'ltr';
}

function applyLanguageToWelcome() {
  const T = translations[currentLang];
  document.getElementById('welcomeTitle').textContent = T.welcomeTitle;
  document.getElementById('welcomeSub').textContent = T.welcomeSub;
  document.getElementById('welcomeLblName').textContent = T.lblName;
  document.getElementById('userName').placeholder = T.phName;
  document.getElementById('welcomeBtnText').textContent = T.btnStart;
}

function applyLanguageToApp() {
  const T = translations[currentLang];
  // Nav
  document.getElementById('navBrandText').textContent = T.navBrand;
  document.getElementById('navGreeting').innerHTML = T.greeting + ', <strong>' + userName + '</strong>';
  document.getElementById('navLangBtn').textContent = T.changeLang;

  // Hero
  document.getElementById('heroBadge').textContent = T.heroBadge;
  document.getElementById('heroTitle').textContent = T.heroTitle;
  document.getElementById('heroSub').textContent = T.heroSub;
  document.getElementById('stat1Num').textContent = T.stat1Num;
  document.getElementById('stat1Label').textContent = T.stat1Label;
  document.getElementById('stat2Num').textContent = T.stat2Num;
  document.getElementById('stat2Label').textContent = T.stat2Label;
  document.getElementById('stat3Num').textContent = T.stat3Num;
  document.getElementById('stat3Label').textContent = T.stat3Label;
  document.getElementById('feat1Title').textContent = T.feat1Title;
  document.getElementById('feat1Desc').textContent = T.feat1Desc;
  document.getElementById('feat2Title').textContent = T.feat2Title;
  document.getElementById('feat2Desc').textContent = T.feat2Desc;
  document.getElementById('feat3Title').textContent = T.feat3Title;
  document.getElementById('feat3Desc').textContent = T.feat3Desc;

  // Form
  document.getElementById('formLabel').textContent = T.formLabel;
  document.getElementById('formTitle').textContent = T.formTitle;
  document.getElementById('formSub').textContent = T.formSub;
  document.getElementById('lblCrop').lastChild.textContent = ' ' + T.lblCrop;
  document.getElementById('lblSoil').lastChild.textContent = ' ' + T.lblSoil;
  document.getElementById('lblSeason').lastChild.textContent = ' ' + T.lblSeason;
  document.getElementById('lblCity').lastChild.textContent = ' ' + T.lblCity;
  document.querySelector('#currentCrop option[value=""]').textContent = T.phCrop;
  document.querySelector('#soilType option[value=""]').textContent = T.phSoil;
  document.querySelector('#season option[value=""]').textContent = T.phSeason;
  document.getElementById('city').placeholder = T.phCity;
  document.querySelector('#season option[value="Kharif"]').textContent = T.seasonKharif;
  document.querySelector('#season option[value="Rabi"]').textContent = T.seasonRabi;
  document.querySelector('#season option[value="Zaid"]').textContent = T.seasonZaid;
  document.getElementById('btnSubmitText').textContent = T.btnSubmit;
  document.getElementById('loaderText').textContent = T.loaderText;

  // Results labels
  document.getElementById('resultLabel').textContent = T.resultLabel;
  document.getElementById('resultTitle').textContent = T.resultTitle;
  document.getElementById('lblSuggestion').textContent = T.lblSuggestion;
  document.getElementById('lblSoilMatch').textContent = T.lblSoilMatch;
  document.getElementById('lblCropMatch').textContent = T.lblCropMatch;
  document.getElementById('lblNextCrop').textContent = T.lblNextCrop;
  document.getElementById('lblCompanion').textContent = T.lblCompanion;
  document.getElementById('lblTemp').textContent = T.lblTemp;
  document.getElementById('lblHumidity').textContent = T.lblHumidity;
  document.getElementById('lblWatering').textContent = T.lblWatering;
  document.getElementById('lblTip').textContent = T.lblTip;
  document.getElementById('lblCityBestCrops').textContent = T.lblCityBestCrops;
  document.getElementById('lblCityWeather').textContent = T.lblCityWeather;
  document.getElementById('lblCropCityMismatch').textContent = T.lblCropCityMismatch;
  document.getElementById('lblCityCropSuggestion').textContent = T.lblCityCropSuggestion;

  // Plan Page Labels
  document.getElementById('planLabel').textContent = T.planLabel || '📅 SUSTAINABLE FUTURE';
  document.getElementById('planTitle').textContent = T.planTitle || 'Your 3-Year Crop Rotation Strategy';
  document.getElementById('planSub').textContent = T.planSub || 'A long-term approach to soil health and maximum yield.';
  document.getElementById('btnLongTermText').textContent = T.btnPlanStrategy || 'Plan Strategy';
  document.getElementById('backToResults').textContent = '← ' + (T.backLabel || 'Back to Results');

  // Year buttons
  const yearBtns = document.querySelectorAll('.year-btn');
  if (yearBtns.length >= 3) {
    yearBtns[0].textContent = T.lblYear3 || '3 Years';
    yearBtns[1].textContent = T.lblYear2 || '2 Years';
    yearBtns[2].textContent = T.lblYear1 || '1 Year';
  }

  // Farm Summary Labels
  document.getElementById('lblSumCrop').textContent = T.lblSumCrop || 'Selected Crop';
  document.getElementById('lblSumSoil').textContent = T.lblSumSoil || 'Soil Type';
  document.getElementById('lblSumCity').textContent = T.lblSumCity || 'City';
  document.getElementById('lblRotationYears').textContent = T.lblRotationYears || 'Plan for Years:';
  document.getElementById('btnUpdatePlanText').textContent = T.btnUpdatePlan || 'Update Plan';

  if (document.getElementById('btnGoCustomCompanionText')) {
    document.getElementById('btnGoCustomCompanionText').textContent = T.btnToggleCustomCompanion || 'Find Custom Companion';

    if (document.getElementById('lblCustomCompCropPage')) document.getElementById('lblCustomCompCropPage').innerHTML = '<span class="icon">🌱</span> ' + (T.lblCustomCompCrop || 'Crop');
    if (document.getElementById('lblCustomCompSoilPage')) document.getElementById('lblCustomCompSoilPage').innerHTML = '<span class="icon">🪨</span> ' + (T.lblCustomCompSoil || 'Soil');
    if (document.getElementById('btnFetchCustomCompanionTextPage')) document.getElementById('btnFetchCustomCompanionTextPage').textContent = T.btnFetchCustomCompanion || 'Get Combination';
  }

  // Footer
  document.getElementById('footerMsg').lastChild.textContent = ' ' + T.footerMsg;
}

// ========== TOAST ==========
function showToast(message, type = 'error') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.innerHTML = '<span>' + (type === 'error' ? '⚠️' : '✅') + '</span> ' + message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3500);
}

// ========== FORM VALIDATION ==========
function validateForm() {
  const crop = document.getElementById('currentCrop').value;
  const soil = document.getElementById('soilType').value;
  const season = document.getElementById('season').value;
  const city = document.getElementById('city').value.trim();
  if (!crop) { showToast(t('alertCrop')); return null; }
  if (!soil) { showToast(t('alertSoil')); return null; }
  if (!season) { showToast(t('alertSeason')); return null; }
  if (!city) { showToast(t('alertCity')); return null; }
  return { crop, soil, season, city };
}

// ========== COMPATIBILITY ==========
function getCompatibility(crop, soil) {
  const rating = (cropSoilCompat[crop] && cropSoilCompat[crop][soil]) || 'ok';
  const key = rating === 'good' ? 'compatGood' : rating === 'ok' ? 'compatOk' : 'compatBad';
  const msg = t(key).replace('{crop}', crop).replace('{soil}', soil);
  return { rating, message: msg };
}

// ========== TOUR LOGIC ==========
function startTour() {
  const driver = window.driver.js.driver;
  const tour = driver({
    showProgress: true,
    steps: [
      { element: '#welcomeTitle', popover: { title: t('tourTitle1'), description: t('tourText1'), side: "bottom", align: 'start' } },
      { element: '.lang-grid', popover: { title: t('tourTitle2'), description: t('tourText2'), side: "bottom", align: 'start' } },
      { element: '.welcome-field', popover: { title: t('tourTitle3'), description: t('tourText3'), side: "bottom", align: 'start' } },
      { element: '#welcomeBtn', popover: { title: t('tourTitle2'), description: 'Click "Get Started" to enter the app.', side: "top", align: 'start' } },
      { element: '.form-grid', popover: { title: t('tourTitle4'), description: t('tourText4'), side: "top", align: 'start' } },
      { element: '#city', popover: { title: t('tourTitle5'), description: t('tourText5'), side: "top", align: 'start' } },
      { element: '.form-actions button', popover: { title: t('tourTitle6'), description: t('tourText6'), side: "top", align: 'start' } }
    ],
    nextBtnText: t('btnNext'),
    prevBtnText: t('btnPrev'),
    doneBtnText: t('btnDone'),
  });

  tour.drive();
}

// ========== GENERATE RESULTS (REFACTORED FOR BACKEND) ==========
async function generateResults(formData) {
  const loaderWrap = document.getElementById('loaderWrap');
  const resultsSection = document.getElementById('resultsSection');

  loaderWrap.classList.add('visible');
  resultsSection.classList.remove('visible');

  try {
    const response = await fetch('/api/recommend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || 'Server Error');
    }
    const data = await response.json();

    loaderWrap.classList.remove('visible');

    // Basic Results (Safe assignment)
    const setSafeText = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val || '—';
    };
    const setSafeHtml = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = val || '—';
    };

    setSafeText('valNextCrop', data.nextCrop);
    setSafeHtml('valNextCropDuration', `<strong>${t('lblDuration')}:</strong> ${data.nextCropDuration}`);
    setSafeText('valCompanion', data.companion);
    setSafeHtml('valCompanionDuration', `<strong>${t('lblDuration')}:</strong> ${data.companionDuration}`);
    setSafeText('valIrrigation', data.irrigation);
    setSafeText('valSoilMatch', data.bestSoil);
    setSafeText('valCropMatch', data.bestCropsForSoil);

    const compatMsg = t(data.compatRating === 'good' ? 'compatGood' : data.compatRating === 'ok' ? 'compatOk' : 'compatBad')
      .replace('{crop}', formData.crop)
      .replace('{soil}', formData.soil);
    setSafeText('valSuggestion', compatMsg);

    // Weather & Tip
    const weatherVal = document.getElementById('valTemperature');
    if (weatherVal) {
      weatherVal.textContent = data.weather.temp + (data.cityInfo ? ' (' + data.cityInfo.climate + ')' : '');
      // Add source badge
      if (data.weather.source === "Live") {
        weatherVal.innerHTML += ` <span class="badge live" style="background: var(--green-600); color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; margin-left: 5px; vertical-align: middle;">LIVE</span>`;
      }
    }

    setSafeText('valHumidity', data.weather.humidity);
    setSafeText('valTip', data.weather.tip);

    // City Banner
    const cityBanner = document.getElementById('cityRecommendationBanner');
    if (cityBanner) {
      if (data.cityInfo) {
        setSafeText('valCityBestCrops', data.cityInfo.bestCrops);
        setSafeText('valCityWeather', data.cityInfo.climate + ' — ' + data.cityInfo.temp);
        cityBanner.style.display = 'block';
      } else {
        cityBanner.style.display = 'none';
        showToast(t('alertCityNotFound').replace('{city}', formData.city), 'error');
      }
    }

    // Mismatch Logic
    const mismatchBanner = document.getElementById('cropCityMismatchBanner');
    const suggestionBanner2 = document.getElementById('cityCropSuggestionBanner');

    if (data.cityInfo) {
      const isSuitable = data.cityInfo.bestCrops.toLowerCase().includes(formData.crop.toLowerCase());
      if (!isSuitable) {
        document.getElementById('valCropCityMismatch').textContent =
          t('cropCityMismatch').replace('{crop}', formData.crop).replace('{city}', formData.city).replace('{bestCrops}', data.cityInfo.bestCrops);
        mismatchBanner.style.display = 'flex';
        document.getElementById('valCityCropSuggestion').textContent = data.cityInfo.bestCrops;
        suggestionBanner2.style.display = 'flex';
      } else {
        mismatchBanner.style.display = 'none';
        document.getElementById('valCityCropSuggestion').textContent =
          t('cityCropMatch').replace('{crop}', formData.crop).replace('{city}', formData.city);
        suggestionBanner2.style.display = 'flex';
      }
    } else {
      mismatchBanner.style.display = 'none';
      suggestionBanner2.style.display = 'none';
    }

    // Styling
    const banner = document.getElementById('suggestionBanner');
    banner.className = 'suggestion-banner compat-' + data.compatRating;

    resultsSection.classList.add('visible');
    setTimeout(() => resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    showToast(t('toastSuccess'), 'success');

    // Prepare for visualization (if elements exist)
    lastResultData = data;
    lastFormData = formData;
    const modelVis = document.getElementById('modelVisualizer');
    const btnVis = document.getElementById('btnViewModelLogic');
    if (modelVis) modelVis.classList.remove('visible');
    if (btnVis) btnVis.style.display = 'inline-flex';
    if (modelVis && typeof generateModelDiagram === 'function') {
      generateModelDiagram(data, formData);
    }

  } catch (err) {
    console.error(err);
    loaderWrap.classList.remove('visible');
    showToast('Failed to get recommendation from server.', 'error');
  }
}

// ========== CUSTOM COMPANION PAGE ==========
function showCompanionPage() {
  // Hide all sections except Nav and Footer
  const sections = document.querySelectorAll('.app-page > section, .app-page > .features-strip, .app-page > .hero-section, #planPage');
  sections.forEach(s => s.style.display = 'none');

  const companionPage = document.getElementById('companionPage');
  companionPage.style.display = 'block';
  setTimeout(() => companionPage.style.opacity = '1', 10);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideCompanionPage() {
  // Show all main sections again
  const sections = document.querySelectorAll('.app-page > section, .app-page > .features-strip, .app-page > .hero-section');
  sections.forEach(s => s.style.display = 'block');

  document.getElementById('companionPage').style.display = 'none';

  if (document.getElementById('resultsSection').querySelector('.result-card__value').textContent !== '—') {
    document.getElementById('resultsSection').classList.add('visible');
    setTimeout(() => document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  }
}

async function getCustomCompanion() {
  const crop = document.getElementById('customCompCropPage').value;
  const soil = document.getElementById('customCompSoilPage').value;

  if (!crop || !soil) {
    showToast(translations[currentLang].errFields || 'Please fill in all fields', 'warning');
    return;
  }

  const btn = document.getElementById('btnFetchCustomCompanionPage');
  btn.style.opacity = '0.7';
  btn.style.pointerEvents = 'none';

  try {
    const response = await fetch('/api/companion-crop', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ crop, soil })
    });
    const data = await response.json();

    if (data.error) throw new Error(data.error);

    // Display result on the dedicated page
    document.getElementById('valCustomCompanionPage').textContent = data.companion;
    document.getElementById('valCustomCompanionDurationPage').textContent = `⏳ ${data.duration}`;
    document.getElementById('valCustomCompanionBenefitPage').textContent = data.benefit;

    // Explicitly show result area and scroll to it
    const resultArea = document.getElementById('customCompanionResultPage');
    resultArea.style.display = 'block';

    setTimeout(() => {
      resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);

  } catch (err) {
    console.error(err);
    showToast('Failed to fetch custom companion. Please try again.', 'error');
  } finally {
    btn.style.opacity = '1';
    btn.style.pointerEvents = 'auto';
  }
}

// ========== LONG-TERM PLAN ==========
function showPlanPage() {
  // Populate Farm Summary
  document.getElementById('valSumCrop').textContent = document.getElementById('currentCrop').value || '—';
  document.getElementById('valSumSoil').textContent = document.getElementById('soilType').value || '—';
  document.getElementById('valSumCity').textContent = document.getElementById('city').value || '—';

  // Hide all sections except Nav and Footer
  const sections = document.querySelectorAll('.app-page > section, .app-page > .features-strip, .app-page > .hero-section');
  sections.forEach(s => s.style.display = 'none');

  document.getElementById('planPage').style.display = 'block';
  setTimeout(() => document.getElementById('planPage').style.opacity = '1', 10);
}

function hidePlanPage() {
  // Show all sections again
  const sections = document.querySelectorAll('.app-page > section, .app-page > .features-strip, .app-page > .hero-section');
  sections.forEach(s => s.style.display = 'block');

  document.getElementById('planPage').style.display = 'none';
  // Ensure results are visible if we had them
  if (document.getElementById('resultsSection').querySelector('.result-card__value').textContent !== '—') {
    document.getElementById('resultsSection').classList.add('visible');
  }
}

async function generateLongTermPlan(years = 3) {
  const crop = document.getElementById('currentCrop').value;
  if (!crop) return;

  try {
    const response = await fetch('/api/long-term-plan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ crop, years })
    });

    if (!response.ok) throw new Error('API Error');
    const data = await response.json();

    const container = document.getElementById('timelineContainer');
    container.innerHTML = '';

    data.plan.forEach((item, index) => {
      const yearDiv = document.createElement('div');
      yearDiv.className = 'timeline-item';
      yearDiv.innerHTML = `
        <div class="timeline-header">
          <span class="timeline-year">${t('yearLabel')} ${item.year}</span>
          <span class="timeline-benefit">${item.benefit}</span>
        </div>
        <div class="timeline-card">
          <div class="timeline-crops">
            ${item.crops.map((c, i) => `
              <div class="crop-tag-group" style="display:inline-flex; flex-direction:column; align-items:center; margin-right:12px;">
                <span class="crop-tag">${c}</span>
                <span style="font-size:0.7rem; color:var(--gray-500); margin-top:4px;">${item.durations[i]}</span>
              </div>
            `).join('')}
          </div>
          <p class="timeline-desc">This rotation sequence is optimized for ${item.crops[0]} based soil health recovery.</p>
        </div>
      `;
      container.appendChild(yearDiv);
    });

    showPlanPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });

  } catch (err) {
    console.error(err);
    showToast('Failed to generate long-term plan.', 'error');
  }
}

// ========== EVENT LISTENERS ==========
document.addEventListener('DOMContentLoaded', () => {
  // Welcome page language selection
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => selectLanguage(btn.dataset.lang));
  });

  // Start button
  document.getElementById('welcomeBtn').addEventListener('click', goToApp);

  // Allow Enter on name field
  document.getElementById('userName').addEventListener('keydown', e => {
    if (e.key === 'Enter') goToApp();
  });

  // Nav language button → go back to welcome
  document.getElementById('navLangBtn').addEventListener('click', goToWelcome);

  // Tour button
  document.getElementById('startTourBtn').addEventListener('click', startTour);

  // Generate Plan button (now inside card)
  document.getElementById('btnLongTerm').addEventListener('click', () => generateLongTermPlan(3));

  // Back to results
  document.getElementById('backToResults').addEventListener('click', hidePlanPage);

  // Update Plan with button group (if exists)
  document.querySelectorAll('.year-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.year-btn').forEach(b => {
        b.style.background = 'white';
        b.style.color = 'var(--green-700)';
      });
      btn.style.background = 'var(--green-600)';
      btn.style.color = 'white';
      const years = parseInt(btn.dataset.years) || 1;
      generateLongTermPlan(years);
    });
  });

  // Restore numeric input listener (if exists)
  const btnUpdatePlan = document.getElementById('btnUpdatePlan');
  if (btnUpdatePlan) {
    btnUpdatePlan.addEventListener('click', () => {
      const years = parseInt(document.getElementById('rotationYears').value) || 3;
      generateLongTermPlan(years);
    });
  }

  // Custom Companion Controls
  const btnGoCustom = document.getElementById('btnGoCustomCompanion');
  if (btnGoCustom) {
    btnGoCustom.addEventListener('click', showCompanionPage);
  }

  const btnFetchCustomPage = document.getElementById('btnFetchCustomCompanionPage');
  if (btnFetchCustomPage) {
    btnFetchCustomPage.addEventListener('click', getCustomCompanion);
  }

  const backFromCompanion = document.getElementById('backToResultsFromCompanion');
  if (backFromCompanion) {
    backFromCompanion.addEventListener('click', hideCompanionPage);
  }

  // Form submission
  document.getElementById('plannerForm').addEventListener('submit', e => {
    e.preventDefault();
    const data = validateForm();
    if (data) generateResults(data);
  });

  // Model Insight Toggle
  const btnInsights = document.getElementById('btnViewModelLogic');
  if (btnInsights) {
    btnInsights.addEventListener('click', toggleModelVisualizer);
  }
});

// ========== SCROLL ANIMATIONS ==========
const resultsSection = document.getElementById('resultsSection');
const mutationObserver = new MutationObserver(() => {
  if (resultsSection && resultsSection.classList.contains('visible')) {
    const cards = resultsSection.querySelectorAll('.result-card, .compat-card, .suggestion-banner');
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(16px)';
      card.style.transition = 'opacity .4s ease, transform .4s ease';
      observer.observe(card);
    });
  }
});
if (resultsSection) {
  mutationObserver.observe(resultsSection, { attributes: true, attributeFilter: ['class'] });
}

// ========== MODEL VISUALIZATION (MERMAID) ==========
async function generateModelDiagram(data, formData) {
  const container = document.getElementById('mermaidGraph');
  const visualizer = document.getElementById('modelVisualizer');

  // Initialize Mermaid if not done
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({ startOnLoad: false, theme: 'forest', securityLevel: 'loose' });
  } else {
    console.error('Mermaid.js not loaded');
    return;
  }

  const { crop, soil, season, city } = formData;
  const rating = data.compatRating.toUpperCase();

  // Create Mermaid Definition
  let graphDefinition = `graph TD\n`;
  graphDefinition += `  Start((Farm Profile)) --> CropNode[Crop: ${crop}]\n`;
  graphDefinition += `  Start --> SoilNode[Soil: ${soil}]\n`;
  graphDefinition += `  Start --> SeasonNode[Season: ${season}]\n`;

  if (city) {
    graphDefinition += `  Start --> CityNode[City: ${city}]\n`;
  }

  // Decision Logic
  graphDefinition += `  CropNode --> Decision{Rule Engine}\n`;
  graphDefinition += `  SoilNode --> Decision\n`;
  graphDefinition += `  SeasonNode --> Decision\n`;

  // Compatibility Link
  graphDefinition += `  Decision -- "Check Compatibility" --> RatingNode{${rating} Match}\n`;

  // Final Result Links
  graphDefinition += `  RatingNode --> NextCrop[Next: ${data.nextCrop}]\n`;
  graphDefinition += `  RatingNode --> Companion[Companion: ${data.companion}]\n`;
  graphDefinition += `  RatingNode --> Irrigation[Irrigation Guide]\n`;

  if (data.cityInfo) {
    graphDefinition += `  CityNode --> ClimateRule{Climate Check}\n`;
    graphDefinition += `  ClimateRule -- "${data.cityInfo.climate}" --> CityResult[Best for City: ${data.cityInfo.bestCrops.split(',')[0]}...]\n`;
  }

  // Styling
  graphDefinition += `  classDef primary fill:#15803d,color:#fff,stroke:#052e16,stroke-width:2px;\n`;
  graphDefinition += `  classDef highlight fill:#f59e0b,color:#fff,stroke:#b45309,stroke-width:2px;\n`;
  graphDefinition += `  classDef decision fill:#f0fdf4,color:#166534,stroke:#15803d,stroke-width:2px,stroke-dasharray: 5 5;\n`;

  graphDefinition += `  class Start,CropNode,SoilNode,SeasonNode,CityNode primary;\n`;
  graphDefinition += `  class Decision,RatingNode,ClimateRule decision;\n`;
  graphDefinition += `  class NextCrop,Companion,Irrigation,CityResult highlight;\n`;

  // Render
  try {
    container.innerHTML = `<pre class="mermaid">${graphDefinition}</pre>`;
    await mermaid.run({ nodes: [container] });
  } catch (err) {
    console.error('Mermaid render error:', err);
    container.innerHTML = '<p style="color:red">Failed to render visualization logic.</p>';
  }
}

function toggleModelVisualizer() {
  const visualizer = document.getElementById('modelVisualizer');
  const btnText = document.getElementById('btnInsightsText');

  if (visualizer.classList.contains('visible')) {
    visualizer.classList.remove('visible');
    btnText.textContent = t('btnInsightsText') || 'See Model Intelligence Flow';
  } else {
    visualizer.classList.add('visible');
    btnText.textContent = 'Hide Intelligence Flow';
    visualizer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Global variable to store last result for visualization
let lastResultData = null;
let lastFormData = null;
