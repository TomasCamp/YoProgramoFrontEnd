export class Study {

    public title: string;
    public institution: string;
    public startLapse: Date;
    public endLapse: Date;
    public description: string;
    public img: string;
    public id: number;

    constructor(title: string, institution: string, startLapse: string, endLapse: string, description: string, img: string, id?: number) {
        this.title = title;
        this.institution = institution;
        this.startLapse = new Date(startLapse);
        this.endLapse = new Date(endLapse);
        this.description = description;
        this.img = img;
        if(id !== undefined) this.id = id;
    }
}