import { allJobs } from "./job.js";
import { allRaces } from "./race.js";

function player(race, raceId, job, jobId) {
    let returnedRace = {}
    let returnedJob = {}
    for (const entry of race) {
        if (entry[raceId]) {
            returnedRace = { ...entry[raceId] }
            break
        }
    }
    for (const entry of job) {
        if (entry[jobId]) {
            returnedJob = { ...entry[jobId] }
            break
        }
    }
    for (const key in returnedRace) {
        if (key in returnedJob) {
            returnedJob[key] += returnedRace[key];
        } else {
            returnedJob[key] = returnedRace[key];
        }
    }
    console.log(returnedJob)
}
function displayStats() {
    return `Health: 
Strenght: 
Intelligence: 
Dexterity: 
Items:`
}
export {
    player,
    displayStats
}
//player(allRaces, "human", allJobs, "warrior")