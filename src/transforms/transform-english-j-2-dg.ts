export default (untransformed: string): string => untransformed
  .replace(/(.+)je?([^aou]|$)/gi, '$1dge$2')
  .replace(/dge[eiy]$/gi, 'dgy');
