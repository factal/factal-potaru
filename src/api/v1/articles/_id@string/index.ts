import { GetContentQuery } from '../../../../types/api'
import { ArticleResponse } from '../../../../types/article'

export type Methods = {
  get: {
    query?: GetContentQuery
    resBody: ArticleResponse
  }
}