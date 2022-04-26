export interface CardInterface{
    icon:any,
    socialRef:string,
    description:string,
    quantity:string,
    positive:boolean,
    value:string
    borderColor?:string
}


export enum ThemeModes{
    dark,
    light
}