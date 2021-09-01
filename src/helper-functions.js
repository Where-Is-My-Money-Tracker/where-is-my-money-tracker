export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item
        }
    }
}

