export default (untransformed: string): string => untransformed
  .replace(/[ck]{2,}/gi, 'ck')
  .replace(/([^w]|^)[ck]+w/gi, '$1qu')
  .replace(/([^w]|^)(c?)[ck]+u/gi, '$1$2cu')
  .replace(/([^cst]|^)hw([airouy])/gi, '$1wh$2');
