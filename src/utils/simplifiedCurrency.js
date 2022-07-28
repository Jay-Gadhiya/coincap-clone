

export function simplifiedCurrency (num) {

    // Nine Zeroes for Billions
    return Math.abs(Number(num)) >= 1.0e+9

    ? (Math.abs(Number(num)) / 1.0e+9).toFixed(2) + "b"
    // Six Zeroes for Millions 
    : Math.abs(Number(num)) >= 1.0e+6

    ? (Math.abs(Number(num)) / 1.0e+6).toFixed(2) + "m"
    // Three Zeroes for Thousands
    : Math.abs(Number(num)) >= 1.0e+3

    ? (Math.abs(Number(num)) / 1.0e+3).toFixed(2) + "k"

    : Math.abs(Number(num));

}