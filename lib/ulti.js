

export function getImgPath(path){
    if(process.env.NODE_ENV==='production')
    {
        return path
    }
    return `http://localhost:1337${path}`
}