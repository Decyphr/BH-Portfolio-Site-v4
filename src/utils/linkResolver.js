// update this resolver to match any 
// Custom Types in Prismic repository

export const linkResolver = (doc) => {
  // URL for a project type
  if (doc.type === 'project') {
    return `/project/${doc.uid}`
  }
  // URL for a page type
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  // Backup for all other types
  return '/'
}