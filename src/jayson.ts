
class Bump {

    public first_name!: string;
    public last_name!: string;
    constructor(data: Partial<Bump>) {
        Object.assign(this, data);
    }

    public getFullName (): string {
        return this.first_name + ' ' + this.last_name;
    };

    public static fromJSON = (json: string): Bump => {
        const jsonObject = JSON.parse(json);
        return new Bump(jsonObject);
    };  
}


