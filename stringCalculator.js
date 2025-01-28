class StringCalculator {
    add(numbers) {
        if (!numbers) return 0;
    
        const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
        let delimiter = /,|\n/; // Default delimiters: commas and newlines
    
        if (customDelimiterMatch) {
          delimiter = new RegExp(customDelimiterMatch[1]);
          numbers = numbers.split('\n').slice(1).join('\n');
        }
    
        const numArray = numbers.split(delimiter).map(Number);
    
        const negatives = numArray.filter((num) => num < 0);
        if (negatives.length > 0) {
          throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
        }
    
        return numArray.reduce((sum, num) => sum + (num || 0), 0);
      }
  }
  
  module.exports = StringCalculator;