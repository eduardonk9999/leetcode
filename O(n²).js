// Two Sum na força bruta
for (let i = 0; i < nums.length; i++) {        // pra cada item...
  for (let j = i + 1; j < nums.length; j++) {  // ...compara com todos os outros
    if (nums[i] + nums[j] === target) {
      return [i, j];
    }
  }
}
// 1.000 itens = ~500.000 comparações