export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            console.log(item);
            return item
        }
    }
}