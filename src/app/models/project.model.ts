export class Project{

    public name: string;
    public lapse: string;
    public description: string;
    public link: string;
    public img: string;
    public id: number;

    constructor(name: string, lapse: string, description: string, link: string, img: string, id?: number){
        this.name = name;
        this.lapse = lapse;
        this.description = description;
        this.link = link;
        this.img = img;
        if(id !== undefined) this.id = id;
    }
}