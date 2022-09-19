export class TableParamsModel {
  page!: number;
  pageSize: number;

  constructor(page: number, pageSize = 20) {
    this.pageSize = pageSize;
  }
}
