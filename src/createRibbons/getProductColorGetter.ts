import {
  ProductClass,
  failIfValidOrNonExhaustive,
  hsColorsMap,
  sitcColorMap,
} from './Utils';

const getColorGetter = (productClass: ProductClass): (id: number) => string => {
  if (productClass === ProductClass.HS) {
    return (section: number) => {
      const retrievedColor = hsColorsMap.get(section);
      if (retrievedColor === undefined) {
        throw new Error('Cannot find color for product section ' + section);
      } else {
        return retrievedColor;
      }
    };
  } else if (productClass === ProductClass.SITC) {
    return (section: number) => {
      const retrievedColor = sitcColorMap.get(section);
      if (retrievedColor === undefined) {
        throw new Error('Cannot find color for product section ' + section);
      } else {
        return retrievedColor;
      }
    };
  } else {
    failIfValidOrNonExhaustive(productClass, 'Invalid product class');
    // The following lines will never be executed:
    return () => '';
  }
};

export default getColorGetter;
