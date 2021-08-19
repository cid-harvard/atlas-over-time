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

const ribbons: any = [
    {
        "color": "rgb(125, 218, 161)",
        "path": "M 0 634.551011805744 C 0 634.551011805744, 27.5 634.8188324088375, 41.25 634.91264804228 C 55 635.0064636757226, 68.75 634.9749718330962, 82.5 635.113905606399 C 96.25 635.2528393797019, 110 635.7135916385109, 123.75 635.746250682097 C 137.5 635.778909725683, 151.25 635.4169545276538, 165 635.309859867915 C 178.75 635.2027652081761, 192.5 635.0424895844147, 206.25 635.103682723664 C 220 635.1648758629132, 233.75 635.576465055845, 247.5 635.67701870341 C 261.25 635.777572350975, 275 635.7596942269192, 288.75 635.707004609054 C 302.5 635.6543149911888, 316.25 635.5350924488496, 330 635.360880996219 C 343.75 635.1866695435883, 357.5 634.7494188953182, 371.25 634.66173589327 C 385 634.5740528912219, 398.75 634.8237712586047, 412.5 634.83478298393 C 426.25 634.8457947092554, 440 634.8024746035605, 453.75 634.727806245222 C 467.5 634.6531378868835, 481.25 634.5170314301844, 495 634.386772833899 C 508.75 634.2565142376137, 522.5 633.8057793801223, 536.25 633.94625466751 C 550 634.0867299548976, 563.75 635.2134056170514, 577.5 635.229624558225 C 591.25 635.2458434993987, 605 634.3862450494556, 618.75 634.043568314552 C 632.5 633.7008915796483, 646.25 633.2597813449559, 660 633.173564148803 C 673.75 633.0873469526503, 687.5 633.3585849160525, 701.25 633.526265137635 C 715 633.6939453592177, 728.75 634.0388608749724, 742.5 634.179645478299 C 756.25 634.3204300816255, 770 634.2708905404231, 783.75 634.370972757594 C 797.5 634.4710549747649, 811.25 634.7336396732003, 825 634.780138781324 C 838.75 634.8266378894477, 852.5 634.6832670097687, 866.25 634.649967406336 C 880 634.6166678029034, 893.75 634.6541223919462, 907.5 634.580341160728 C 921.25 634.5065599295099, 935 634.2362911927218, 948.75 634.207280019027 C 962.5 634.1782688453324, 990 634.40627411856, 990 634.40627411856 \n        L 990 641\n       C 990 641, 962.5 641, 948.75 641 C 935 641, 921.25 641, 907.5 641 C 893.75 641, 880 641, 866.25 641 C 852.5 641, 838.75 641, 825 641 C 811.25 641, 797.5 641, 783.75 641 C 770 641, 756.25 641, 742.5 641 C 728.75 641, 715 641, 701.25 641 C 687.5 641, 673.75 641, 660 641 C 646.25 641, 632.5 641, 618.75 641 C 605 641, 591.25 641, 577.5 641 C 563.75 641, 550 641, 536.25 641 C 522.5 641, 508.75 641, 495 641 C 481.25 641, 467.5 641, 453.75 641 C 440 641, 426.25 641, 412.5 641 C 398.75 641, 385 641, 371.25 641 C 357.5 641, 343.75 641, 330 641 C 316.25 641, 302.5 641, 288.75 641 C 275 641, 261.25 641, 247.5 641 C 233.75 641, 220 641, 206.25 641 C 192.5 641, 178.75 641, 165 641 C 151.25 641, 137.5 641, 123.75 641 C 110 641, 96.25 641, 82.5 641 C 68.75 641, 55 641, 41.25 641 C 27.5 641, 0 641, 0 641 \n      L 0 634.551011805744\n      M 0 634.551011805744\n      Z\n    ",
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
                "x": 41.25,
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
                "x": 82.5,
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
                "x": 123.75,
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
                "x": 165,
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
                "x": 206.25,
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
                "x": 247.5,
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
                "x": 288.75,
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
                "x": 330,
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
                "x": 371.25,
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
                "x": 412.5,
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
                "x": 453.75,
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
                "x": 495,
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
                "x": 536.25,
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
                "x": 577.5,
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
                "x": 618.75,
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
                "x": 660,
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
                "x": 701.25,
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
                "x": 742.5,
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
                "x": 783.75,
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
                "x": 825,
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
                "x": 866.25,
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
                "x": 907.5,
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
                "x": 948.75,
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
                "x": 990,
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
        "path": "M 0 630.552795467077 C 0 630.552795467077, 27.5 631.2436756889891, 41.25 631.380409906688 C 55 631.5171441243868, 68.75 631.2126808493451, 82.5 631.37320077327 C 96.25 631.5337206971949, 110 632.3228420105669, 123.75 632.343529450237 C 137.5 632.3642168899072, 151.25 631.6751996359948, 165 631.4973254112911 C 178.75 631.3194511865873, 192.5 631.152160411392, 206.25 631.276284102015 C 220 631.400407792638, 233.75 632.130553447182, 247.5 632.242067555029 C 261.25 632.3535816628761, 275 632.0969128127331, 288.75 631.945368749097 C 302.5 631.793824685461, 316.25 631.6421965323469, 330 631.332803173213 C 343.75 631.0234098140792, 357.5 630.3149644974699, 371.25 630.089008594294 C 385 629.8630526911181, 398.75 630.046932466509, 412.5 629.977067754158 C 426.25 629.9072030418071, 440 629.8863338114387, 453.75 629.669820320188 C 467.5 629.4533068289373, 481.25 629.034433876406, 495 628.677986806654 C 508.75 628.321539736902, 522.5 627.3964609689901, 536.25 627.531137901676 C 550 627.6658148343618, 563.75 629.616956754046, 577.5 629.486048402769 C 591.25 629.3551400514921, 605 627.3570266306148, 618.75 626.745687794014 C 632.5 626.1343489574132, 646.25 625.8361360314929, 660 625.818015383164 C 673.75 625.7998947348352, 687.5 626.3768080932751, 701.25 626.636963904041 C 715 626.8971197148068, 728.75 627.2503205659085, 742.5 627.378950247759 C 756.25 627.5075799296095, 770 627.3790514500142, 783.75 627.408741995144 C 797.5 627.4384325402739, 811.25 627.6589416761794, 825 627.557093518538 C 838.75 627.4552453608965, 852.5 627.0193548461461, 866.25 626.797653049295 C 880 626.5759512524439, 893.75 626.5133194540766, 907.5 626.226882737431 C 921.25 625.9404460207853, 935 625.14972116472, 948.75 625.079032749421 C 962.5 625.0083443341221, 990 625.802752245637, 990 625.802752245637 \n        L 990 634.40627411856\n       C 990 634.40627411856, 962.5 634.1782688453324, 948.75 634.207280019027 C 935 634.2362911927218, 921.25 634.5065599295099, 907.5 634.580341160728 C 893.75 634.6541223919462, 880 634.6166678029034, 866.25 634.649967406336 C 852.5 634.6832670097687, 838.75 634.8266378894477, 825 634.780138781324 C 811.25 634.7336396732003, 797.5 634.4710549747649, 783.75 634.370972757594 C 770 634.2708905404231, 756.25 634.3204300816255, 742.5 634.179645478299 C 728.75 634.0388608749724, 715 633.6939453592177, 701.25 633.526265137635 C 687.5 633.3585849160525, 673.75 633.0873469526503, 660 633.173564148803 C 646.25 633.2597813449559, 632.5 633.7008915796483, 618.75 634.043568314552 C 605 634.3862450494556, 591.25 635.2458434993987, 577.5 635.229624558225 C 563.75 635.2134056170514, 550 634.0867299548976, 536.25 633.94625466751 C 522.5 633.8057793801223, 508.75 634.2565142376137, 495 634.386772833899 C 481.25 634.5170314301844, 467.5 634.6531378868835, 453.75 634.727806245222 C 440 634.8024746035605, 426.25 634.8457947092554, 412.5 634.83478298393 C 398.75 634.8237712586047, 385 634.5740528912219, 371.25 634.66173589327 C 357.5 634.7494188953182, 343.75 635.1866695435883, 330 635.360880996219 C 316.25 635.5350924488496, 302.5 635.6543149911888, 288.75 635.707004609054 C 275 635.7596942269192, 261.25 635.777572350975, 247.5 635.67701870341 C 233.75 635.576465055845, 220 635.1648758629132, 206.25 635.103682723664 C 192.5 635.0424895844147, 178.75 635.2027652081761, 165 635.309859867915 C 151.25 635.4169545276538, 137.5 635.778909725683, 123.75 635.746250682097 C 110 635.7135916385109, 96.25 635.2528393797019, 82.5 635.113905606399 C 68.75 634.9749718330962, 55 635.0064636757226, 41.25 634.91264804228 C 27.5 634.8188324088375, 0 634.551011805744, 0 634.551011805744 \n      L 0 630.552795467077\n      M 0 630.552795467077\n      Z\n    ",
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
                "x": 41.25,
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
                "x": 82.5,
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
                "x": 123.75,
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
                "x": 165,
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
                "x": 206.25,
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
                "x": 247.5,
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
                "x": 288.75,
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
                "x": 330,
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
                "x": 371.25,
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
                "x": 412.5,
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
                "x": 453.75,
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
                "x": 495,
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
                "x": 536.25,
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
                "x": 577.5,
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
                "x": 618.75,
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
                "x": 660,
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
                "x": 701.25,
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
                "x": 742.5,
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
                "x": 783.75,
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
                "x": 825,
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
                "x": 866.25,
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
                "x": 907.5,
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
                "x": 948.75,
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
                "x": 990,
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
        "path": "M 0 626.698573874159 C 0 626.698573874159, 27.5 627.4135618318301, 41.25 627.55696145459 C 55 627.70036107735, 68.75 627.3754275852524, 82.5 627.558971610719 C 96.25 627.7425156361857, 110 628.6395422920389, 123.75 628.65822560739 C 137.5 628.6769089227412, 151.25 627.9656752490807, 165 627.671071502826 C 178.75 627.3764677565712, 192.5 626.7478282420465, 206.25 626.890603129861 C 220 627.0333780176755, 233.75 628.2966429186051, 247.5 628.527720829713 C 261.25 628.7587987408208, 275 628.5419345539832, 288.75 628.277070596508 C 302.5 628.0122066390328, 316.25 627.522607439062, 330 626.938537084862 C 343.75 626.354466730662, 357.5 625.2648990064605, 371.25 624.772648471308 C 385 624.2803979361555, 398.75 624.503174026999, 412.5 623.985033873947 C 426.25 623.4668937208951, 440 622.3956589453975, 453.75 621.663807552996 C 467.5 620.9319561605945, 481.25 620.5480479958472, 495 619.593925519538 C 508.75 618.6398030432287, 522.5 615.9483275743958, 536.25 615.93907269514 C 550 615.9298178158842, 563.75 620.0948082985964, 577.5 619.538396244003 C 591.25 618.9819841894097, 605 614.4849963286837, 618.75 612.60060036758 C 632.5 610.7162044064763, 646.25 608.4022053563588, 660 608.232020477381 C 673.75 608.0618355984031, 687.5 610.4536152743507, 701.25 611.579491093713 C 715 612.7053669130754, 728.75 614.2769625605168, 742.5 614.987275393555 C 756.25 615.6975882265932, 770 615.5848065286398, 783.75 615.841368091942 C 797.5 616.0979296552441, 811.25 617.1167239118865, 825 616.526644773368 C 838.75 615.9365656348496, 852.5 613.173413589391, 866.25 612.300893260831 C 880 611.428372932271, 893.75 611.3032355808072, 907.5 611.291522802008 C 921.25 611.2798100232088, 935 611.9175422402502, 948.75 612.230616588036 C 962.5 612.5436909358218, 990 613.169968888723, 990 613.169968888723 \n        L 990 625.802752245637\n       C 990 625.802752245637, 962.5 625.0083443341221, 948.75 625.079032749421 C 935 625.14972116472, 921.25 625.9404460207853, 907.5 626.226882737431 C 893.75 626.5133194540766, 880 626.5759512524439, 866.25 626.797653049295 C 852.5 627.0193548461461, 838.75 627.4552453608965, 825 627.557093518538 C 811.25 627.6589416761794, 797.5 627.4384325402739, 783.75 627.408741995144 C 770 627.3790514500142, 756.25 627.5075799296095, 742.5 627.378950247759 C 728.75 627.2503205659085, 715 626.8971197148068, 701.25 626.636963904041 C 687.5 626.3768080932751, 673.75 625.7998947348352, 660 625.818015383164 C 646.25 625.8361360314929, 632.5 626.1343489574132, 618.75 626.745687794014 C 605 627.3570266306148, 591.25 629.3551400514921, 577.5 629.486048402769 C 563.75 629.616956754046, 550 627.6658148343618, 536.25 627.531137901676 C 522.5 627.3964609689901, 508.75 628.321539736902, 495 628.677986806654 C 481.25 629.034433876406, 467.5 629.4533068289373, 453.75 629.669820320188 C 440 629.8863338114387, 426.25 629.9072030418071, 412.5 629.977067754158 C 398.75 630.046932466509, 385 629.8630526911181, 371.25 630.089008594294 C 357.5 630.3149644974699, 343.75 631.0234098140792, 330 631.332803173213 C 316.25 631.6421965323469, 302.5 631.793824685461, 288.75 631.945368749097 C 275 632.0969128127331, 261.25 632.3535816628761, 247.5 632.242067555029 C 233.75 632.130553447182, 220 631.400407792638, 206.25 631.276284102015 C 192.5 631.152160411392, 178.75 631.3194511865873, 165 631.4973254112911 C 151.25 631.6751996359948, 137.5 632.3642168899072, 123.75 632.343529450237 C 110 632.3228420105669, 96.25 631.5337206971949, 82.5 631.37320077327 C 68.75 631.2126808493451, 55 631.5171441243868, 41.25 631.380409906688 C 27.5 631.2436756889891, 0 630.552795467077, 0 630.552795467077 \n      L 0 626.698573874159\n      M 0 626.698573874159\n      Z\n    ",
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
                "x": 41.25,
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
                "x": 82.5,
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
                "x": 123.75,
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
                "x": 165,
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
                "x": 206.25,
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
                "x": 247.5,
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
                "x": 288.75,
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
                "x": 330,
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
                "x": 371.25,
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
                "x": 412.5,
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
                "x": 453.75,
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
                "x": 495,
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
                "x": 536.25,
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
                "x": 577.5,
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
                "x": 618.75,
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
                "x": 660,
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
                "x": 701.25,
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
                "x": 742.5,
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
                "x": 783.75,
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
                "x": 825,
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
                "x": 866.25,
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
                "x": 907.5,
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
                "x": 948.75,
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
                "x": 990,
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
        "path": "M 0 623.998835479553 C 0 623.998835479553, 27.5 625.1427489559057, 41.25 625.38773907952 C 55 625.6327292031342, 68.75 625.1328783886718, 82.5 625.468776221238 C 96.25 625.8046740538043, 110 627.2604248362941, 123.75 627.403126074918 C 137.5 627.5458273135418, 151.25 626.6141758754277, 165 626.324983652981 C 178.75 626.0357914305343, 192.5 625.5082116887348, 206.25 625.667972740238 C 220 625.8277337917413, 233.75 627.0622487395099, 247.5 627.283549962 C 261.25 627.5048511844902, 275 627.3229242600421, 288.75 626.995780075179 C 302.5 626.668635890316, 316.25 626.0131121981032, 330 625.320684852822 C 343.75 624.6282575075408, 357.5 623.6042850231, 371.25 622.841216003492 C 385 622.078146983884, 398.75 621.6621244428658, 412.5 620.742270735174 C 426.25 619.8224170274822, 440 618.5796996393414, 453.75 617.322093757341 C 467.5 616.0644878753407, 481.25 615.5105129275327, 495 613.196635443172 C 508.75 610.8827579588113, 522.5 603.5691442936927, 536.25 603.438828851177 C 550 603.3085134086614, 563.75 612.3639759086848, 577.5 612.414742788078 C 591.25 612.4655096674712, 605 606.2951478412831, 618.75 603.743430127536 C 632.5 601.191712413789, 646.25 597.3295114736047, 660 597.104436505596 C 673.75 596.8793615375873, 687.5 601.2885416807411, 701.25 602.392980319484 C 715 603.4974189582268, 728.75 603.2648373418849, 742.5 603.731068338053 C 756.25 604.197299334221, 770 604.3636308597537, 783.75 605.190366296492 C 797.5 606.0171017332303, 811.25 608.6095283808412, 825 608.691480958483 C 838.75 608.7734335361248, 852.5 606.5572944375853, 866.25 605.682081762343 C 880 604.8068690871008, 893.75 603.8956598334033, 907.5 603.44020490703 C 921.25 602.9847499806566, 935 602.9551923490135, 948.75 602.949352204103 C 962.5 602.9435120591925, 990 603.405164037567, 990 603.405164037567 \n        L 990 613.169968888723\n       C 990 613.169968888723, 962.5 612.5436909358218, 948.75 612.230616588036 C 935 611.9175422402502, 921.25 611.2798100232088, 907.5 611.291522802008 C 893.75 611.3032355808072, 880 611.428372932271, 866.25 612.300893260831 C 852.5 613.173413589391, 838.75 615.9365656348496, 825 616.526644773368 C 811.25 617.1167239118865, 797.5 616.0979296552441, 783.75 615.841368091942 C 770 615.5848065286398, 756.25 615.6975882265932, 742.5 614.987275393555 C 728.75 614.2769625605168, 715 612.7053669130754, 701.25 611.579491093713 C 687.5 610.4536152743507, 673.75 608.0618355984031, 660 608.232020477381 C 646.25 608.4022053563588, 632.5 610.7162044064763, 618.75 612.60060036758 C 605 614.4849963286837, 591.25 618.9819841894097, 577.5 619.538396244003 C 563.75 620.0948082985964, 550 615.9298178158842, 536.25 615.93907269514 C 522.5 615.9483275743958, 508.75 618.6398030432287, 495 619.593925519538 C 481.25 620.5480479958472, 467.5 620.9319561605945, 453.75 621.663807552996 C 440 622.3956589453975, 426.25 623.4668937208951, 412.5 623.985033873947 C 398.75 624.503174026999, 385 624.2803979361555, 371.25 624.772648471308 C 357.5 625.2648990064605, 343.75 626.354466730662, 330 626.938537084862 C 316.25 627.522607439062, 302.5 628.0122066390328, 288.75 628.277070596508 C 275 628.5419345539832, 261.25 628.7587987408208, 247.5 628.527720829713 C 233.75 628.2966429186051, 220 627.0333780176755, 206.25 626.890603129861 C 192.5 626.7478282420465, 178.75 627.3764677565712, 165 627.671071502826 C 151.25 627.9656752490807, 137.5 628.6769089227412, 123.75 628.65822560739 C 110 628.6395422920389, 96.25 627.7425156361857, 82.5 627.558971610719 C 68.75 627.3754275852524, 55 627.70036107735, 41.25 627.55696145459 C 27.5 627.4135618318301, 0 626.698573874159, 0 626.698573874159 \n      L 0 623.998835479553\n      M 0 623.998835479553\n      Z\n    ",
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
                "x": 41.25,
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
                "x": 82.5,
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
                "x": 123.75,
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
                "x": 165,
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
                "x": 206.25,
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
                "x": 247.5,
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
                "x": 288.75,
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
                "x": 330,
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
                "x": 371.25,
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
                "x": 412.5,
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
                "x": 453.75,
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
                "x": 495,
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
                "x": 536.25,
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
                "x": 577.5,
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
                "x": 618.75,
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
                "x": 660,
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
                "x": 701.25,
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
                "x": 742.5,
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
                "x": 783.75,
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
                "x": 825,
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
                "x": 866.25,
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
                "x": 907.5,
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
                "x": 948.75,
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
                "x": 990,
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
        "path": "M 0 604.81172915284 C 0 604.81172915284, 27.5 607.3105319190602, 41.25 607.718826695697 C 55 608.1271214723338, 68.75 606.8174788678258, 82.5 607.261497812661 C 96.25 607.7055167574962, 110 609.9327240414958, 123.75 610.382940364708 C 137.5 610.8331566879202, 151.25 610.276155568322, 165 609.962795751934 C 178.75 609.649435935546, 192.5 608.2135747091515, 206.25 608.50278146638 C 220 608.7919882236085, 233.75 611.5593117997419, 247.5 611.698036295305 C 261.25 611.8367607908681, 275 610.4049051148222, 288.75 609.335128439759 C 302.5 608.2653517646959, 316.25 607.3939479877326, 330 605.279376244926 C 343.75 603.1648045021193, 357.5 599.0807970444865, 371.25 596.647697982919 C 385 594.2145989213515, 398.75 592.968862290951, 412.5 590.680781875521 C 426.25 588.392701460091, 440 585.7790846126861, 453.75 582.919215490339 C 467.5 580.0593463679918, 481.25 577.8687913024602, 495 573.521567141438 C 508.75 569.1743429804159, 522.5 556.2784127690279, 536.25 556.835870524206 C 550 557.3933282793841, 563.75 576.74205637569, 577.5 576.866313672507 C 591.25 576.9905709693239, 605 562.5929941583607, 618.75 557.581414305108 C 632.5 552.5698344518552, 646.25 547.4182472580944, 660 546.79683455299 C 673.75 546.1754218478857, 687.5 551.6486925893882, 701.25 553.852938074482 C 715 556.0571835595758, 728.75 558.4438442420008, 742.5 560.022307463553 C 756.25 561.6007706851053, 770 561.0885399064595, 783.75 563.323717403796 C 797.5 565.5588949011325, 811.25 571.7824411320174, 825 573.433372447572 C 838.75 575.0843037631265, 852.5 574.1635137749387, 866.25 573.229305297123 C 880 572.2950968193073, 893.75 569.3040134711665, 907.5 567.828121580678 C 921.25 566.3522296901896, 935 564.2516606515685, 948.75 564.373953954192 C 962.5 564.4962472568154, 990 568.561881396419, 990 568.561881396419 \n        L 990 603.405164037567\n       C 990 603.405164037567, 962.5 602.9435120591925, 948.75 602.949352204103 C 935 602.9551923490135, 921.25 602.9847499806566, 907.5 603.44020490703 C 893.75 603.8956598334033, 880 604.8068690871008, 866.25 605.682081762343 C 852.5 606.5572944375853, 838.75 608.7734335361248, 825 608.691480958483 C 811.25 608.6095283808412, 797.5 606.0171017332303, 783.75 605.190366296492 C 770 604.3636308597537, 756.25 604.197299334221, 742.5 603.731068338053 C 728.75 603.2648373418849, 715 603.4974189582268, 701.25 602.392980319484 C 687.5 601.2885416807411, 673.75 596.8793615375873, 660 597.104436505596 C 646.25 597.3295114736047, 632.5 601.191712413789, 618.75 603.743430127536 C 605 606.2951478412831, 591.25 612.4655096674712, 577.5 612.414742788078 C 563.75 612.3639759086848, 550 603.3085134086614, 536.25 603.438828851177 C 522.5 603.5691442936927, 508.75 610.8827579588113, 495 613.196635443172 C 481.25 615.5105129275327, 467.5 616.0644878753407, 453.75 617.322093757341 C 440 618.5796996393414, 426.25 619.8224170274822, 412.5 620.742270735174 C 398.75 621.6621244428658, 385 622.078146983884, 371.25 622.841216003492 C 357.5 623.6042850231, 343.75 624.6282575075408, 330 625.320684852822 C 316.25 626.0131121981032, 302.5 626.668635890316, 288.75 626.995780075179 C 275 627.3229242600421, 261.25 627.5048511844902, 247.5 627.283549962 C 233.75 627.0622487395099, 220 625.8277337917413, 206.25 625.667972740238 C 192.5 625.5082116887348, 178.75 626.0357914305343, 165 626.324983652981 C 151.25 626.6141758754277, 137.5 627.5458273135418, 123.75 627.403126074918 C 110 627.2604248362941, 96.25 625.8046740538043, 82.5 625.468776221238 C 68.75 625.1328783886718, 55 625.6327292031342, 41.25 625.38773907952 C 27.5 625.1427489559057, 0 623.998835479553, 0 623.998835479553 \n      L 0 604.81172915284\n      M 0 604.81172915284\n      Z\n    ",
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
                "x": 41.25,
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
                "x": 82.5,
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
                "x": 123.75,
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
                "x": 165,
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
                "x": 206.25,
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
                "x": 247.5,
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
                "x": 288.75,
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
                "x": 330,
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
                "x": 371.25,
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
                "x": 412.5,
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
                "x": 453.75,
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
                "x": 495,
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
                "x": 536.25,
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
                "x": 577.5,
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
                "x": 618.75,
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
                "x": 660,
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
                "x": 701.25,
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
                "x": 742.5,
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
                "x": 783.75,
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
                "x": 825,
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
                "x": 866.25,
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
                "x": 907.5,
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
                "x": 948.75,
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
                "x": 990,
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
            "centerX": 564.8594248446823,
            "centerY": 589.96073474062,
            "width": 332.8893537479027,
            "height": 21.845172155286168,
            "angle": 5,
            "textSplitIntoLines": [
                "Metals"
            ],
            "textUnsplit": "Metals",
            "fontSize": 19.42147564013394
        }
    },
    {
        "color": "rgb(197, 123, 217)",
        "path": "M 0 577.020307083678 C 0 577.020307083678, 27.5 580.4828763146846, 41.25 580.972880536595 C 55 581.4628847585053, 68.75 579.2585894010475, 82.5 579.96033241514 C 96.25 580.6620754292325, 110 584.8665482584423, 123.75 585.18333862115 C 137.5 585.5001289838577, 151.25 582.901640544006, 165 581.861074591386 C 178.75 580.820508638766, 192.5 578.3277229837748, 206.25 578.93994290543 C 220 579.5521628270852, 233.75 585.4179084567846, 247.5 585.534394121317 C 261.25 585.6508797858493, 275 582.0642230085002, 288.75 579.638856892624 C 302.5 577.2134907767477, 316.25 575.0576800341012, 330 570.982197426059 C 343.75 566.9067148180168, 357.5 559.5018227663592, 371.25 555.185961244371 C 385 550.8700997223829, 398.75 548.6921784313945, 412.5 545.08702829413 C 426.25 541.4818781568656, 440 538.0171655527297, 453.75 533.555060420784 C 467.5 529.0929552888383, 481.25 524.2136998371627, 495 518.314397502456 C 508.75 512.4150951677493, 522.5 497.1196879256067, 536.25 498.159246412544 C 550 499.19880489948133, 563.75 525.63848065177, 577.5 524.55174842408 C 591.25 523.4650161963899, 605 499.9105423210465, 618.75 491.638853046404 C 632.5 483.3671637717615, 646.25 475.6738560447991, 660 474.92161277622495 C 673.75 474.1693695076508, 687.5 483.539026410122, 701.25 487.125393434959 C 715 490.711760459796, 728.75 493.80437510421484, 742.5 496.439814925247 C 756.25 499.07525474627914, 770 498.8894542584037, 783.75 502.938032361152 C 797.5 506.9866104639003, 811.25 518.1623018804345, 825 520.731283541737 C 838.75 523.3002652030394, 852.5 520.560773855346, 866.25 518.351922328967 C 880 516.143070802588, 893.75 510.684301707599, 907.5 507.478174383463 C 921.25 504.272047059327, 935 499.84738077090014, 948.75 499.11515838415096 C 962.5 498.3829359974018, 990 503.084840062968, 990 503.084840062968 \n        L 990 568.561881396419\n       C 990 568.561881396419, 962.5 564.4962472568154, 948.75 564.373953954192 C 935 564.2516606515685, 921.25 566.3522296901896, 907.5 567.828121580678 C 893.75 569.3040134711665, 880 572.2950968193073, 866.25 573.229305297123 C 852.5 574.1635137749387, 838.75 575.0843037631265, 825 573.433372447572 C 811.25 571.7824411320174, 797.5 565.5588949011325, 783.75 563.323717403796 C 770 561.0885399064595, 756.25 561.6007706851053, 742.5 560.022307463553 C 728.75 558.4438442420008, 715 556.0571835595758, 701.25 553.852938074482 C 687.5 551.6486925893882, 673.75 546.1754218478857, 660 546.79683455299 C 646.25 547.4182472580944, 632.5 552.5698344518552, 618.75 557.581414305108 C 605 562.5929941583607, 591.25 576.9905709693239, 577.5 576.866313672507 C 563.75 576.74205637569, 550 557.3933282793841, 536.25 556.835870524206 C 522.5 556.2784127690279, 508.75 569.1743429804159, 495 573.521567141438 C 481.25 577.8687913024602, 467.5 580.0593463679918, 453.75 582.919215490339 C 440 585.7790846126861, 426.25 588.392701460091, 412.5 590.680781875521 C 398.75 592.968862290951, 385 594.2145989213515, 371.25 596.647697982919 C 357.5 599.0807970444865, 343.75 603.1648045021193, 330 605.279376244926 C 316.25 607.3939479877326, 302.5 608.2653517646959, 288.75 609.335128439759 C 275 610.4049051148222, 261.25 611.8367607908681, 247.5 611.698036295305 C 233.75 611.5593117997419, 220 608.7919882236085, 206.25 608.50278146638 C 192.5 608.2135747091515, 178.75 609.649435935546, 165 609.962795751934 C 151.25 610.276155568322, 137.5 610.8331566879202, 123.75 610.382940364708 C 110 609.9327240414958, 96.25 607.7055167574962, 82.5 607.261497812661 C 68.75 606.8174788678258, 55 608.1271214723338, 41.25 607.718826695697 C 27.5 607.3105319190602, 0 604.81172915284, 0 604.81172915284 \n      L 0 577.020307083678\n      M 0 577.020307083678\n      Z\n    ",
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
                "x": 41.25,
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
                "x": 82.5,
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
                "x": 123.75,
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
                "x": 165,
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
                "x": 206.25,
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
                "x": 247.5,
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
                "x": 288.75,
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
                "x": 330,
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
                "x": 371.25,
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
                "x": 412.5,
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
                "x": 453.75,
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
                "x": 495,
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
                "x": 536.25,
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
                "x": 577.5,
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
                "x": 618.75,
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
                "x": 660,
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
                "x": 701.25,
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
                "x": 742.5,
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
                "x": 783.75,
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
                "x": 825,
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
                "x": 866.25,
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
                "x": 907.5,
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
                "x": 948.75,
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
                "x": 990,
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
            "centerX": 789.6331393336704,
            "centerY": 532.6934003389584,
            "width": 370.5531716555138,
            "height": 29.95631598521745,
            "angle": -5,
            "textSplitIntoLines": [
                "Chemicals"
            ],
            "textUnsplit": "Chemicals",
            "fontSize": 26.635875879034558
        }
    },
    {
        "color": "rgb(141, 123, 216)",
        "path": "M 0 518.519766343784 C 0 518.519766343784, 27.5 525.6625561224733, 41.25 525.91820071893 C 55 526.1738453153868, 68.75 520.0269277790603, 82.5 520.053633922524 C 96.25 520.0803400659877, 110 526.1558798718537, 123.75 526.078437579712 C 137.5 526.0009952875704, 151.25 521.0566028665845, 165 519.588980169674 C 178.75 518.1213574727634, 192.5 515.52372966825, 206.25 517.272701398249 C 220 519.0216731282479, 233.75 530.8777492588605, 247.5 530.082810549668 C 261.25 529.2878718404755, 275 517.8947124352951, 288.75 512.503069143094 C 302.5 507.11142585089283, 316.25 504.609507047567, 330 497.732950796461 C 343.75 490.85639454535504, 357.5 478.30271235087054, 371.25 471.24373163645805 C 385 464.18475092204557, 398.75 461.861207850499, 412.5 455.379066509986 C 426.25 448.896925169473, 440 440.848817349612, 453.75 432.35088359338 C 467.5 423.852949837148, 481.25 414.2952046029555, 495 404.391463972594 C 508.75 394.4877233422325, 522.5 366.7219485088922, 536.25 372.92843981121104 C 550 379.1349311135299, 563.75 440.51036353937434, 577.5 441.630411786507 C 591.25 442.7504600336397, 605 393.0939497491457, 618.75 379.648729294007 C 632.5 366.20350883886834, 646.25 362.4484533887613, 660 360.959089055675 C 673.75 359.4697247225887, 687.5 365.2779946011965, 701.25 370.712543295489 C 715 376.14709198978153, 728.75 387.72885822325014, 742.5 393.56638122143 C 756.25 399.40390421960984, 770 399.84611578407214, 783.75 405.737681284568 C 797.5 411.62924678506386, 811.25 427.27532743763635, 825 428.915774224405 C 838.75 430.5562210111737, 852.5 420.08810886875517, 866.25 415.58036200518 C 880 411.07261514160484, 893.75 406.5002585372022, 907.5 401.86929304295404 C 921.25 397.23832754870585, 935 388.81184481006665, 948.75 387.794569039691 C 962.5 386.77729326931535, 990 395.76563842070004, 990 395.76563842070004 \n        L 990 503.084840062968\n       C 990 503.084840062968, 962.5 498.3829359974018, 948.75 499.11515838415096 C 935 499.84738077090014, 921.25 504.272047059327, 907.5 507.478174383463 C 893.75 510.684301707599, 880 516.143070802588, 866.25 518.351922328967 C 852.5 520.560773855346, 838.75 523.3002652030394, 825 520.731283541737 C 811.25 518.1623018804345, 797.5 506.9866104639003, 783.75 502.938032361152 C 770 498.8894542584037, 756.25 499.07525474627914, 742.5 496.439814925247 C 728.75 493.80437510421484, 715 490.711760459796, 701.25 487.125393434959 C 687.5 483.539026410122, 673.75 474.1693695076508, 660 474.92161277622495 C 646.25 475.6738560447991, 632.5 483.3671637717615, 618.75 491.638853046404 C 605 499.9105423210465, 591.25 523.4650161963899, 577.5 524.55174842408 C 563.75 525.63848065177, 550 499.19880489948133, 536.25 498.159246412544 C 522.5 497.1196879256067, 508.75 512.4150951677493, 495 518.314397502456 C 481.25 524.2136998371627, 467.5 529.0929552888383, 453.75 533.555060420784 C 440 538.0171655527297, 426.25 541.4818781568656, 412.5 545.08702829413 C 398.75 548.6921784313945, 385 550.8700997223829, 371.25 555.185961244371 C 357.5 559.5018227663592, 343.75 566.9067148180168, 330 570.982197426059 C 316.25 575.0576800341012, 302.5 577.2134907767477, 288.75 579.638856892624 C 275 582.0642230085002, 261.25 585.6508797858493, 247.5 585.534394121317 C 233.75 585.4179084567846, 220 579.5521628270852, 206.25 578.93994290543 C 192.5 578.3277229837748, 178.75 580.820508638766, 165 581.861074591386 C 151.25 582.901640544006, 137.5 585.5001289838577, 123.75 585.18333862115 C 110 584.8665482584423, 96.25 580.6620754292325, 82.5 579.96033241514 C 68.75 579.2585894010475, 55 581.4628847585053, 41.25 580.972880536595 C 27.5 580.4828763146846, 0 577.020307083678, 0 577.020307083678 \n      L 0 518.519766343784\n      M 0 518.519766343784\n      Z\n    ",
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
                "x": 41.25,
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
                "x": 82.5,
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
                "x": 123.75,
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
                "x": 165,
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
                "x": 206.25,
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
                "x": 247.5,
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
                "x": 288.75,
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
                "x": 330,
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
                "x": 371.25,
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
                "x": 412.5,
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
                "x": 453.75,
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
                "x": 495,
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
                "x": 536.25,
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
                "x": 577.5,
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
                "x": 618.75,
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
                "x": 660,
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
                "x": 701.25,
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
                "x": 742.5,
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
                "x": 783.75,
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
                "x": 825,
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
                "x": 866.25,
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
                "x": 907.5,
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
                "x": 948.75,
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
                "x": 990,
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
            "centerX": 784.2458356123477,
            "centerY": 458.1414971046216,
            "width": 383.58346478519456,
            "height": 51.781395653737704,
            "angle": -5,
            "textSplitIntoLines": [
                "Vehicles"
            ],
            "textUnsplit": "Vehicles",
            "fontSize": 46.02572126053329
        }
    },
    {
        "color": "rgb(123, 162, 217)",
        "path": "M 0 425.99416220958597 C 0 425.99416220958597, 27.5 436.79076540692216, 41.25 437.788768372493 C 55 438.78677133806383, 68.75 430.33880045022437, 82.5 431.982180003011 C 96.25 433.6255595557977, 110 447.0494317594518, 123.75 447.649045689213 C 137.5 448.24865961897416, 151.25 439.04021713102316, 165 435.579863581578 C 178.75 432.1195100321329, 192.5 423.4122481475447, 206.25 426.886924392542 C 220 430.36160063753937, 233.75 454.79546765818577, 247.5 456.42792105156195 C 261.25 458.06037444493813, 275 443.934912881622, 288.75 436.681644752799 C 302.5 429.428376623976, 316.25 424.4809170535657, 330 412.908312278624 C 343.75 401.33570750368233, 357.5 378.12590399984, 371.25 367.246016103149 C 385 356.366128206458, 398.75 355.41269231059033, 412.5 347.628984898478 C 426.25 339.84527748636566, 440 331.0497023317787, 453.75 320.543771630475 C 467.5 310.03784092917135, 481.25 297.1839504834545, 495 284.593400690656 C 508.75 272.00285089785746, 522.5 234.44247034401198, 536.25 245.00047287368398 C 550 255.55847540335597, 563.75 347.0734074137057, 577.5 347.941415868688 C 591.25 348.8094243236703, 605 272.6904974564932, 618.75 250.208523603578 C 632.5 227.72654975066283, 646.25 215.54276355867805, 660 213.04957275119705 C 673.75 210.55638194371605, 687.5 224.627730506361, 701.25 235.249378758692 C 715 245.871027011023, 728.75 267.55907795599234, 742.5 276.779462265183 C 756.25 285.99984657437363, 770 282.31416897852864, 783.75 290.571684613836 C 797.5 298.82920024914335, 811.25 323.8366078084472, 825 326.324556077027 C 838.75 328.81250434560684, 852.5 313.3104334970485, 866.25 305.499374225315 C 880 297.68831495358154, 893.75 287.2766920422085, 907.5 279.458200446626 C 921.25 271.6397088510435, 935 259.2942365603084, 948.75 258.58842465182005 C 962.5 257.8826127433317, 990 275.223328995696, 990 275.223328995696 \n        L 990 395.76563842070004\n       C 990 395.76563842070004, 962.5 386.77729326931535, 948.75 387.794569039691 C 935 388.81184481006665, 921.25 397.23832754870585, 907.5 401.86929304295404 C 893.75 406.5002585372022, 880 411.07261514160484, 866.25 415.58036200518 C 852.5 420.08810886875517, 838.75 430.5562210111737, 825 428.915774224405 C 811.25 427.27532743763635, 797.5 411.62924678506386, 783.75 405.737681284568 C 770 399.84611578407214, 756.25 399.40390421960984, 742.5 393.56638122143 C 728.75 387.72885822325014, 715 376.14709198978153, 701.25 370.712543295489 C 687.5 365.2779946011965, 673.75 359.4697247225887, 660 360.959089055675 C 646.25 362.4484533887613, 632.5 366.20350883886834, 618.75 379.648729294007 C 605 393.0939497491457, 591.25 442.7504600336397, 577.5 441.630411786507 C 563.75 440.51036353937434, 550 379.1349311135299, 536.25 372.92843981121104 C 522.5 366.7219485088922, 508.75 394.4877233422325, 495 404.391463972594 C 481.25 414.2952046029555, 467.5 423.852949837148, 453.75 432.35088359338 C 440 440.848817349612, 426.25 448.896925169473, 412.5 455.379066509986 C 398.75 461.861207850499, 385 464.18475092204557, 371.25 471.24373163645805 C 357.5 478.30271235087054, 343.75 490.85639454535504, 330 497.732950796461 C 316.25 504.609507047567, 302.5 507.11142585089283, 288.75 512.503069143094 C 275 517.8947124352951, 261.25 529.2878718404755, 247.5 530.082810549668 C 233.75 530.8777492588605, 220 519.0216731282479, 206.25 517.272701398249 C 192.5 515.52372966825, 178.75 518.1213574727634, 165 519.588980169674 C 151.25 521.0566028665845, 137.5 526.0009952875704, 123.75 526.078437579712 C 110 526.1558798718537, 96.25 520.0803400659877, 82.5 520.053633922524 C 68.75 520.0269277790603, 55 526.1738453153868, 41.25 525.91820071893 C 27.5 525.6625561224733, 0 518.519766343784, 0 518.519766343784 \n      L 0 425.99416220958597\n      M 0 425.99416220958597\n      Z\n    ",
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
                "x": 41.25,
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
                "x": 82.5,
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
                "x": 123.75,
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
                "x": 165,
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
                "x": 206.25,
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
                "x": 247.5,
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
                "x": 288.75,
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
                "x": 330,
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
                "x": 371.25,
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
                "x": 412.5,
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
                "x": 453.75,
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
                "x": 495,
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
                "x": 536.25,
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
                "x": 577.5,
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
                "x": 618.75,
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
                "x": 660,
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
                "x": 701.25,
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
                "x": 742.5,
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
                "x": 783.75,
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
                "x": 825,
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
                "x": 866.25,
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
                "x": 907.5,
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
                "x": 948.75,
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
                "x": 990,
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
            "centerX": 742.8931376092593,
            "centerY": 332.5163599981365,
            "width": 253.57401636226732,
            "height": 78.34141138146639,
            "angle": -25,
            "textSplitIntoLines": [
                "Machinery"
            ],
            "textUnsplit": "Machinery",
            "fontSize": 36.64998293449098
        }
    },
    {
        "color": "rgb(125, 218, 218)",
        "path": "M 0 354.557820296155 C 0 354.557820296155, 27.5 372.500618131173, 41.25 375.033438535458 C 55 377.566258939743, 68.75 367.1274189723308, 82.5 369.754742721865 C 96.25 372.3820664713992, 110 390.5130519869422, 123.75 390.797381032663 C 137.5 391.0817100783838, 151.25 377.96416295745416, 165 371.46071699619 C 178.75 364.95727103492584, 192.5 347.17702329027236, 206.25 351.776705265078 C 220 356.3763872398837, 233.75 395.0103616267837, 247.5 399.05880884502403 C 261.25 403.10725606326434, 275 385.3230868891495, 288.75 376.06738857452 C 302.5 366.8116902598905, 316.25 358.69397935161487, 330 343.524618957247 C 343.75 328.35525856287916, 357.5 298.08078624598215, 371.25 285.051226208313 C 385 272.0216661706438, 398.75 273.7984332293835, 412.5 265.347258731232 C 426.25 256.8960842330805, 440 246.42133930448833, 453.75 234.344179219404 C 467.5 222.26701913431967, 481.25 206.55267332816769, 495 192.884298220726 C 508.75 179.21592311328433, 522.5 139.006114538128, 536.25 152.333928574754 C 550 165.66174261138, 563.75 271.35656415655785, 577.5 272.85118244048203 C 591.25 274.3458007244062, 605 186.05140407894183, 618.75 161.30163827829898 C 632.5 136.55187247765613, 646.25 126.0563865963635, 660 124.352587636625 C 673.75 122.64878867688651, 687.5 137.84068635936353, 701.25 151.07884451986803 C 715 164.31700268037252, 728.75 192.22682358037898, 742.5 203.781536599652 C 756.25 215.336249618925, 770 210.7787379007245, 783.75 220.40712263550603 C 797.5 230.03550737028755, 811.25 258.88543157427307, 825 261.55184500834105 C 838.75 264.218258442409, 852.5 246.14118546942333, 866.25 236.405603239914 C 880 226.67002101040467, 893.75 212.10566456309465, 907.5 203.138351631285 C 921.25 194.17103869947533, 935 182.43764974707682, 948.75 182.601725649056 C 962.5 182.76580155103517, 990 204.12280704315998, 990 204.12280704315998 \n        L 990 275.223328995696\n       C 990 275.223328995696, 962.5 257.8826127433317, 948.75 258.58842465182005 C 935 259.2942365603084, 921.25 271.6397088510435, 907.5 279.458200446626 C 893.75 287.2766920422085, 880 297.68831495358154, 866.25 305.499374225315 C 852.5 313.3104334970485, 838.75 328.81250434560684, 825 326.324556077027 C 811.25 323.8366078084472, 797.5 298.82920024914335, 783.75 290.571684613836 C 770 282.31416897852864, 756.25 285.99984657437363, 742.5 276.779462265183 C 728.75 267.55907795599234, 715 245.871027011023, 701.25 235.249378758692 C 687.5 224.627730506361, 673.75 210.55638194371605, 660 213.04957275119705 C 646.25 215.54276355867805, 632.5 227.72654975066283, 618.75 250.208523603578 C 605 272.6904974564932, 591.25 348.8094243236703, 577.5 347.941415868688 C 563.75 347.0734074137057, 550 255.55847540335597, 536.25 245.00047287368398 C 522.5 234.44247034401198, 508.75 272.00285089785746, 495 284.593400690656 C 481.25 297.1839504834545, 467.5 310.03784092917135, 453.75 320.543771630475 C 440 331.0497023317787, 426.25 339.84527748636566, 412.5 347.628984898478 C 398.75 355.41269231059033, 385 356.366128206458, 371.25 367.246016103149 C 357.5 378.12590399984, 343.75 401.33570750368233, 330 412.908312278624 C 316.25 424.4809170535657, 302.5 429.428376623976, 288.75 436.681644752799 C 275 443.934912881622, 261.25 458.06037444493813, 247.5 456.42792105156195 C 233.75 454.79546765818577, 220 430.36160063753937, 206.25 426.886924392542 C 192.5 423.4122481475447, 178.75 432.1195100321329, 165 435.579863581578 C 151.25 439.04021713102316, 137.5 448.24865961897416, 123.75 447.649045689213 C 110 447.0494317594518, 96.25 433.6255595557977, 82.5 431.982180003011 C 68.75 430.33880045022437, 55 438.78677133806383, 41.25 437.788768372493 C 27.5 436.79076540692216, 0 425.99416220958597, 0 425.99416220958597 \n      L 0 354.557820296155\n      M 0 354.557820296155\n      Z\n    ",
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
                "x": 41.25,
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
                "x": 82.5,
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
                "x": 123.75,
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
                "x": 165,
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
                "x": 206.25,
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
                "x": 247.5,
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
                "x": 288.75,
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
                "x": 330,
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
                "x": 371.25,
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
                "x": 412.5,
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
                "x": 453.75,
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
                "x": 495,
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
                "x": 536.25,
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
                "x": 577.5,
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
                "x": 618.75,
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
                "x": 660,
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
                "x": 701.25,
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
                "x": 742.5,
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
                "x": 783.75,
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
                "x": 825,
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
                "x": 866.25,
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
                "x": 907.5,
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
                "x": 948.75,
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
                "x": 990,
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
            "centerX": 409.9101479189706,
            "centerY": 303.89774838740993,
            "width": 342.30316756372207,
            "height": 41.497566157864114,
            "angle": 40,
            "textSplitIntoLines": [
                "Electronics"
            ],
            "textUnsplit": "Electronics",
            "fontSize": 36.896015815147635
        }
    },
    {
        "color": "#2a607c",
        "path": "M 0 354.52504306114304 C 0 354.52504306114304, 27.5 372.495155258671, 41.25 375.033438535458 M 123.75 390.797381032663 C 137.5 391.0636141287465, 151.25 379.34067892367284, 165 371.352141298366 C 178.75 363.3636036730592, 192.5 339.55160930022964, 206.25 342.866155280822 C 220 346.18070126141436, 233.75 387.066572833781, 247.5 391.23941718192 C 261.25 395.41226153005897, 275 377.49563483052555, 288.75 367.903221369656 C 302.5 358.3108079087865, 316.25 349.48370605420683, 330 333.684936416703 C 343.75 317.8861667791992, 357.5 286.7463977661529, 371.25 273.110603544633 C 385 259.47480932311316, 398.75 260.93356128758086, 412.5 251.87017108758403 C 426.25 242.8067808875872, 440 231.49902799517636, 453.75 218.73026234465203 C 467.5 205.9614966941277, 481.25 189.53347244138374, 495 175.25757718443805 C 508.75 160.98168192749236, 522.5 119.36734702623464, 536.25 133.07489080297796 C 550 146.7824345797213, 563.75 256.25124576782184, 577.5 257.502839844898 C 591.25 258.75443392197417, 605 166.2106282647979, 618.75 140.58445526543505 C 632.5 114.95828226607223, 646.25 104.96834727988356, 660 103.74580184872104 C 673.75 102.52325641755853, 687.5 119.42148535174749, 701.25 133.24918267846 C 715 147.07688000517248, 728.75 175.071733483227, 742.5 186.71198580899602 C 756.25 198.35223813476503, 770 193.5206316166925, 783.75 203.090696633074 C 797.5 212.6607616494555, 811.25 241.65958240674232, 825 244.132375907285 C 838.75 246.60516940782767, 852.5 228.160026481306, 866.25 217.92745763633002 C 880 207.69488879135403, 893.75 192.51810244222003, 907.5 182.73696283742902 C 921.25 172.955823232638, 935 159.56755040644754, 948.75 159.24062000758403 C 962.5 158.91368960872052, 990 180.77538044424801, 990 180.77538044424801 \n        L 990 204.12280704315998\n       C 990 204.12280704315998, 962.5 182.76580155103517, 948.75 182.601725649056 C 935 182.43764974707682, 921.25 194.17103869947533, 907.5 203.138351631285 C 893.75 212.10566456309465, 880 226.67002101040467, 866.25 236.405603239914 C 852.5 246.14118546942333, 838.75 264.218258442409, 825 261.55184500834105 C 811.25 258.88543157427307, 797.5 230.03550737028755, 783.75 220.40712263550603 C 770 210.7787379007245, 756.25 215.336249618925, 742.5 203.781536599652 C 728.75 192.22682358037898, 715 164.31700268037252, 701.25 151.07884451986803 C 687.5 137.84068635936353, 673.75 122.64878867688651, 660 124.352587636625 C 646.25 126.0563865963635, 632.5 136.55187247765613, 618.75 161.30163827829898 C 605 186.05140407894183, 591.25 274.3458007244062, 577.5 272.85118244048203 C 563.75 271.35656415655785, 550 165.66174261138, 536.25 152.333928574754 C 522.5 139.006114538128, 508.75 179.21592311328433, 495 192.884298220726 C 481.25 206.55267332816769, 467.5 222.26701913431967, 453.75 234.344179219404 C 440 246.42133930448833, 426.25 256.8960842330805, 412.5 265.347258731232 C 398.75 273.7984332293835, 385 272.0216661706438, 371.25 285.051226208313 C 357.5 298.08078624598215, 343.75 328.35525856287916, 330 343.524618957247 C 316.25 358.69397935161487, 302.5 366.8116902598905, 288.75 376.06738857452 C 275 385.3230868891495, 261.25 403.10725606326434, 247.5 399.05880884502403 C 233.75 395.0103616267837, 220 356.3763872398837, 206.25 351.776705265078 C 192.5 347.17702329027236, 178.75 364.95727103492584, 165 371.46071699619 C 151.25 377.96416295745416, 137.5 391.0817100783838, 123.75 390.797381032663 \n        M 41.25 375.033438535458\n       C 27.5 372.500618131173, 0 354.557820296155, 0 354.557820296155 \n      L 0 354.52504306114304\n      M 0 354.52504306114304\n      Z\n    ",
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
                "x": 165,
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
                "x": 206.25,
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
                "x": 247.5,
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
                "x": 288.75,
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
                "x": 330,
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
                "x": 371.25,
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
                "x": 412.5,
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
                "x": 453.75,
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
                "x": 495,
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
                "x": 536.25,
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
                "x": 577.5,
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
                "x": 618.75,
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
                "x": 660,
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
                "x": 701.25,
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
                "x": 742.5,
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
                "x": 783.75,
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
                "x": 825,
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
                "x": 866.25,
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
                "x": 907.5,
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
                "x": 948.75,
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
                "x": 990,
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
        "path": "M 0 354.52504306114304 C 0 354.52504306114304, 27.5 336.219023325454, 41.25 331.311652543522 C 55 326.40428176158997, 68.75 321.8619232479208, 82.5 325.08081836955097 C 96.25 328.29971349118114, 110 349.44663047425513, 123.75 350.625023273303 C 137.5 351.80341607235084, 151.25 340.8609445927785, 165 332.151175163838 C 178.75 323.4414057348975, 192.5 295.43208860368156, 206.25 298.36640669966005 C 220 301.30072479563853, 233.75 345.2125578173337, 247.5 349.757083739709 C 261.25 354.30160966208433, 275 336.62749484854635, 288.75 325.633562233912 C 302.5 314.6396296192777, 316.25 302.9966279570122, 330 283.793488051903 C 343.75 264.5903481467938, 357.5 226.62806170006212, 371.25 210.41472280325695 C 385 194.20138390645178, 398.75 196.80928519883417, 412.5 186.513454671072 C 426.25 176.21762414330982, 440 163.50445110232545, 453.75 148.63973963668394 C 467.5 133.77502817104244, 481.25 114.98711556087801, 495 97.32518587722302 C 508.75 79.66325619356803, 522.5 28.889551710274787, 536.25 42.66816153475395 C 550 56.44677135923311, 563.75 178.05223833187515, 577.5 179.996844824098 C 591.25 181.94145131632084, 605 82.0767621643178, 618.75 54.33580048809097 C 632.5 26.594838811864133, 646.25 15.0322319111368, 660 13.551074766736974 C 673.75 12.06991762233715, 687.5 31.053768454808846, 701.25 45.448857621692014 C 715 59.84394678857518, 728.75 91.14652324130698, 742.5 99.92160976803598 C 756.25 108.69669629476498, 770 91.44314578543914, 783.75 98.09937678206597 C 797.5 104.7556077786928, 811.25 138.65864488351716, 825 139.858995747797 C 838.75 141.05934661207684, 852.5 118.11681015804363, 866.25 105.30148196774496 C 880 92.48615377744629, 893.75 74.7295212396425, 907.5 62.96702660600499 C 921.25 51.2045319723675, 935 37.46838413427681, 948.75 34.72651416591998 C 962.5 31.984644197563153, 990 46.51580679586402, 990 46.51580679586402 \n        L 990 180.77538044424801\n       C 990 180.77538044424801, 962.5 158.91368960872052, 948.75 159.24062000758403 C 935 159.56755040644754, 921.25 172.955823232638, 907.5 182.73696283742902 C 893.75 192.51810244222003, 880 207.69488879135403, 866.25 217.92745763633002 C 852.5 228.160026481306, 838.75 246.60516940782767, 825 244.132375907285 C 811.25 241.65958240674232, 797.5 212.6607616494555, 783.75 203.090696633074 C 770 193.5206316166925, 756.25 198.35223813476503, 742.5 186.71198580899602 C 728.75 175.071733483227, 715 147.07688000517248, 701.25 133.24918267846 C 687.5 119.42148535174749, 673.75 102.52325641755853, 660 103.74580184872104 C 646.25 104.96834727988356, 632.5 114.95828226607223, 618.75 140.58445526543505 C 605 166.2106282647979, 591.25 258.75443392197417, 577.5 257.502839844898 C 563.75 256.25124576782184, 550 146.7824345797213, 536.25 133.07489080297796 C 522.5 119.36734702623464, 508.75 160.98168192749236, 495 175.25757718443805 C 481.25 189.53347244138374, 467.5 205.9614966941277, 453.75 218.73026234465203 C 440 231.49902799517636, 426.25 242.8067808875872, 412.5 251.87017108758403 C 398.75 260.93356128758086, 385 259.47480932311316, 371.25 273.110603544633 C 357.5 286.7463977661529, 343.75 317.8861667791992, 330 333.684936416703 C 316.25 349.48370605420683, 302.5 358.3108079087865, 288.75 367.903221369656 C 275 377.49563483052555, 261.25 395.41226153005897, 247.5 391.23941718192 C 233.75 387.066572833781, 220 346.18070126141436, 206.25 342.866155280822 C 192.5 339.55160930022964, 178.75 363.3636036730592, 165 371.352141298366 C 151.25 379.34067892367284, 137.5 391.0636141287465, 123.75 390.797381032663 C 110 390.5311479365795, 96.25 372.3820664713992, 82.5 369.754742721865 C 68.75 367.1274189723308, 55 377.571721812245, 41.25 375.033438535458 C 27.5 372.495155258671, 0 354.52504306114304, 0 354.52504306114304 \n      L 0 354.52504306114304\n      M 0 354.52504306114304\n      Z\n    ",
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
                "x": 41.25,
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
                "x": 82.5,
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
                "x": 123.75,
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
                "x": 165,
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
                "x": 206.25,
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
                "x": 247.5,
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
                "x": 288.75,
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
                "x": 330,
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
                "x": 371.25,
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
                "x": 412.5,
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
                "x": 453.75,
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
                "x": 495,
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
                "x": 536.25,
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
                "x": 577.5,
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
                "x": 618.75,
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
                "x": 660,
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
                "x": 701.25,
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
                "x": 742.5,
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
                "x": 783.75,
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
                "x": 825,
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
                "x": 866.25,
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
                "x": 907.5,
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
                "x": 948.75,
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
                "x": 990,
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

const App = () => {
  return (
    <OverTime
      ribbons={ribbons}
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
      svgWidth={900} svgHeight={641}
    />
  );
}

export default App
