import { ContentResponse, ListContentsResponse } from './api'
import { TagResponse } from './tag'

export type ArticleListResponse = ListContentsResponse<ArticleResponse>

export type ArticleResponse = ContentResponse<{
  title: string
  body: string
  tags: TagResponse[]
  enableMath: Boolean
}>