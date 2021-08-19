declare module 'd3plus/src/geom/largestRect.coffee' {
  type IPolygonVertext = [number, number];
  export interface Options {
    angle?: number | string | number[];
    aspectRatio?: number | string | number[];
    maxAspectRatio?: number;
    nTries?: number;
    minWidth?: number;
    minHeight?: number;
    tolerance?: number;
    origin?: [number, number] | [number, number][];
  }

  export interface OutputRect {
    width: number;
    height: number;
    cx: number;
    cy: number;
    angle: number;
  }

  export interface LargestRect {
    (poly: IPolygonVertext[], options?: Options): [OutputRect, number];
  }

  const largestRect: LargestRect;
  export default largestRect;
}
