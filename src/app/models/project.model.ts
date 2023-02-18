export class Project{

    public name: string;
    public startLapse: string;
    public endLapse: string;
    public description: string;
    public link: string;
    public img: string;
    public id: number;

    constructor(name: string, startLapse: string, endLapse: string, description: string, link: string, img: string, id?: number){
        this.name = name;
        this.startLapse = startLapse;
        this.endLapse = endLapse;
        this.description = description;
        this.link = link;
        this.img = img;
        if(id !== undefined) this.id = id;
    }

    isComplete(): boolean {
        return this.name != "" && this.startLapse != "" && this.endLapse != "" && this.description != "" && this.link != "";
    }
}