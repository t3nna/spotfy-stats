
export default function formatData (array){
    let place =[...array]
    for (let i = 0; i < array.length; i++) {
        array[i].place = i+1
    }
    let result ={}
    result.topOne=[array[0]]
    result.featured=array.slice(1,5)
    result.tracks=[...array.slice(5)]
    return result
}

