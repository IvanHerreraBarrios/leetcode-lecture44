function sockMerchan(n, arr){
    const map = {}
    for(let i = 0; i < arr.length; i++){
        let key = arr[i]
        if(map[key]){
            map[key]++
        } else {
            map[key] = 1
        }
    }

    for(const val in map){
        result = Math.floor(val / 2)
    }
}