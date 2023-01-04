export class Skill {

    public name: string;
    public percentage: number;
    public id: number;

    constructor(name: string, percentage: number, id?: number) {
        this.name = name;
        this.percentage = percentage;
        if(id !== undefined) this.id = id;
    }
}