export default (untransformed: string): string => untransformed
  .replace(/o[iw]?ee([^y]+)/gi, 'oi$1')
  .replace(/o[iw]?eey?$/i, 'oy');
