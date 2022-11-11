
export default function formatData (array){
    let result ={}
    result.topOne=array[0]
    result.featured=array.slice(1,5)
    result.tracks=[...array.slice(5)]
    return result
}

