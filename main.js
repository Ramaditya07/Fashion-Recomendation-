// --- DATA & CONSTANTS ---

const ATTRIBUTE_OPTIONS = {
    bodyShape: [{
            id: "hourglass",
            label: "Hourglass",
            desc: "Shoulders and hips are similar width, defined waist.",
        },
        {
            id: "pear",
            label: "Pear (Triangle)",
            desc: "Hips are wider than shoulders.",
        },
        {
            id: "apple",
            label: "Apple (Round)",
            desc: "Broader shoulders and bust, undefined waist.",
        },
        {
            id: "rectangle",
            label: "Rectangle",
            desc: "Shoulders, waist, and hips are similar width.",
        },
        {
            id: "inverted_triangle",
            label: "Inverted Triangle",
            desc: "Shoulders are wider than hips.",
        },
    ],
    faceShape: [{
            id: "oval",
            label: "Oval",
            desc: "Balanced proportions, slightly narrower chin.",
        },
        {
            id: "round",
            label: "Round",
            desc: "Soft angles, width and length are similar.",
        },
        {
            id: "square",
            label: "Square",
            desc: "Strong jawline, forehead and jaw similar width.",
        },
        {
            id: "heart",
            label: "Heart",
            desc: "Wide forehead, narrow pointed chin.",
        },
        {
            id: "diamond",
            label: "Diamond",
            desc: "High cheekbones, narrow forehead and chin.",
        },
    ],
    skinTone: [{
            id: "warm",
            label: "Warm",
            desc: "Green veins, golden or yellow undertones.",
        },
        {
            id: "cool",
            label: "Cool",
            desc: "Blue veins, pink or bluish undertones.",
        },
        {
            id: "neutral",
            label: "Neutral",
            desc: "Mix of blue/green veins, hard to determine.",
        },
    ],
};

const DRESS_SHAPES = {
    wrap: "M50,0 C20,0 10,20 10,40 C10,60 30,70 30,100 L5,200 L95,200 L70,100 C70,70 90,60 90,40 C90,20 80,0 50,0 Z",
    aline: "M35,0 L65,0 L75,30 L90,200 L10,200 L25,30 Z",
    sheath: "M35,0 L65,0 L70,40 L70,200 L30,200 L30,40 Z",
    empire: "M35,0 L65,0 L75,35 L95,200 L5,200 L25,35 Z",
    mermaid: "M35,0 L65,0 L70,40 L60,120 L90,200 L10,200 L40,120 L30,40 Z",
};

const RECOMMENDATION_ENGINE = {
    female: {
        hourglass: {
            tops: "Crop tops, bodycon tops, wrap blouses, fitted turtlenecks, corset tops, off-shoulder tops, ribbed knit tops",
            bottoms: "High-waisted mom jeans, leather pants, midi skirts, wide-leg trousers, cargo pants, flared jeans, biker shorts with oversized blazer",
            dresses: "Bodycon dresses, wrap dresses, midi slip dresses, cut-out dresses, satin dresses, belted shirt dresses, ribbed knit dresses",
            bestDressShape: "wrap",
            avoid: "Baggy oversized hoodies, shapeless maxi dresses, boxy t-shirts",
            tip: "Show off your balanced figure! Highlight your waist with belts, crop tops, or fitted styles.",
            easyOutfit: "Try: High-waisted jeans + crop top + blazer OR Bodycon midi dress + sneakers",
        },
        pear: {
            tops: "Puff sleeve tops, statement shoulders, bright blazers, graphic tees, oversized shirts, bardot tops, embellished tops, chunky sweaters",
            bottoms: "Dark skinny jeans, straight-leg pants, A-line midi skirts, palazzo pants, bootcut jeans, black leggings, tailored trousers",
            dresses: "A-line mini dresses, fit-and-flare dresses, empire waist maxi dresses, shirt dresses, wrap dresses with detailed tops",
            bestDressShape: "aline",
            avoid: "Tight light-colored leggings, low-rise jeans, skinny ankle pants",
            tip: "Balance your shape! Draw attention up with bold tops, statement jewelry, and keep bottoms dark and simple.",
            easyOutfit: "Try: Oversized blazer + graphic tee + black jeans + boots OR Puff sleeve top + palazzo pants",
        },
        apple: {
            tops: "V-neck blouses, longline cardigans, empire waist tops, flowy tunics, wrap tops, kimono jackets, duster coats, boyfriend blazers",
            bottoms: "High-waisted wide-leg pants, straight-leg jeans, midi skirts, bootcut pants, culottes, tailored trousers, flared leggings",
            dresses: "Empire waist maxi dresses, A-line dresses, wrap dresses, shirt dresses, slip dresses with cardigans, midi dresses",
            bestDressShape: "empire",
            avoid: "Tight crop tops, bodycon dresses, horizontal stripes across middle, clingy fabrics",
            tip: "Create flow and elongate! Choose V-necks, vertical lines, and show off your legs with shorter hemlines.",
            easyOutfit: "Try: Longline cardigan + V-neck tee + wide-leg pants OR Empire waist dress + denim jacket",
        },
        rectangle: {
            tops: "Peplum tops, ruffled blouses, cropped sweaters, tie-front tops, layered tanks, belted shirts, textured knits, wrap tops",
            bottoms: "Printed pants, pleated skirts, ripped jeans, cargo pants, paperbag waist pants, flared jeans, patterned leggings",
            dresses: "Belted shirt dresses, tiered maxi dresses, fit-and-flare dresses, wrap dresses, ruched dresses, peplum dresses",
            bestDressShape: "sheath",
            avoid: "Straight shift dresses, boxy oversized tees, simple tube dresses",
            tip: "Create curves! Add volume with ruffles, belts, layers, and choose clothes with waist definition.",
            easyOutfit: "Try: Peplum top + high-waisted jeans + belt OR Belted dress + ankle boots",
        },
        inverted_triangle: {
            tops: "V-neck tees, simple camisoles, wrap tops, scoop necks, halter necks, thin strap tops, fitted turtlenecks, dark blazers",
            bottoms: "Wide-leg pants, printed trousers, flared jeans, pleated skirts, cargo pants, light-colored jeans, patterned palazzo pants",
            dresses: "A-line dresses, maxi dresses with full skirts, wrap dresses, fit-and-flare dresses, dresses with detailed hems",
            bestDressShape: "mermaid",
            avoid: "Shoulder pads, boat necks, off-shoulder tops, statement sleeves, horizontal stripes on top",
            tip: "Balance your shoulders! Keep tops simple and minimal, add volume and patterns to your lower half.",
            easyOutfit: "Try: Simple V-neck + printed wide-leg pants + heels OR Halter dress + statement earrings",
        },
    },
    male: {
        hourglass: {
            tops: "Fitted t-shirts, slim-fit button-downs, polo shirts, henley shirts, fitted sweaters, bomber jackets, denim jackets, leather jackets",
            bottoms: "Slim-fit jeans, chinos, joggers, tailored trousers, dark denim, khaki pants, slim cargo pants",
            dresses: "Fitted suits, blazer with jeans, smart casual combos, turtleneck with blazer, shirt with vest",
            bestDressShape: "wrap",
            avoid: "Baggy hoodies, oversized t-shirts, loose sweatpants, shapeless clothes",
            tip: "You have a balanced athletic build! Wear fitted clothes that show your proportions without being too tight.",
            easyOutfit: "Try: Fitted t-shirt + slim jeans + sneakers OR Polo + chinos + loafers",
        },
        pear: {
            tops: "Structured blazers, bomber jackets, horizontal striped shirts, layered hoodies, denim jackets, varsity jackets, padded jackets, chunky knit sweaters",
            bottoms: "Straight-leg jeans, dark chinos, tailored trousers, slim-fit pants, black jeans, dress pants",
            dresses: "Suits with structured shoulders, blazer with t-shirt, layered looks with jackets, double-breasted coats",
            bestDressShape: "aline",
            avoid: "Skinny jeans, tight pants, light-colored bottoms, tapered joggers",
            tip: "Build up your upper body! Wear structured jackets, layers, and bold patterns on top. Keep bottoms simple and dark.",
            easyOutfit: "Try: Bomber jacket + graphic tee + dark jeans + boots OR Blazer + striped shirt + black chinos",
        },
        apple: {
            tops: "V-neck t-shirts, open button-downs, vertical striped shirts, cardigan over tee, long coats, duster jackets, casual blazers (unbuttoned)",
            bottoms: "Straight-leg jeans, flat-front chinos, dark trousers, slim-fit pants, joggers, tailored pants",
            dresses: "Single-breasted suits, casual blazer with jeans, long coats, unstructured jackets, monochrome outfits",
            bestDressShape: "empire",
            avoid: "Tight fitted shirts, horizontal stripes, double-breasted jackets, tucked-in shirts with tight belts",
            tip: "Create length and flow! Wear V-necks, vertical lines, open jackets, and show off your legs with well-fitted pants.",
            easyOutfit: "Try: V-neck tee + dark jeans + sneakers + open jacket OR Cardigan + shirt + chinos",
        },
        rectangle: {
            tops: "Layered t-shirts, textured sweaters, patterned shirts, hoodies with jackets, flannel shirts, denim shirts, printed tees, cardigans",
            bottoms: "Cargo pants, distressed jeans, patterned chinos, corduroy pants, joggers, utility pants, colored trousers",
            dresses: "Three-piece suits, textured blazers, patterned sport coats, layered casual looks, vest with shirt",
            bestDressShape: "sheath",
            avoid: "Plain solid t-shirts alone, simple straight cuts, monochrome minimalist looks",
            tip: "Add dimension and shape! Use layers, patterns, textures, and accessories to create visual interest.",
            easyOutfit: "Try: Flannel + graphic tee + jeans + boots OR Patterned shirt + cardigan + chinos",
        },
        inverted_triangle: {
            tops: "V-neck tees, simple crew necks, fitted shirts, thin sweaters, dark colors on top, minimal jackets, zip-up hoodies, henley shirts",
            bottoms: "Relaxed-fit jeans, light-colored chinos, cargo pants, wide-leg trousers, patterned pants, khaki joggers, colored jeans",
            dresses: "Unstructured suits, casual blazers, soft-shoulder jackets, cardigan with pants, minimalist looks",
            bestDressShape: "mermaid",
            avoid: "Shoulder pads, double-breasted jackets, horizontal stripes on top, bulky jackets, epaulettes",
            tip: "Balance your broad shoulders! Keep tops simple and fitted, add volume and color to your lower half with relaxed pants.",
            easyOutfit: "Try: Simple V-neck + light chinos + white sneakers OR Henley + cargo pants + boots",
        },
    },
};

const FACE_ACCESSORIES = {
    oval: "Most necklines work. Experiment with statement earrings.",
    round: "V-necks and sweetheart necklines lengthen the face. Long, dangling earrings.",
    square: "Scoop, round, and cowl necks soften angles. Hoop earrings.",
    heart: "Boat necks and off-shoulder styles balance the forehead. Teardrop earrings.",
    diamond: "Strapless or scoop necks showing collarbone. Stud earrings.",
};

const COLOR_PALETTES = {
    warm: {
        best: [
            "Mustard Yellow",
            "Olive Green",
            "Coral",
            "Warm Red",
            "Cream",
            "Gold",
        ],
        avoid: ["Icy Blue", "Silver", "Bright Jewel Tones"],
    },
    cool: {
        best: ["Royal Blue", "Emerald Green", "Purple", "Black", "White", "Silver"],
        avoid: ["Orange", "Mustard", "Brown"],
    },
    neutral: {
        best: [
            "Dusty Pink",
            "Jade Green",
            "Peach",
            "Soft Blue",
            "Off-White",
            "Rose Gold",
        ],
        avoid: ["Neon colors", "Oversized bright yellows"],
    },
};

// --- STATE MANAGEMENT ---

let state = {
    step: "gender", // gender, upload, analyzing, verify, results, tryon, history
    gender: null,
    image: null,
    attributes: {
        bodyShape: "hourglass",
        faceShape: "oval",
        skinTone: "neutral",
    },
    selectedColor: null,
    occasion: "casual", // casual, formal, party, work, gym
    season: "all", // all, summer, winter, spring, fall
    tryOn: {
        scale: 1,
        x: 0,
        y: 0,
    },
};

const appElement = document.getElementById("app");
const resetBtn = document.getElementById("resetBtn");

// --- LOCALSTORAGE FUNCTIONS ---

function saveAnalysisToHistory() {
    const analysis = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        gender: state.gender,
        occasion: state.occasion,
        season: state.season,
        attributes: {
            ...state.attributes
        },
        image: state.image,
    };

    let history = JSON.parse(localStorage.getItem('styleai_history') || '[]');
    history.unshift(analysis); // Add to beginning

    // Keep only last 10 analyses
    if (history.length > 10) {
        history = history.slice(0, 10);
    }

    localStorage.setItem('styleai_history', JSON.stringify(history));
}

function getAnalysisHistory() {
    return JSON.parse(localStorage.getItem('styleai_history') || '[]');
}

function loadAnalysis(id) {
    const history = getAnalysisHistory();
    const analysis = history.find(a => a.id === id);

    if (analysis) {
        state.gender = analysis.gender;
        state.occasion = analysis.occasion;
        state.season = analysis.season;
        state.attributes = {
            ...analysis.attributes
        };
        state.image = analysis.image;
        state.step = 'results';
        render();
    }
}

function deleteAnalysis(id) {
    let history = getAnalysisHistory();
    history = history.filter(a => a.id !== id);
    localStorage.setItem('styleai_history', JSON.stringify(history));
    render();
}

function clearAllHistory() {
    if (confirm('Are you sure you want to delete all saved analyses?')) {
        localStorage.removeItem('styleai_history');
        alert('✅ All history cleared!');
        render();
    }
}

// --- HELPER FUNCTIONS ---

function getColorHex(name) {
    const map = {
        "Mustard Yellow": "#E1AD01",
        "Olive Green": "#808000",
        Coral: "#FF7F50",
        "Warm Red": "#DC143C",
        Cream: "#FFFDD0",
        Gold: "#FFD700",
        "Royal Blue": "#4169E1",
        "Emerald Green": "#50C878",
        Purple: "#800080",
        Black: "#222222",
        White: "#FFFFFF",
        Silver: "#C0C0C0",
        "Dusty Pink": "#DCAE96",
        "Jade Green": "#00A86B",
        Peach: "#FFE5B4",
        "Soft Blue": "#B0E0E6",
        "Off-White": "#FAF9F6",
        "Rose Gold": "#B76E79",
        "Icy Blue": "#F0F8FF",
        "Bright Jewel Tones": "#0095B6",
        Orange: "#FFA500",
        Brown: "#A52A2A",
        "Neon colors": "#ccff00",
        "Oversized bright yellows": "#FFFF00",
    };
    return map[name] || "#CCCCCC";
}

function updateState(newState) {
    state = {
        ...state,
        ...newState
    };
    render();
}

function resetApp() {
    state = {
        step: "gender",
        gender: null,
        image: null,
        attributes: {
            bodyShape: "hourglass",
            faceShape: "oval",
            skinTone: "neutral",
        },
        selectedColor: null,
        occasion: "casual",
        season: "all",
        tryOn: {
            scale: 1,
            x: 0,
            y: 0
        },
        savedToHistory: false,
    };
    render();
}

// --- RENDER FUNCTIONS ---

function renderGender() {
    return `
        <div class="upload-container">
            <h1 class="hero-title">Welcome to StyleAI</h1>
            <p class="hero-subtitle">Let's start by selecting your preferences for personalized fashion recommendations.</p>

            <div style="margin-bottom: 2rem;">
                <h3 style="font-size: 1.25rem; margin-bottom: 1rem; text-align: center;">Select Your Gender</h3>
                <div style="display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center; max-width: 600px;">
                    <div onclick="selectGender('female')" class="gender-card">
                        <div class="gender-icon">
                            <i data-lucide="user" style="width: 48px; height: 48px;"></i>
                        </div>
                        <h3 style="margin-top: 1rem; font-size: 1.5rem;">Female</h3>
                        <p style="color: var(--text-muted); margin-top: 0.5rem;">Get recommendations for dresses, skirts, and feminine styles</p>
                    </div>

                    <div onclick="selectGender('male')" class="gender-card">
                        <div class="gender-icon">
                            <i data-lucide="user" style="width: 48px; height: 48px;"></i>
                        </div>
                        <h3 style="margin-top: 1rem; font-size: 1.5rem;">Male</h3>
                        <p style="color: var(--text-muted); margin-top: 0.5rem;">Get recommendations for suits, shirts, and masculine styles</p>
                    </div>
                </div>
            </div>

            <div style="max-width: 900px; margin: 0 auto;">
                <div style="display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center; align-items: flex-start;">
                    <!-- Occasion Selector -->
                    <div style="flex: 1; min-width: 300px;">
                        <h3 style="font-size: 1.125rem; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem; justify-content: center;">
                            <i data-lucide="calendar" style="width: 20px; height: 20px; color: var(--primary);"></i>
                            Occasion
                        </h3>
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;">
                            <button onclick="updateOccasion('casual')" class="option-btn ${state.occasion === 'casual' ? 'selected' : ''}" style="padding: 0.75rem 1rem; flex: 0 0 auto;">
                                <i data-lucide="coffee" style="width: 18px; height: 18px;"></i>
                                <div style="margin-top: 0.25rem; font-size: 0.875rem;">Casual</div>
                            </button>
                            <button onclick="updateOccasion('formal')" class="option-btn ${state.occasion === 'formal' ? 'selected' : ''}" style="padding: 0.75rem 1rem; flex: 0 0 auto;">
                                <i data-lucide="briefcase" style="width: 18px; height: 18px;"></i>
                                <div style="margin-top: 0.25rem; font-size: 0.875rem;">Formal</div>
                            </button>
                            <button onclick="updateOccasion('party')" class="option-btn ${state.occasion === 'party' ? 'selected' : ''}" style="padding: 0.75rem 1rem; flex: 0 0 auto;">
                                <i data-lucide="music" style="width: 18px; height: 18px;"></i>
                                <div style="margin-top: 0.25rem; font-size: 0.875rem;">Party</div>
                            </button>
                            <button onclick="updateOccasion('work')" class="option-btn ${state.occasion === 'work' ? 'selected' : ''}" style="padding: 0.75rem 1rem; flex: 0 0 auto;">
                                <i data-lucide="laptop" style="width: 18px; height: 18px;"></i>
                                <div style="margin-top: 0.25rem; font-size: 0.875rem;">Work</div>
                            </button>
                            <button onclick="updateOccasion('gym')" class="option-btn ${state.occasion === 'gym' ? 'selected' : ''}" style="padding: 0.75rem 1rem; flex: 0 0 auto;">
                                <i data-lucide="dumbbell" style="width: 18px; height: 18px;"></i>
                                <div style="margin-top: 0.25rem; font-size: 0.875rem;">Gym</div>
                            </button>
                        </div>
                    </div>

                    <!-- Season Selector -->
                    <div style="flex: 1; min-width: 300px;">
                        <h3 style="font-size: 1.125rem; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem; justify-content: center;">
                            <i data-lucide="sun" style="width: 20px; height: 20px; color: var(--primary);"></i>
                            Season
                        </h3>
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;">
                            <button onclick="updateSeason('all')" class="option-btn ${state.season === 'all' ? 'selected' : ''}" style="padding: 0.75rem 1rem; flex: 0 0 auto;">
                                <i data-lucide="sparkles" style="width: 18px; height: 18px;"></i>
                                <div style="margin-top: 0.25rem; font-size: 0.875rem;">All</div>
                            </button>
                            <button onclick="updateSeason('summer')" class="option-btn ${state.season === 'summer' ? 'selected' : ''}" style="padding: 0.75rem 1rem; flex: 0 0 auto;">
                                <i data-lucide="sun" style="width: 18px; height: 18px;"></i>
                                <div style="margin-top: 0.25rem; font-size: 0.875rem;">Summer</div>
                            </button>
                            <button onclick="updateSeason('winter')" class="option-btn ${state.season === 'winter' ? 'selected' : ''}" style="padding: 0.75rem 1rem; flex: 0 0 auto;">
                                <i data-lucide="snowflake" style="width: 18px; height: 18px;"></i>
                                <div style="margin-top: 0.25rem; font-size: 0.875rem;">Winter</div>
                            </button>
                            <button onclick="updateSeason('spring')" class="option-btn ${state.season === 'spring' ? 'selected' : ''}" style="padding: 0.75rem 1rem; flex: 0 0 auto;">
                                <i data-lucide="flower-2" style="width: 18px; height: 18px;"></i>
                                <div style="margin-top: 0.25rem; font-size: 0.875rem;">Spring</div>
                            </button>
                            <button onclick="updateSeason('fall')" class="option-btn ${state.season === 'fall' ? 'selected' : ''}" style="padding: 0.75rem 1rem; flex: 0 0 auto;">
                                <i data-lucide="leaf" style="width: 18px; height: 18px;"></i>
                                <div style="margin-top: 0.25rem; font-size: 0.875rem;">Fall</div>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- History Button -->
                ${getAnalysisHistory().length > 0 ? `
                <div style="margin-top: 2rem; text-align: center;">
                    <button onclick="viewHistory()" class="btn" style="background: #6366f1; color: white; display: inline-flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="history" style="width: 18px; height: 18px;"></i>
                        View History (${getAnalysisHistory().length})
                    </button>
                </div>
                ` : ''}
            </div>
        </div>
    `;
}


function renderUpload() {
    return `
        <div class="upload-container">
            <h1 class="hero-title">Discover your perfect look.</h1>
            <p class="hero-subtitle">Upload a photo to analyze your body type, face shape, and skin tone for personalized fashion recommendations.</p>

            <div id="dropZone" class="drop-zone">
                <div class="icon-circle">
                    <i data-lucide="camera" style="color: var(--primary); width: 32px; height: 32px;"></i>
                </div>
                <div>
                    <p style="font-weight: 600; font-size: 1.125rem;">Click to upload or drag and drop</p>
                    <p style="color: var(--text-muted); font-size: 0.875rem;">Full body photos work best. JPEG or PNG.</p>
                </div>
                <input type="file" id="fileInput" class="hidden" accept="image/*">
            </div>
        </div>
    `;
}

function renderAnalyzing() {
    return `
        <div class="analysis-wrapper">
            <div class="scan-container">
                <img src="${state.image}" class="scan-img" />
                <div class="scan-line"></div>
                <!-- Grid overlay simulated via css -->
                <div style="position:absolute; inset:0; background: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 20px 20px;"></div>
                <div style="position:absolute; inset:0; background: rgba(28, 25, 23, 0.2);"></div>
            </div>
            
            <h2 id="scanMessage" style="font-size: 1.5rem; margin-bottom: 0.5rem;">Initializing scan...</h2>
            
            <div class="progress-bar-bg">
                <div id="progressBar" class="progress-bar-fill"></div>
            </div>
            <p id="progressText" style="color: var(--text-muted); font-family: monospace;">0% Complete</p>
        </div>
    `;
}

function renderVerify() {
    const bodyOptions = ATTRIBUTE_OPTIONS.bodyShape
        .map(
            (opt) => `
        <div onclick="updateAttribute('bodyShape', '${opt.id}')" 
             class="option-btn ${state.attributes.bodyShape === opt.id ? "selected" : ""}">
            <div style="font-weight: 600; color: var(--text-main);">${opt.label}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">${opt.desc}</div>
        </div>
    `,
        )
        .join("");

    const faceOptions = ATTRIBUTE_OPTIONS.faceShape
        .map(
            (opt) =>
            `<option value="${opt.id}" ${state.attributes.faceShape === opt.id ? "selected" : ""}>${opt.label} - ${opt.desc}</option>`,
        )
        .join("");

    const skinOptions = ATTRIBUTE_OPTIONS.skinTone
        .map(
            (opt) => `
        <button onclick="updateAttribute('skinTone', '${opt.id}')" 
             class="option-btn ${state.attributes.skinTone === opt.id ? "selected" : ""}" style="text-align: center;">
            <span style="font-weight: 600;">${opt.label}</span>
        </button>
    `,
        )
        .join("");

    return `
        <div class="verify-grid">
            <div>
                <div class="img-preview">
                    <img src="${state.image}" />
                    <div style="position:absolute; bottom:0; left:0; width:100%; padding: 1.5rem; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white;">
                        <h3 style="color:white; font-size: 1.5rem;">Analysis Complete</h3>
                        <p style="opacity: 0.9; font-size: 0.875rem;">Please confirm detection.</p>
                    </div>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; justify-content: center;">
                <div style="margin-bottom: 2rem;">
                    <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">Refine your profile</h2>
                    <p style="color: var(--text-muted);">Verify these details for best accuracy.</p>
                </div>

                <div class="form-group">
                    <label class="form-label"><i data-lucide="user"></i> Body Shape</label>
                    <div class="option-grid">${bodyOptions}</div>
                </div>

                <div class="form-group">
                    <label class="form-label"><i data-lucide="sparkles"></i> Face Shape</label>
                    <select onchange="updateAttribute('faceShape', this.value)" class="form-select">
                        ${faceOptions}
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label"><i data-lucide="palette"></i> Skin Undertone</label>
                    <div style="display:flex; gap: 0.75rem;">${skinOptions}</div>
                </div>

                <button onclick="updateState({step: 'results'})" class="btn btn-primary" style="margin-top: 1rem;">
                    Generate Recommendations <i data-lucide="chevron-right"></i>
                </button>
            </div>
        </div>
    `;
}

function renderResults() {
    const recs = RECOMMENDATION_ENGINE[state.gender][state.attributes.bodyShape];
    const colors = COLOR_PALETTES[state.attributes.skinTone];
    const faceTips = FACE_ACCESSORIES[state.attributes.faceShape];

    const colorButtons = colors.best
        .map(
            (color, i) => `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem; cursor: pointer;" onclick="startTryOn('${color}')">
            <div class="color-swatch" style="background-color: ${getColorHex(color)}"></div>
            <span style="font-size: 0.75rem; font-weight: 500; color: var(--text-muted);">${color}</span>
        </div>
    `,
        )
        .join("");

    return `
        <div class="results-header">
            <span class="badge">Your Style Profile</span>
            <h2 style="font-size: 3rem; margin-top: 1rem; margin-bottom: 0.5rem;">Curated just for you.</h2>
        </div>

        <div class="results-layout">
            <!-- Sidebar -->
            <div>
                <div class="profile-card">
                    <div style="border-radius: 0.5rem; overflow:hidden; aspect-ratio: 1; margin-bottom: 1rem;">
                        <img src="${state.image}" style="width:100%; height:100%; object-fit:cover;" />
                    </div>
                    <div style="display: grid; gap: 1rem;">
                        <div>
                            <div style="font-size: 0.75rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase;">Body Type</div>
                            <div style="font-weight: 500; text-transform: capitalize;">${state.attributes.bodyShape.replace("_", " ")}</div>
                        </div>
                        <div>
                            <div style="font-size: 0.75rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase;">Face Shape</div>
                            <div style="font-weight: 500; text-transform: capitalize;">${state.attributes.faceShape}</div>
                        </div>
                        <div>
                            <div style="font-size: 0.75rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase;">Undertone</div>
                            <div style="font-weight: 500; text-transform: capitalize;">${state.attributes.skinTone}</div>
                        </div>
                        <div>
                            <div style="font-size: 0.75rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase;">Occasion</div>
                            <div style="font-weight: 500; text-transform: capitalize;">${state.occasion}</div>
                        </div>
                        <div>
                            <div style="font-size: 0.75rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase;">Season</div>
                            <div style="font-weight: 500; text-transform: capitalize;">${state.season}</div>
                        </div>
                    </div>
                    
                    <!-- Action Buttons -->
                    <div style="display: grid; gap: 0.75rem; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid #e7e5e4;">
                        <button onclick="downloadResults()" class="btn btn-primary" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                            <i data-lucide="download" style="width: 18px; height: 18px;"></i>
                            Download Results
                        </button>
                        <button onclick="shareResults()" class="btn" style="width: 100%; background: #10b981; color: white; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                            <i data-lucide="share-2" style="width: 18px; height: 18px;"></i>
                            Share
                        </button>
                        <button onclick="copyToClipboard()" class="btn" style="width: 100%; background: #6366f1; color: white; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                            <i data-lucide="copy" style="width: 18px; height: 18px;"></i>
                            Copy Text
                        </button>
                    </div>
                </div>
            </div>

            <!-- Content -->
            <div>
                <div class="try-on-banner">
                    <div>
                        <h3 style="font-size: 1.5rem; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                            <i data-lucide="wand-2" style="color: #fda4af;"></i> AI Virtual Try-On
                        </h3>
                        <p style="color: #d6d3d1;">See how your recommended dress shape and colors look on you.</p>
                    </div>
                    <button onclick="startTryOn('${colors.best[0]}')" class="btn" style="background: white; color: var(--text-main); width: auto;">
                        Try On Now
                    </button>
                </div>

                <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i data-lucide="scissors" style="color: var(--primary);"></i> Best Cuts & Silhouettes
                </h3>
                
                <div class="rec-grid">
                    ${createCard("Tops & Blouses", recs.tops)}
                    ${createCard("Bottoms & Trousers", recs.bottoms)}
                    ${createCard("Dresses & Jumpsuits", recs.dresses, true)}
                    ${createCard("Styles to Avoid", recs.avoid, false, true)}
                </div>

                <div class="card" style="margin-bottom: 2rem;">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="palette" style="color: var(--primary);"></i> Your Power Colors
                    </h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">${colorButtons}</div>
                </div>

                <div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="heart" style="color: var(--primary);"></i> Necklines & Accessories
                    </h3>
                    <div style="background: var(--primary-light); padding: 1.5rem; border-radius: 1rem; border: 1px solid #ffe4e6;">
                        <p>${faceTips}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderHistory() {
    const history = getAnalysisHistory();

    if (history.length === 0) {
        return `
            <div class="upload-container">
                <h1 class="hero-title">Analysis History</h1>
                <p class="hero-subtitle">No saved analyses yet. Complete an analysis to see it here!</p>
                <button onclick="updateState({step: 'gender'})" class="btn btn-primary" style="margin-top: 2rem;">
                    <i data-lucide="arrow-left"></i> Back to Home
                </button>
            </div>
        `;
    }

    const historyCards = history.map(analysis => `
        <div class="card" style="display: flex; gap: 1.5rem; align-items: start;">
            <div style="flex-shrink: 0; width: 120px; height: 120px; border-radius: 0.5rem; overflow: hidden;">
                <img src="${analysis.image}" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <div style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.75rem;">
                    <div>
                        <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.25rem; text-transform: capitalize;">
                            ${analysis.gender} - ${analysis.attributes.bodyShape.replace("_", " ")}
                        </h3>
                        <p style="font-size: 0.875rem; color: var(--text-muted);">${analysis.date}</p>
                    </div>
                    <button onclick="deleteAnalysis(${analysis.id})" class="btn" style="background: #ef4444; color: white; padding: 0.5rem 0.75rem; font-size: 0.875rem;">
                        <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
                    </button>
                </div>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 0.75rem;">
                    <span style="font-size: 0.875rem; color: var(--text-muted);">
                        <strong>Face:</strong> ${analysis.attributes.faceShape}
                    </span>
                    <span style="font-size: 0.875rem; color: var(--text-muted);">
                        <strong>Tone:</strong> ${analysis.attributes.skinTone}
                    </span>
                    <span style="font-size: 0.875rem; color: var(--text-muted);">
                        <strong>Occasion:</strong> ${analysis.occasion}
                    </span>
                    <span style="font-size: 0.875rem; color: var(--text-muted);">
                        <strong>Season:</strong> ${analysis.season}
                    </span>
                </div>
                <button onclick="loadAnalysis(${analysis.id})" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.875rem;">
                    <i data-lucide="eye" style="width: 16px; height: 16px;"></i> View Results
                </button>
            </div>
        </div>
    `).join('');

    return `
        <div style="max-width: 900px; margin: 0 auto; padding: 2rem 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <div>
                    <h1 class="hero-title" style="margin-bottom: 0.5rem;">Analysis History</h1>
                    <p class="hero-subtitle">Your saved fashion analyses (${history.length}/10)</p>
                </div>
                <div style="display: flex; gap: 0.75rem;">
                    <button onclick="clearAllHistory()" class="btn" style="background: #ef4444; color: white;">
                        <i data-lucide="trash-2"></i> Clear All
                    </button>
                    <button onclick="updateState({step: 'gender'})" class="btn btn-primary">
                        <i data-lucide="arrow-left"></i> Back
                    </button>
                </div>
            </div>
            
            <div style="display: grid; gap: 1.5rem;">
                ${historyCards}
            </div>
        </div>
    `;
}

function createCard(title, content, highlighted = false, warning = false) {
    let classes = "card";
    if (highlighted) classes += " highlight";
    if (warning) classes += " warning";

    return `
        <div class="${classes}">
            <h4>${title}</h4>
            <p>${content}</p>
        </div>
    `;
}

function renderTryOn() {
    const recs = RECOMMENDATION_ENGINE[state.gender][state.attributes.bodyShape];
    const shapeKey = recs.bestDressShape || "aline";
    const dressPath = DRESS_SHAPES[shapeKey];
    const colorHex = getColorHex(state.selectedColor);

    const colors = COLOR_PALETTES[state.attributes.skinTone].best
        .map(
            (color) => `
        <button onclick="changeTryOnColor('${color}')" 
                class="color-swatch ${state.selectedColor === color ? "active" : ""}" 
                style="background-color: ${getColorHex(color)}" 
                title="${color}"></button>
    `,
        )
        .join("");

    return `
        <div style="animation: fadeIn 0.5s ease-out;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <button onclick="updateState({step: 'results'})" class="btn-text" style="font-size: 1rem;">
                    <i data-lucide="chevron-left"></i> Back to Results
                </button>
                <h2 style="font-size: 1.5rem;">Virtual Fitting Room</h2>
                <div style="width: 100px;"></div>
            </div>

            <div class="try-on-layout">
                <div class="canvas-container">
                    <img src="${state.image}" style="width: 100%; height: 100%; object-fit: cover;" />
                    
                    <div id="dressOverlay" class="dress-overlay" 
                         style="position: absolute; top: 50%; left: 50%; width: 75%; height: 75%; transform: translate(-50%, -50%) translate(${state.tryOn.x}px, ${state.tryOn.y}px) scale(${state.tryOn.scale}); pointer-events: none;">
                        <svg viewBox="0 0 100 200" style="width: 100%; height: 100%; filter: drop-shadow(0 10px 8px rgba(0,0,0,0.2));">
                            <defs>
                                <filter id="fabricTexture"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" /><feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.2 0" /><feBlend in="SourceGraphic" mode="multiply" /></filter>
                            </defs>
                            <path d="${dressPath}" fill="${colorHex}" stroke="rgba(0,0,0,0.1)" stroke-width="1" />
                        </svg>
                    </div>

                    <div class="controls">
                        <button onclick="adjustTryOn(0.1)" class="ctrl-btn">+</button>
                        <button onclick="adjustTryOn(-0.1)" class="ctrl-btn">-</button>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; justify-content: center; gap: 2rem;">
                    <div>
                        <div style="font-size: 0.75rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem;">Recommended Style</div>
                        <h3 style="font-size: 2rem; margin-bottom: 1rem; text-transform: capitalize;">${shapeKey} Silhouette</h3>
                        <p style="color: var(--text-muted);">Based on your <strong>${state.attributes.bodyShape.replace("_", " ")}</strong> shape, this cut balances your proportions perfectly. The overlay shows the approximate fit.</p>
                    </div>

                    <div>
                        <div style="font-size: 0.75rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase; margin-bottom: 1rem;">Try Another Color</div>
                        <div style="display: flex; flex-wrap: gap; gap: 1rem;">${colors}</div>
                        <p style="margin-top: 1rem; font-size: 0.875rem; font-weight: 500; color: var(--text-muted);">Selected: ${state.selectedColor}</p>
                    </div>

                    <div style="background: var(--primary-light); padding: 1rem; border-radius: 1rem; display: flex; gap: 1rem; align-items: flex-start;">
                        <i data-lucide="sparkles" style="color: var(--primary); margin-top: 4px;"></i>
                        <div>
                            <p style="font-weight: 600; color: #9f1239; margin-bottom: 0.25rem;">Why this works?</p>
                            <p style="font-size: 0.875rem; color: #881337;">The ${state.selectedColor} color complements your ${state.attributes.skinTone} undertone, making your skin look radiant.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// --- CORE APP LOGIC ---

function render() {
    // Update Reset Button
    if (state.step === "gender" || state.step === "history") resetBtn.classList.add("hidden");
    else resetBtn.classList.remove("hidden");

    // Render View
    if (state.step === "gender") appElement.innerHTML = renderGender();
    else if (state.step === "upload") appElement.innerHTML = renderUpload();
    else if (state.step === "analyzing") appElement.innerHTML = renderAnalyzing();
    else if (state.step === "verify") appElement.innerHTML = renderVerify();
    else if (state.step === "results") {
        appElement.innerHTML = renderResults();
        // Save to history when results are shown (only once)
        if (!state.savedToHistory) {
            saveAnalysisToHistory();
            state.savedToHistory = true;
        }
    } else if (state.step === "tryon") appElement.innerHTML = renderTryOn();
    else if (state.step === "history") appElement.innerHTML = renderHistory();

    // Re-initialize Icons
    lucide.createIcons();

    // Attach Listeners
    if (state.step === "upload") attachUploadListeners();
    if (state.step === "analyzing") startAnalysisSimulation();
}

// Event Listeners
resetBtn.addEventListener("click", resetApp);

function attachUploadListeners() {
    const dropZone = document.getElementById("dropZone");
    const fileInput = document.getElementById("fileInput");

    dropZone.onclick = () => fileInput.click();

    dropZone.ondragover = (e) => {
        e.preventDefault();
        dropZone.classList.add("active");
    };

    dropZone.ondragleave = () => {
        dropZone.classList.remove("active");
    };

    dropZone.ondrop = (e) => {
        e.preventDefault();
        dropZone.classList.remove("active");
        const file = e.dataTransfer.files[0];
        handleFile(file);
    };

    fileInput.onchange = (e) => {
        const file = e.target.files[0];
        handleFile(file);
    };
}

function handleFile(file) {
    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) =>
            updateState({
                step: "analyzing",
                image: e.target.result
            });
        reader.readAsDataURL(file);
    }
}

async function startAnalysisSimulation() {
    let progress = 0;
    const bar = document.getElementById("progressBar");
    const text = document.getElementById("progressText");
    const msg = document.getElementById("scanMessage");

    // Simple simulated analysis (no AI)
    const timer = setInterval(() => {
        progress += 1;
        if (bar) bar.style.width = `${progress}%`;
        if (text) text.innerText = `${progress}% Complete`;

        if (progress < 30 && msg) msg.innerText = "Detecting silhouette...";
        else if (progress < 60 && msg)
            msg.innerText = "Analyzing facial geometry...";
        else if (progress < 90 && msg)
            msg.innerText = "Determining skin undertones...";
        else if (msg) msg.innerText = "Finalizing profile...";

        if (progress >= 100) {
            clearInterval(timer);
            // Simulate random analysis results
            const bodyShapes = ["hourglass", "pear", "apple", "rectangle", "inverted_triangle"];
            const faceShapes = ["oval", "round", "square", "heart", "diamond"];
            const skinTones = ["warm", "cool", "neutral"];

            state.attributes.bodyShape = bodyShapes[Math.floor(Math.random() * bodyShapes.length)];
            state.attributes.faceShape = faceShapes[Math.floor(Math.random() * faceShapes.length)];
            state.attributes.skinTone = skinTones[Math.floor(Math.random() * skinTones.length)];

            setTimeout(() => updateState({
                step: "verify"
            }), 600);
        }
    }, 30);
}

// Global functions for inline HTML events
window.selectGender = (gender) => {
    state.gender = gender;
    state.step = "upload";
    render();
};

window.updateAttribute = (key, value) => {
    state.attributes[key] = value;
    render();
};

window.startTryOn = (color) => {
    state.selectedColor = color;
    state.step = "tryon";
    render();
};

window.changeTryOnColor = (color) => {
    state.selectedColor = color;
    render();
};

window.adjustTryOn = (delta) => {
    const newScale = Math.max(0.5, state.tryOn.scale + delta);
    state.tryOn.scale = newScale;
    const overlay = document.getElementById("dressOverlay");
    if (overlay) {
        overlay.style.transform = `translate(-50%, -50%) translate(${state.tryOn.x}px, ${state.tryOn.y}px) scale(${newScale})`;
    }
};

window.updateOccasion = (occasion) => {
    state.occasion = occasion;
    render();
};

window.updateSeason = (season) => {
    state.season = season;
    render();
};

window.downloadResults = () => {
    const recs = RECOMMENDATION_ENGINE[state.gender][state.attributes.bodyShape];
    const colors = COLOR_PALETTES[state.attributes.skinTone];

    const text = `
╔══════════════════════════════════════════╗
║        STYLEAI FASHION REPORT            ║
╚══════════════════════════════════════════╝

👤 PROFILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Gender: ${state.gender.toUpperCase()}
Body Shape: ${state.attributes.bodyShape.replace("_", " ").toUpperCase()}
Face Shape: ${state.attributes.faceShape.toUpperCase()}
Skin Tone: ${state.attributes.skinTone.toUpperCase()}
Occasion: ${state.occasion.toUpperCase()}
Season: ${state.season.toUpperCase()}

👕 RECOMMENDED TOPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${recs.tops}

👖 RECOMMENDED BOTTOMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${recs.bottoms}

👗 RECOMMENDED DRESSES/OUTFITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${recs.dresses}

❌ STYLES TO AVOID
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${recs.avoid}

💡 STYLING TIP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${recs.tip}

✨ EASY OUTFIT IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${recs.easyOutfit}

🎨 YOUR POWER COLORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Best Colors: ${colors.best.join(", ")}
Avoid: ${colors.avoid.join(", ")}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generated by StyleAI - Your Personal Fashion Assistant
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();

    const blob = new Blob([text], {
        type: 'text/plain'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `StyleAI-Report-${state.gender}-${state.attributes.bodyShape}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert('✅ Your fashion report has been downloaded!');
};

window.shareResults = () => {
    const recs = RECOMMENDATION_ENGINE[state.gender][state.attributes.bodyShape];

    const shareText = `🎨 My StyleAI Fashion Profile!\n\n` +
        `Body Shape: ${state.attributes.bodyShape.replace("_", " ")}\n` +
        `Face Shape: ${state.attributes.faceShape}\n` +
        `Skin Tone: ${state.attributes.skinTone}\n` +
        `Occasion: ${state.occasion}\n` +
        `Season: ${state.season}\n\n` +
        `💡 Tip: ${recs.tip}\n\n` +
        `✨ ${recs.easyOutfit}\n\n` +
        `Get your personalized fashion recommendations at StyleAI!`;

    if (navigator.share) {
        navigator.share({
            title: 'My StyleAI Fashion Profile',
            text: shareText,
        }).then(() => {
            console.log('Shared successfully');
        }).catch((error) => {
            console.log('Share failed:', error);
            copyToClipboard();
        });
    } else {
        copyToClipboard();
    }
};

window.copyToClipboard = () => {
    const recs = RECOMMENDATION_ENGINE[state.gender][state.attributes.bodyShape];
    const colors = COLOR_PALETTES[state.attributes.skinTone];

    const text = `🎨 MY STYLEAI FASHION PROFILE\n\n` +
        `👤 Profile: ${state.gender} | ${state.attributes.bodyShape.replace("_", " ")} | ${state.attributes.faceShape} face | ${state.attributes.skinTone} undertone\n` +
        `📅 Occasion: ${state.occasion} | Season: ${state.season}\n\n` +
        `👕 Tops: ${recs.tops}\n\n` +
        `👖 Bottoms: ${recs.bottoms}\n\n` +
        `👗 Dresses: ${recs.dresses}\n\n` +
        `❌ Avoid: ${recs.avoid}\n\n` +
        `💡 Tip: ${recs.tip}\n\n` +
        `✨ ${recs.easyOutfit}\n\n` +
        `🎨 Best Colors: ${colors.best.join(", ")}`;

    navigator.clipboard.writeText(text).then(() => {
        alert('✅ Copied to clipboard! You can now paste it anywhere.');
    }).catch(() => {
        alert('❌ Could not copy to clipboard. Please try again.');
    });
};

window.viewHistory = () => {
    state.step = 'history';
    render();
};

// Initial Render
render();