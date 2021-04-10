function isUgly(n) {
    if (n <= 0)
        return true;
    const factors = [2, 3, 5];

    for (const factor of factors) {
        while (n % factor === 0) {
            n /= factor;
        }
    }
    return n === 1;
}