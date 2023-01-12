export class Project{

    public name: string;
    public startLapse: Date;
    public endLapse: Date;
    public description: string;
    public link: string;
    public img: string;
    public id: number;

    constructor(name: string, startLapse: string, endLapse: string, description: string, link: string, img: string, id?: number){
        this.name = name;
        this.startLapse = new Date(startLapse);
        this.endLapse = new Date(endLapse);
        this.description = description;
        this.link = link;
        this.img = img;
        if(id !== undefined) this.id = id;
    }
}