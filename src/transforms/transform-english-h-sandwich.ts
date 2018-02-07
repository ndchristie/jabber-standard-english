export default (untransformed: string): string => untransformed
  .replace(/([^cpst])h([^aeiou])/gi, '$1$2');
