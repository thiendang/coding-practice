/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  let graph = new Map(); // Đồ thị: ingredient -> recipes có thể tạo từ nó
  let inDegree = new Map(); // Số nguyên liệu cần để tạo công thức
  let available = new Set(supplies); // Tập hợp nguyên liệu có sẵn

  // Khởi tạo đồ thị và số nguyên liệu cần cho mỗi công thức
  for (let i = 0; i < recipes.length; i++) {
    let recipe = recipes[i];
    let ingredientList = ingredients[i];

    // Số nguyên liệu cần để tạo công thức `recipe`
    inDegree.set(recipe, ingredientList.length);

    // Duyệt qua từng nguyên liệu trong công thức
    for (let ingredient of ingredientList) {
      if (!graph.has(ingredient)) graph.set(ingredient, []);
      graph.get(ingredient).push(recipe);
    }
  }

  // BFS: Khởi tạo hàng đợi với các nguyên liệu có sẵn
  let queue = [...supplies];
  let result = [];

  while (queue.length > 0) {
    let ingredient = queue.shift();

    // Nếu nguyên liệu này giúp tạo ra công thức nào đó
    if (graph.has(ingredient)) {
      for (let recipe of graph.get(ingredient)) {
        inDegree.set(recipe, inDegree.get(recipe) - 1);

        // Nếu tất cả nguyên liệu của `recipe` đã có sẵn
        if (inDegree.get(recipe) === 0) {
          queue.push(recipe);
          result.push(recipe);
        }
      }
    }
  }

  return result;
};
