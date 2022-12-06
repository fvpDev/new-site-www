export function capitalize(word) { return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase() }

/** ID **/
export function nameToID(name) { return name.split(' ').join('-').toLowerCase() }
export function idToSlug(id) { return id.split('-').join('_').toLowerCase() }
export function idToWords(id) { return id.split('-').join(' ') }
export function idToName(id) { return id.split('-').map(word => capitalize(word)).join(' ') }
export function idToCamel(id) {
  return id.split('-').map((word, i) => {
    return i == 0 ? word.toLowerCase() : capitalize(word)
  }).join('')
}

/** Slug **/
export function slugToID(slug) { return slug.split('_').join('-').toLowerCase() }
export function slugToName(slug) { return slug.split('_').map(id => id.split('-').map(word => capitalize(word)).join('-')).join(' ') }
export function nameToSlug(name) { return name.split(' ').join('_').toLowerCase() }

/** Path **/
export function nameToPath(name) { return name.split(' ').join('-').toLowerCase() }
export function pathToName(path) {
  return path.split('/').map((slug) => {
    return slug.split('-').map(word => capitalize(word)).join(' ')
  }).join(' | ')
}
