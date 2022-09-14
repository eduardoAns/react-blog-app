import { coment } from "./coment";
import { tag } from "./tag";

export interface post {
    id?: number,
    idUsuario: number,
    titulo: string,
    subtitulo:string,
    contenido: string,
    comentarios: coment[],
    fechaCreacion: string,
    estado: string,
    tags:tag[],
    categoria:categoria
}

export interface postFormulario {
    idUsuario: number,
    titulo: string,
    subtitulo:string,
    contenido: string,
    fechaCreacion: string,
    estado: string,
    categoria:categoria,
    nombre:string
    fechaActualizacion:string
}

export interface categoria {
    id: number,
    nombre: string,
}