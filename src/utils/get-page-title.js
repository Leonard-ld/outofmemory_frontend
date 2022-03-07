const title = 'OutOfMemory'

export default function getPageTitle(pageTitle) {
    if (pageTitle) {
        return `${pageTitle} - ${title}`
    }
    return `${title}`
}
