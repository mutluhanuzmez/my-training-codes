import { read, write } from './file-ops.js';

console.log('STARTED...');

class Skill {
    category;
    level;
}

class Contributor {
    name;
    numberOfSkills = 0;
    skills = [];
    availableTime = 0;
}

class Project {
    name;
    duration;
    score;
    bestBefore;
    numberOfRequiredSkills = 0;
    requiredSkills = [];
    assignedContributors = [];
    assignedContributorsSet = new Set();
}

function compare( a, b ) {
    const a_time = a.bestBefore+a.score-a.duration;
    const b_time = b.bestBefore+b.score-b.duration;
    if ( a_time < b_time ){
      return -1;
    }
    if ( a_time > b_time ){
      return 1;
    }
    return 0;
  }

class Problem {
    numberOfContributors = 0;
    numberOfProjects = 0;
    allSkillSetOfContributors = new Set();
    activeSkillSet;
    contributors = [];
    projects =  [];

    constructor(problemLines) {
        let tempLines = problemLines;

        let line = tempLines.shift();
        let lineSplit = line.split(' ');
        this.numberOfContributors = parseInt(lineSplit[0]);
        this.numberOfProjects = parseInt(lineSplit[1]);

        for(let i = 0 ; i < this.numberOfContributors; i++) {
            let contributor = new Contributor();

            let cLine = tempLines.shift();
            let cLineSplit = cLine.split(' ');

            contributor.name = cLineSplit[0];
            contributor.numberOfSkills = parseInt(cLineSplit[1]);

            for(let j = 0; j < contributor.numberOfSkills; j++){
                let skill = new Skill();
                let sLine = tempLines.shift();
                let sLineSplit = sLine.split(' ');

                skill.category = sLineSplit[0];
                skill.level = parseInt(sLineSplit[1]);

                this.allSkillSetOfContributors.add(skill.category);

                contributor.skills.push(skill);
            }

            this.contributors.push(contributor);
        }

        for(let i = 0 ; i < this.numberOfProjects; i++) {
            let project = new Project();

            let pLine = tempLines.shift();
            let pLineSplit = pLine.split(' ');

            project.name = pLineSplit[0];
            project.duration = parseInt(pLineSplit[1]);
            project.score = parseInt(pLineSplit[2]);
            project.bestBefore = parseInt(pLineSplit[3]);
            project.numberOfRequiredSkills = parseInt(pLineSplit[4]);

            for(let j = 0; j < project.numberOfRequiredSkills; j++){
                let skill = {};
                let sLine = tempLines.shift();
                let sLineSplit = sLine.split(' ');

                skill.category = sLineSplit[0];
                skill.level = parseInt(sLineSplit[1]);

                project.requiredSkills.push(skill);
            }
            this.projects.push(project);
        }
        this.activeSkillSet = this.allSkillSetOfContributors;

        this.projects.sort(compare);
        //console.log(this.projects);
    }

    solver(){
        let result = []

        let currentProject;
        let skillCheck;

        // console.log(this.contributors);

        for(let i = 0; i < this.projects.length; i++){
            let plannedProject;
            // console.log(this.projects);
            currentProject = this.projects[i];
            // skillCheck = true; 
            // for (let j = 0; j < currentProject.numberOfRequiredSkills; j++) {
            //     if(!this.activeSkillSet.has(currentProject.skills[j])){
            //         skillCheck = false;
            //     }
            // }
            // if(!skillCheck){
            //     continue;
            // }
            let skillCheck = true;
            for(let j = 0; j < currentProject.numberOfRequiredSkills; j++) {
                let currentSkill = currentProject.requiredSkills[j];
                let findC = this.findAvailableContributor(currentSkill, (currentProject.bestBefore+currentProject.score)-currentProject.duration, this.projects[i].assignedContributorsSet);
                if(findC == -1){
                    skillCheck = false;
                    break;
                }else{
                    if(currentSkill.level >= this.contributors[findC].level){
                        this.contributors[findC].level = this.contributors[findC].level+1;
                    }
                    this.projects[i].assignedContributorsSet.add(findC);
                    this.projects[i].assignedContributors.push(findC);
                }
            }
            if(!skillCheck){
                continue;
            }

            let maxAvailableTime = Number.MIN_SAFE_INTEGER;
            for(let j = 0; j < this.projects[i].assignedContributors.length; j++){
                if(this.projects[i].assignedContributors[j] > maxAvailableTime){
                    maxAvailableTime = this.projects[i].assignedContributors[j];
                }
            }

            for(let j = 0; j < this.projects[i].assignedContributors.length; j++){
                this.contributors[this.projects[i].assignedContributors[j]].availableTime = maxAvailableTime+this.projects[i].duration;
            }

            plannedProject = {
                name: this.projects[i].name,
                contributors: []
            }

            for(let j = 0; j < this.projects[i].assignedContributors.length; j++){
                plannedProject.contributors.push(this.contributors[this.projects[i].assignedContributors[j]].name);
            }


            result.push(plannedProject);
        }

        return result;
    }

    findAvailableContributor(skill, worstIdealStartTime, assignedContributorsSet) {

        for(let i = 0; i < this.contributors.length; i++){
            let contributor = this.contributors[i];
            if(!assignedContributorsSet.has(i)){
                if(contributor.availableTime <= worstIdealStartTime){
                    for(let j = 0; j < contributor.skills.length; j++){
                        let cSkill = contributor.skills[j];
                        if(cSkill.category == skill.category && cSkill.level >= skill.level){
                            return i;
                        }
                    }

                    assignedContributors = Array.from(assignedContributorsSet.keys());
                    for(let j = 0; j < assignedContributors.length; j++){
                        let mentor = this.contributors[assignedContributors[j]];
                        let mentorAdequate = false;
                        for(let z = 0; z < mentor.skills.length; z++){
                            let cSkill = mentor.skills[j];
                            if(cSkill.category == skill.category && cSkill.level >= skill.level){
                                mentorAdequate = true;
                            }
                        }
                        if(mentorAdequate){
                            for(let z = 0; z < contributor.skills.length; z++){
                                let cSkill = contributor.skills[z];
                                let dif = cSkill.level - skill.level;
                                if(cSkill.category == skill.category && dif <= 1){
                                    return i;
                                }
                            }
                        }
                    }

                }
            }
        }

        return -1;
    }
}


const inputPathCreator = (path) => {
    return "./input/".concat(path).concat('.in.txt');
}

const outputPathCreator = (path) => {
    return "./output/".concat(path).concat('.out.txt');
}

const solve = async () => {

    // const pathFile = 'a_an_example';
    // const pathFile = 'b_better_start_small';
    // const pathFile = 'c_collaboration';
    // const pathFile = 'd_dense_schedule';
    // const pathFile = 'e_exceptional_skills';
    const pathFile = 'f_find_great_mentors';

    const problemText = await read(inputPathCreator(pathFile));

    const problemLines = problemText.split(/\r?\n/);
    const problem = new Problem(problemLines);

    // console.log(problem.contributors);
    // console.log(problem.projects);


    // console.log(problem.allSkillSetOfContributors.keys());
    const result = problem.solver();

    // console.log(result);

    await write(result, outputPathCreator(pathFile));
    // console.log(problem.numberOfCustomers, problem.customers);
    // console.log(problem.likeMap, problem.dislikeMap);
    // console.log(problem.basicSolver());
}


await solve();