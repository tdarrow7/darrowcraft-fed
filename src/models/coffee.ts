export interface CoffeeModel {
    id: number;
    type: string;
    isGround: boolean;
    dateadded: Date;
    roastType: number;
    description?: string;
    imageurl: string;
}