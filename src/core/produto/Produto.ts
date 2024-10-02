import Especificacoes from "./Especificacoes"

export default interface Produto extends Precificavel {
    id: number
    nome: string 
    descricao: string 
    marca: string 
    imagem: string
    modelo: string
    videoReview: string 
    nota: number 
    tags: string[]
    especificacoes: Especificacoes
}