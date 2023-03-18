interface IMeal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface IResponse {
  meals: IMeal[];
}

export default IMeal;
