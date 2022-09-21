import { title } from '@/config'

/**
 * @author https://gitee.com/chu1204505056/arccosx-admin
 * @description 设置标题
 * @param pageTitle
 * @returns {string}
 */
export default function getPageTitle(pageTitle) {
  if (pageTitle) return `${pageTitle}-${title}`
  return `${title}`
}
