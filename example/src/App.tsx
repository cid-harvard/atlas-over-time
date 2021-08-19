import React from 'react'

import OverTime, {
  Layout,
  TradeDirection,
  TradeFlow,
  InflationAdjustment,
  PopulationAdjustment,
  DataSource,
  GraphSubject,
} from 'atlas-over-time'
import 'atlas-over-time/dist/index.css'
// import styled from 'styled-components/macro';

// const Root = styled.div`
//     width: 100vw;
//     height: 100vw;
// `;

const ribbons: any = [
    {
        "color": "rgb(125, 218, 161)",
        "path": "M 0 634.551011805744 C 0 634.551011805744, 17.666666666666668 634.8188324088375, 26.5 634.91264804228 C 35.33333333333333 635.0064636757226, 44.16666666666667 634.9749718330962, 53 635.113905606399 C 61.83333333333333 635.2528393797019, 70.66666666666667 635.7135916385109, 79.5 635.746250682097 C 88.33333333333333 635.778909725683, 97.16666666666667 635.4169545276538, 106 635.309859867915 C 114.83333333333333 635.2027652081761, 123.66666666666667 635.0424895844147, 132.5 635.103682723664 C 141.33333333333334 635.1648758629132, 150.16666666666666 635.576465055845, 159 635.67701870341 C 167.83333333333334 635.777572350975, 176.66666666666666 635.7596942269192, 185.5 635.707004609054 C 194.33333333333334 635.6543149911888, 203.16666666666666 635.5350924488496, 212 635.360880996219 C 220.83333333333334 635.1866695435883, 229.66666666666666 634.7494188953182, 238.5 634.66173589327 C 247.33333333333334 634.5740528912219, 256.1666666666667 634.8237712586047, 265 634.83478298393 C 273.8333333333333 634.8457947092554, 282.6666666666667 634.8024746035605, 291.5 634.727806245222 C 300.3333333333333 634.6531378868835, 309.1666666666667 634.5170314301844, 318 634.386772833899 C 326.8333333333333 634.2565142376137, 335.6666666666667 633.8057793801223, 344.5 633.94625466751 C 353.3333333333333 634.0867299548976, 362.1666666666667 635.2134056170514, 371 635.229624558225 C 379.8333333333333 635.2458434993987, 388.6666666666667 634.3862450494556, 397.5 634.043568314552 C 406.3333333333333 633.7008915796483, 415.1666666666667 633.2597813449559, 424 633.173564148803 C 432.8333333333333 633.0873469526503, 441.6666666666667 633.3585849160525, 450.5 633.526265137635 C 459.3333333333333 633.6939453592177, 468.1666666666667 634.0388608749724, 477 634.179645478299 C 485.8333333333333 634.3204300816255, 494.6666666666667 634.2708905404231, 503.5 634.370972757594 C 512.3333333333334 634.4710549747649, 521.1666666666666 634.7336396732003, 530 634.780138781324 C 538.8333333333334 634.8266378894477, 547.6666666666666 634.6832670097687, 556.5 634.649967406336 C 565.3333333333334 634.6166678029034, 574.1666666666666 634.6541223919462, 583 634.580341160728 C 591.8333333333334 634.5065599295099, 600.6666666666666 634.2362911927218, 609.5 634.207280019027 C 618.3333333333334 634.1782688453324, 636 634.40627411856, 636 634.40627411856 \n        L 636 641\n       C 636 641, 618.3333333333334 641, 609.5 641 C 600.6666666666666 641, 591.8333333333334 641, 583 641 C 574.1666666666666 641, 565.3333333333334 641, 556.5 641 C 547.6666666666666 641, 538.8333333333334 641, 530 641 C 521.1666666666666 641, 512.3333333333334 641, 503.5 641 C 494.6666666666667 641, 485.8333333333333 641, 477 641 C 468.1666666666667 641, 459.3333333333333 641, 450.5 641 C 441.6666666666667 641, 432.8333333333333 641, 424 641 C 415.1666666666667 641, 406.3333333333333 641, 397.5 641 C 388.6666666666667 641, 379.8333333333333 641, 371 641 C 362.1666666666667 641, 353.3333333333333 641, 344.5 641 C 335.6666666666667 641, 326.8333333333333 641, 318 641 C 309.1666666666667 641, 300.3333333333333 641, 291.5 641 C 282.6666666666667 641, 273.8333333333333 641, 265 641 C 256.1666666666667 641, 247.33333333333334 641, 238.5 641 C 229.66666666666666 641, 220.83333333333334 641, 212 641 C 203.16666666666666 641, 194.33333333333334 641, 185.5 641 C 176.66666666666666 641, 167.83333333333334 641, 159 641 C 150.16666666666666 641, 141.33333333333334 641, 132.5 641 C 123.66666666666667 641, 114.83333333333333 641, 106 641 C 97.16666666666667 641, 88.33333333333333 641, 79.5 641 C 70.66666666666667 641, 61.83333333333333 641, 53 641 C 44.16666666666667 641, 35.33333333333333 641, 26.5 641 C 17.666666666666668 641, 0 641, 0 641 \n      L 0 634.551011805744\n      M 0 634.551011805744\n      Z\n    ",
        "dataPoints": [
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$10.1B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$10.1B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1995,
                "x": 0,
                "lowerY": 641,
                "upperY": 634.551011805744,
                "displayedValue": "$10.1B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$9.50B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1996
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1996
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$9.50B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1996,
                "x": 26.5,
                "lowerY": 641,
                "upperY": 634.91264804228,
                "displayedValue": "$9.50B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$9.18B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1997
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1997
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$9.18B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1997,
                "x": 53,
                "lowerY": 641,
                "upperY": 635.113905606399,
                "displayedValue": "$9.18B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$8.20B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1998
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1998
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$8.20B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1998,
                "x": 79.5,
                "lowerY": 641,
                "upperY": 635.746250682097,
                "displayedValue": "$8.20B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$8.88B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$8.88B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1999,
                "x": 106,
                "lowerY": 641,
                "upperY": 635.309859867915,
                "displayedValue": "$8.88B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$9.20B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$9.20B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2000,
                "x": 132.5,
                "lowerY": 641,
                "upperY": 635.103682723664,
                "displayedValue": "$9.20B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$8.30B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$8.30B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2001,
                "x": 159,
                "lowerY": 641,
                "upperY": 635.67701870341,
                "displayedValue": "$8.30B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$8.26B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$8.26B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2002,
                "x": 185.5,
                "lowerY": 641,
                "upperY": 635.707004609054,
                "displayedValue": "$8.26B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$8.80B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$8.80B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2003,
                "x": 212,
                "lowerY": 641,
                "upperY": 635.360880996219,
                "displayedValue": "$8.80B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$9.89B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$9.89B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2004,
                "x": 238.5,
                "lowerY": 641,
                "upperY": 634.66173589327,
                "displayedValue": "$9.89B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$9.62B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$9.62B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2005,
                "x": 265,
                "lowerY": 641,
                "upperY": 634.83478298393,
                "displayedValue": "$9.62B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$9.79B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$9.79B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2006,
                "x": 291.5,
                "lowerY": 641,
                "upperY": 634.727806245222,
                "displayedValue": "$9.79B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$10.3B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$10.3B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2007,
                "x": 318,
                "lowerY": 641,
                "upperY": 634.386772833899,
                "displayedValue": "$10.3B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$11.0B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$11.0B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2008,
                "x": 344.5,
                "lowerY": 641,
                "upperY": 633.94625466751,
                "displayedValue": "$11.0B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$9.00B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$9.00B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2009,
                "x": 371,
                "lowerY": 641,
                "upperY": 635.229624558225,
                "displayedValue": "$9.00B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$10.9B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$10.9B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2010,
                "x": 397.5,
                "lowerY": 641,
                "upperY": 634.043568314552,
                "displayedValue": "$10.9B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$12.2B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$12.2B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2011,
                "x": 424,
                "lowerY": 641,
                "upperY": 633.173564148803,
                "displayedValue": "$12.2B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$11.7B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$11.7B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2012,
                "x": 450.5,
                "lowerY": 641,
                "upperY": 633.526265137635,
                "displayedValue": "$11.7B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$10.6B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$10.6B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2013,
                "x": 477,
                "lowerY": 641,
                "upperY": 634.179645478299,
                "displayedValue": "$10.6B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$10.3B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$10.3B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2014,
                "x": 503.5,
                "lowerY": 641,
                "upperY": 634.370972757594,
                "displayedValue": "$10.3B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$9.70B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$9.70B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2015,
                "x": 530,
                "lowerY": 641,
                "upperY": 634.780138781324,
                "displayedValue": "$9.70B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$9.91B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$9.91B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2016,
                "x": 556.5,
                "lowerY": 641,
                "upperY": 634.649967406336,
                "displayedValue": "$9.91B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$10.0B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$10.0B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2017,
                "x": 583,
                "lowerY": 641,
                "upperY": 634.580341160728,
                "displayedValue": "$10.0B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$10.6B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$10.6B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2018,
                "x": 609.5,
                "lowerY": 641,
                "upperY": 634.207280019027,
                "displayedValue": "$10.6B",
                "ribbonId": 0
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$10.3B"
                    },
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "0 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$10.3B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2019,
                "x": 636,
                "lowerY": 641,
                "upperY": 634.40627411856,
                "displayedValue": "$10.3B",
                "ribbonId": 0
            }
        ],
        "id": 0,
        "section": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "textInRibbon": {
            "showText": false
        }
    },
    {
        "color": "#F5CF23",
        "path": "M 0 630.552795467077 C 0 630.552795467077, 17.666666666666668 631.2436756889891, 26.5 631.380409906688 C 35.33333333333333 631.5171441243868, 44.16666666666667 631.2126808493451, 53 631.37320077327 C 61.83333333333333 631.5337206971949, 70.66666666666667 632.3228420105669, 79.5 632.343529450237 C 88.33333333333333 632.3642168899072, 97.16666666666667 631.6751996359948, 106 631.4973254112911 C 114.83333333333333 631.3194511865873, 123.66666666666667 631.152160411392, 132.5 631.276284102015 C 141.33333333333334 631.400407792638, 150.16666666666666 632.130553447182, 159 632.242067555029 C 167.83333333333334 632.3535816628761, 176.66666666666666 632.0969128127331, 185.5 631.945368749097 C 194.33333333333334 631.793824685461, 203.16666666666666 631.6421965323469, 212 631.332803173213 C 220.83333333333334 631.0234098140792, 229.66666666666666 630.3149644974699, 238.5 630.089008594294 C 247.33333333333334 629.8630526911181, 256.1666666666667 630.046932466509, 265 629.977067754158 C 273.8333333333333 629.9072030418071, 282.6666666666667 629.8863338114387, 291.5 629.669820320188 C 300.3333333333333 629.4533068289373, 309.1666666666667 629.034433876406, 318 628.677986806654 C 326.8333333333333 628.321539736902, 335.6666666666667 627.3964609689901, 344.5 627.531137901676 C 353.3333333333333 627.6658148343618, 362.1666666666667 629.616956754046, 371 629.486048402769 C 379.8333333333333 629.3551400514921, 388.6666666666667 627.3570266306148, 397.5 626.745687794014 C 406.3333333333333 626.1343489574132, 415.1666666666667 625.8361360314929, 424 625.818015383164 C 432.8333333333333 625.7998947348352, 441.6666666666667 626.3768080932751, 450.5 626.636963904041 C 459.3333333333333 626.8971197148068, 468.1666666666667 627.2503205659085, 477 627.378950247759 C 485.8333333333333 627.5075799296095, 494.6666666666667 627.3790514500142, 503.5 627.408741995144 C 512.3333333333334 627.4384325402739, 521.1666666666666 627.6589416761794, 530 627.557093518538 C 538.8333333333334 627.4552453608965, 547.6666666666666 627.0193548461461, 556.5 626.797653049295 C 565.3333333333334 626.5759512524439, 574.1666666666666 626.5133194540766, 583 626.226882737431 C 591.8333333333334 625.9404460207853, 600.6666666666666 625.14972116472, 609.5 625.079032749421 C 618.3333333333334 625.0083443341221, 636 625.802752245637, 636 625.802752245637 \n        L 636 634.40627411856\n       C 636 634.40627411856, 618.3333333333334 634.1782688453324, 609.5 634.207280019027 C 600.6666666666666 634.2362911927218, 591.8333333333334 634.5065599295099, 583 634.580341160728 C 574.1666666666666 634.6541223919462, 565.3333333333334 634.6166678029034, 556.5 634.649967406336 C 547.6666666666666 634.6832670097687, 538.8333333333334 634.8266378894477, 530 634.780138781324 C 521.1666666666666 634.7336396732003, 512.3333333333334 634.4710549747649, 503.5 634.370972757594 C 494.6666666666667 634.2708905404231, 485.8333333333333 634.3204300816255, 477 634.179645478299 C 468.1666666666667 634.0388608749724, 459.3333333333333 633.6939453592177, 450.5 633.526265137635 C 441.6666666666667 633.3585849160525, 432.8333333333333 633.0873469526503, 424 633.173564148803 C 415.1666666666667 633.2597813449559, 406.3333333333333 633.7008915796483, 397.5 634.043568314552 C 388.6666666666667 634.3862450494556, 379.8333333333333 635.2458434993987, 371 635.229624558225 C 362.1666666666667 635.2134056170514, 353.3333333333333 634.0867299548976, 344.5 633.94625466751 C 335.6666666666667 633.8057793801223, 326.8333333333333 634.2565142376137, 318 634.386772833899 C 309.1666666666667 634.5170314301844, 300.3333333333333 634.6531378868835, 291.5 634.727806245222 C 282.6666666666667 634.8024746035605, 273.8333333333333 634.8457947092554, 265 634.83478298393 C 256.1666666666667 634.8237712586047, 247.33333333333334 634.5740528912219, 238.5 634.66173589327 C 229.66666666666666 634.7494188953182, 220.83333333333334 635.1866695435883, 212 635.360880996219 C 203.16666666666666 635.5350924488496, 194.33333333333334 635.6543149911888, 185.5 635.707004609054 C 176.66666666666666 635.7596942269192, 167.83333333333334 635.777572350975, 159 635.67701870341 C 150.16666666666666 635.576465055845, 141.33333333333334 635.1648758629132, 132.5 635.103682723664 C 123.66666666666667 635.0424895844147, 114.83333333333333 635.2027652081761, 106 635.309859867915 C 97.16666666666667 635.4169545276538, 88.33333333333333 635.778909725683, 79.5 635.746250682097 C 70.66666666666667 635.7135916385109, 61.83333333333333 635.2528393797019, 53 635.113905606399 C 44.16666666666667 634.9749718330962, 35.33333333333333 635.0064636757226, 26.5 634.91264804228 C 17.666666666666668 634.8188324088375, 0 634.551011805744, 0 634.551011805744 \n      L 0 630.552795467077\n      M 0 630.552795467077\n      Z\n    ",
        "dataPoints": [
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$6.24B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$6.24B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1995,
                "x": 0,
                "lowerY": 634.551011805744,
                "upperY": 630.552795467077,
                "displayedValue": "$6.24B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$5.51B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1996
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1996
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$5.51B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1996,
                "x": 26.5,
                "lowerY": 634.91264804228,
                "upperY": 631.380409906688,
                "displayedValue": "$5.51B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$5.84B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1997
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1997
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$5.84B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1997,
                "x": 53,
                "lowerY": 635.113905606399,
                "upperY": 631.37320077327,
                "displayedValue": "$5.84B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$5.31B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1998
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1998
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$5.31B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1998,
                "x": 79.5,
                "lowerY": 635.746250682097,
                "upperY": 632.343529450237,
                "displayedValue": "$5.31B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$5.95B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$5.95B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1999,
                "x": 106,
                "lowerY": 635.309859867915,
                "upperY": 631.4973254112911,
                "displayedValue": "$5.95B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$5.97B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$5.97B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2000,
                "x": 132.5,
                "lowerY": 635.103682723664,
                "upperY": 631.276284102015,
                "displayedValue": "$5.97B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$5.36B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$5.36B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2001,
                "x": 159,
                "lowerY": 635.67701870341,
                "upperY": 632.242067555029,
                "displayedValue": "$5.36B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$5.87B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$5.87B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2002,
                "x": 185.5,
                "lowerY": 635.707004609054,
                "upperY": 631.945368749097,
                "displayedValue": "$5.87B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$6.28B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$6.28B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2003,
                "x": 212,
                "lowerY": 635.360880996219,
                "upperY": 631.332803173213,
                "displayedValue": "$6.28B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$7.13B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$7.13B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2004,
                "x": 238.5,
                "lowerY": 634.66173589327,
                "upperY": 630.089008594294,
                "displayedValue": "$7.13B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$7.58B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$7.58B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2005,
                "x": 265,
                "lowerY": 634.83478298393,
                "upperY": 629.977067754158,
                "displayedValue": "$7.58B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$7.89B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$7.89B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2006,
                "x": 291.5,
                "lowerY": 634.727806245222,
                "upperY": 629.669820320188,
                "displayedValue": "$7.89B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$8.91B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$8.91B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2007,
                "x": 318,
                "lowerY": 634.386772833899,
                "upperY": 628.677986806654,
                "displayedValue": "$8.91B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$10.0B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$10.0B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2008,
                "x": 344.5,
                "lowerY": 633.94625466751,
                "upperY": 627.531137901676,
                "displayedValue": "$10.0B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$8.96B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$8.96B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2009,
                "x": 371,
                "lowerY": 635.229624558225,
                "upperY": 629.486048402769,
                "displayedValue": "$8.96B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$11.4B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$11.4B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2010,
                "x": 397.5,
                "lowerY": 634.043568314552,
                "upperY": 626.745687794014,
                "displayedValue": "$11.4B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$11.5B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$11.5B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2011,
                "x": 424,
                "lowerY": 633.173564148803,
                "upperY": 625.818015383164,
                "displayedValue": "$11.5B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$10.7B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$10.7B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2012,
                "x": 450.5,
                "lowerY": 633.526265137635,
                "upperY": 626.636963904041,
                "displayedValue": "$10.7B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$10.6B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$10.6B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2013,
                "x": 477,
                "lowerY": 634.179645478299,
                "upperY": 627.378950247759,
                "displayedValue": "$10.6B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$10.9B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$10.9B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2014,
                "x": 503.5,
                "lowerY": 634.370972757594,
                "upperY": 627.408741995144,
                "displayedValue": "$10.9B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$11.3B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$11.3B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2015,
                "x": 530,
                "lowerY": 634.780138781324,
                "upperY": 627.557093518538,
                "displayedValue": "$11.3B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$12.3B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$12.3B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2016,
                "x": 556.5,
                "lowerY": 634.649967406336,
                "upperY": 626.797653049295,
                "displayedValue": "$12.3B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$13.0B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$13.0B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2017,
                "x": 583,
                "lowerY": 634.580341160728,
                "upperY": 626.226882737431,
                "displayedValue": "$13.0B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$14.2B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$14.2B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2018,
                "x": 609.5,
                "lowerY": 634.207280019027,
                "upperY": 625.079032749421,
                "displayedValue": "$14.2B",
                "ribbonId": 1
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$13.4B"
                    },
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "1 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$13.4B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2019,
                "x": 636,
                "lowerY": 634.40627411856,
                "upperY": 625.802752245637,
                "displayedValue": "$13.4B",
                "ribbonId": 1
            }
        ],
        "id": 1,
        "section": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "textInRibbon": {
            "showText": false
        }
    },
    {
        "color": "rgb(218, 180, 125)",
        "path": "M 0 626.698573874159 C 0 626.698573874159, 17.666666666666668 627.4135618318301, 26.5 627.55696145459 C 35.33333333333333 627.70036107735, 44.16666666666667 627.3754275852524, 53 627.558971610719 C 61.83333333333333 627.7425156361857, 70.66666666666667 628.6395422920389, 79.5 628.65822560739 C 88.33333333333333 628.6769089227412, 97.16666666666667 627.9656752490807, 106 627.671071502826 C 114.83333333333333 627.3764677565712, 123.66666666666667 626.7478282420465, 132.5 626.890603129861 C 141.33333333333334 627.0333780176755, 150.16666666666666 628.2966429186051, 159 628.527720829713 C 167.83333333333334 628.7587987408208, 176.66666666666666 628.5419345539832, 185.5 628.277070596508 C 194.33333333333334 628.0122066390328, 203.16666666666666 627.522607439062, 212 626.938537084862 C 220.83333333333334 626.354466730662, 229.66666666666666 625.2648990064605, 238.5 624.772648471308 C 247.33333333333334 624.2803979361555, 256.1666666666667 624.503174026999, 265 623.985033873947 C 273.8333333333333 623.4668937208951, 282.6666666666667 622.3956589453975, 291.5 621.663807552996 C 300.3333333333333 620.9319561605945, 309.1666666666667 620.5480479958472, 318 619.593925519538 C 326.8333333333333 618.6398030432287, 335.6666666666667 615.9483275743958, 344.5 615.93907269514 C 353.3333333333333 615.9298178158842, 362.1666666666667 620.0948082985964, 371 619.538396244003 C 379.8333333333333 618.9819841894097, 388.6666666666667 614.4849963286837, 397.5 612.60060036758 C 406.3333333333333 610.7162044064763, 415.1666666666667 608.4022053563588, 424 608.232020477381 C 432.8333333333333 608.0618355984031, 441.6666666666667 610.4536152743507, 450.5 611.579491093713 C 459.3333333333333 612.7053669130754, 468.1666666666667 614.2769625605168, 477 614.987275393555 C 485.8333333333333 615.6975882265932, 494.6666666666667 615.5848065286398, 503.5 615.841368091942 C 512.3333333333334 616.0979296552441, 521.1666666666666 617.1167239118865, 530 616.526644773368 C 538.8333333333334 615.9365656348496, 547.6666666666666 613.173413589391, 556.5 612.300893260831 C 565.3333333333334 611.428372932271, 574.1666666666666 611.3032355808072, 583 611.291522802008 C 591.8333333333334 611.2798100232088, 600.6666666666666 611.9175422402502, 609.5 612.230616588036 C 618.3333333333334 612.5436909358218, 636 613.169968888723, 636 613.169968888723 \n        L 636 625.802752245637\n       C 636 625.802752245637, 618.3333333333334 625.0083443341221, 609.5 625.079032749421 C 600.6666666666666 625.14972116472, 591.8333333333334 625.9404460207853, 583 626.226882737431 C 574.1666666666666 626.5133194540766, 565.3333333333334 626.5759512524439, 556.5 626.797653049295 C 547.6666666666666 627.0193548461461, 538.8333333333334 627.4552453608965, 530 627.557093518538 C 521.1666666666666 627.6589416761794, 512.3333333333334 627.4384325402739, 503.5 627.408741995144 C 494.6666666666667 627.3790514500142, 485.8333333333333 627.5075799296095, 477 627.378950247759 C 468.1666666666667 627.2503205659085, 459.3333333333333 626.8971197148068, 450.5 626.636963904041 C 441.6666666666667 626.3768080932751, 432.8333333333333 625.7998947348352, 424 625.818015383164 C 415.1666666666667 625.8361360314929, 406.3333333333333 626.1343489574132, 397.5 626.745687794014 C 388.6666666666667 627.3570266306148, 379.8333333333333 629.3551400514921, 371 629.486048402769 C 362.1666666666667 629.616956754046, 353.3333333333333 627.6658148343618, 344.5 627.531137901676 C 335.6666666666667 627.3964609689901, 326.8333333333333 628.321539736902, 318 628.677986806654 C 309.1666666666667 629.034433876406, 300.3333333333333 629.4533068289373, 291.5 629.669820320188 C 282.6666666666667 629.8863338114387, 273.8333333333333 629.9072030418071, 265 629.977067754158 C 256.1666666666667 630.046932466509, 247.33333333333334 629.8630526911181, 238.5 630.089008594294 C 229.66666666666666 630.3149644974699, 220.83333333333334 631.0234098140792, 212 631.332803173213 C 203.16666666666666 631.6421965323469, 194.33333333333334 631.793824685461, 185.5 631.945368749097 C 176.66666666666666 632.0969128127331, 167.83333333333334 632.3535816628761, 159 632.242067555029 C 150.16666666666666 632.130553447182, 141.33333333333334 631.400407792638, 132.5 631.276284102015 C 123.66666666666667 631.152160411392, 114.83333333333333 631.3194511865873, 106 631.4973254112911 C 97.16666666666667 631.6751996359948, 88.33333333333333 632.3642168899072, 79.5 632.343529450237 C 70.66666666666667 632.3228420105669, 61.83333333333333 631.5337206971949, 53 631.37320077327 C 44.16666666666667 631.2126808493451, 35.33333333333333 631.5171441243868, 26.5 631.380409906688 C 17.666666666666668 631.2436756889891, 0 630.552795467077, 0 630.552795467077 \n      L 0 626.698573874159\n      M 0 626.698573874159\n      Z\n    ",
        "dataPoints": [
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$6.01B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$6.01B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1995,
                "x": 0,
                "lowerY": 630.552795467077,
                "upperY": 626.698573874159,
                "displayedValue": "$6.01B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$5.96B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1996
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1996
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$5.96B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1996,
                "x": 26.5,
                "lowerY": 631.380409906688,
                "upperY": 627.55696145459,
                "displayedValue": "$5.96B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$5.95B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1997
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1997
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$5.95B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1997,
                "x": 53,
                "lowerY": 631.37320077327,
                "upperY": 627.558971610719,
                "displayedValue": "$5.95B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$5.75B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1998
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1998
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$5.75B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1998,
                "x": 79.5,
                "lowerY": 632.343529450237,
                "upperY": 628.65822560739,
                "displayedValue": "$5.75B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$5.97B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$5.97B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1999,
                "x": 106,
                "lowerY": 631.4973254112911,
                "upperY": 627.671071502826,
                "displayedValue": "$5.97B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$6.84B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$6.84B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2000,
                "x": 132.5,
                "lowerY": 631.276284102015,
                "upperY": 626.890603129861,
                "displayedValue": "$6.84B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$5.79B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$5.79B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2001,
                "x": 159,
                "lowerY": 632.242067555029,
                "upperY": 628.527720829713,
                "displayedValue": "$5.79B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$5.72B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$5.72B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2002,
                "x": 185.5,
                "lowerY": 631.945368749097,
                "upperY": 628.277070596508,
                "displayedValue": "$5.72B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$6.86B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$6.86B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2003,
                "x": 212,
                "lowerY": 631.332803173213,
                "upperY": 626.938537084862,
                "displayedValue": "$6.86B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$8.29B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$8.29B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2004,
                "x": 238.5,
                "lowerY": 630.089008594294,
                "upperY": 624.772648471308,
                "displayedValue": "$8.29B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$9.35B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$9.35B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2005,
                "x": 265,
                "lowerY": 629.977067754158,
                "upperY": 623.985033873947,
                "displayedValue": "$9.35B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$12.5B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$12.5B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2006,
                "x": 291.5,
                "lowerY": 629.669820320188,
                "upperY": 621.663807552996,
                "displayedValue": "$12.5B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$14.2B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$14.2B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2007,
                "x": 318,
                "lowerY": 628.677986806654,
                "upperY": 619.593925519538,
                "displayedValue": "$14.2B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$18.1B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$18.1B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2008,
                "x": 344.5,
                "lowerY": 627.531137901676,
                "upperY": 615.93907269514,
                "displayedValue": "$18.1B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$15.5B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$15.5B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2009,
                "x": 371,
                "lowerY": 629.486048402769,
                "upperY": 619.538396244003,
                "displayedValue": "$15.5B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$22.1B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$22.1B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2010,
                "x": 397.5,
                "lowerY": 626.745687794014,
                "upperY": 612.60060036758,
                "displayedValue": "$22.1B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$27.4B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$27.4B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2011,
                "x": 424,
                "lowerY": 625.818015383164,
                "upperY": 608.232020477381,
                "displayedValue": "$27.4B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$23.5B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$23.5B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2012,
                "x": 450.5,
                "lowerY": 626.636963904041,
                "upperY": 611.579491093713,
                "displayedValue": "$23.5B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$19.3B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$19.3B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2013,
                "x": 477,
                "lowerY": 627.378950247759,
                "upperY": 614.987275393555,
                "displayedValue": "$19.3B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$18.0B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$18.0B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2014,
                "x": 503.5,
                "lowerY": 627.408741995144,
                "upperY": 615.841368091942,
                "displayedValue": "$18.0B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$17.2B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$17.2B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2015,
                "x": 530,
                "lowerY": 627.557093518538,
                "upperY": 616.526644773368,
                "displayedValue": "$17.2B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$22.6B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$22.6B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2016,
                "x": 556.5,
                "lowerY": 626.797653049295,
                "upperY": 612.300893260831,
                "displayedValue": "$22.6B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$23.3B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$23.3B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2017,
                "x": 583,
                "lowerY": 626.226882737431,
                "upperY": 611.291522802008,
                "displayedValue": "$23.3B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$20.0B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$20.0B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2018,
                "x": 609.5,
                "lowerY": 625.079032749421,
                "upperY": 612.230616588036,
                "displayedValue": "$20.0B",
                "ribbonId": 2
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$19.7B"
                    },
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "2 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$19.7B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2019,
                "x": 636,
                "lowerY": 625.802752245637,
                "upperY": 613.169968888723,
                "displayedValue": "$19.7B",
                "ribbonId": 2
            }
        ],
        "id": 2,
        "section": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "textInRibbon": {
            "showText": false
        }
    },
    {
        "color": "rgb(187, 150, 138)",
        "path": "M 0 623.998835479553 C 0 623.998835479553, 17.666666666666668 625.1427489559057, 26.5 625.38773907952 C 35.33333333333333 625.6327292031342, 44.16666666666667 625.1328783886718, 53 625.468776221238 C 61.83333333333333 625.8046740538043, 70.66666666666667 627.2604248362941, 79.5 627.403126074918 C 88.33333333333333 627.5458273135418, 97.16666666666667 626.6141758754277, 106 626.324983652981 C 114.83333333333333 626.0357914305343, 123.66666666666667 625.5082116887348, 132.5 625.667972740238 C 141.33333333333334 625.8277337917413, 150.16666666666666 627.0622487395099, 159 627.283549962 C 167.83333333333334 627.5048511844902, 176.66666666666666 627.3229242600421, 185.5 626.995780075179 C 194.33333333333334 626.668635890316, 203.16666666666666 626.0131121981032, 212 625.320684852822 C 220.83333333333334 624.6282575075408, 229.66666666666666 623.6042850231, 238.5 622.841216003492 C 247.33333333333334 622.078146983884, 256.1666666666667 621.6621244428658, 265 620.742270735174 C 273.8333333333333 619.8224170274822, 282.6666666666667 618.5796996393414, 291.5 617.322093757341 C 300.3333333333333 616.0644878753407, 309.1666666666667 615.5105129275327, 318 613.196635443172 C 326.8333333333333 610.8827579588113, 335.6666666666667 603.5691442936927, 344.5 603.438828851177 C 353.3333333333333 603.3085134086614, 362.1666666666667 612.3639759086848, 371 612.414742788078 C 379.8333333333333 612.4655096674712, 388.6666666666667 606.2951478412831, 397.5 603.743430127536 C 406.3333333333333 601.191712413789, 415.1666666666667 597.3295114736047, 424 597.104436505596 C 432.8333333333333 596.8793615375873, 441.6666666666667 601.2885416807411, 450.5 602.392980319484 C 459.3333333333333 603.4974189582268, 468.1666666666667 603.2648373418849, 477 603.731068338053 C 485.8333333333333 604.197299334221, 494.6666666666667 604.3636308597537, 503.5 605.190366296492 C 512.3333333333334 606.0171017332303, 521.1666666666666 608.6095283808412, 530 608.691480958483 C 538.8333333333334 608.7734335361248, 547.6666666666666 606.5572944375853, 556.5 605.682081762343 C 565.3333333333334 604.8068690871008, 574.1666666666666 603.8956598334033, 583 603.44020490703 C 591.8333333333334 602.9847499806566, 600.6666666666666 602.9551923490135, 609.5 602.949352204103 C 618.3333333333334 602.9435120591925, 636 603.405164037567, 636 603.405164037567 \n        L 636 613.169968888723\n       C 636 613.169968888723, 618.3333333333334 612.5436909358218, 609.5 612.230616588036 C 600.6666666666666 611.9175422402502, 591.8333333333334 611.2798100232088, 583 611.291522802008 C 574.1666666666666 611.3032355808072, 565.3333333333334 611.428372932271, 556.5 612.300893260831 C 547.6666666666666 613.173413589391, 538.8333333333334 615.9365656348496, 530 616.526644773368 C 521.1666666666666 617.1167239118865, 512.3333333333334 616.0979296552441, 503.5 615.841368091942 C 494.6666666666667 615.5848065286398, 485.8333333333333 615.6975882265932, 477 614.987275393555 C 468.1666666666667 614.2769625605168, 459.3333333333333 612.7053669130754, 450.5 611.579491093713 C 441.6666666666667 610.4536152743507, 432.8333333333333 608.0618355984031, 424 608.232020477381 C 415.1666666666667 608.4022053563588, 406.3333333333333 610.7162044064763, 397.5 612.60060036758 C 388.6666666666667 614.4849963286837, 379.8333333333333 618.9819841894097, 371 619.538396244003 C 362.1666666666667 620.0948082985964, 353.3333333333333 615.9298178158842, 344.5 615.93907269514 C 335.6666666666667 615.9483275743958, 326.8333333333333 618.6398030432287, 318 619.593925519538 C 309.1666666666667 620.5480479958472, 300.3333333333333 620.9319561605945, 291.5 621.663807552996 C 282.6666666666667 622.3956589453975, 273.8333333333333 623.4668937208951, 265 623.985033873947 C 256.1666666666667 624.503174026999, 247.33333333333334 624.2803979361555, 238.5 624.772648471308 C 229.66666666666666 625.2648990064605, 220.83333333333334 626.354466730662, 212 626.938537084862 C 203.16666666666666 627.522607439062, 194.33333333333334 628.0122066390328, 185.5 628.277070596508 C 176.66666666666666 628.5419345539832, 167.83333333333334 628.7587987408208, 159 628.527720829713 C 150.16666666666666 628.2966429186051, 141.33333333333334 627.0333780176755, 132.5 626.890603129861 C 123.66666666666667 626.7478282420465, 114.83333333333333 627.3764677565712, 106 627.671071502826 C 97.16666666666667 627.9656752490807, 88.33333333333333 628.6769089227412, 79.5 628.65822560739 C 70.66666666666667 628.6395422920389, 61.83333333333333 627.7425156361857, 53 627.558971610719 C 44.16666666666667 627.3754275852524, 35.33333333333333 627.70036107735, 26.5 627.55696145459 C 17.666666666666668 627.4135618318301, 0 626.698573874159, 0 626.698573874159 \n      L 0 623.998835479553\n      M 0 623.998835479553\n      Z\n    ",
        "dataPoints": [
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$4.21B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$4.21B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1995,
                "x": 0,
                "lowerY": 626.698573874159,
                "upperY": 623.998835479553,
                "displayedValue": "$4.21B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$3.38B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1996
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1996
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$3.38B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1996,
                "x": 26.5,
                "lowerY": 627.55696145459,
                "upperY": 625.38773907952,
                "displayedValue": "$3.38B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$3.26B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1997
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1997
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$3.26B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1997,
                "x": 53,
                "lowerY": 627.558971610719,
                "upperY": 625.468776221238,
                "displayedValue": "$3.26B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$1.96B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1998
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1998
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$1.96B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1998,
                "x": 79.5,
                "lowerY": 628.65822560739,
                "upperY": 627.403126074918,
                "displayedValue": "$1.96B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$2.10B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$2.10B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1999,
                "x": 106,
                "lowerY": 627.671071502826,
                "upperY": 626.324983652981,
                "displayedValue": "$2.10B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$1.91B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$1.91B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2000,
                "x": 132.5,
                "lowerY": 626.890603129861,
                "upperY": 625.667972740238,
                "displayedValue": "$1.91B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$1.94B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$1.94B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2001,
                "x": 159,
                "lowerY": 628.527720829713,
                "upperY": 627.283549962,
                "displayedValue": "$1.94B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$2.00B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$2.00B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2002,
                "x": 185.5,
                "lowerY": 628.277070596508,
                "upperY": 626.995780075179,
                "displayedValue": "$2.00B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$2.52B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$2.52B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2003,
                "x": 212,
                "lowerY": 626.938537084862,
                "upperY": 625.320684852822,
                "displayedValue": "$2.52B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$3.01B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$3.01B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2004,
                "x": 238.5,
                "lowerY": 624.772648471308,
                "upperY": 622.841216003492,
                "displayedValue": "$3.01B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$5.06B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$5.06B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2005,
                "x": 265,
                "lowerY": 623.985033873947,
                "upperY": 620.742270735174,
                "displayedValue": "$5.06B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$6.77B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$6.77B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2006,
                "x": 291.5,
                "lowerY": 621.663807552996,
                "upperY": 617.322093757341,
                "displayedValue": "$6.77B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$9.98B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$9.98B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2007,
                "x": 318,
                "lowerY": 619.593925519538,
                "upperY": 613.196635443172,
                "displayedValue": "$9.98B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$19.5B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$19.5B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2008,
                "x": 344.5,
                "lowerY": 615.93907269514,
                "upperY": 603.438828851177,
                "displayedValue": "$19.5B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$11.1B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$11.1B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2009,
                "x": 371,
                "lowerY": 619.538396244003,
                "upperY": 612.414742788078,
                "displayedValue": "$11.1B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$13.8B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$13.8B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2010,
                "x": 397.5,
                "lowerY": 612.60060036758,
                "upperY": 603.743430127536,
                "displayedValue": "$13.8B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$17.4B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$17.4B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2011,
                "x": 424,
                "lowerY": 608.232020477381,
                "upperY": 597.104436505596,
                "displayedValue": "$17.4B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$14.3B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$14.3B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2012,
                "x": 450.5,
                "lowerY": 611.579491093713,
                "upperY": 602.392980319484,
                "displayedValue": "$14.3B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$17.6B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$17.6B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2013,
                "x": 477,
                "lowerY": 614.987275393555,
                "upperY": 603.731068338053,
                "displayedValue": "$17.6B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$16.6B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$16.6B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2014,
                "x": 503.5,
                "lowerY": 615.841368091942,
                "upperY": 605.190366296492,
                "displayedValue": "$16.6B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$12.2B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$12.2B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2015,
                "x": 530,
                "lowerY": 616.526644773368,
                "upperY": 608.691480958483,
                "displayedValue": "$12.2B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$10.3B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$10.3B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2016,
                "x": 556.5,
                "lowerY": 612.300893260831,
                "upperY": 605.682081762343,
                "displayedValue": "$10.3B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$12.2B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$12.2B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2017,
                "x": 583,
                "lowerY": 611.291522802008,
                "upperY": 603.44020490703,
                "displayedValue": "$12.2B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$14.5B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$14.5B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2018,
                "x": 609.5,
                "lowerY": 612.230616588036,
                "upperY": 602.949352204103,
                "displayedValue": "$14.5B",
                "ribbonId": 3
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$15.2B"
                    },
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "3 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$15.2B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2019,
                "x": 636,
                "lowerY": 613.169968888723,
                "upperY": 603.405164037567,
                "displayedValue": "$15.2B",
                "ribbonId": 3
            }
        ],
        "id": 3,
        "section": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "textInRibbon": {
            "showText": false
        }
    },
    {
        "color": "rgb(217, 123, 123)",
        "path": "M 0 604.81172915284 C 0 604.81172915284, 17.666666666666668 607.3105319190602, 26.5 607.718826695697 C 35.33333333333333 608.1271214723338, 44.16666666666667 606.8174788678258, 53 607.261497812661 C 61.83333333333333 607.7055167574962, 70.66666666666667 609.9327240414958, 79.5 610.382940364708 C 88.33333333333333 610.8331566879202, 97.16666666666667 610.276155568322, 106 609.962795751934 C 114.83333333333333 609.649435935546, 123.66666666666667 608.2135747091515, 132.5 608.50278146638 C 141.33333333333334 608.7919882236085, 150.16666666666666 611.5593117997419, 159 611.698036295305 C 167.83333333333334 611.8367607908681, 176.66666666666666 610.4049051148222, 185.5 609.335128439759 C 194.33333333333334 608.2653517646959, 203.16666666666666 607.3939479877326, 212 605.279376244926 C 220.83333333333334 603.1648045021193, 229.66666666666666 599.0807970444865, 238.5 596.647697982919 C 247.33333333333334 594.2145989213515, 256.1666666666667 592.968862290951, 265 590.680781875521 C 273.8333333333333 588.392701460091, 282.6666666666667 585.7790846126861, 291.5 582.919215490339 C 300.3333333333333 580.0593463679918, 309.1666666666667 577.8687913024602, 318 573.521567141438 C 326.8333333333333 569.1743429804159, 335.6666666666667 556.2784127690279, 344.5 556.835870524206 C 353.3333333333333 557.3933282793841, 362.1666666666667 576.74205637569, 371 576.866313672507 C 379.8333333333333 576.9905709693239, 388.6666666666667 562.5929941583607, 397.5 557.581414305108 C 406.3333333333333 552.5698344518552, 415.1666666666667 547.4182472580944, 424 546.79683455299 C 432.8333333333333 546.1754218478857, 441.6666666666667 551.6486925893882, 450.5 553.852938074482 C 459.3333333333333 556.0571835595758, 468.1666666666667 558.4438442420008, 477 560.022307463553 C 485.8333333333333 561.6007706851053, 494.6666666666667 561.0885399064595, 503.5 563.323717403796 C 512.3333333333334 565.5588949011325, 521.1666666666666 571.7824411320174, 530 573.433372447572 C 538.8333333333334 575.0843037631265, 547.6666666666666 574.1635137749387, 556.5 573.229305297123 C 565.3333333333334 572.2950968193073, 574.1666666666666 569.3040134711665, 583 567.828121580678 C 591.8333333333334 566.3522296901896, 600.6666666666666 564.2516606515685, 609.5 564.373953954192 C 618.3333333333334 564.4962472568154, 636 568.561881396419, 636 568.561881396419 \n        L 636 603.405164037567\n       C 636 603.405164037567, 618.3333333333334 602.9435120591925, 609.5 602.949352204103 C 600.6666666666666 602.9551923490135, 591.8333333333334 602.9847499806566, 583 603.44020490703 C 574.1666666666666 603.8956598334033, 565.3333333333334 604.8068690871008, 556.5 605.682081762343 C 547.6666666666666 606.5572944375853, 538.8333333333334 608.7734335361248, 530 608.691480958483 C 521.1666666666666 608.6095283808412, 512.3333333333334 606.0171017332303, 503.5 605.190366296492 C 494.6666666666667 604.3636308597537, 485.8333333333333 604.197299334221, 477 603.731068338053 C 468.1666666666667 603.2648373418849, 459.3333333333333 603.4974189582268, 450.5 602.392980319484 C 441.6666666666667 601.2885416807411, 432.8333333333333 596.8793615375873, 424 597.104436505596 C 415.1666666666667 597.3295114736047, 406.3333333333333 601.191712413789, 397.5 603.743430127536 C 388.6666666666667 606.2951478412831, 379.8333333333333 612.4655096674712, 371 612.414742788078 C 362.1666666666667 612.3639759086848, 353.3333333333333 603.3085134086614, 344.5 603.438828851177 C 335.6666666666667 603.5691442936927, 326.8333333333333 610.8827579588113, 318 613.196635443172 C 309.1666666666667 615.5105129275327, 300.3333333333333 616.0644878753407, 291.5 617.322093757341 C 282.6666666666667 618.5796996393414, 273.8333333333333 619.8224170274822, 265 620.742270735174 C 256.1666666666667 621.6621244428658, 247.33333333333334 622.078146983884, 238.5 622.841216003492 C 229.66666666666666 623.6042850231, 220.83333333333334 624.6282575075408, 212 625.320684852822 C 203.16666666666666 626.0131121981032, 194.33333333333334 626.668635890316, 185.5 626.995780075179 C 176.66666666666666 627.3229242600421, 167.83333333333334 627.5048511844902, 159 627.283549962 C 150.16666666666666 627.0622487395099, 141.33333333333334 625.8277337917413, 132.5 625.667972740238 C 123.66666666666667 625.5082116887348, 114.83333333333333 626.0357914305343, 106 626.324983652981 C 97.16666666666667 626.6141758754277, 88.33333333333333 627.5458273135418, 79.5 627.403126074918 C 70.66666666666667 627.2604248362941, 61.83333333333333 625.8046740538043, 53 625.468776221238 C 44.16666666666667 625.1328783886718, 35.33333333333333 625.6327292031342, 26.5 625.38773907952 C 17.666666666666668 625.1427489559057, 0 623.998835479553, 0 623.998835479553 \n      L 0 604.81172915284\n      M 0 604.81172915284\n      Z\n    ",
        "dataPoints": [
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$29.9B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$29.9B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1995,
                "x": 0,
                "lowerY": 623.998835479553,
                "upperY": 604.81172915284,
                "displayedValue": "$29.9B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$27.6B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1996
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1996
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$27.6B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1996,
                "x": 26.5,
                "lowerY": 625.38773907952,
                "upperY": 607.718826695697,
                "displayedValue": "$27.6B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$28.4B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1997
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1997
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$28.4B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1997,
                "x": 53,
                "lowerY": 625.468776221238,
                "upperY": 607.261497812661,
                "displayedValue": "$28.4B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$26.6B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1998
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1998
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$26.6B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1998,
                "x": 79.5,
                "lowerY": 627.403126074918,
                "upperY": 610.382940364708,
                "displayedValue": "$26.6B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$25.5B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$25.5B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1999,
                "x": 106,
                "lowerY": 626.324983652981,
                "upperY": 609.962795751934,
                "displayedValue": "$25.5B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$26.8B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$26.8B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2000,
                "x": 132.5,
                "lowerY": 625.667972740238,
                "upperY": 608.50278146638,
                "displayedValue": "$26.8B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$24.3B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$24.3B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2001,
                "x": 159,
                "lowerY": 627.283549962,
                "upperY": 611.698036295305,
                "displayedValue": "$24.3B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$27.6B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$27.6B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2002,
                "x": 185.5,
                "lowerY": 626.995780075179,
                "upperY": 609.335128439759,
                "displayedValue": "$27.6B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$31.3B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$31.3B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2003,
                "x": 212,
                "lowerY": 625.320684852822,
                "upperY": 605.279376244926,
                "displayedValue": "$31.3B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$40.9B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$40.9B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2004,
                "x": 238.5,
                "lowerY": 622.841216003492,
                "upperY": 596.647697982919,
                "displayedValue": "$40.9B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$46.9B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$46.9B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2005,
                "x": 265,
                "lowerY": 620.742270735174,
                "upperY": 590.680781875521,
                "displayedValue": "$46.9B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$53.7B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$53.7B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2006,
                "x": 291.5,
                "lowerY": 617.322093757341,
                "upperY": 582.919215490339,
                "displayedValue": "$53.7B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$61.9B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$61.9B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2007,
                "x": 318,
                "lowerY": 613.196635443172,
                "upperY": 573.521567141438,
                "displayedValue": "$61.9B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$72.7B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$72.7B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2008,
                "x": 344.5,
                "lowerY": 603.438828851177,
                "upperY": 556.835870524206,
                "displayedValue": "$72.7B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$55.5B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$55.5B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2009,
                "x": 371,
                "lowerY": 612.414742788078,
                "upperY": 576.866313672507,
                "displayedValue": "$55.5B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$72.0B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$72.0B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2010,
                "x": 397.5,
                "lowerY": 603.743430127536,
                "upperY": 557.581414305108,
                "displayedValue": "$72.0B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$78.5B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$78.5B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2011,
                "x": 424,
                "lowerY": 597.104436505596,
                "upperY": 546.79683455299,
                "displayedValue": "$78.5B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$75.7B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$75.7B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2012,
                "x": 450.5,
                "lowerY": 602.392980319484,
                "upperY": 553.852938074482,
                "displayedValue": "$75.7B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$68.2B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$68.2B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2013,
                "x": 477,
                "lowerY": 603.731068338053,
                "upperY": 560.022307463553,
                "displayedValue": "$68.2B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$65.3B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$65.3B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2014,
                "x": 503.5,
                "lowerY": 605.190366296492,
                "upperY": 563.323717403796,
                "displayedValue": "$65.3B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$55.0B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$55.0B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2015,
                "x": 530,
                "lowerY": 608.691480958483,
                "upperY": 573.433372447572,
                "displayedValue": "$55.0B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$50.6B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$50.6B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2016,
                "x": 556.5,
                "lowerY": 605.682081762343,
                "upperY": 573.229305297123,
                "displayedValue": "$50.6B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$55.6B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$55.6B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2017,
                "x": 583,
                "lowerY": 603.44020490703,
                "upperY": 567.828121580678,
                "displayedValue": "$55.6B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$60.2B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$60.2B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2018,
                "x": 609.5,
                "lowerY": 602.949352204103,
                "upperY": 564.373953954192,
                "displayedValue": "$60.2B",
                "ribbonId": 4
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$54.4B"
                    },
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "4 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$54.4B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2019,
                "x": 636,
                "lowerY": 603.405164037567,
                "upperY": 568.561881396419,
                "displayedValue": "$54.4B",
                "ribbonId": 4
            }
        ],
        "id": 4,
        "section": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "textInRibbon": {
            "showText": true,
            "centerX": 510.87443530838937,
            "centerY": 586.6566344635298,
            "width": 244.71870746823078,
            "height": 20.85895013001895,
            "angle": 0,
            "textSplitIntoLines": [
                "Metals"
            ],
            "textUnsplit": "Metals",
            "fontSize": 18.538312494254228
        }
    },
    {
        "color": "rgb(197, 123, 217)",
        "path": "M 0 577.020307083678 C 0 577.020307083678, 17.666666666666668 580.4828763146846, 26.5 580.972880536595 C 35.33333333333333 581.4628847585053, 44.16666666666667 579.2585894010475, 53 579.96033241514 C 61.83333333333333 580.6620754292325, 70.66666666666667 584.8665482584423, 79.5 585.18333862115 C 88.33333333333333 585.5001289838577, 97.16666666666667 582.901640544006, 106 581.861074591386 C 114.83333333333333 580.820508638766, 123.66666666666667 578.3277229837748, 132.5 578.93994290543 C 141.33333333333334 579.5521628270852, 150.16666666666666 585.4179084567846, 159 585.534394121317 C 167.83333333333334 585.6508797858493, 176.66666666666666 582.0642230085002, 185.5 579.638856892624 C 194.33333333333334 577.2134907767477, 203.16666666666666 575.0576800341012, 212 570.982197426059 C 220.83333333333334 566.9067148180168, 229.66666666666666 559.5018227663592, 238.5 555.185961244371 C 247.33333333333334 550.8700997223829, 256.1666666666667 548.6921784313945, 265 545.08702829413 C 273.8333333333333 541.4818781568656, 282.6666666666667 538.0171655527297, 291.5 533.555060420784 C 300.3333333333333 529.0929552888383, 309.1666666666667 524.2136998371627, 318 518.314397502456 C 326.8333333333333 512.4150951677493, 335.6666666666667 497.1196879256067, 344.5 498.159246412544 C 353.3333333333333 499.19880489948133, 362.1666666666667 525.63848065177, 371 524.55174842408 C 379.8333333333333 523.4650161963899, 388.6666666666667 499.9105423210465, 397.5 491.638853046404 C 406.3333333333333 483.3671637717615, 415.1666666666667 475.6738560447991, 424 474.92161277622495 C 432.8333333333333 474.1693695076508, 441.6666666666667 483.539026410122, 450.5 487.125393434959 C 459.3333333333333 490.711760459796, 468.1666666666667 493.80437510421484, 477 496.439814925247 C 485.8333333333333 499.07525474627914, 494.6666666666667 498.8894542584037, 503.5 502.938032361152 C 512.3333333333334 506.9866104639003, 521.1666666666666 518.1623018804345, 530 520.731283541737 C 538.8333333333334 523.3002652030394, 547.6666666666666 520.560773855346, 556.5 518.351922328967 C 565.3333333333334 516.143070802588, 574.1666666666666 510.684301707599, 583 507.478174383463 C 591.8333333333334 504.272047059327, 600.6666666666666 499.84738077090014, 609.5 499.11515838415096 C 618.3333333333334 498.3829359974018, 636 503.084840062968, 636 503.084840062968 \n        L 636 568.561881396419\n       C 636 568.561881396419, 618.3333333333334 564.4962472568154, 609.5 564.373953954192 C 600.6666666666666 564.2516606515685, 591.8333333333334 566.3522296901896, 583 567.828121580678 C 574.1666666666666 569.3040134711665, 565.3333333333334 572.2950968193073, 556.5 573.229305297123 C 547.6666666666666 574.1635137749387, 538.8333333333334 575.0843037631265, 530 573.433372447572 C 521.1666666666666 571.7824411320174, 512.3333333333334 565.5588949011325, 503.5 563.323717403796 C 494.6666666666667 561.0885399064595, 485.8333333333333 561.6007706851053, 477 560.022307463553 C 468.1666666666667 558.4438442420008, 459.3333333333333 556.0571835595758, 450.5 553.852938074482 C 441.6666666666667 551.6486925893882, 432.8333333333333 546.1754218478857, 424 546.79683455299 C 415.1666666666667 547.4182472580944, 406.3333333333333 552.5698344518552, 397.5 557.581414305108 C 388.6666666666667 562.5929941583607, 379.8333333333333 576.9905709693239, 371 576.866313672507 C 362.1666666666667 576.74205637569, 353.3333333333333 557.3933282793841, 344.5 556.835870524206 C 335.6666666666667 556.2784127690279, 326.8333333333333 569.1743429804159, 318 573.521567141438 C 309.1666666666667 577.8687913024602, 300.3333333333333 580.0593463679918, 291.5 582.919215490339 C 282.6666666666667 585.7790846126861, 273.8333333333333 588.392701460091, 265 590.680781875521 C 256.1666666666667 592.968862290951, 247.33333333333334 594.2145989213515, 238.5 596.647697982919 C 229.66666666666666 599.0807970444865, 220.83333333333334 603.1648045021193, 212 605.279376244926 C 203.16666666666666 607.3939479877326, 194.33333333333334 608.2653517646959, 185.5 609.335128439759 C 176.66666666666666 610.4049051148222, 167.83333333333334 611.8367607908681, 159 611.698036295305 C 150.16666666666666 611.5593117997419, 141.33333333333334 608.7919882236085, 132.5 608.50278146638 C 123.66666666666667 608.2135747091515, 114.83333333333333 609.649435935546, 106 609.962795751934 C 97.16666666666667 610.276155568322, 88.33333333333333 610.8331566879202, 79.5 610.382940364708 C 70.66666666666667 609.9327240414958, 61.83333333333333 607.7055167574962, 53 607.261497812661 C 44.16666666666667 606.8174788678258, 35.33333333333333 608.1271214723338, 26.5 607.718826695697 C 17.666666666666668 607.3105319190602, 0 604.81172915284, 0 604.81172915284 \n      L 0 577.020307083678\n      M 0 577.020307083678\n      Z\n    ",
        "dataPoints": [
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$43.4B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$43.4B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1995,
                "x": 0,
                "lowerY": 604.81172915284,
                "upperY": 577.020307083678,
                "displayedValue": "$43.4B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$41.7B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1996
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1996
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$41.7B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1996,
                "x": 26.5,
                "lowerY": 607.718826695697,
                "upperY": 580.972880536595,
                "displayedValue": "$41.7B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$42.6B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1997
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1997
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$42.6B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1997,
                "x": 53,
                "lowerY": 607.261497812661,
                "upperY": 579.96033241514,
                "displayedValue": "$42.6B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$39.3B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1998
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1998
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$39.3B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1998,
                "x": 79.5,
                "lowerY": 610.382940364708,
                "upperY": 585.18333862115,
                "displayedValue": "$39.3B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$43.8B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$43.8B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1999,
                "x": 106,
                "lowerY": 609.962795751934,
                "upperY": 581.861074591386,
                "displayedValue": "$43.8B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$46.1B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$46.1B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2000,
                "x": 132.5,
                "lowerY": 608.50278146638,
                "upperY": 578.93994290543,
                "displayedValue": "$46.1B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$40.8B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$40.8B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2001,
                "x": 159,
                "lowerY": 611.698036295305,
                "upperY": 585.534394121317,
                "displayedValue": "$40.8B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$46.3B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$46.3B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2002,
                "x": 185.5,
                "lowerY": 609.335128439759,
                "upperY": 579.638856892624,
                "displayedValue": "$46.3B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$53.5B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$53.5B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2003,
                "x": 212,
                "lowerY": 605.279376244926,
                "upperY": 570.982197426059,
                "displayedValue": "$53.5B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$64.7B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$64.7B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2004,
                "x": 238.5,
                "lowerY": 596.647697982919,
                "upperY": 555.185961244371,
                "displayedValue": "$64.7B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$71.1B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$71.1B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2005,
                "x": 265,
                "lowerY": 590.680781875521,
                "upperY": 545.08702829413,
                "displayedValue": "$71.1B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$77.0B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$77.0B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2006,
                "x": 291.5,
                "lowerY": 582.919215490339,
                "upperY": 533.555060420784,
                "displayedValue": "$77.0B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$86.1B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$86.1B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2007,
                "x": 318,
                "lowerY": 573.521567141438,
                "upperY": 518.314397502456,
                "displayedValue": "$86.1B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$91.5B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$91.5B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2008,
                "x": 344.5,
                "lowerY": 556.835870524206,
                "upperY": 498.159246412544,
                "displayedValue": "$91.5B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$81.6B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$81.6B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2009,
                "x": 371,
                "lowerY": 576.866313672507,
                "upperY": 524.55174842408,
                "displayedValue": "$81.6B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$103B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$103B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2010,
                "x": 397.5,
                "lowerY": 557.581414305108,
                "upperY": 491.638853046404,
                "displayedValue": "$103B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$112B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$112B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2011,
                "x": 424,
                "lowerY": 546.79683455299,
                "upperY": 474.92161277622495,
                "displayedValue": "$112B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$104B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$104B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2012,
                "x": 450.5,
                "lowerY": 553.852938074482,
                "upperY": 487.125393434959,
                "displayedValue": "$104B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$99.2B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$99.2B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2013,
                "x": 477,
                "lowerY": 560.022307463553,
                "upperY": 496.439814925247,
                "displayedValue": "$99.2B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$94.2B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$94.2B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2014,
                "x": 503.5,
                "lowerY": 563.323717403796,
                "upperY": 502.938032361152,
                "displayedValue": "$94.2B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$82.2B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$82.2B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2015,
                "x": 530,
                "lowerY": 573.433372447572,
                "upperY": 520.731283541737,
                "displayedValue": "$82.2B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$85.6B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$85.6B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2016,
                "x": 556.5,
                "lowerY": 573.229305297123,
                "upperY": 518.351922328967,
                "displayedValue": "$85.6B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$94.1B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$94.1B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2017,
                "x": 583,
                "lowerY": 567.828121580678,
                "upperY": 507.478174383463,
                "displayedValue": "$94.1B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$102B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$102B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2018,
                "x": 609.5,
                "lowerY": 564.373953954192,
                "upperY": 499.11515838415096,
                "displayedValue": "$102B",
                "ribbonId": 5
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$102B"
                    },
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "5 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$102B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2019,
                "x": 636,
                "lowerY": 568.561881396419,
                "upperY": 503.084840062968,
                "displayedValue": "$102B",
                "ribbonId": 5
            }
        ],
        "id": 5,
        "section": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "textInRibbon": {
            "showText": true,
            "centerX": 485.9298199816253,
            "centerY": 528.7753010768477,
            "width": 178.5217081119958,
            "height": 37.757347184340546,
            "angle": -15,
            "textSplitIntoLines": [
                "Chemicals"
            ],
            "textUnsplit": "Chemicals",
            "fontSize": 25.799520254525678
        }
    },
    {
        "color": "rgb(141, 123, 216)",
        "path": "M 0 518.519766343784 C 0 518.519766343784, 17.666666666666668 525.6625561224733, 26.5 525.91820071893 C 35.33333333333333 526.1738453153868, 44.16666666666667 520.0269277790603, 53 520.053633922524 C 61.83333333333333 520.0803400659877, 70.66666666666667 526.1558798718537, 79.5 526.078437579712 C 88.33333333333333 526.0009952875704, 97.16666666666667 521.0566028665845, 106 519.588980169674 C 114.83333333333333 518.1213574727634, 123.66666666666667 515.52372966825, 132.5 517.272701398249 C 141.33333333333334 519.0216731282479, 150.16666666666666 530.8777492588605, 159 530.082810549668 C 167.83333333333334 529.2878718404755, 176.66666666666666 517.8947124352951, 185.5 512.503069143094 C 194.33333333333334 507.11142585089283, 203.16666666666666 504.609507047567, 212 497.732950796461 C 220.83333333333334 490.85639454535504, 229.66666666666666 478.30271235087054, 238.5 471.24373163645805 C 247.33333333333334 464.18475092204557, 256.1666666666667 461.861207850499, 265 455.379066509986 C 273.8333333333333 448.896925169473, 282.6666666666667 440.848817349612, 291.5 432.35088359338 C 300.3333333333333 423.852949837148, 309.1666666666667 414.2952046029555, 318 404.391463972594 C 326.8333333333333 394.4877233422325, 335.6666666666667 366.7219485088922, 344.5 372.92843981121104 C 353.3333333333333 379.1349311135299, 362.1666666666667 440.51036353937434, 371 441.630411786507 C 379.8333333333333 442.7504600336397, 388.6666666666667 393.0939497491457, 397.5 379.648729294007 C 406.3333333333333 366.20350883886834, 415.1666666666667 362.4484533887613, 424 360.959089055675 C 432.8333333333333 359.4697247225887, 441.6666666666667 365.2779946011965, 450.5 370.712543295489 C 459.3333333333333 376.14709198978153, 468.1666666666667 387.72885822325014, 477 393.56638122143 C 485.8333333333333 399.40390421960984, 494.6666666666667 399.84611578407214, 503.5 405.737681284568 C 512.3333333333334 411.62924678506386, 521.1666666666666 427.27532743763635, 530 428.915774224405 C 538.8333333333334 430.5562210111737, 547.6666666666666 420.08810886875517, 556.5 415.58036200518 C 565.3333333333334 411.07261514160484, 574.1666666666666 406.5002585372022, 583 401.86929304295404 C 591.8333333333334 397.23832754870585, 600.6666666666666 388.81184481006665, 609.5 387.794569039691 C 618.3333333333334 386.77729326931535, 636 395.76563842070004, 636 395.76563842070004 \n        L 636 503.084840062968\n       C 636 503.084840062968, 618.3333333333334 498.3829359974018, 609.5 499.11515838415096 C 600.6666666666666 499.84738077090014, 591.8333333333334 504.272047059327, 583 507.478174383463 C 574.1666666666666 510.684301707599, 565.3333333333334 516.143070802588, 556.5 518.351922328967 C 547.6666666666666 520.560773855346, 538.8333333333334 523.3002652030394, 530 520.731283541737 C 521.1666666666666 518.1623018804345, 512.3333333333334 506.9866104639003, 503.5 502.938032361152 C 494.6666666666667 498.8894542584037, 485.8333333333333 499.07525474627914, 477 496.439814925247 C 468.1666666666667 493.80437510421484, 459.3333333333333 490.711760459796, 450.5 487.125393434959 C 441.6666666666667 483.539026410122, 432.8333333333333 474.1693695076508, 424 474.92161277622495 C 415.1666666666667 475.6738560447991, 406.3333333333333 483.3671637717615, 397.5 491.638853046404 C 388.6666666666667 499.9105423210465, 379.8333333333333 523.4650161963899, 371 524.55174842408 C 362.1666666666667 525.63848065177, 353.3333333333333 499.19880489948133, 344.5 498.159246412544 C 335.6666666666667 497.1196879256067, 326.8333333333333 512.4150951677493, 318 518.314397502456 C 309.1666666666667 524.2136998371627, 300.3333333333333 529.0929552888383, 291.5 533.555060420784 C 282.6666666666667 538.0171655527297, 273.8333333333333 541.4818781568656, 265 545.08702829413 C 256.1666666666667 548.6921784313945, 247.33333333333334 550.8700997223829, 238.5 555.185961244371 C 229.66666666666666 559.5018227663592, 220.83333333333334 566.9067148180168, 212 570.982197426059 C 203.16666666666666 575.0576800341012, 194.33333333333334 577.2134907767477, 185.5 579.638856892624 C 176.66666666666666 582.0642230085002, 167.83333333333334 585.6508797858493, 159 585.534394121317 C 150.16666666666666 585.4179084567846, 141.33333333333334 579.5521628270852, 132.5 578.93994290543 C 123.66666666666667 578.3277229837748, 114.83333333333333 580.820508638766, 106 581.861074591386 C 97.16666666666667 582.901640544006, 88.33333333333333 585.5001289838577, 79.5 585.18333862115 C 70.66666666666667 584.8665482584423, 61.83333333333333 580.6620754292325, 53 579.96033241514 C 44.16666666666667 579.2585894010475, 35.33333333333333 581.4628847585053, 26.5 580.972880536595 C 17.666666666666668 580.4828763146846, 0 577.020307083678, 0 577.020307083678 \n      L 0 518.519766343784\n      M 0 518.519766343784\n      Z\n    ",
        "dataPoints": [
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$91.3B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$91.3B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1995,
                "x": 0,
                "lowerY": 577.020307083678,
                "upperY": 518.519766343784,
                "displayedValue": "$91.3B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$85.9B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1996
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1996
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$85.9B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1996,
                "x": 26.5,
                "lowerY": 580.972880536595,
                "upperY": 525.91820071893,
                "displayedValue": "$85.9B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$93.5B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1997
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1997
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$93.5B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1997,
                "x": 53,
                "lowerY": 579.96033241514,
                "upperY": 520.053633922524,
                "displayedValue": "$93.5B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$92.2B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1998
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1998
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$92.2B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1998,
                "x": 79.5,
                "lowerY": 585.18333862115,
                "upperY": 526.078437579712,
                "displayedValue": "$92.2B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$97.1B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$97.1B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1999,
                "x": 106,
                "lowerY": 581.861074591386,
                "upperY": 519.588980169674,
                "displayedValue": "$97.1B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$96.2B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$96.2B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2000,
                "x": 132.5,
                "lowerY": 578.93994290543,
                "upperY": 517.272701398249,
                "displayedValue": "$96.2B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$86.5B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$86.5B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2001,
                "x": 159,
                "lowerY": 585.534394121317,
                "upperY": 530.082810549668,
                "displayedValue": "$86.5B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$105B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$105B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2002,
                "x": 185.5,
                "lowerY": 579.638856892624,
                "upperY": 512.503069143094,
                "displayedValue": "$105B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$114B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$114B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2003,
                "x": 212,
                "lowerY": 570.982197426059,
                "upperY": 497.732950796461,
                "displayedValue": "$114B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$131B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$131B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2004,
                "x": 238.5,
                "lowerY": 555.185961244371,
                "upperY": 471.24373163645805,
                "displayedValue": "$131B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$140B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$140B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2005,
                "x": 265,
                "lowerY": 545.08702829413,
                "upperY": 455.379066509986,
                "displayedValue": "$140B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$158B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$158B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2006,
                "x": 291.5,
                "lowerY": 533.555060420784,
                "upperY": 432.35088359338,
                "displayedValue": "$158B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$178B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$178B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2007,
                "x": 318,
                "lowerY": 518.314397502456,
                "upperY": 404.391463972594,
                "displayedValue": "$178B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$195B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$195B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2008,
                "x": 344.5,
                "lowerY": 498.159246412544,
                "upperY": 372.92843981121104,
                "displayedValue": "$195B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$129B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$129B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2009,
                "x": 371,
                "lowerY": 524.55174842408,
                "upperY": 441.630411786507,
                "displayedValue": "$129B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$175B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$175B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2010,
                "x": 397.5,
                "lowerY": 491.638853046404,
                "upperY": 379.648729294007,
                "displayedValue": "$175B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$178B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$178B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2011,
                "x": 424,
                "lowerY": 474.92161277622495,
                "upperY": 360.959089055675,
                "displayedValue": "$178B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$182B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$182B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2012,
                "x": 450.5,
                "lowerY": 487.125393434959,
                "upperY": 370.712543295489,
                "displayedValue": "$182B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$160B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$160B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2013,
                "x": 477,
                "lowerY": 496.439814925247,
                "upperY": 393.56638122143,
                "displayedValue": "$160B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$152B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$152B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2014,
                "x": 503.5,
                "lowerY": 502.938032361152,
                "upperY": 405.737681284568,
                "displayedValue": "$152B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$143B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$143B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2015,
                "x": 530,
                "lowerY": 520.731283541737,
                "upperY": 428.915774224405,
                "displayedValue": "$143B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$160B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$160B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2016,
                "x": 556.5,
                "lowerY": 518.351922328967,
                "upperY": 415.58036200518,
                "displayedValue": "$160B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$165B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$165B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2017,
                "x": 583,
                "lowerY": 507.478174383463,
                "upperY": 401.86929304295404,
                "displayedValue": "$165B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$174B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$174B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2018,
                "x": 609.5,
                "lowerY": 499.11515838415096,
                "upperY": 387.794569039691,
                "displayedValue": "$174B",
                "ribbonId": 6
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$167B"
                    },
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "6 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$167B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2019,
                "x": 636,
                "lowerY": 503.084840062968,
                "upperY": 395.76563842070004,
                "displayedValue": "$167B",
                "ribbonId": 6
            }
        ],
        "id": 6,
        "section": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "textInRibbon": {
            "showText": true,
            "centerX": 286.7785866939842,
            "centerY": 500.2755102841405,
            "width": 386.3383480632972,
            "height": 31.338337849505788,
            "angle": 20,
            "textSplitIntoLines": [
                "Vehicles"
            ],
            "textUnsplit": "Vehicles",
            "fontSize": 27.85562328921973
        }
    },
    {
        "color": "rgb(123, 162, 217)",
        "path": "M 0 425.99416220958597 C 0 425.99416220958597, 17.666666666666668 436.79076540692216, 26.5 437.788768372493 C 35.33333333333333 438.78677133806383, 44.16666666666667 430.33880045022437, 53 431.982180003011 C 61.83333333333333 433.6255595557977, 70.66666666666667 447.0494317594518, 79.5 447.649045689213 C 88.33333333333333 448.24865961897416, 97.16666666666667 439.04021713102316, 106 435.579863581578 C 114.83333333333333 432.1195100321329, 123.66666666666667 423.4122481475447, 132.5 426.886924392542 C 141.33333333333334 430.36160063753937, 150.16666666666666 454.79546765818577, 159 456.42792105156195 C 167.83333333333334 458.06037444493813, 176.66666666666666 443.934912881622, 185.5 436.681644752799 C 194.33333333333334 429.428376623976, 203.16666666666666 424.4809170535657, 212 412.908312278624 C 220.83333333333334 401.33570750368233, 229.66666666666666 378.12590399984, 238.5 367.246016103149 C 247.33333333333334 356.366128206458, 256.1666666666667 355.41269231059033, 265 347.628984898478 C 273.8333333333333 339.84527748636566, 282.6666666666667 331.0497023317787, 291.5 320.543771630475 C 300.3333333333333 310.03784092917135, 309.1666666666667 297.1839504834545, 318 284.593400690656 C 326.8333333333333 272.00285089785746, 335.6666666666667 234.44247034401198, 344.5 245.00047287368398 C 353.3333333333333 255.55847540335597, 362.1666666666667 347.0734074137057, 371 347.941415868688 C 379.8333333333333 348.8094243236703, 388.6666666666667 272.6904974564932, 397.5 250.208523603578 C 406.3333333333333 227.72654975066283, 415.1666666666667 215.54276355867805, 424 213.04957275119705 C 432.8333333333333 210.55638194371605, 441.6666666666667 224.627730506361, 450.5 235.249378758692 C 459.3333333333333 245.871027011023, 468.1666666666667 267.55907795599234, 477 276.779462265183 C 485.8333333333333 285.99984657437363, 494.6666666666667 282.31416897852864, 503.5 290.571684613836 C 512.3333333333334 298.82920024914335, 521.1666666666666 323.8366078084472, 530 326.324556077027 C 538.8333333333334 328.81250434560684, 547.6666666666666 313.3104334970485, 556.5 305.499374225315 C 565.3333333333334 297.68831495358154, 574.1666666666666 287.2766920422085, 583 279.458200446626 C 591.8333333333334 271.6397088510435, 600.6666666666666 259.2942365603084, 609.5 258.58842465182005 C 618.3333333333334 257.8826127433317, 636 275.223328995696, 636 275.223328995696 \n        L 636 395.76563842070004\n       C 636 395.76563842070004, 618.3333333333334 386.77729326931535, 609.5 387.794569039691 C 600.6666666666666 388.81184481006665, 591.8333333333334 397.23832754870585, 583 401.86929304295404 C 574.1666666666666 406.5002585372022, 565.3333333333334 411.07261514160484, 556.5 415.58036200518 C 547.6666666666666 420.08810886875517, 538.8333333333334 430.5562210111737, 530 428.915774224405 C 521.1666666666666 427.27532743763635, 512.3333333333334 411.62924678506386, 503.5 405.737681284568 C 494.6666666666667 399.84611578407214, 485.8333333333333 399.40390421960984, 477 393.56638122143 C 468.1666666666667 387.72885822325014, 459.3333333333333 376.14709198978153, 450.5 370.712543295489 C 441.6666666666667 365.2779946011965, 432.8333333333333 359.4697247225887, 424 360.959089055675 C 415.1666666666667 362.4484533887613, 406.3333333333333 366.20350883886834, 397.5 379.648729294007 C 388.6666666666667 393.0939497491457, 379.8333333333333 442.7504600336397, 371 441.630411786507 C 362.1666666666667 440.51036353937434, 353.3333333333333 379.1349311135299, 344.5 372.92843981121104 C 335.6666666666667 366.7219485088922, 326.8333333333333 394.4877233422325, 318 404.391463972594 C 309.1666666666667 414.2952046029555, 300.3333333333333 423.852949837148, 291.5 432.35088359338 C 282.6666666666667 440.848817349612, 273.8333333333333 448.896925169473, 265 455.379066509986 C 256.1666666666667 461.861207850499, 247.33333333333334 464.18475092204557, 238.5 471.24373163645805 C 229.66666666666666 478.30271235087054, 220.83333333333334 490.85639454535504, 212 497.732950796461 C 203.16666666666666 504.609507047567, 194.33333333333334 507.11142585089283, 185.5 512.503069143094 C 176.66666666666666 517.8947124352951, 167.83333333333334 529.2878718404755, 159 530.082810549668 C 150.16666666666666 530.8777492588605, 141.33333333333334 519.0216731282479, 132.5 517.272701398249 C 123.66666666666667 515.52372966825, 114.83333333333333 518.1213574727634, 106 519.588980169674 C 97.16666666666667 521.0566028665845, 88.33333333333333 526.0009952875704, 79.5 526.078437579712 C 70.66666666666667 526.1558798718537, 61.83333333333333 520.0803400659877, 53 520.053633922524 C 44.16666666666667 520.0269277790603, 35.33333333333333 526.1738453153868, 26.5 525.91820071893 C 17.666666666666668 525.6625561224733, 0 518.519766343784, 0 518.519766343784 \n      L 0 425.99416220958597\n      M 0 425.99416220958597\n      Z\n    ",
        "dataPoints": [
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$144B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$144B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1995,
                "x": 0,
                "lowerY": 518.519766343784,
                "upperY": 425.99416220958597,
                "displayedValue": "$144B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$137B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1996
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1996
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$137B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1996,
                "x": 26.5,
                "lowerY": 525.91820071893,
                "upperY": 437.788768372493,
                "displayedValue": "$137B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$137B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1997
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1997
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$137B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1997,
                "x": 53,
                "lowerY": 520.053633922524,
                "upperY": 431.982180003011,
                "displayedValue": "$137B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$122B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1998
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1998
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$122B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1998,
                "x": 79.5,
                "lowerY": 526.078437579712,
                "upperY": 447.649045689213,
                "displayedValue": "$122B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$131B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$131B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1999,
                "x": 106,
                "lowerY": 519.588980169674,
                "upperY": 435.579863581578,
                "displayedValue": "$131B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$141B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$141B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2000,
                "x": 132.5,
                "lowerY": 517.272701398249,
                "upperY": 426.886924392542,
                "displayedValue": "$141B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$115B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$115B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2001,
                "x": 159,
                "lowerY": 530.082810549668,
                "upperY": 456.42792105156195,
                "displayedValue": "$115B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$118B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$118B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2002,
                "x": 185.5,
                "lowerY": 512.503069143094,
                "upperY": 436.681644752799,
                "displayedValue": "$118B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$132B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$132B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2003,
                "x": 212,
                "lowerY": 497.732950796461,
                "upperY": 412.908312278624,
                "displayedValue": "$132B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$162B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$162B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2004,
                "x": 238.5,
                "lowerY": 471.24373163645805,
                "upperY": 367.246016103149,
                "displayedValue": "$162B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$168B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$168B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2005,
                "x": 265,
                "lowerY": 455.379066509986,
                "upperY": 347.628984898478,
                "displayedValue": "$168B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$174B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$174B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2006,
                "x": 291.5,
                "lowerY": 432.35088359338,
                "upperY": 320.543771630475,
                "displayedValue": "$174B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$187B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$187B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2007,
                "x": 318,
                "lowerY": 404.391463972594,
                "upperY": 284.593400690656,
                "displayedValue": "$187B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$200B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$200B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2008,
                "x": 344.5,
                "lowerY": 372.92843981121104,
                "upperY": 245.00047287368398,
                "displayedValue": "$200B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$146B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$146B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2009,
                "x": 371,
                "lowerY": 441.630411786507,
                "upperY": 347.941415868688,
                "displayedValue": "$146B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$202B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$202B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2010,
                "x": 397.5,
                "lowerY": 379.648729294007,
                "upperY": 250.208523603578,
                "displayedValue": "$202B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$231B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$231B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2011,
                "x": 424,
                "lowerY": 360.959089055675,
                "upperY": 213.04957275119705,
                "displayedValue": "$231B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$211B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$211B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2012,
                "x": 450.5,
                "lowerY": 370.712543295489,
                "upperY": 235.249378758692,
                "displayedValue": "$211B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$182B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$182B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2013,
                "x": 477,
                "lowerY": 393.56638122143,
                "upperY": 276.779462265183,
                "displayedValue": "$182B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$180B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$180B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2014,
                "x": 503.5,
                "lowerY": 405.737681284568,
                "upperY": 290.571684613836,
                "displayedValue": "$180B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$160B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$160B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2015,
                "x": 530,
                "lowerY": 428.915774224405,
                "upperY": 326.324556077027,
                "displayedValue": "$160B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$172B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$172B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2016,
                "x": 556.5,
                "lowerY": 415.58036200518,
                "upperY": 305.499374225315,
                "displayedValue": "$172B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$191B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$191B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2017,
                "x": 583,
                "lowerY": 401.86929304295404,
                "upperY": 279.458200446626,
                "displayedValue": "$191B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$202B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$202B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2018,
                "x": 609.5,
                "lowerY": 387.794569039691,
                "upperY": 258.58842465182005,
                "displayedValue": "$202B",
                "ribbonId": 7
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$188B"
                    },
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "7 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$188B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2019,
                "x": 636,
                "lowerY": 395.76563842070004,
                "upperY": 275.223328995696,
                "displayedValue": "$188B",
                "ribbonId": 7
            }
        ],
        "id": 7,
        "section": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "textInRibbon": {
            "showText": true,
            "centerX": 244.88441543189953,
            "centerY": 418.72279770832625,
            "width": 278.6183095808434,
            "height": 50.23255929733454,
            "angle": 40,
            "textSplitIntoLines": [
                "Machinery"
            ],
            "textUnsplit": "Machinery",
            "fontSize": 40.26625381944559
        }
    },
    {
        "color": "rgb(125, 218, 218)",
        "path": "M 0 354.557820296155 C 0 354.557820296155, 17.666666666666668 372.500618131173, 26.5 375.033438535458 C 35.33333333333333 377.566258939743, 44.16666666666667 367.1274189723308, 53 369.754742721865 C 61.83333333333333 372.3820664713992, 70.66666666666667 390.5130519869422, 79.5 390.797381032663 C 88.33333333333333 391.0817100783838, 97.16666666666667 377.96416295745416, 106 371.46071699619 C 114.83333333333333 364.95727103492584, 123.66666666666667 347.17702329027236, 132.5 351.776705265078 C 141.33333333333334 356.3763872398837, 150.16666666666666 395.0103616267837, 159 399.05880884502403 C 167.83333333333334 403.10725606326434, 176.66666666666666 385.3230868891495, 185.5 376.06738857452 C 194.33333333333334 366.8116902598905, 203.16666666666666 358.69397935161487, 212 343.524618957247 C 220.83333333333334 328.35525856287916, 229.66666666666666 298.08078624598215, 238.5 285.051226208313 C 247.33333333333334 272.0216661706438, 256.1666666666667 273.7984332293835, 265 265.347258731232 C 273.8333333333333 256.8960842330805, 282.6666666666667 246.42133930448833, 291.5 234.344179219404 C 300.3333333333333 222.26701913431967, 309.1666666666667 206.55267332816769, 318 192.884298220726 C 326.8333333333333 179.21592311328433, 335.6666666666667 139.006114538128, 344.5 152.333928574754 C 353.3333333333333 165.66174261138, 362.1666666666667 271.35656415655785, 371 272.85118244048203 C 379.8333333333333 274.3458007244062, 388.6666666666667 186.05140407894183, 397.5 161.30163827829898 C 406.3333333333333 136.55187247765613, 415.1666666666667 126.0563865963635, 424 124.352587636625 C 432.8333333333333 122.64878867688651, 441.6666666666667 137.84068635936353, 450.5 151.07884451986803 C 459.3333333333333 164.31700268037252, 468.1666666666667 192.22682358037898, 477 203.781536599652 C 485.8333333333333 215.336249618925, 494.6666666666667 210.7787379007245, 503.5 220.40712263550603 C 512.3333333333334 230.03550737028755, 521.1666666666666 258.88543157427307, 530 261.55184500834105 C 538.8333333333334 264.218258442409, 547.6666666666666 246.14118546942333, 556.5 236.405603239914 C 565.3333333333334 226.67002101040467, 574.1666666666666 212.10566456309465, 583 203.138351631285 C 591.8333333333334 194.17103869947533, 600.6666666666666 182.43764974707682, 609.5 182.601725649056 C 618.3333333333334 182.76580155103517, 636 204.12280704315998, 636 204.12280704315998 \n        L 636 275.223328995696\n       C 636 275.223328995696, 618.3333333333334 257.8826127433317, 609.5 258.58842465182005 C 600.6666666666666 259.2942365603084, 591.8333333333334 271.6397088510435, 583 279.458200446626 C 574.1666666666666 287.2766920422085, 565.3333333333334 297.68831495358154, 556.5 305.499374225315 C 547.6666666666666 313.3104334970485, 538.8333333333334 328.81250434560684, 530 326.324556077027 C 521.1666666666666 323.8366078084472, 512.3333333333334 298.82920024914335, 503.5 290.571684613836 C 494.6666666666667 282.31416897852864, 485.8333333333333 285.99984657437363, 477 276.779462265183 C 468.1666666666667 267.55907795599234, 459.3333333333333 245.871027011023, 450.5 235.249378758692 C 441.6666666666667 224.627730506361, 432.8333333333333 210.55638194371605, 424 213.04957275119705 C 415.1666666666667 215.54276355867805, 406.3333333333333 227.72654975066283, 397.5 250.208523603578 C 388.6666666666667 272.6904974564932, 379.8333333333333 348.8094243236703, 371 347.941415868688 C 362.1666666666667 347.0734074137057, 353.3333333333333 255.55847540335597, 344.5 245.00047287368398 C 335.6666666666667 234.44247034401198, 326.8333333333333 272.00285089785746, 318 284.593400690656 C 309.1666666666667 297.1839504834545, 300.3333333333333 310.03784092917135, 291.5 320.543771630475 C 282.6666666666667 331.0497023317787, 273.8333333333333 339.84527748636566, 265 347.628984898478 C 256.1666666666667 355.41269231059033, 247.33333333333334 356.366128206458, 238.5 367.246016103149 C 229.66666666666666 378.12590399984, 220.83333333333334 401.33570750368233, 212 412.908312278624 C 203.16666666666666 424.4809170535657, 194.33333333333334 429.428376623976, 185.5 436.681644752799 C 176.66666666666666 443.934912881622, 167.83333333333334 458.06037444493813, 159 456.42792105156195 C 150.16666666666666 454.79546765818577, 141.33333333333334 430.36160063753937, 132.5 426.886924392542 C 123.66666666666667 423.4122481475447, 114.83333333333333 432.1195100321329, 106 435.579863581578 C 97.16666666666667 439.04021713102316, 88.33333333333333 448.24865961897416, 79.5 447.649045689213 C 70.66666666666667 447.0494317594518, 61.83333333333333 433.6255595557977, 53 431.982180003011 C 44.16666666666667 430.33880045022437, 35.33333333333333 438.78677133806383, 26.5 437.788768372493 C 17.666666666666668 436.79076540692216, 0 425.99416220958597, 0 425.99416220958597 \n      L 0 354.557820296155\n      M 0 354.557820296155\n      Z\n    ",
        "dataPoints": [
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$111B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$111B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1995,
                "x": 0,
                "lowerY": 425.99416220958597,
                "upperY": 354.557820296155,
                "displayedValue": "$111B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$97.9B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1996
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1996
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$97.9B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1996,
                "x": 26.5,
                "lowerY": 437.788768372493,
                "upperY": 375.033438535458,
                "displayedValue": "$97.9B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$97.1B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1997
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1997
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$97.1B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1997,
                "x": 53,
                "lowerY": 431.982180003011,
                "upperY": 369.754742721865,
                "displayedValue": "$97.1B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$88.7B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1998
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1998
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$88.7B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1998,
                "x": 79.5,
                "lowerY": 447.649045689213,
                "upperY": 390.797381032663,
                "displayedValue": "$88.7B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$100B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$100B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1999,
                "x": 106,
                "lowerY": 435.579863581578,
                "upperY": 371.46071699619,
                "displayedValue": "$100B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$117B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$117B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2000,
                "x": 132.5,
                "lowerY": 426.886924392542,
                "upperY": 351.776705265078,
                "displayedValue": "$117B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$89.5B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$89.5B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2001,
                "x": 159,
                "lowerY": 456.42792105156195,
                "upperY": 399.05880884502403,
                "displayedValue": "$89.5B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$94.6B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$94.6B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2002,
                "x": 185.5,
                "lowerY": 436.681644752799,
                "upperY": 376.06738857452,
                "displayedValue": "$94.6B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$108B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$108B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2003,
                "x": 212,
                "lowerY": 412.908312278624,
                "upperY": 343.524618957247,
                "displayedValue": "$108B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$128B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$128B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2004,
                "x": 238.5,
                "lowerY": 367.246016103149,
                "upperY": 285.051226208313,
                "displayedValue": "$128B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$128B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$128B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2005,
                "x": 265,
                "lowerY": 347.628984898478,
                "upperY": 265.347258731232,
                "displayedValue": "$128B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$134B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$134B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2006,
                "x": 291.5,
                "lowerY": 320.543771630475,
                "upperY": 234.344179219404,
                "displayedValue": "$134B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$143B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$143B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2007,
                "x": 318,
                "lowerY": 284.593400690656,
                "upperY": 192.884298220726,
                "displayedValue": "$143B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$145B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$145B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2008,
                "x": 344.5,
                "lowerY": 245.00047287368398,
                "upperY": 152.333928574754,
                "displayedValue": "$145B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$117B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$117B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2009,
                "x": 371,
                "lowerY": 347.941415868688,
                "upperY": 272.85118244048203,
                "displayedValue": "$117B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$139B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$139B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2010,
                "x": 397.5,
                "lowerY": 250.208523603578,
                "upperY": 161.30163827829898,
                "displayedValue": "$139B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$138B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$138B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2011,
                "x": 424,
                "lowerY": 213.04957275119705,
                "upperY": 124.352587636625,
                "displayedValue": "$138B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$131B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$131B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2012,
                "x": 450.5,
                "lowerY": 235.249378758692,
                "upperY": 151.07884451986803,
                "displayedValue": "$131B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$114B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$114B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2013,
                "x": 477,
                "lowerY": 276.779462265183,
                "upperY": 203.781536599652,
                "displayedValue": "$114B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$109B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$109B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2014,
                "x": 503.5,
                "lowerY": 290.571684613836,
                "upperY": 220.40712263550603,
                "displayedValue": "$109B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$101B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$101B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2015,
                "x": 530,
                "lowerY": 326.324556077027,
                "upperY": 261.55184500834105,
                "displayedValue": "$101B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$108B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$108B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2016,
                "x": 556.5,
                "lowerY": 305.499374225315,
                "upperY": 236.405603239914,
                "displayedValue": "$108B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$119B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$119B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2017,
                "x": 583,
                "lowerY": 279.458200446626,
                "upperY": 203.138351631285,
                "displayedValue": "$119B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$119B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$119B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2018,
                "x": 609.5,
                "lowerY": 258.58842465182005,
                "upperY": 182.601725649056,
                "displayedValue": "$119B",
                "ribbonId": 8
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$111B"
                    },
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "8 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$111B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2019,
                "x": 636,
                "lowerY": 275.223328995696,
                "upperY": 204.12280704315998,
                "displayedValue": "$111B",
                "ribbonId": 8
            }
        ],
        "id": 8,
        "section": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "textInRibbon": {
            "showText": true,
            "centerX": 250.67370960738023,
            "centerY": 319.834004307216,
            "width": 290.26540355284914,
            "height": 28.370316177033175,
            "angle": 50,
            "textSplitIntoLines": [
                "Electronics"
            ],
            "textUnsplit": "Electronics",
            "fontSize": 25.219440019774233
        }
    },
    {
        "color": "#2a607c",
        "path": "M 0 354.52504306114304 C 0 354.52504306114304, 17.666666666666668 372.495155258671, 26.5 375.033438535458 M 79.5 390.797381032663 C 88.33333333333333 391.0636141287465, 97.16666666666667 379.34067892367284, 106 371.352141298366 C 114.83333333333333 363.3636036730592, 123.66666666666667 339.55160930022964, 132.5 342.866155280822 C 141.33333333333334 346.18070126141436, 150.16666666666666 387.066572833781, 159 391.23941718192 C 167.83333333333334 395.41226153005897, 176.66666666666666 377.49563483052555, 185.5 367.903221369656 C 194.33333333333334 358.3108079087865, 203.16666666666666 349.48370605420683, 212 333.684936416703 C 220.83333333333334 317.8861667791992, 229.66666666666666 286.7463977661529, 238.5 273.110603544633 C 247.33333333333334 259.47480932311316, 256.1666666666667 260.93356128758086, 265 251.87017108758403 C 273.8333333333333 242.8067808875872, 282.6666666666667 231.49902799517636, 291.5 218.73026234465203 C 300.3333333333333 205.9614966941277, 309.1666666666667 189.53347244138374, 318 175.25757718443805 C 326.8333333333333 160.98168192749236, 335.6666666666667 119.36734702623464, 344.5 133.07489080297796 C 353.3333333333333 146.7824345797213, 362.1666666666667 256.25124576782184, 371 257.502839844898 C 379.8333333333333 258.75443392197417, 388.6666666666667 166.2106282647979, 397.5 140.58445526543505 C 406.3333333333333 114.95828226607223, 415.1666666666667 104.96834727988356, 424 103.74580184872104 C 432.8333333333333 102.52325641755853, 441.6666666666667 119.42148535174749, 450.5 133.24918267846 C 459.3333333333333 147.07688000517248, 468.1666666666667 175.071733483227, 477 186.71198580899602 C 485.8333333333333 198.35223813476503, 494.6666666666667 193.5206316166925, 503.5 203.090696633074 C 512.3333333333334 212.6607616494555, 521.1666666666666 241.65958240674232, 530 244.132375907285 C 538.8333333333334 246.60516940782767, 547.6666666666666 228.160026481306, 556.5 217.92745763633002 C 565.3333333333334 207.69488879135403, 574.1666666666666 192.51810244222003, 583 182.73696283742902 C 591.8333333333334 172.955823232638, 600.6666666666666 159.56755040644754, 609.5 159.24062000758403 C 618.3333333333334 158.91368960872052, 636 180.77538044424801, 636 180.77538044424801 \n        L 636 204.12280704315998\n       C 636 204.12280704315998, 618.3333333333334 182.76580155103517, 609.5 182.601725649056 C 600.6666666666666 182.43764974707682, 591.8333333333334 194.17103869947533, 583 203.138351631285 C 574.1666666666666 212.10566456309465, 565.3333333333334 226.67002101040467, 556.5 236.405603239914 C 547.6666666666666 246.14118546942333, 538.8333333333334 264.218258442409, 530 261.55184500834105 C 521.1666666666666 258.88543157427307, 512.3333333333334 230.03550737028755, 503.5 220.40712263550603 C 494.6666666666667 210.7787379007245, 485.8333333333333 215.336249618925, 477 203.781536599652 C 468.1666666666667 192.22682358037898, 459.3333333333333 164.31700268037252, 450.5 151.07884451986803 C 441.6666666666667 137.84068635936353, 432.8333333333333 122.64878867688651, 424 124.352587636625 C 415.1666666666667 126.0563865963635, 406.3333333333333 136.55187247765613, 397.5 161.30163827829898 C 388.6666666666667 186.05140407894183, 379.8333333333333 274.3458007244062, 371 272.85118244048203 C 362.1666666666667 271.35656415655785, 353.3333333333333 165.66174261138, 344.5 152.333928574754 C 335.6666666666667 139.006114538128, 326.8333333333333 179.21592311328433, 318 192.884298220726 C 309.1666666666667 206.55267332816769, 300.3333333333333 222.26701913431967, 291.5 234.344179219404 C 282.6666666666667 246.42133930448833, 273.8333333333333 256.8960842330805, 265 265.347258731232 C 256.1666666666667 273.7984332293835, 247.33333333333334 272.0216661706438, 238.5 285.051226208313 C 229.66666666666666 298.08078624598215, 220.83333333333334 328.35525856287916, 212 343.524618957247 C 203.16666666666666 358.69397935161487, 194.33333333333334 366.8116902598905, 185.5 376.06738857452 C 176.66666666666666 385.3230868891495, 167.83333333333334 403.10725606326434, 159 399.05880884502403 C 150.16666666666666 395.0103616267837, 141.33333333333334 356.3763872398837, 132.5 351.776705265078 C 123.66666666666667 347.17702329027236, 114.83333333333333 364.95727103492584, 106 371.46071699619 C 97.16666666666667 377.96416295745416, 88.33333333333333 391.0817100783838, 79.5 390.797381032663 \n        M 26.5 375.033438535458\n       C 17.666666666666668 372.500618131173, 0 354.557820296155, 0 354.557820296155 \n      L 0 354.52504306114304\n      M 0 354.52504306114304\n      Z\n    ",
        "dataPoints": [
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$51.1M"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1995
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$51.1M"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1995,
                "x": 0,
                "lowerY": 354.557820296155,
                "upperY": 354.52504306114304,
                "displayedValue": "$51.1M",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$169M"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$169M"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1999,
                "x": 106,
                "lowerY": 371.46071699619,
                "upperY": 371.352141298366,
                "displayedValue": "$169M",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$13.9B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$13.9B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2000,
                "x": 132.5,
                "lowerY": 351.776705265078,
                "upperY": 342.866155280822,
                "displayedValue": "$13.9B",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$12.2B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$12.2B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2001,
                "x": 159,
                "lowerY": 399.05880884502403,
                "upperY": 391.23941718192,
                "displayedValue": "$12.2B",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$12.7B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$12.7B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2002,
                "x": 185.5,
                "lowerY": 376.06738857452,
                "upperY": 367.903221369656,
                "displayedValue": "$12.7B",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$15.4B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$15.4B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2003,
                "x": 212,
                "lowerY": 343.524618957247,
                "upperY": 333.684936416703,
                "displayedValue": "$15.4B",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$18.6B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$18.6B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2004,
                "x": 238.5,
                "lowerY": 285.051226208313,
                "upperY": 273.110603544633,
                "displayedValue": "$18.6B",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$21.0B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$21.0B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2005,
                "x": 265,
                "lowerY": 265.347258731232,
                "upperY": 251.87017108758403,
                "displayedValue": "$21.0B",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$24.4B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$24.4B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2006,
                "x": 291.5,
                "lowerY": 234.344179219404,
                "upperY": 218.73026234465203,
                "displayedValue": "$24.4B",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$27.5B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$27.5B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2007,
                "x": 318,
                "lowerY": 192.884298220726,
                "upperY": 175.25757718443805,
                "displayedValue": "$27.5B",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$30.0B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$30.0B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2008,
                "x": 344.5,
                "lowerY": 152.333928574754,
                "upperY": 133.07489080297796,
                "displayedValue": "$30.0B",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$23.9B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$23.9B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2009,
                "x": 371,
                "lowerY": 272.85118244048203,
                "upperY": 257.502839844898,
                "displayedValue": "$23.9B",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$32.3B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$32.3B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2010,
                "x": 397.5,
                "lowerY": 161.30163827829898,
                "upperY": 140.58445526543505,
                "displayedValue": "$32.3B",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$32.1B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$32.1B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2011,
                "x": 424,
                "lowerY": 124.352587636625,
                "upperY": 103.74580184872104,
                "displayedValue": "$32.1B",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$27.8B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$27.8B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2012,
                "x": 450.5,
                "lowerY": 151.07884451986803,
                "upperY": 133.24918267846,
                "displayedValue": "$27.8B",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$26.6B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$26.6B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2013,
                "x": 477,
                "lowerY": 203.781536599652,
                "upperY": 186.71198580899602,
                "displayedValue": "$26.6B",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$27.0B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$27.0B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2014,
                "x": 503.5,
                "lowerY": 220.40712263550603,
                "upperY": 203.090696633074,
                "displayedValue": "$27.0B",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$27.2B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$27.2B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2015,
                "x": 530,
                "lowerY": 261.55184500834105,
                "upperY": 244.132375907285,
                "displayedValue": "$27.2B",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$28.8B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$28.8B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2016,
                "x": 556.5,
                "lowerY": 236.405603239914,
                "upperY": 217.92745763633002,
                "displayedValue": "$28.8B",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$31.8B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$31.8B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2017,
                "x": 583,
                "lowerY": 203.138351631285,
                "upperY": 182.73696283742902,
                "displayedValue": "$31.8B",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$36.4B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$36.4B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2018,
                "x": 609.5,
                "lowerY": 182.601725649056,
                "upperY": 159.24062000758403,
                "displayedValue": "$36.4B",
                "ribbonId": 9
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$36.4B"
                    },
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Code",
                        "value": "9 HS1"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$36.4B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2019,
                "x": 636,
                "lowerY": 204.12280704315998,
                "upperY": 180.77538044424801,
                "displayedValue": "$36.4B",
                "ribbonId": 9
            }
        ],
        "id": 9,
        "section": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "textInRibbon": {
            "showText": false
        }
    },
    {
        "color": "rgb(178, 61, 109)",
        "path": "M 0 354.52504306114304 C 0 354.52504306114304, 17.666666666666668 336.219023325454, 26.5 331.311652543522 C 35.33333333333333 326.40428176158997, 44.16666666666667 321.8619232479208, 53 325.08081836955097 C 61.83333333333333 328.29971349118114, 70.66666666666667 349.44663047425513, 79.5 350.625023273303 C 88.33333333333333 351.80341607235084, 97.16666666666667 340.8609445927785, 106 332.151175163838 C 114.83333333333333 323.4414057348975, 123.66666666666667 295.43208860368156, 132.5 298.36640669966005 C 141.33333333333334 301.30072479563853, 150.16666666666666 345.2125578173337, 159 349.757083739709 C 167.83333333333334 354.30160966208433, 176.66666666666666 336.62749484854635, 185.5 325.633562233912 C 194.33333333333334 314.6396296192777, 203.16666666666666 302.9966279570122, 212 283.793488051903 C 220.83333333333334 264.5903481467938, 229.66666666666666 226.62806170006212, 238.5 210.41472280325695 C 247.33333333333334 194.20138390645178, 256.1666666666667 196.80928519883417, 265 186.513454671072 C 273.8333333333333 176.21762414330982, 282.6666666666667 163.50445110232545, 291.5 148.63973963668394 C 300.3333333333333 133.77502817104244, 309.1666666666667 114.98711556087801, 318 97.32518587722302 C 326.8333333333333 79.66325619356803, 335.6666666666667 28.889551710274787, 344.5 42.66816153475395 C 353.3333333333333 56.44677135923311, 362.1666666666667 178.05223833187515, 371 179.996844824098 C 379.8333333333333 181.94145131632084, 388.6666666666667 82.0767621643178, 397.5 54.33580048809097 C 406.3333333333333 26.594838811864133, 415.1666666666667 15.0322319111368, 424 13.551074766736974 C 432.8333333333333 12.06991762233715, 441.6666666666667 31.053768454808846, 450.5 45.448857621692014 C 459.3333333333333 59.84394678857518, 468.1666666666667 91.14652324130698, 477 99.92160976803598 C 485.8333333333333 108.69669629476498, 494.6666666666667 91.44314578543914, 503.5 98.09937678206597 C 512.3333333333334 104.7556077786928, 521.1666666666666 138.65864488351716, 530 139.858995747797 C 538.8333333333334 141.05934661207684, 547.6666666666666 118.11681015804363, 556.5 105.30148196774496 C 565.3333333333334 92.48615377744629, 574.1666666666666 74.7295212396425, 583 62.96702660600499 C 591.8333333333334 51.2045319723675, 600.6666666666666 37.46838413427681, 609.5 34.72651416591998 C 618.3333333333334 31.984644197563153, 636 46.51580679586402, 636 46.51580679586402 \n        L 636 180.77538044424801\n       C 636 180.77538044424801, 618.3333333333334 158.91368960872052, 609.5 159.24062000758403 C 600.6666666666666 159.56755040644754, 591.8333333333334 172.955823232638, 583 182.73696283742902 C 574.1666666666666 192.51810244222003, 565.3333333333334 207.69488879135403, 556.5 217.92745763633002 C 547.6666666666666 228.160026481306, 538.8333333333334 246.60516940782767, 530 244.132375907285 C 521.1666666666666 241.65958240674232, 512.3333333333334 212.6607616494555, 503.5 203.090696633074 C 494.6666666666667 193.5206316166925, 485.8333333333333 198.35223813476503, 477 186.71198580899602 C 468.1666666666667 175.071733483227, 459.3333333333333 147.07688000517248, 450.5 133.24918267846 C 441.6666666666667 119.42148535174749, 432.8333333333333 102.52325641755853, 424 103.74580184872104 C 415.1666666666667 104.96834727988356, 406.3333333333333 114.95828226607223, 397.5 140.58445526543505 C 388.6666666666667 166.2106282647979, 379.8333333333333 258.75443392197417, 371 257.502839844898 C 362.1666666666667 256.25124576782184, 353.3333333333333 146.7824345797213, 344.5 133.07489080297796 C 335.6666666666667 119.36734702623464, 326.8333333333333 160.98168192749236, 318 175.25757718443805 C 309.1666666666667 189.53347244138374, 300.3333333333333 205.9614966941277, 291.5 218.73026234465203 C 282.6666666666667 231.49902799517636, 273.8333333333333 242.8067808875872, 265 251.87017108758403 C 256.1666666666667 260.93356128758086, 247.33333333333334 259.47480932311316, 238.5 273.110603544633 C 229.66666666666666 286.7463977661529, 220.83333333333334 317.8861667791992, 212 333.684936416703 C 203.16666666666666 349.48370605420683, 194.33333333333334 358.3108079087865, 185.5 367.903221369656 C 176.66666666666666 377.49563483052555, 167.83333333333334 395.41226153005897, 159 391.23941718192 C 150.16666666666666 387.066572833781, 141.33333333333334 346.18070126141436, 132.5 342.866155280822 C 123.66666666666667 339.55160930022964, 114.83333333333333 363.3636036730592, 106 371.352141298366 C 97.16666666666667 379.34067892367284, 88.33333333333333 391.0636141287465, 79.5 390.797381032663 C 70.66666666666667 390.5311479365795, 61.83333333333333 372.3820664713992, 53 369.754742721865 C 44.16666666666667 367.1274189723308, 35.33333333333333 377.571721812245, 26.5 375.033438535458 C 17.666666666666668 372.495155258671, 0 354.52504306114304, 0 354.52504306114304 \n      L 0 354.52504306114304\n      M 0 354.52504306114304\n      Z\n    ",
        "dataPoints": [
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$68.2B"
                    },
                    {
                        "label": "Year",
                        "value": 1996
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 1996
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$68.2B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1996,
                "x": 26.5,
                "lowerY": 375.033438535458,
                "upperY": 331.311652543522,
                "displayedValue": "$68.2B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$69.7B"
                    },
                    {
                        "label": "Year",
                        "value": 1997
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 1997
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$69.7B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1997,
                "x": 53,
                "lowerY": 369.754742721865,
                "upperY": 325.08081836955097,
                "displayedValue": "$69.7B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$62.7B"
                    },
                    {
                        "label": "Year",
                        "value": 1998
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 1998
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$62.7B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1998,
                "x": 79.5,
                "lowerY": 390.797381032663,
                "upperY": 350.625023273303,
                "displayedValue": "$62.7B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$61.2B"
                    },
                    {
                        "label": "Year",
                        "value": 1999
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 1999
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$61.2B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 1999,
                "x": 106,
                "lowerY": 371.352141298366,
                "upperY": 332.151175163838,
                "displayedValue": "$61.2B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$69.4B"
                    },
                    {
                        "label": "Year",
                        "value": 2000
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2000
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$69.4B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2000,
                "x": 132.5,
                "lowerY": 342.866155280822,
                "upperY": 298.36640669966005,
                "displayedValue": "$69.4B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$64.7B"
                    },
                    {
                        "label": "Year",
                        "value": 2001
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2001
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$64.7B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2001,
                "x": 159,
                "lowerY": 391.23941718192,
                "upperY": 349.757083739709,
                "displayedValue": "$64.7B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$65.9B"
                    },
                    {
                        "label": "Year",
                        "value": 2002
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2002
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$65.9B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2002,
                "x": 185.5,
                "lowerY": 367.903221369656,
                "upperY": 325.633562233912,
                "displayedValue": "$65.9B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$77.8B"
                    },
                    {
                        "label": "Year",
                        "value": 2003
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2003
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$77.8B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2003,
                "x": 212,
                "lowerY": 333.684936416703,
                "upperY": 283.793488051903,
                "displayedValue": "$77.8B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$97.8B"
                    },
                    {
                        "label": "Year",
                        "value": 2004
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2004
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$97.8B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2004,
                "x": 238.5,
                "lowerY": 273.110603544633,
                "upperY": 210.41472280325695,
                "displayedValue": "$97.8B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$102B"
                    },
                    {
                        "label": "Year",
                        "value": 2005
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2005
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$102B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2005,
                "x": 265,
                "lowerY": 251.87017108758403,
                "upperY": 186.513454671072,
                "displayedValue": "$102B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$109B"
                    },
                    {
                        "label": "Year",
                        "value": 2006
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2006
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$109B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2006,
                "x": 291.5,
                "lowerY": 218.73026234465203,
                "upperY": 148.63973963668394,
                "displayedValue": "$109B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$122B"
                    },
                    {
                        "label": "Year",
                        "value": 2007
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2007
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$122B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2007,
                "x": 318,
                "lowerY": 175.25757718443805,
                "upperY": 97.32518587722302,
                "displayedValue": "$122B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$141B"
                    },
                    {
                        "label": "Year",
                        "value": 2008
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2008
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$141B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2008,
                "x": 344.5,
                "lowerY": 133.07489080297796,
                "upperY": 42.66816153475395,
                "displayedValue": "$141B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$121B"
                    },
                    {
                        "label": "Year",
                        "value": 2009
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2009
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$121B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2009,
                "x": 371,
                "lowerY": 257.502839844898,
                "upperY": 179.996844824098,
                "displayedValue": "$121B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$135B"
                    },
                    {
                        "label": "Year",
                        "value": 2010
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2010
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$135B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2010,
                "x": 397.5,
                "lowerY": 140.58445526543505,
                "upperY": 54.33580048809097,
                "displayedValue": "$135B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$141B"
                    },
                    {
                        "label": "Year",
                        "value": 2011
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2011
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$141B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2011,
                "x": 424,
                "lowerY": 103.74580184872104,
                "upperY": 13.551074766736974,
                "displayedValue": "$141B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$137B"
                    },
                    {
                        "label": "Year",
                        "value": 2012
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2012
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$137B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2012,
                "x": 450.5,
                "lowerY": 133.24918267846,
                "upperY": 45.448857621692014,
                "displayedValue": "$137B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$135B"
                    },
                    {
                        "label": "Year",
                        "value": 2013
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2013
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$135B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2013,
                "x": 477,
                "lowerY": 186.71198580899602,
                "upperY": 99.92160976803598,
                "displayedValue": "$135B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$164B"
                    },
                    {
                        "label": "Year",
                        "value": 2014
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2014
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$164B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2014,
                "x": 503.5,
                "lowerY": 203.090696633074,
                "upperY": 98.09937678206597,
                "displayedValue": "$164B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$163B"
                    },
                    {
                        "label": "Year",
                        "value": 2015
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2015
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$163B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2015,
                "x": 530,
                "lowerY": 244.132375907285,
                "upperY": 139.858995747797,
                "displayedValue": "$163B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$176B"
                    },
                    {
                        "label": "Year",
                        "value": 2016
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2016
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$176B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2016,
                "x": 556.5,
                "lowerY": 217.92745763633002,
                "upperY": 105.30148196774496,
                "displayedValue": "$176B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$187B"
                    },
                    {
                        "label": "Year",
                        "value": 2017
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2017
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$187B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2017,
                "x": 583,
                "lowerY": 182.73696283742902,
                "upperY": 62.96702660600499,
                "displayedValue": "$187B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$194B"
                    },
                    {
                        "label": "Year",
                        "value": 2018
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2018
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$194B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2018,
                "x": 609.5,
                "lowerY": 159.24062000758403,
                "upperY": 34.72651416591998,
                "displayedValue": "$194B",
                "ribbonId": 10
            },
            {
                "tooltipInfo": [
                    {
                        "label": "Current Gross Export",
                        "value": "$209B"
                    },
                    {
                        "label": "Year",
                        "value": 2019
                    }
                ],
                "detailOverlayInfo": [
                    {
                        "label": "Year",
                        "value": 2019
                    },
                    {
                        "label": "Current Gross Export",
                        "value": "$209B"
                    },
                    {
                        "label": "Product Complexity Index (PCI)",
                        "value": {
                            "status": "NotApplicable"
                        }
                    }
                ],
                "year": 2019,
                "x": 636,
                "lowerY": 180.77538044424801,
                "upperY": 46.51580679586402,
                "displayedValue": "$209B",
                "ribbonId": 10
            }
        ],
        "id": 10,
        "section": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "textInRibbon": {
            "showText": false
        }
    }
]
const tooltipMap: any = {
    "tooltip-0-1995": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-1996": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-1997": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-1998": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-1999": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2000": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2001": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2002": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2003": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2004": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2005": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2006": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2007": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2008": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2009": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2010": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2011": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2012": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2013": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2014": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2015": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2016": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2017": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2018": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-0-2019": {
        "id": 0,
        "shortLabel": "Textiles",
        "longLabel": "Textiles, garments, footwear and furniture",
        "color": "rgb(125, 218, 161)"
    },
    "tooltip-1-1995": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-1996": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-1997": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-1998": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-1999": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2000": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2001": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2002": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2003": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2004": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2005": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2006": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2007": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2008": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2009": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2010": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2011": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2012": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2013": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2014": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2015": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2016": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2017": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2018": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-1-2019": {
        "id": 1,
        "shortLabel": "Agriculture",
        "longLabel": "Vegetables, animals, wood and paper",
        "color": "#F5CF23"
    },
    "tooltip-2-1995": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-1996": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-1997": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-1998": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-1999": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2000": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2001": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2002": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2003": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2004": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2005": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2006": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2007": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2008": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2009": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2010": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2011": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2012": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2013": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2014": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2015": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2016": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2017": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2018": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-2-2019": {
        "id": 2,
        "shortLabel": "Stone",
        "longLabel": "Stone, glass and ceramics",
        "color": "rgb(218, 180, 125)"
    },
    "tooltip-3-1995": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-1996": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-1997": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-1998": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-1999": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2000": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2001": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2002": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2003": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2004": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2005": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2006": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2007": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2008": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2009": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2010": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2011": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2012": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2013": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2014": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2015": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2016": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2017": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2018": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-3-2019": {
        "id": 3,
        "shortLabel": "Minerals",
        "longLabel": "Minerals, fuels, ores and salts",
        "color": "rgb(187, 150, 138)"
    },
    "tooltip-4-1995": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-1996": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-1997": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-1998": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-1999": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2000": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2001": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2002": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2003": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2004": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2005": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2006": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2007": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2008": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2009": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2010": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2011": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2012": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2013": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2014": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2015": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2016": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2017": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2018": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-4-2019": {
        "id": 4,
        "shortLabel": "Metals",
        "longLabel": "Metals",
        "color": "rgb(217, 123, 123)"
    },
    "tooltip-5-1995": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-1996": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-1997": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-1998": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-1999": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2000": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2001": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2002": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2003": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2004": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2005": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2006": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2007": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2008": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2009": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2010": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2011": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2012": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2013": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2014": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2015": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2016": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2017": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2018": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-5-2019": {
        "id": 5,
        "shortLabel": "Chemicals",
        "longLabel": "Chemicals and plastics",
        "color": "rgb(197, 123, 217)"
    },
    "tooltip-6-1995": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-1996": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-1997": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-1998": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-1999": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2000": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2001": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2002": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2003": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2004": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2005": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2006": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2007": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2008": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2009": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2010": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2011": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2012": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2013": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2014": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2015": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2016": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2017": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2018": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-6-2019": {
        "id": 6,
        "shortLabel": "Vehicles",
        "longLabel": "Transport vehicles",
        "color": "rgb(141, 123, 216)"
    },
    "tooltip-7-1995": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-1996": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-1997": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-1998": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-1999": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2000": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2001": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2002": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2003": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2004": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2005": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2006": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2007": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2008": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2009": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2010": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2011": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2012": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2013": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2014": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2015": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2016": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2017": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2018": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-7-2019": {
        "id": 7,
        "shortLabel": "Machinery",
        "longLabel": "Machinery and instruments",
        "color": "rgb(123, 162, 217)"
    },
    "tooltip-8-1995": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-1996": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-1997": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-1998": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-1999": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2000": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2001": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2002": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2003": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2004": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2005": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2006": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2007": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2008": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2009": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2010": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2011": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2012": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2013": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2014": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2015": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2016": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2017": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2018": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-8-2019": {
        "id": 8,
        "shortLabel": "Electronics",
        "longLabel": "Electronics",
        "color": "rgb(125, 218, 218)"
    },
    "tooltip-9-1995": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-1996": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-1997": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-1998": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-1999": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2000": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2001": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2002": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2003": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2004": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2005": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2006": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2007": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2008": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2009": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2010": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2011": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2012": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2013": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2014": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2015": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2016": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2017": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2018": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-9-2019": {
        "id": 9,
        "shortLabel": "Other",
        "longLabel": "Other",
        "color": "#2a607c"
    },
    "tooltip-10-1995": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-1996": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-1997": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-1998": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-1999": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2000": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2001": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2002": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2003": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2004": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2005": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2006": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2007": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2008": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2009": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2010": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2011": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2012": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2013": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2014": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2015": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2016": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2017": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2018": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    },
    "tooltip-10-2019": {
        "id": 10,
        "shortLabel": "Services",
        "longLabel": "Services",
        "color": "rgb(178, 61, 109)"
    }
}

const App = () => {
  return (
    <OverTime
      ribbons={ribbons}
      tooltipMap={tooltipMap}
      selected={undefined}
      highlighted={undefined}
      xAxisMin={1995}
      xAxisMax={2019}
      yAxisMin={0}
      yAxisMax={1000000000000}
      layout={Layout.Value}
      tradeDirection={TradeDirection.export}
      tradeFlow={TradeFlow.Gross}
      inflationAdjustment={InflationAdjustment.NotAdjusted}
      populationAdjustment={PopulationAdjustment.NotAdjusted}
      type={{
        source: DataSource.CPY,
        subject: GraphSubject.Product,
      }}
      hideTooltip={() => console.log('hideTooltip')}
      showTooltip={(info) => console.log(info)}
      onClick={() => console.log('onClick')}
      width={726} height={696}
    />
  );
}

export default App
