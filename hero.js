import * as jobs from "./job.js";
import * as races from "./race.js";

function player(race, job) {
    const hero = { ...race }
    for (const key in job) {
        if (key in hero) {
            hero[key] += job[key];
        } else {
            hero[key] = job[key];
        }
    }
    console.log(hero)
}
export {
    player
}
//fix the logic its broken
console.log(JSON.stringify(player(races.human, jobs.warrior)))