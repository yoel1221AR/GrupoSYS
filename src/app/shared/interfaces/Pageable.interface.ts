export interface IPageable {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    sort: ISort;
    unpaged: boolean;
  }
  export interface ISort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  }

export interface IPageableSimple{
  page: number;
  size: number;
  sort: string[];
}