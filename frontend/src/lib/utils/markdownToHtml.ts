import { remark } from 'remark'
import html from 'remark-html'

export const markdownToHtml = async (markdown: any) => {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
