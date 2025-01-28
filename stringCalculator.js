class StringCalculator {
    add(numbers) {
        if(!numbers) return 0
        const numArray = numbers.split(',').map(Number);
        const negatives = numArray.filter((num) => num < 0);
        if (negatives.length > 0) {
          throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
        }
        return numArray.reduce((sum, num) => sum + (num || 0), 0)
    }
  }
  
  module.exports = StringCalculator;