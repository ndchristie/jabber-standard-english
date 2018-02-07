export default (untransformed: string): string => untransformed
  .replace(/(v)([^aeiouy]|$)/gi, '$1e$2');
