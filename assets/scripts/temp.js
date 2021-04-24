let sum = 0;

for (let i = 0; i < 5; i++) {
    
    for (let j = 0; j < 2; j++) { // 
        if (i >= 2) {
            continue;
        }
        sum = sum + i + j;
    }
}
console.log(sum); // ???