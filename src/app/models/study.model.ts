export class Study {

    public title: string;
    public institution: string;
    public lapse: string;
    public description: string;
    public img: string;
    public id: number;

    constructor(title: string, institution: string, lapse: string, description: string, img: string, id?: number) {
        this.title = title;
        this.institution = institution;
        this.lapse = lapse;
        this.description = description;
        this.img = img;
        if(id !== undefined) this.id = id;
    }
}