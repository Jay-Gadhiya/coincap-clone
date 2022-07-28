

export function simplifiedCurrency (num) {

    
    return Math.abs(Number(num)) >= 1.0e+9

    ? (Math.abs(Number(num)) / 1.0e+9).toFixed(2) + "b"
     
    : Math.abs(Number(num)) >= 1.0e+6

    ? (Math.abs(Number(num)) / 1.0e+6).toFixed(2) + "m"
    
    : Math.abs(Number(num)) >= 1.0e+3

    ? (Math.abs(Number(num)) / 1.0e+3).toFixed(2) + "k"

    : Math.abs(Number(num));

}