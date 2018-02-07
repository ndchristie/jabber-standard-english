export default (untransformed: string): string => untransformed
  .replace(/aa+h?/gi, 'ah')
  .replace(/ii+e?/gi, 'ie')
  .replace(/(^|[^q])o?uu+/gi, '$1ou');
