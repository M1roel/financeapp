export class Pot {
    name: string;
    total_saved: number;
    target: number;
    theme_color: string;

    constructor(obj?: any) {
        this.name = obj ? obj.name : '';
        this.total_saved = obj ? obj.total_saved : '';
        this.target = obj ? obj.target : '';
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