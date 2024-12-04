import * as jobs from './job.js';
import * as races from './race.js';
import { player } from './hero.js';

const tooltip = document.getElementById("tooltip")
const buttons = document.querySelectorAll(".hoverButton");



function showTooltip(tooltipType, tooltipId) {
    const tooltip = document.getElementById('tooltip');
    let tooltipText = ``;

    if (tooltipType === 'race') {
        tooltipText = races.raceStatsDisplay(tooltipId)
    } else if (tooltipType === 'job') {
        tooltipText = jobs.jobStatsDisplay(tooltipId)
    }

    // Set tooltip text dynamically
    tooltip.textContent = tooltipText;

}

buttons.forEach(button => {
    button.addEventListener("mouseover", function () {

        tooltip.style.display = "block";
        const tooltipType = button.getAttribute('data-tooltip-type');
        const tooltipId = this.id;
        showTooltip(tooltipType, tooltipId);


        const rect = button.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.bottom + window.scrollY}px`;
    });

    button.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });
});

function changeButtonColor(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.backgroundColor = "red";
}
function resetButtonColors(buttonGroupId) {
    const buttons = document.querySelectorAll(`#${buttonGroupId} button`);
    buttons.forEach(button => {
        button.style.backgroundColor = "";
    });
}

let race = null
let job = null

document.getElementById('human').addEventListener('click', () => {
    race = races.human
    resetButtonColors('group1');
    changeButtonColor('human')
})
document.getElementById('elf').addEventListener('click', () => {
    race = races.elf
    resetButtonColors('group1');
    changeButtonColor('elf')
})
document.getElementById('warrior').addEventListener('click', () => {
    job = jobs.warrior
    resetButtonColors('group2');
    changeButtonColor('warrior')
})
document.getElementById('wisard').addEventListener('click', () => {
    job = jobs.wisard
    resetButtonColors('group2');
    changeButtonColor('wisard')
})
document.getElementById('finish').addEventListener('click', () => {
    player(race, job)
})
