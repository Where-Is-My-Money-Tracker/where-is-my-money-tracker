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
  return costResult;
}

export function getSumRecursively(purchasesArr, categoryId, allCategories) {
  const descendantCategories = [];

  const getDescendantCategories = (parentId) => {
    allCategories.forEach((category) => {
      if (category.parent_id === parentId) {
        if (
          allCategories.filter((item) => item.parent_id === category.id)
            .length === 0
        ) {
          descendantCategories.push(category.id);
        } else {
          getDescendantCategories(category.id);
        }
      }
    });
  };

  getDescendantCategories(categoryId);
  let sum = 0;

  if (!descendantCategories.length) {
    purchasesArr
      .filter((purchase) => purchase.category_id === categoryId)
      .forEach((purchase) => {
        sum += Number(purchase.normalizedCost);
      });
  } else {
    purchasesArr.forEach((purchase) => {
      if (descendantCategories.includes(purchase.category_id)) {
        sum += Number(purchase.normalizedCost);
      }
    });
  }
  return sum;
}

export function mungeChartData(categoriesArr, allCategories, purchasesArr) {
  const result = {};
  categoriesArr.forEach((category) => {
    const sumInIntegerCents = getSumRecursively(
      purchasesArr,
      category.id,
      allCategories
    );
    result[category.description] = Math.floor(sumInIntegerCents / 100);
  });
  return result;
}
