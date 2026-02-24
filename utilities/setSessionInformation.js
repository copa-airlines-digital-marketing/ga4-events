{
    "event": "flight/setSessionInformation",
    "payload": {
        "sessionResponse": {
            "transactionIdentifier": "962df813-3cd6-455d-ad73-733d55bb715c",
            "context": "3532456387",
            "correlationID": "e527bc37-7a2a-4167-ac1b-ad633b5ba742",
            "numberOfPassengers": 1,
            "isRestrictiveFare": false,
            "originDestinations": [
                {
                    "originDestinationKey": "OD1",
                    "departureAirportCode": "PTY",
                    "destinationAirportCode": "DAV",
                    "destinationImageUrl": "https://d3gwfrazxk4jnl.cloudfront.net/DAV.jpg",
                    "originCountry": "PA",
                    "destinationCountry": "PA",
                    "departureDate": "2026-03-19",
                    "fareFamily": {
                        "name": "Económica Standard",
                        "description": [
                            {
                                "code": "2",
                                "text": "Incluye 2 equipajes en bodega (23 kg c/u)"
                            },
                            {
                                "code": "1",
                                "text": "Cambios en la reserva (aplican cargos)"
                            },
                            {
                                "code": "2",
                                "text": "Preselección de asientos gratis"
                            },
                            {
                                "code": "1",
                                "text": "Millas reembolsable (aplican cargos)"
                            }
                        ]
                    },
                    "journeyTime": "1h 11m",
                    "flights": [
                        {
                            "flightKey": "F1",
                            "isUSFlight": false,
                            "aircraftName": "Boeing 737-900",
                            "layoverTime": "0h0m",
                            "actionCode": "PN",
                            "departure": {
                                "airportCode": "PTY",
                                "airportName": null,
                                "cityName": "Panamá",
                                "flightDate": "2026-03-19",
                                "flightTime": "07:53",
                                "terminal": null
                            },
                            "arrival": {
                                "airportCode": "DAV",
                                "airportName": null,
                                "cityName": "David",
                                "flightDate": "2026-03-19",
                                "flightTime": "09:04",
                                "terminal": null
                            },
                            "flightNumber": "17",
                            "airlineCode": "CM",
                            "airlineName": "Copa Airlines",
                            "marketingCarrier": {
                                "flightNumber": "17",
                                "airlineCode": "CM",
                                "airlineName": "Copa Airlines"
                            },
                            "operatingCarrier": null,
                            "equipment": null,
                            "fareComponent": {
                                "classOfService": "G"
                            },
                            "onTimePerformance": null,
                            "priceClass": null,
                            "thruFlights": 0,
                            "stops": []
                        }
                    ]
                },
                {
                    "originDestinationKey": "OD2",
                    "departureAirportCode": "DAV",
                    "destinationAirportCode": "PTY",
                    "destinationImageUrl": "https://d3gwfrazxk4jnl.cloudfront.net/PTY.jpg",
                    "originCountry": "PA",
                    "destinationCountry": "PA",
                    "departureDate": "2026-03-26",
                    "fareFamily": {
                        "name": "Económica Standard",
                        "description": [
                            {
                                "code": "2",
                                "text": "Incluye 2 equipajes en bodega (23 kg c/u)"
                            },
                            {
                                "code": "1",
                                "text": "Cambios en la reserva (aplican cargos)"
                            },
                            {
                                "code": "2",
                                "text": "Preselección de asientos gratis"
                            },
                            {
                                "code": "1",
                                "text": "Millas reembolsable (aplican cargos)"
                            }
                        ]
                    },
                    "journeyTime": "1h 7m",
                    "flights": [
                        {
                            "flightKey": "F2",
                            "isUSFlight": false,
                            "aircraftName": "Boeing 737-900",
                            "layoverTime": "0h0m",
                            "actionCode": "PN",
                            "departure": {
                                "airportCode": "DAV",
                                "airportName": null,
                                "cityName": "David",
                                "flightDate": "2026-03-26",
                                "flightTime": "08:32",
                                "terminal": null
                            },
                            "arrival": {
                                "airportCode": "PTY",
                                "airportName": null,
                                "cityName": "Panamá",
                                "flightDate": "2026-03-26",
                                "flightTime": "09:39",
                                "terminal": null
                            },
                            "flightNumber": "11",
                            "airlineCode": "CM",
                            "airlineName": "Copa Airlines",
                            "marketingCarrier": {
                                "flightNumber": "11",
                                "airlineCode": "CM",
                                "airlineName": "Copa Airlines"
                            },
                            "operatingCarrier": null,
                            "equipment": null,
                            "fareComponent": {
                                "classOfService": "G"
                            },
                            "onTimePerformance": null,
                            "priceClass": null,
                            "thruFlights": 0,
                            "stops": []
                        }
                    ]
                }
            ],
            "passengers": [
                {
                    "order": 1,
                    "typeCode": "ADT",
                    "surname": "LIMA ROCHA CALDAS",
                    "givenName": "AMADEUS",
                    "birthDate": "1987-09-29",
                    "gender": "M",
                    "title": null,
                    "phoneNumber": "50730430850",
                    "phone": null,
                    "email": "bsacmspec@yahoo.com",
                    "ktn": null,
                    "redress": null,
                    "ffProgram": "CM",
                    "ffNumber": "271197874",
                    "ffTierCode": "5",
                    "infant": null,
                    "seats": [],
                    "seatsEligibility": [
                        {
                            "originDestinationKey": "OD1",
                            "flightKey": "F1",
                            "isEligibleForEmergency": true
                        },
                        {
                            "originDestinationKey": "OD2",
                            "flightKey": "F2",
                            "isEligibleForEmergency": true
                        }
                    ],
                    "state": null,
                    "marketingConsent": false,
                    "phoneNumberCountry": null,
                    "residenceInfo": null,
                    "travelReasons": [],
                    "ffAllianceCode": null,
                    "ffAdditionalInfo": null,
                    "specialServices": []
                }
            ],
            "pricingInfo": {
                "fareCacheKey": "S1Pc25d6e54-e35e-4f12-b048-a6b27f75db68-1",
                "stopover": false
            },
            "reservationInfo": {
                "pnrNumber": "AFVB4H",
                "errors": null,
                "warnings": [],
                "creationDateTime": "2026-02-24T16:32:00"
            },
            "pricelock": null,
            "flightprice": {
                "fareGroup": {
                    "fareCacheKey": "AEbt8H1zozIfhXAiCd1SSDqCAFzfkyXH+Wa2TlaLj7XnuKdp00rPwyHUglr289kcHBxUjCMpQgiHzisJuVVHZw==",
                    "currencyCode": "USD",
                    "validatingCarrier": "CM",
                    "discountType": "CREDITCARD",
                    "travelerGroup": [
                        {
                            "typeRequested": "ADT",
                            "typePriced": "ADT",
                            "travelerIDRefs": [
                                "T1"
                            ],
                            "price": {
                                "total": {
                                    "miles": 20000,
                                    "taxes": 10,
                                    "discounts": 2000
                                },
                                "baseFareAmount": 20000,
                                "discount": 2000,
                                "feesApplied": false,
                                "lateFee": null,
                                "serviceFee": null,
                                "taxesAmount": 10,
                                "taxes": [
                                    {
                                        "designator": "PJ",
                                        "amount": 10,
                                        "nature": "PA",
                                        "description": "PASSENGER FACILITY CHARGE DOMESTIC AND INTERNATIONAL"
                                    }
                                ]
                            },
                            "fareInfos": [
                                {
                                    "fareFamilyCode": "ESD",
                                    "fareFamilyName": "Económica Standard",
                                    "code": "YSO09ZA",
                                    "flightNumber": null,
                                    "cabinType": null
                                },
                                {
                                    "fareFamilyCode": "ESD",
                                    "fareFamilyName": "Económica Standard",
                                    "code": "YSO09ZA",
                                    "flightNumber": null,
                                    "cabinType": null
                                }
                            ],
                            "redemptionDetails": [
                                {
                                    "travelerIDRef": "T1",
                                    "segmentIDsRef": [
                                        "1"
                                    ],
                                    "basePriceMiles": 10000,
                                    "discountPercentage": "10.0",
                                    "requiredAmount": 9000
                                },
                                {
                                    "travelerIDRef": "T1",
                                    "segmentIDsRef": [
                                        "2"
                                    ],
                                    "basePriceMiles": 10000,
                                    "discountPercentage": "10.0",
                                    "requiredAmount": 9000
                                }
                            ]
                        }
                    ],
                    "baggageData": [
                        {
                            "travelerIDRefs": [
                                "T1"
                            ],
                            "bags": [
                                {
                                    "originDestination": {
                                        "od": "OD1",
                                        "flights": [
                                            "Isgm1800f9a9dd1cd"
                                        ]
                                    },
                                    "checkedBags": {
                                        "maximumWeightAllowed": [
                                            {
                                                "weight": 23,
                                                "code": "KG",
                                                "description": "Kilogram(s)"
                                            },
                                            {
                                                "weight": 50,
                                                "code": "LBS",
                                                "description": "Pound(s)"
                                            }
                                        ],
                                        "linearSize": [
                                            {
                                                "size": 158,
                                                "code": "CM",
                                                "description": "Centimeter(s)"
                                            },
                                            {
                                                "size": 62,
                                                "code": "IN",
                                                "description": "Inch(es)"
                                            }
                                        ],
                                        "maximumBagsAllowed": 2,
                                        "carrier": "CM",
                                        "pricesDetails": [
                                            {
                                                "key": "1",
                                                "totalAmount": 0,
                                                "currency": "USD",
                                                "isIncluded": true
                                            },
                                            {
                                                "key": "2",
                                                "totalAmount": 0,
                                                "currency": "USD",
                                                "isIncluded": true
                                            }
                                        ]
                                    },
                                    "carryOn": {
                                        "maximumCarryOnWeightAllowed": [
                                            {
                                                "weight": 10,
                                                "code": "KG",
                                                "description": "Kilogram(s)"
                                            },
                                            {
                                                "weight": 22,
                                                "code": "LBS",
                                                "description": "Pound(s)"
                                            }
                                        ],
                                        "linearSize": [
                                            {
                                                "size": 118,
                                                "code": "CM",
                                                "description": "Centimeter(s)"
                                            },
                                            {
                                                "size": 46,
                                                "code": "IN",
                                                "description": "Inch(es)"
                                            }
                                        ],
                                        "maximumCarryOnBagsAllowed": 1,
                                        "carrier": "CM",
                                        "dimensions": {
                                            "height": [
                                                {
                                                    "size": 56,
                                                    "code": "CM",
                                                    "description": "Centimeter(s)"
                                                },
                                                {
                                                    "size": 22,
                                                    "code": "IN",
                                                    "description": "Inch(es)"
                                                }
                                            ],
                                            "length": [
                                                {
                                                    "size": 36,
                                                    "code": "CM",
                                                    "description": "Centimeter(s)"
                                                },
                                                {
                                                    "size": 14,
                                                    "code": "IN",
                                                    "description": "Inch(es)"
                                                }
                                            ],
                                            "width": [
                                                {
                                                    "size": 26,
                                                    "code": "CM",
                                                    "description": "Centimeter(s)"
                                                },
                                                {
                                                    "size": 10,
                                                    "code": "IN",
                                                    "description": "inch(es)"
                                                }
                                            ]
                                        }
                                    },
                                    "personalItems": {
                                        "linearSize": [
                                            {
                                                "size": 36,
                                                "code": "IN",
                                                "description": "inch(es)"
                                            },
                                            {
                                                "size": 90,
                                                "code": "CM",
                                                "description": "Centimeter(s)"
                                            }
                                        ],
                                        "maximumPersonalItems": 1,
                                        "maximumWeightAllowed": [
                                            {
                                                "weight": 5,
                                                "code": "KG",
                                                "description": "Kilogram(s)"
                                            },
                                            {
                                                "weight": 11,
                                                "code": "LB",
                                                "description": "Pound(s)"
                                            }
                                        ],
                                        "dimensions": {
                                            "height": [
                                                {
                                                    "size": 17,
                                                    "code": "IN",
                                                    "description": "Inch(es)"
                                                },
                                                {
                                                    "size": 43,
                                                    "code": "CM",
                                                    "description": "Centimeter(s)"
                                                }
                                            ],
                                            "length": [
                                                {
                                                    "size": 10,
                                                    "code": "IN",
                                                    "description": "Inch(es)"
                                                },
                                                {
                                                    "size": 25,
                                                    "code": "CM",
                                                    "description": "Centimeter(s)"
                                                }
                                            ],
                                            "width": [
                                                {
                                                    "size": 9,
                                                    "code": "IN",
                                                    "description": "Inch(es)"
                                                },
                                                {
                                                    "size": 22,
                                                    "code": "CM",
                                                    "description": "Centimeter(s)"
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "originDestination": {
                                        "od": "OD2",
                                        "flights": [
                                            "Isgm2400f9a9dd1cd"
                                        ]
                                    },
                                    "checkedBags": {
                                        "maximumWeightAllowed": [
                                            {
                                                "weight": 23,
                                                "code": "KG",
                                                "description": "Kilogram(s)"
                                            },
                                            {
                                                "weight": 50,
                                                "code": "LBS",
                                                "description": "Pound(s)"
                                            }
                                        ],
                                        "linearSize": [
                                            {
                                                "size": 158,
                                                "code": "CM",
                                                "description": "Centimeter(s)"
                                            },
                                            {
                                                "size": 62,
                                                "code": "IN",
                                                "description": "Inch(es)"
                                            }
                                        ],
                                        "maximumBagsAllowed": 2,
                                        "carrier": "CM",
                                        "pricesDetails": [
                                            {
                                                "key": "1",
                                                "totalAmount": 0,
                                                "currency": "USD",
                                                "isIncluded": true
                                            },
                                            {
                                                "key": "2",
                                                "totalAmount": 0,
                                                "currency": "USD",
                                                "isIncluded": true
                                            }
                                        ]
                                    },
                                    "carryOn": {
                                        "maximumCarryOnWeightAllowed": [
                                            {
                                                "weight": 10,
                                                "code": "KG",
                                                "description": "Kilogram(s)"
                                            },
                                            {
                                                "weight": 22,
                                                "code": "LBS",
                                                "description": "Pound(s)"
                                            }
                                        ],
                                        "linearSize": [
                                            {
                                                "size": 118,
                                                "code": "CM",
                                                "description": "Centimeter(s)"
                                            },
                                            {
                                                "size": 46,
                                                "code": "IN",
                                                "description": "Inch(es)"
                                            }
                                        ],
                                        "maximumCarryOnBagsAllowed": 1,
                                        "carrier": "CM",
                                        "dimensions": {
                                            "height": [
                                                {
                                                    "size": 56,
                                                    "code": "CM",
                                                    "description": "Centimeter(s)"
                                                },
                                                {
                                                    "size": 22,
                                                    "code": "IN",
                                                    "description": "Inch(es)"
                                                }
                                            ],
                                            "length": [
                                                {
                                                    "size": 36,
                                                    "code": "CM",
                                                    "description": "Centimeter(s)"
                                                },
                                                {
                                                    "size": 14,
                                                    "code": "IN",
                                                    "description": "Inch(es)"
                                                }
                                            ],
                                            "width": [
                                                {
                                                    "size": 26,
                                                    "code": "CM",
                                                    "description": "Centimeter(s)"
                                                },
                                                {
                                                    "size": 10,
                                                    "code": "IN",
                                                    "description": "inch(es)"
                                                }
                                            ]
                                        }
                                    },
                                    "personalItems": {
                                        "linearSize": [
                                            {
                                                "size": 36,
                                                "code": "IN",
                                                "description": "inch(es)"
                                            },
                                            {
                                                "size": 90,
                                                "code": "CM",
                                                "description": "Centimeter(s)"
                                            }
                                        ],
                                        "maximumPersonalItems": 1,
                                        "maximumWeightAllowed": [
                                            {
                                                "weight": 5,
                                                "code": "KG",
                                                "description": "Kilogram(s)"
                                            },
                                            {
                                                "weight": 11,
                                                "code": "LB",
                                                "description": "Pound(s)"
                                            }
                                        ],
                                        "dimensions": {
                                            "height": [
                                                {
                                                    "size": 17,
                                                    "code": "IN",
                                                    "description": "Inch(es)"
                                                },
                                                {
                                                    "size": 43,
                                                    "code": "CM",
                                                    "description": "Centimeter(s)"
                                                }
                                            ],
                                            "length": [
                                                {
                                                    "size": 10,
                                                    "code": "IN",
                                                    "description": "Inch(es)"
                                                },
                                                {
                                                    "size": 25,
                                                    "code": "CM",
                                                    "description": "Centimeter(s)"
                                                }
                                            ],
                                            "width": [
                                                {
                                                    "size": 9,
                                                    "code": "IN",
                                                    "description": "Inch(es)"
                                                },
                                                {
                                                    "size": 22,
                                                    "code": "CM",
                                                    "description": "Centimeter(s)"
                                                }
                                            ]
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            },
            "insuranceOffer": null,
            "cartrawlerOffer": null,
            "carbonEmissionOffer": null,
            "milesAndCashOffer": {
                "key": null,
                "typeCode": "SLIDER",
                "code": "OC",
                "subCode": "MXC",
                "description": "Slider-2",
                "attributeItems": {
                    "BOOKINGINSTR": "API",
                    "METHOD": "D",
                    "REASONCODE": "D",
                    "TYPE": "Surcharge",
                    "VALIDATINGCARRIER": null
                },
                "prices": [
                    {
                        "refId": "ADT-1",
                        "currency": "USD",
                        "baseAmount": 116,
                        "baseAmountNoDiscount": null,
                        "totalAmount": 124.12,
                        "totalAmountNoDiscount": null,
                        "equivalentValue": 4000,
                        "description": "OPTION-02",
                        "taxes": [
                            {
                                "code": "PA",
                                "amount": 8.12
                            }
                        ]
                    }
                ]
            }
        }
    },
    "gtm.uniqueEventId": 134
}