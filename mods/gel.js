behaviors.GEL = function(pixel) {
    let x = pixel.x
    let y = pixel.y

    tryMove(pixel, x, y+1)

    doDefaults(pixel)
}

elements.gel = {
    color: "#f7c472",
    behavior: behaviors.GEL,
    category: "liquids",
    state: "liquid",
    tempHigh: 600,
    stateHigh: "gel_gas",
    tempLow: -100,
    stateLow: "gel_ice",
    density: 1450,
    stain: 0.05,
    viscosity: 5000,
}

elements.gel_ice = {
    color: "#fad38c",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: -95,
    stateHigh: "gel",
    density: 917,
}

elements.gel_gas = {
    color: "#f0a418",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    tempLow: 595,
    stateLow: "gel",
    density: 0.6,
}
