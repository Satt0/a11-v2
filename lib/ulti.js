

export function getImgPath(path){
    if(process.env.NODE_ENV==='production' || true)
    {
        return path
    }
    return `http://localhost:1337${path}`
}