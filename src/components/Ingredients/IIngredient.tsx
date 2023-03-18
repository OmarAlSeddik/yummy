interface IIngredient {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: null | string;
}

export interface IResponse {
  meals: IIngredient[];
}

export default IIngredient;
