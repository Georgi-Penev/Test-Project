const item = {
    weapon: [{ type: "sword" }, { type: "axe" }, { type: "bow" }],
    armor: [{ type: "shield" }, { type: "helmet" }]
};

const pulledItems = [item.weapon[1], item.armor[0]]; // Example of pulled items

function detectSource(pulledItem, sourceArrays) {
    for (const [key, array] of Object.entries(sourceArrays)) {
        if (array.some(obj => obj === pulledItem)) {
            return key; // Return the name of the array (e.g., "weapon" or "armor")
        }
    }
    return "unknown"; // If not found
}

// Dynamically detect the source for each pulled item
const sources = pulledItems.map(pulledItem =>
    detectSource(pulledItem, item)
);

console.log(detectSource(pulledItems, item)); // Output: ['weapon', 'armor']