(() => {
// not brought to you by hyper co.

// using a Symbol to make it impossible to accidentally overwrite something
// another mod uses
const tag_sym = Symbol("Unregistered HyperTag 2");

function patch() {
    document
        .getElementById("settingLabel-limitless")
        .parentNode
        .insertAdjacentHTML(
            "afterend",
            `<span
                setting="save_hyper"
                class="setting-span multisetting"
                title="Default: OFF"
            >
                <button
                    id="settingLabel-save_hyper"
                    class="toggleInput"
                    onclick="toggleInput(this, 'save_hyper', false)"
                    state="0"
                >
                    Save hyper
                </button>
            </span>
            <span
                setting="load_hyper"
                class="setting-span multisetting"
                title="Default: OFF"
            >
                <button
                    id="settingLabel-load_hyper"
                    class="toggleInput"
                    onclick = "toggleInput(this, 'load_hyper', false)"
                    state="0"
                >
                    Load hyper
                </button>
            </span>`,
        );
}

function isolate_hyper(pixmap) {
    // nouser thought of this algorithm
    for (const row of pixmap) {
        for (const x of row) {
            if (x) x[tag_sym] = true;
        }
    }

    const hyper = currentPixels.filter((x) => !Object.hasOwn(x, tag_sym));

    // to be a bit more hygenic, even if it *could* just make a new symbol
    // each time and leave them there
    for (const row of pixmap) {
        for (const x of row) {
            if (x) delete x[tag_sym]
        }
    }

    return hyper;
}

const gsave_old = generateSave;
window.generateSave = (pixmap, opts) => {
    const generated = gsave_old(pixmap, opts);

    if (settings.hyperpreserve) {
        generated.hyper = isolate_hyper(pixmap ?? pixelMap);
    }

    return generated;
};

const lsave_old = loadSave;
window.loadSave = (data, confirmed, skip, softLoad) => {
    lsave_old(data, confirmed, skip, softLoad)

    console.log(data.hyper)
    if (data.hyper && settings.load_hyper) {
        currentPixels.push(...data.hyper)
    }
}

runAfterLoad(patch);

})();
