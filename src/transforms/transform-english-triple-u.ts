export default (untransformed: string): string => untransformed
  .replace(/(u)[uw]+e?/gi, '$1e')
  .replace(/(.+)wu+e?/gi, '$1ue');
