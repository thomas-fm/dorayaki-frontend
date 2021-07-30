export const filterDorayaki = (allDorayaki, stockDorayaki) => {
    let arr = []

    allDorayaki.forEach((el) => {
        if (stockDorayaki.some((x) => el.id === x.variant_id)) {
            // console.log('true')
        } else {
            arr.push(el)
        }
    })
    return arr
}
