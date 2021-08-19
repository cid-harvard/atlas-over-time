declare module 'svg-path-parser' {
  export namespace Relative {
    interface MoveTo { code: 'M', command: 'moveto', x: number, y: number}
    interface LineTo { code: 'L', command: 'lineto', x: number, y: number}
    interface VerticalLineTo { code: 'V', command: 'vertical lineto', y: number }
    interface HorizontalLineTo { code:'H', command: 'horizontal lineto', x: number }
    interface CurveTo { code:'C', command: 'curveto', x1: number, y1: number, x2: number, y2: number, x: number, y: number }
    interface SmoothCurveTo { code: 'S', command: 'smooth curveto', x2: number, y2: number, x: number, y: number }
    interface QuadraticCurveTo { code: 'Q', command: 'quadratic curveto', x1: number, y1: number, x: number, y: number }
    interface SmoothQuadraticCurveTo {code: 'T', command: 'smooth quadratic curveto', x: number, y: number }
    interface EllipticalArc { code: 'A', command: 'elliptical arc', rx: number, ry: number, xAxisRotation: number, largeArc: boolean, sweep: boolean, x: number, y: number }
    interface ClosePath { code: 'Z', command: 'closepath' }
  }

  export type RelativeCommand =
    Relative.MoveTo | Relative.LineTo |
    Relative.VerticalLineTo | Relative.HorizontalLineTo |
    Relative.CurveTo | Relative.SmoothCurveTo |
    Relative.QuadraticCurveTo | Relative.SmoothQuadraticCurveTo |
    Relative.EllipticalArc | Relative.ClosePath;

  export namespace Absolute {
    interface MoveTo { code: 'M', command: 'moveto', x0: number, y0: number, x: number, y: number}
    interface LineTo { code: 'L', command: 'lineto', x0: number, y0: number, x: number, y: number}
    interface VerticalLineTo { code: 'V', command: 'vertical lineto', x0: number, y0: number, x: number, y: number }
    interface HorizontalLineTo { code:'H', command: 'horizontal lineto', x0: number, y0: number, x: number, y: number }
    interface CurveTo { code:'C', command: 'curveto', x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x: number, y: number }
    interface SmoothCurveTo { code: 'S', command: 'smooth curveto', x0: number, y0: number, x2: number, y2: number, x: number, y: number }
    interface QuadraticCurveTo { code: 'Q', command: 'quadratic curveto', x0: number, y0: number, x1: number, y1: number, x: number, y: number }
    interface SmoothQuadraticCurveTo {code: 'T', command: 'smooth quadratic curveto', x0: number, y0: number, x: number, y: number }
    interface EllipticalArc { code: 'A', command: 'elliptical arc', x0: number, y0: number, rx: number, ry: number, xAxisRotation: number, largeArc: boolean, sweep: boolean, x: number, y: number }
    interface ClosePath { code: 'Z', command: 'closepath', x0: number, y0: number, x: number, y: number}
  }

  export type AbsoluteCommand =
    Absolute.MoveTo | Absolute.LineTo |
    Absolute.VerticalLineTo | Absolute.HorizontalLineTo |
    Absolute.CurveTo | Absolute.SmoothCurveTo |
    Absolute.QuadraticCurveTo | Absolute.SmoothQuadraticCurveTo |
    Absolute.EllipticalArc | Absolute.ClosePath;

  export function parseSVG(dAttribute: string): RelativeCommand[];
  export function makeAbsolute(commands: RelativeCommand[]): AbsoluteCommand[];
}
