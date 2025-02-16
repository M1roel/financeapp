export class Pot {
    id?: string;
    name: string;
    total_saved: number;
    target: number;
    theme_color: string;

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.name = obj ? obj.name : '';
        this.total_saved = obj ? obj.total_saved : 0;
        this.target = obj ? obj.target : 0;
        this.theme_color = obj ? obj.theme_color : '';
    }

    toJSON(): any {
        return {
            name: this.name,
            total_saved: this.total_saved,
            target: this.target,
            theme_color: this.theme_color
        };
    }
}