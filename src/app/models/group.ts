export interface Group {
  id: string
  img: string
  titulo: string
  descricao: string
  compatibilidade: number
  membros: number
  modalidade: 'Online' | 'Presencial' | 'Híbrido'
  tags: string[]
}
