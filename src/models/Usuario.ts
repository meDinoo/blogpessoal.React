import type Postagem from "./Postagem";

export default interface Usuario{

    id:number;
    nome:String;
    usuario: string;
    foto: string;
    senha: string;
    postagem?: Postagem[] | null;
    

}