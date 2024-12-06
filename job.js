import * as items from './items.js'
const allJobs = [{
    warrior: {
        health: 20,
        strength: 10,
        intelligence: 5,
        dexterity: 5,
        items: [
            items.weapons[0],
            items.armors[1]
        ]
    }
},
{
    wisard: {
        health: 10,
        strength: 5,
        intelligence: 20,
        dexterity: 10,
        items: [
            items.weapons[1],
            items.armors[0]
        ]
    }
}]
function jobStatsDisplay(job) {
    const isJob = allJobs.find(r => r[job])
    if (isJob) {
        const { health, strength, intelligence, dexterity, items } = isJob[job];
        return `Health: ${health}
Strenght: ${strength}
Intelligence: ${intelligence}
Dexterity: ${dexterity}
Items:
${detectObject(items)}`
    } else
        console.log("Error")
}

export {
    allJobs,
    jobStatsDisplay
}


function detectObject(obj) {
    let result = ''
    for (let i = 0; i < obj.length; i++) {
        if ('power' in obj[i]) {
            result += `Name: ${obj[i].name}
Type: ${obj[i].type}
Power: ${obj[i].power}
Strength Requirement: ${obj[i].strReq}
Intelligence Requirement: ${obj[i].intReq}
Dexterity Requirement: ${obj[i].dexReq}

`;
        } else if ('protection' in obj[i]) {
            result += `Name: ${obj[i].name}
Type: ${obj[i].type}
Protection: ${obj[i].protection}
Strength Requirement: ${obj[i].strReq}
Intelligence Requirement: ${obj[i].intReq}
Dexterity Requirement: ${obj[i].dexReq}

`;
        } else {
            result += 'unknown'; // Not found in either array
        }
    }
    return result
}

//console.log(jobStatsDisplay("warrior"))
//console.log(detectObject(warrior.items))