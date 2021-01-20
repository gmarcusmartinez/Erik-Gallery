export const smoothScroll = (cb: Function) => {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  cb();
};
