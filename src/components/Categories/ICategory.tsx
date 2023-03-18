interface ICategory {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

export interface IResponse {
  categories: ICategory[];
}

export default ICategory;
