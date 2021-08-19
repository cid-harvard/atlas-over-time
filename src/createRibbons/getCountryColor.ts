enum RegionColor {
  Africa = 'rgb(153, 35, 125)',
  Asia = 'rgb(107, 193, 145)',
  Oceania = 'rgb(221, 159, 98)',
  Europe = 'rgb(42, 135, 211)',
  NorthAmerica = 'rgb(199, 36, 43)',
  SouthAmerica = 'rgb(127, 20, 42)',
  CentralAmerica = 'rgb(151, 25, 42)',
  Carribean = 'rgb(175, 31, 43)',
  Other = 'rgb(216, 102, 18)',
}

// This should be used sparingly outside of this module:
enum RegionId {
  Africa = 352,
  Asia = 353,
  Oceania = 354,
  Europe = 355,
  NorthAmerica = 356,
  SouthAmerica = 357,
  Other = 358,
}

const regionColorMap: Map<number, string> = new Map([
  [RegionId.Africa, RegionColor.Africa],
  [RegionId.Asia, RegionColor.Asia],
  [RegionId.Oceania, RegionColor.Oceania],
  [RegionId.Europe, RegionColor.Europe],
  [RegionId.NorthAmerica, RegionColor.NorthAmerica],
  [RegionId.SouthAmerica, RegionColor.SouthAmerica],
  [RegionId.Other, RegionColor.Other],
]);

const getColor = (region: number) => {
  const retrievedColor = regionColorMap.get(region);
  if (retrievedColor === undefined) {
    throw new Error('Cannot find color for region ' + region);
  }
  return retrievedColor;
};

export default getColor;
