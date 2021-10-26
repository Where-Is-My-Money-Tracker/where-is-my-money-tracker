export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function findByParentId(arr, id) {
    const result = [];
    arr.forEach((item) => {
        if (item.parent_id === id) {
            result.push(item);
        }
    });
    return result;
}

export function getParentId(categoriesArr, childId) {
    let result;
    categoriesArr.forEach((category) => {
        if (category.id === childId) {
            result = category.parent_id;
        }
    });
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
            costResult = (cost / frequency) * (now - (now - timeWindow));
        }
    }
    return `$${costResult}`;
}

// this doesn't work. need to fix.
export function getSumRecursively(purchasesArr, categoryId) {
    let sum = 0;
    purchasesArr.forEach((purchase) => {
        if (purchase.parent_id === categoryId) {
            sum += Number(purchase.normalizedCost.slice(1));
            const childArr = findByParentId(purchasesArr, purchase.category_id);
            if (childArr.length !== 0) {
                sum += getSumRecursively(childArr, purchase.id);
            }
        } else if (purchase.category_id === categoryId) {
            sum += Number(purchase.normalizedCost.slice(1));
        }
    });
    return sum;
}

// works but needs some name changes and some destructuring
export function mungeChartData(categoriesArr, allCategories, purchasesArr) {
    const result = {};
    const mungedPurchases = purchasesArr.map((purchase) => {
        return {
            parent_id: getParentId(allCategories, purchase.category_id),
            ...purchase,
        };
    });
    categoriesArr.forEach((category) => {
        result[category.description] = getSumRecursively(
            mungedPurchases,
            category.id
        );
    });
    return result;
}
