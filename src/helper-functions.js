export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item
        }
    }
}

export function findByParentId(arr, id) {
    const result = [];
    // could use a filter instead of a forEach
    arr.forEach(item => {
        if (item.parent_id === id) {
            result.push(item);
        }
    });
    return result;
}

export function getParentId(categoriesArr, childId) {
    let result;
    // could use find instead of forEach
    categoriesArr.forEach(category => {
        if (category.id === childId) {
            result = category.parent_id;
        } 
    })
    return result;
}

export function normalizeCost(start, stop, now, timeWindow, frequency, cost) {
    let costResult;
        if (start > now - timeWindow) {
            if (stop) {
                costResult = (cost / frequency) * (stop - start);
            } else {
                costResult = (cost / frequency) * (now - start);
            }
        } else {
            if (stop) {
                costResult = (cost / frequency) * (stop - (now - timeWindow));
            } else {
                costResult = (cost / frequency) * (now - (now -timeWindow));
            }
        }
        // I would suggest keeping your money as a number
        // as long as possible and moving the formatting out 
        // storing on the backend as an integer will help with this
        return `$${costResult}`;
    }

export function getSumRecursively(purchasesArr, categoryId) {
    let sum = 0;
    purchasesArr.forEach(purchase => {
        if (purchase.parent_id === categoryId) {
            sum += Number(purchase.normalizedCost.slice(1));
            const childArr = findByParentId(purchasesArr, purchase.category_id);
            if (childArr.length !== 0) {
                console.log(childArr)
                sum += getSumRecursively(childArr, purchase.id);
            }
        } else if (purchase.category_id === categoryId) {
            sum += Number(purchase.normalizedCost.slice(1));
        }
    });
    return sum;
}

export function mungeChartData(categoriesArr, allCategories, purchasesArr) {
    const result = {};
    // You can avoid this munging step by joining the categories table on the backend
    const mungedPurchases = purchasesArr.map(purchase => {
        return { parent_id: getParentId(allCategories, purchase.category_id),...purchase }
    });
    categoriesArr.forEach(category => {
        result[category.description] =  getSumRecursively(mungedPurchases, category.id);
    });
    return result;
}   
