// Qual o maior número da lista?

let maio = nums[0]
for(let i = 1; i < nums.length; i++) { // olha cada item UMA vez
    if(nums[i] > maior) {
        maior = nums[i];
    }
}

// 1.000 itens = ~1.000 passos