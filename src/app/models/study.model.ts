export class Study {

    public title: string;
    public institution: string;
    public startLapse: string;
    public endLapse: string;
    public description: string;
    public img: string;
    public id: number;

    constructor(title: string, institution: string, startLapse: string, endLapse: string, description: string, img: string, id?: number) {
        this.title = title;
        this.institution = institution;
        this.startLapse = startLapse;
        this.endLapse = endLapse;
        this.description = description;
        this.img = img;
        if(id !== undefined) this.id = id;
    }

    isComplete(): boolean {
        return this.title!= "" && this.institution != "" && this.startLapse != "" && this.endLapse != "" && this.description != "";
    }

    getTimeLapse(): string {
        return `${this.startLapse.split("-").reverse().join("/")} - ${this.endLapse.split("-").reverse().join("/")}`
    }
}