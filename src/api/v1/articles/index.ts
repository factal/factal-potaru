import { GetListContentsQuery } from '../../../types/api'
import { ArticleListResponse } from '../../../types/article'


export type Methods = {
  get: {
    query?: GetListContentsQuery
    resBody: ArticleListResponse
  }
}