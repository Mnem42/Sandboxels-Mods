function decay(ms) {
return 1/(Math.pow(Math.log10(ms*30+1),2)*10);
}

elements.alpha_particle = {
color: "#ff87fd",
behavior: [
["M1","M1","M1"],
["M1","EX%50:3>electric","M1"],
["M1","M1","M1"],
],
category: "particles",
state: "gas"
},
elements.beta_minus_particle = {
color: "#4338e0",
behavior: [
"M1|M1|M1",
"M1|EX%15:2>electric|M1",
"M1|M1|M1",
],
reactions: {
"beta_plus_particle": {elem1:"gamma_ray", elem2: "gamma_ray"}
},
category: "particles",
state: "gas"
},
elements.electron_antineutrino = {
color: "#877ff0",
behavior: [
"M1|M1|M1",
"M1|XX|M1",
"M1|M1|M1",
],
category: "particles",
state: "gas"
},
elements.beta_plus_particle = {
color: "#e0d838",
behavior: [
"M1|M1|M1",
"M1|EX%15:2>electric|M1",
"M1|M1|M1",
],
category: "particles",
state: "gas"
},
elements.electron_neutrino = {
color: "#d7f27c",
behavior: behaviors.BOUNCY,
category: "particles",
state: "gas"
},
elements.gamma_ray = {
color: "#faf20a",
behavior: behaviors.BOUNCY,
category: "particles",
state: "gas"
},

elements.alpha_generator = {
color: "#5c135b",
behavior: behaviors.WALL,
tick: function(pixel) {
if (Math.random() > 0.995) {
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactivity_generator",
state: "solid"
},
elements.beta_minus_generator = {
color: "#8645ff",
behavior: behaviors.WALL,
tick: function(pixel) {
if (Math.random() > 0.995) {
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactivity_generator",
state: "solid"
},
elements.beta_plus_generator = {
color: "#c7ff45",
behavior: behaviors.WALL,
tick: function(pixel) {
if (Math.random() > 0.995) {
releaseElement(pixel, "beta_plus_particle");
releaseElement(pixel, "electron_neutrino");
}
},
category: "radioactivity_generator",
state: "solid"
},
elements.gamma_generator = {
color: "#f05d02",
behavior: behaviors.WALL,
tick: function(pixel) {
if (Math.random() > 0.995) {
releaseElement(pixel, "gamma_ray");
}
},
category: "radioactivity_generator",
state: "solid"
},

//Thorium series
elements.californium_252 = {
color: "#f013f0",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(2.645*365*24*60*60*1000)) {
changePixel(pixel, "curium_247");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.curium_248 = {
color: "#3e0ecf",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(3.48e5*365*24*60*60*1000)) {
changePixel(pixel, "plutonium_244");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.plutonium_244 = {
color: "#a7a3b5",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(8.13e7*365*24*60*60*1000)) {
changePixel(pixel, "uranium_240");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.uranium_240 = {
color: "#06db02",
behavior: behaviors.POWDER,
tick: function(pixel){
if (Math.random() < decay(14.1*60*60*1000)) {
changePixel(pixel, "neptunium_240m");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},
elements.neptunium_240m = {
color: "#2e0078",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(7.22*60*1000)) {
if (Math.random() < 0.0012) {
changePixel(pixel, "neptunium_240");
releaseElement(pixel, "gamma_ray");
} else {
changePixel(pixel, "plutonium_240");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
}
},
category: "radioactive",
state: "solid"
},
elements.neptunium_240 = {
color: "#2e0078",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(61.9*60*1000)) {
changePixel(pixel, "plutonium_240");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},
elements.plutonium_240 = {
color: "#a7a3b5",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(6561*365*24*60*60*1000)) {
changePixel(pixel, "uranium_236");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.uranium_236 = {
color: "#06db02",
behavior: behaviors.POWDER,
tick: function(pixel){
if (Math.random() < decay(2.342e7*365*24*60*60*1000)) {
changePixel(pixel, "thorium_232");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.thorium_232 = {
color: "#1de9f0",
behavior: behaviors.POWDER,
tick: function(pixel){
if (Math.random() < decay(1.40e10*365*24*60*60*1000)) {
changePixel(pixel, "radium_228");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.radium_228 = {
color: "#0eed0e",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(5.75*365*24*60*60*1000)) {
changePixel(pixel, "actinium_228");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},
elements.actinium_228 = {
color: "#0b8f4b",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(6.15*60*60*1000)) {
changePixel(pixel, "thorium_228");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},
elements.thorium_228 = {
color: "#1de9f0",
behavior: behaviors.POWDER,
tick: function(pixel){
if (Math.random() < decay(1.9125*365*24*60*60*1000)) {
changePixel(pixel, "radium_224");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.radium_224 = {
color: "#0eed0e",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(3.63224*60*60*1000)) {
changePixel(pixel, "radon_220");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.radon_220 = {
color: "#7ffa7f",
behavior: behaviors.GAS,
tick: function(pixel) {
if (Math.random() < decay(55.6*1000)) {
changePixel(pixel, "polonium_216");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "gas"
},
elements.polonium_216 = {
color: "#dcf007",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(144)) {
changePixel(pixel, "lead_212");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.lead_212 = {
color: "#9a9a9c",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(10.627*60*60*1000)) {
changePixel(pixel, "bismuth_212");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},
elements.bismuth_212 = {
color: "#00ff91",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(60.55*60*1000)) {
if (Math.random() > 0.6406) {
changePixel(pixel, "thallium_208");
releaseElement(pixel, "alpha_particle");
} else {
changePixel(pixel, "polonium_212");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
}
},
category: "radioactive",
state: "solid"
},
elements.polonium_212 = {
color: "#dcf007",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(294.4/1000000)) {
changePixel(pixel, "lead");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.thallium_208 = {
color: "#26780d",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(3.053*60*1000)) {
changePixel(pixel, "lead");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},


//Actinium series
elements.californium_251 = {
color: "#f013f0",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(900*365*24*60*60*1000)) {
changePixel(pixel, "curium_247");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.curium_247 = {
color: "#3e0ecf",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(1.56e7*365*24*60*60*1000)) {
changePixel(pixel, "plutonium_243");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.plutonium_243 = {
color: "#a7a3b5",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(4.955*60*60*1000)) {
changePixel(pixel, "americium_243");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},
elements.americium_243 = {
color: "#f5c9ce",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(7350*365*24*60*60*1000)) {
changePixel(pixel, "neptunium_239");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.neptunium_239 = {
color: "#2e0078",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(2.356*24*60*60*1000)) {
changePixel(pixel, "plutonium_239");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},
elements.plutonium_239 = {
color: "#a7a3b5",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(2.411e4*365*24*60*60*1000)) {
changePixel(pixel, "uranium_235");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.uranium_235 = {
color: "#06db02",
behavior: behaviors.POWDER,
tick: function(pixel){
if (Math.random() < decay(7.04e8*365*24*60*60*1000)) {
changePixel(pixel, "thorium_231");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.thorium_231 = {
color: "#1de9f0",
behavior: behaviors.POWDER,
tick: function(pixel){
if (Math.random() < decay(25.52*60*60*1000)) {
changePixel(pixel, "protactinium_231");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},
elements.protactinium_231 = {
color: "#16f582",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(3.27e4*365*24*60*60*1000)) {
changePixel(pixel, "actinium_227");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.actinium_227 = {
color: "#0b8f4b",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(21.772*365*24*60*60*1000)) {
if (Math.random() < 0.9862) {
changePixel(pixel, "thorium_227");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
} else {
changePixel(pixel, "francium_223");
releaseElement(pixel, "alpha_particle");
}
}
},
category: "radioactive",
state: "solid"
},
elements.thorium_227 = {
color: "#1dd9f0",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(18.693*24*60*60*1000)) {
changePixel(pixel, "radium_223");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.francium_223 = {
color: "#ed370e",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(22*60*1000)) {
if (Math.random() < 0.99994) {
changePixel(pixel, "radium_223");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
} else {
changePixel(pixel, "astatine_219");
releaseElement(pixel, "alpha_particle");
}
}
},
category: "radioactive",
state: "solid"
},
elements.radium_223 = {
color: "#0eed0e",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(11.435*24*60*60*1000)) {
changePixel(pixel, "radon_219");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.astatine_219 = {
color: "#57524f",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(56*1000)) {
if (Math.random() < 0.936) {
changePixel(pixel, "bismuth_215");
releaseElement(pixel, "alpha_particle");
} else {
changePixel(pixel, "radon_219");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
}
},
category: "radioactive",
state: "solid"
},
elements.radon_219 = {
color: "#7ffa7f",
behavior: behaviors.GAS,
tick: function(pixel) {
if (Math.random() < decay(3.96*1000)) {
changePixel(pixel, "polonium_215");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "gas"
},
elements.bismuth_215 = {
color: "#00ff91",
behavior: behaviors.POWDER,
tick: function(pixel) {
if(Math.random() < decay(7.6*60*1000)) {
changePixel(pixel, "polonium_215");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},
elements.polonium_215 = {
color: "#dcf007",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(1.781)) {
if (Math.random() < 0.9999977) {
changePixel(pixel, "lead_211");
releaseElement(pixel, "alpha_particle");
} else {
changePixel(pixel, "astatine_215");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
}
},
category: "radioactive",
state: "solid"
},
elements.astatine_215 = {
color: "#57524f",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(37/1000)) {
changePixel(pixel, "bismuth_211");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.lead_211 = {
color: "#9a9a9c",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(36.16*60*1000)) {
changePixel(pixel, "bismuth_211");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},
elements.bismuth_211 = {
color: "#00ff91",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(2.14*60*1000)) {
if (Math.random() < 0.99724) {
changePixel(pixel, "thallium_207");
releaseElement(pixel, "alpha_particle");
} else {
changePixel(pixel, "polonium_211");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
}
},
category: "radioactive",
state: "solid"
},
elements.thallium_207 = {
color: "#26780d",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(4.77*60*1000)) {
changePixel(pixel, "lead");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},
elements.polonium_211 = {
color: "#dcf007",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(516)) {
changePixel(pixel, "lead");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},

//Uranium series
elements.californium_250 = {
color: "#f013f0",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(13.08*365*24*60*60*1000)) {
changePixel(pixel, "curium_246");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.curium_246 = {
color: "#3e0ecf",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(4760*365*24*60*60*1000)) {
changePixel(pixel, "plutonium_242");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.plutonium_242 = {
color: "#a7a3b5",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(3.75e5*365*24*60*60*1000)) {
changePixel(pixel, "uranium_238");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.uranium_238 = {
color: "#06db02",
behavior: behaviors.POWDER,
tick: function(pixel){
if (Math.random() < decay(4.463e9*365*24*60*60*1000)) {
changePixel(pixel, "thorium_234");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.thorium_234 = {
color: "#1de9f0",
behavior: behaviors.POWDER,
tick: function(pixel){
if (Math.random() < decay(24.11*24*60*60*1000)) {
changePixel(pixel, "protactinium_234m");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},
elements.protactinium_234m = {
color: "#16f582",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(1.16*60*1000)) {
if (Math.random() < 0.0016) {
changePixel(pixel, "protactinium_234");
releaseElement(pixel, "gamma_ray");
} else {
changePixel(pixel, "uranium_234");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
}
},
category: "radioactive",
state: "solid"
},
elements.protactinium_234 = {
color: "#16f582",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(6.7*60*60*1000)) {
changePixel(pixel, "uranium_234");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},
elements.uranium_234 = {
color: "#06db02",
behavior: behaviors.POWDER,
tick: function(pixel){
if (Math.random() < decay(2.455e5*365*24*60*60*1000)) {
changePixel(pixel, "thorium_230");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.thorium_230 = {
color: "#1de9f0",
behavior: behaviors.POWDER,
tick: function(pixel){
if (Math.random() < decay(7.45e4*365*24*60*60*1000)) {
changePixel(pixel, "radium_226");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.radium_226 = {
color: "#0eed0e",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(1600*365*24*60*60*1000)) {
changePixel(pixel, "radon_222");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.radon_222 = {
color: "#7ffa7f",
behavior: behaviors.GAS,
tick: function(pixel) {
if (Math.random() < decay(3.8215*24*60*60*1000)) {
changePixel(pixel, "polonium_218");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "gas"
},
elements.polonium_218 = {
color: "#dcf007",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(3.097*60*1000)) {
if (Math.random() < 0.9998) {
changePixel(pixel, "lead_214");
releaseElement(pixel, "alpha_particle");
} else {
changePixel(pixel, "astatine_218");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
}
},
category: "radioactive",
state: "solid"
},
elements.astatine_218 = {
color: "#57524f",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(1.28*1000)) {
if (Math.random() < 0.9999) {
changePixel(pixel, "bismuth_214");
releaseElement(pixel, "alpha_particle");
} else {
changePixel(pixel, "radon_218");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
}
},
category: "radioactive",
state: "solid"
},
elements.radon_218 = {
color: "#7ffa7f",
behavior: behaviors.GAS,
tick: function(pixel) {
if (Math.random() < decay(33.75)) {
changePixel(pixel, "polonium_214");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "gas"
},
elements.lead_214 = {
color: "#9a9a9c",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(27.06*60*1000)) {
changePixel(pixel, "bismuth_214");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},
elements.bismuth_214 = {
color: "#00ff91",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(19.9*60*1000)) {
if (Math.random() < 0.99979) {
changePixel(pixel, "polonium_214");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
} else {
changePixel(pixel, "thallium_210");
releaseElement(pixel, "alpha_particle");
}
}
},
category: "radioactive",
state: "solid"
},
elements.polonium_214 = {
color: "#dcf007",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(0.1635)) {
changePixel(pixel, "lead_210");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.thallium_210 = {
color: "#26780d",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(1.30*60*1000)) {
if (Math.random() > 0.00009) {
changePixel(pixel, "lead_210");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
} else {
changePixel(pixel, "lead_209"); //this goes with the Np series which is later
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
releaseElement(pixel, "neutron");
}
}
},
category: "radioactive",
state: "solid"
},
elements.lead_210 = {
color: "#9a9a9c",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(22.2*365*24*60*60*1000)) {
if (Math.random() > 1.9e-6*0.01) {
changePixel(pixel, "bismuth_210");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
} else {
changePixel(pixel, "mercury_206");
releaseElement(pixel, "alpha_particle");
}
}
},
category: "radioactive",
state: "solid"
},
elements.bismuth_210 = {
color: "#00ff91",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(5.012*24*60*60*1000)) {
if (Math.random() > 1.32e-4*0.01) {
changePixel(pixel, "polonium_210");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
} else {
changePixel(pixel, "thallium_206");
releaseElement(pixel, "alpha_particle");
}
}
},
category: "radioactive",
state: "solid"
},
elements.polonium_210 = {
color: "#dcf007",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(138.376*24*60*60*1000)) {
changePixel(pixel, "lead");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.mercury_206 = {
color: "#c2bcbc",
behavior: behaviors.LIQUID,
tick: function(pixel) {
if (Math.random() < decay(8.32*60*1000)) {
changePixel(pixel, "thallium_206");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "liquid"
},
elements.thallium_206 = {
color: "#26780d",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(4.20*60*1000)) {
changePixel(pixel, "lead");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},

//Neptunium series
elements.californium_249 = {
color: "#f013f0",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(351*365*24*60*60*1000)) {
changePixel(pixel, "curium_245");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.curium_245 = {
color: "#3e0ecf",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(8250*365*24*60*60*1000)) {
changePixel(pixel, "plutonium_241");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.plutonium_241 = {
color: "#a7a3b5",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(14.33*365*24*60*60*1000)) {
if (Math.random() < 0.999975) {
changePixel(pixel, "americium_241");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
} else {
changePixel(pixel, "uranium_237");
releaseElement(pixel, "alpha_particle");
}
}
},
category: "radioactive",
state: "solid"
},
elements.americium_241 = {
color: "#f5c9ce",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(432.6*365*24*60*60*1000)) {
changePixel(pixel, "neptunium_237");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.uranium_237 = {
color: "#06db02",
behavior: behaviors.POWDER,
tick: function(pixel){
if (Math.random() < decay(6.752*24*60*60*1000)) {
changePixel(pixel, "neptunium_237");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},
elements.neptunium_237 = {
color: "#2e0078",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(2.144e6*365*24*60*60*1000)) {
changePixel(pixel, "protactinium_233");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.protactinium_233 = {
color: "#16f582",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(26.98*24*60*60*1000)) {
changePixel(pixel, "uranium_233");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},
elements.uranium_233 = {
color: "#06db02",
behavior: behaviors.POWDER,
tick: function(pixel){
if (Math.random() < decay(1.592e5*365*24*60*60*1000)) {
changePixel(pixel, "thorium_229");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.thorium_229 = {
color: "#1dd9f0",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(7920*365*24*60*60*1000)) {
changePixel(pixel, "radium_225");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.radium_225 = {
color: "#0eed0e",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(14.8*24*60*60*1000)) {
if (Math.random() < 0.999974) {
changePixel(pixel, "actinium_225");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
} else {
changePixel(pixel, "radon_221");
releaseElement(pixel, "alpha_particle");
}
}
},
category: "radioactive",
state: "solid"
},
elements.actinium_225 = {
color: "#0b8f4b",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(9.919*24*60*60*1000)) {
changePixel(pixel, "francium_221");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.radon_221 = {
color: "#7ffa7f",
behavior: behaviors.GAS,
tick: function(pixel) {
if (Math.random() < decay(25.7*60*1000)) {
if (Math.random() < 0.78) {
changePixel(pixel, "francium_221");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
} else {
changePixel(pixel, "polonium_217");
releaseElement(pixel, "alpha_particle");
}
}
},
category: "radioactive",
state: "gas"
},
elements.francium_221 = {
color: "#ed370e",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(4.801*60*1000)) {
if (Math.random() < 0.999952) {
changePixel(pixel, "astatine_217");
releaseElement(pixel, "alpha_particle");
} else {
changePixel(pixel, "radium_221");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
}
},
category: "radioactive",
state: "solid"
},
elements.radium_221 = {
color: "#0eed0e",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(25*1000)) {
changePixel(pixel, "radon_217");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.polonium_217 = {
color: "#dcf007",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(1.53*1000)) {
if (Math.random() < 0.975) {
changePixel(pixel, "lead_213");
releaseElement(pixel, "alpha_particle");
} else {
changePixel(pixel, "astatine_217");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
}
},
category: "radioactive",
state: "solid"
},
elements.astatine_217 = {
color: "#57524f",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(32.6)) {
if (Math.random() < 0.99992) {
changePixel(pixel, "bismuth_213");
releaseElement(pixel, "alpha_particle");
} else {
changePixel(pixel, "radon_217");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
}
},
category: "radioactive",
state: "solid"
},
elements.radon_217 = {
color: "#7ffa7f",
behavior: behaviors.GAS,
tick: function(pixel) {
if (Math.random() < decay(0.590)) {
changePixel(pixel, "polonium_213");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "gas"
},
elements.lead_213 = {
color: "#9a9a9c",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(10.2*60*1000)) {
changePixel(pixel, "bismuth_213");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},
elements.bismuth_213 = {
color: "#00ff91",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(45.6*60*1000)) {
if (Math.random() < 0.9791) {
changePixel(pixel, "polonium_213");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
} else {
changePixel(pixel, "thallium_209");
releaseElement(pixel, "alpha_particle");
}
}
},
category: "radioactive",
state: "solid"
},
elements.polonium_213 = {
color: "#dcf007",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(3.705/1000)) {
changePixel(pixel, "lead_209");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.thallium_209 = {
color: "#26780d",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(2.162*60*1000)) {
changePixel(pixel, "lead_209");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},
elements.lead_209 = {
color: "#9a9a9c",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(3.235*60*60*1000)) {
changePixel(pixel, "bismuth_209");
releaseElement(pixel, "beta_minus_particle");
releaseElement(pixel, "electron_antineutrino");
}
},
category: "radioactive",
state: "solid"
},
elements.bismuth_209 = {
color: "#00ff91",
behavior: behaviors.POWDER,
tick: function(pixel) {
if (Math.random() < decay(2.01e19*365*24*60*60*1000)) {
changePixel(pixel, "thallium");
releaseElement(pixel, "alpha_particle");
}
},
category: "radioactive",
state: "solid"
},
elements.thallium = {
color: "#26780d",
behavior: behaviors.WALL,
category: "solids",
state: "solid"
}