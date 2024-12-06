const allRaces = [{
    human: {
        health: 10,
        strength: 5,
        intelligence: 10,
        dexterity: 10,
    }
},
{
    elf: {
        health: 5,
        strength: 0,
        intelligence: 15,
        dexterity: 15,
    }
}]
function raceStatsDisplay(race) {
    const isRace = allRaces.find(r => r[race])
    if (isRace) {
        const { health, strength, intelligence, dexterity } = isRace[race];
        return `Health: ${health}\nStrenght: ${strength}\nIntelligence: ${intelligence}\nDexterity: ${dexterity}`
    } else
        console.log("Error")
}
export {
    allRaces,
    raceStatsDisplay
}
//console.log(raceStatsDisplay('elf'))
//console.log("human")