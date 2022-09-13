import { coment } from "./coment";

export interface post {
    id: number,
    idUsuario: number,
    titulo: string,
    subtitulo:string,
    contenido: string,
    comentarios: coment[],
}