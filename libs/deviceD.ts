import UAparser  from 'ua-parser-js'
export const getClientDetails = async () => {
    const parser = new UAparser()
    const uaResult = parser.getResult();
    return uaResult
}
getClientDetails()