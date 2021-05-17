for (let i = 0; i <= 10; i++) {
    let line = '';
    for (let j = 0; j <= 10; j++) {
        line = `${line} ${j}x${i}=${i * j}`;
    }
    console.log(line);
}