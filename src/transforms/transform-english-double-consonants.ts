export default (untransformed: string): string => untransformed
  .replace(/([hjkqvwxy])\1+/gi, '$1')
  .replace(/([^aeiou])([^aeiou])\2+/gi, '$1$2')
  .replace(/([^aeiou])\1+([^aeiou])/gi, '$1$2');
