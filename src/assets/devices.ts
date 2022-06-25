export const sizes = {
  mobile: '700px',
  desktop: '1000px',
  largeDesktop: '1500px',
};

export const devices = {
  mobile: `@media (max-width: ${sizes.mobile})`,
  desktop: `@media (min-width: ${sizes.mobile})`,
};
