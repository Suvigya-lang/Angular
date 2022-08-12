export class Product {
    id: number;
    price:number;
    description:string;
    name:string;
    imageUrl:string;
    constructor(id: number,price:number,description:string,name:string,imageUrl : string){
        this.id=id;
        this.price= price;
        this.description=description;
        this.name=name;
        this.imageUrl=imageUrl;


    }
    

}
