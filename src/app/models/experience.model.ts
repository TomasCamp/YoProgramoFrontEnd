export class Experience {
    public job: string;
    public startLapse: string;
    public endLapse: string;
    public type: string;
    public companyLogo: string;
    public activities: string;
    public id: number;

    constructor(job: string, startLapse: string, endLapse: string, type: string, companyLogo: string, activities: string, id?: number) {
        this.job = job;
        this.startLapse = startLapse;
        this.endLapse = endLapse;
        this.type = type;
        this.companyLogo = companyLogo;
        this.activities = activities;
        if(id !== undefined) this.id = id; 
    }

    isComplete(): boolean {
        return this.job != "" && this.startLapse != "" && this.endLapse != "" && this.type != "" && this.activities != "";
    }

    getTimeLapse(): string {
        return `${this.startLapse.split("-").reverse().join("/")} - ${this.endLapse.split("-").reverse().join("/")}`
    }
}