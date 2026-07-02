export interface Characteristic {
    name:string;
    value:string;
}
export interface Review {
    id: number;
    userName: string;
    rating: number;
    text: string;
    createdAt: string;
}
export interface Product {
    id:number;
    title:string;
    price:number;
    inStok:boolean;
    rating:number;
    img:string;
    category:string;
    description:string;
    characteristics: Characteristic[];
    reviews:Review[];

}