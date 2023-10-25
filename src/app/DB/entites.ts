export interface Products{
    id : number ;
    name : string ;
    price : number ;
    description : string ;
    quantity : number ;
    category : string ;
    image : string ;
    small?: string ;
    large?: string ;
    cart: Cart[] ;
    medium?: string ;
}

export interface User{
    access_token?: any ; 
    username : string;
    email : string ;
    id : string ;
    password : string ;
    phonenumber : string ;
    homeaddress : string ;
    profilePic? : string ;
    cart: Cart[] ;
    order : Order ;
 }

export class Cart{
    public id: string
    public total: number
    public quantity: number ;
    public item: Products  ;
    public user: User ;
}

export interface Order{
    id: number ;
    items: Products[];
    user : User ;
    subTotal: number ;
    pending: boolean ;
}