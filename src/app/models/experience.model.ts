export class Experience {
    public job: string;
    public lapse: string;
    public companyLogo: string;
    public activities: string;
    public id: number;

    constructor(job: string, lapse: string, companyLogo: string, activities: string, id?: number) {
        this.job = job;
        this.lapse = lapse;
        this.companyLogo = companyLogo;
        this.activities = activities;
        if(id !== undefined) this.id = id; 
    }

}