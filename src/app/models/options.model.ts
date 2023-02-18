export class Options {
    aboutMe: boolean;
    experience: boolean;
    study: boolean;
    skill: boolean;
    project: boolean;

    constructor(aboutMe: boolean, experience: boolean, study: boolean, skill: boolean, project: boolean) {
        this.aboutMe = aboutMe;
        this.experience = experience;
        this.study = study;
        this.skill = skill;
        this.project = project;
    }
}