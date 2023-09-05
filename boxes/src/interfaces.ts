export interface BoxInterface{
  id: string,
  height: number | string,
  width: number | string,
  backgroundColor: string,
  remove(id:any)
}
export interface BoxListInterface{
  id: string,
  height: number | string,
  width: number | string,
  backgroundColor: string,
}

export interface BoxFormInterface{
  height: string,
  width: string,
  backgroundColor: string,
}

export interface CreateBoxInterface{
  createBox: (box: BoxListInterface) => void
}