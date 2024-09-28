import {
  format,
  parse,
  startOfDay,
} from 'date-fns'
import { tr } from 'date-fns/locale';

export interface DeepLinkProps {
  origin: string,
  cabin: string,
  destination: string,
  departureDate: string,
  returnDate: string
}
export const useLoyaltyProgramDeepLink = () => {
  const premiumCabins = ["F", "J"];
  const searchingForPremiumCabin = (props): boolean => {
    return premiumCabins.includes(props.cabin);
  }
  const generateAAdvantageLink = (props: DeepLinkProps, lang: string): string => {
    console.log(lang);
    const isPremiumCabin = searchingForPremiumCabin(props)
    let url = "https://www.aa.com/booking/search"
    let tripType = 'OneWay'
    let locale = 'en_US'
    const slices = [
      {
        orig: props.origin,
        origNearby: false,
        dest: props.destination,
        destNearby: false,
        date: props.departureDate,
      }
    ]

    if (props.returnDate != "") {
      tripType = 'RoundTrip';
      slices.push({
        orig: props.destination,
        origNearby: false,
        dest: props.origin,
        destNearby: false,
        date: props.returnDate,
      })
    }

    if (lang == 'pt') {
      url = "https://www.aa.com.br/booking/search"
      locale = "pt_BR"
    }

    const params = new URLSearchParams({
      locale: locale,
      pax: '1',
      adult: '1',
      type: tripType,
      searchType: 'Award',
      cabin: isPremiumCabin ? 'BUSINESS,FIRST' : '',
      carriers: 'ALL',
      slices: JSON.stringify(slices)
    });

    return `${url}?${params.toString()}`;
  };

  const generateAeroplanLink = (props: DeepLinkProps, lang: string): string => {
    const url = "https://www.aircanada.com/aeroplan/redeem/availability/outbound";
    const params = new URLSearchParams({
      org0: props.origin, // Origin airport code
      dest0: props.destination, // Destination airport code
      org1: props.destination, // Return origin airport code
      dest1: props.origin, // Return destination airport code
      departureDate0: props.departureDate, // Outbound date in YYYY-MM-DD format
      departureDate1: props.returnDate, // Return date in YYYY-MM-DD format
      ADT: '1', // Number of adults
      YTH: '0', // Number of youth passengers
      CHD: '0', // Number of children
      INF: '0', // Number of infants
      INS: '0', // Number of infants with seat
      lang: 'en-CA', // Language
      tripType: props.returnDate != "" ? "R" : "O",
      marketCode: 'INT', // Market code
    });
    return `${url}?${params.toString()}`;
  };

  // ConnectMiles
  const generateConnectMilesLink = (props: DeepLinkProps, lang: string): string => {
    // if (props.airlines?.includes('Emirates')) {
    //   return 'tel:08008862672';
    // }
    const url = "https://shopping.copaair.com/miles";
    const params = new URLSearchParams({
      roundtrip: props.returnDate ? "true" : 'false',
      adults: '1',
      children: '0',
      infants: '0',
      date1: props.departureDate,
      date2: props.returnDate ?? 'null',
      promocode: '',
      area1: props.origin,
      area2: props.destination,
      advanced_air_search: 'false',
      flexible_dates_v2: 'false',
      // airline_preference: props.airlines ? props.airlines[0] : '',
    });
    return `${url}?${params.toString()}`;
  };

  // ClubPremier
  const generateClubPremierLink = (props: DeepLinkProps, lang: string): string => {
    const url = "https://vuelaconpuntos.aeromexicorewards.com/FlightSelection";
    const params = new URLSearchParams({
    });
    return `${url}?${params.toString()}`;
  };

  // ExecutiveClub
  const generateExecutiveClubLink = (props: DeepLinkProps, lang: string): string => {
    const url = "https://www.britishairways.com/travel/redeem/execclub/_gf/en_pt";
    let departureDate: Date | null = null;

    if (props.departureDate) {
      departureDate = parse(props.departureDate, 'yyyy-MM-dd', new Date())
    }

    let returnDate: Date | null = null;

    if (props.returnDate != "") {
      returnDate = parse(props.returnDate, 'yyyy-MM-dd', new Date())
    }
    const params = new URLSearchParams({
      eId: '100002',
      pageid: 'PLANREDEMPTIONJOURNEY',
      tab_selected: 'redeem',
      redemption_type: 'STD_RED',
      amex_redemption_type: '',
      upgradeOutbound: 'true',
      WebApplicationID: 'BOD',
      Output: '',
      hdnAgencyCode: '',
      departurePoint: props.origin,
      destinationPoint: props.destination,
      departInputDate: departureDate ? format(departureDate, "dd/MM/yy") : "",
      returnInputDate: returnDate ? format(returnDate, "dd/MM/yy") : 'null',
      oneWay: returnDate ? "false" : "true",
      RestrictionType: 'Restricted',
      NumberOfAdults: '1',
      NumberOfYoungAdults: '0',
      NumberOfChildren: '0',
      NumberOfInfants: '0',
      aviosapp: 'true',
      CabinCode: "M",
    });
    return `${url}?${params.toString()}`;
  };

  // EtihadGuest
  const generateEtihadGuest = (props: DeepLinkProps, lang: string): string => {
    const url = "https://digital.etihad.com/book/search";
    const params = new URLSearchParams({
      LANGUAGE: 'EN',
      CHANNEL: 'DESKTOP',
      B_LOCATION: props.origin,
      E_LOCATION: props.destination,
      TRIP_TYPE: props.returnDate != "" ? 'R' : "O",
      CABIN: 'E',
      TRAVELERS: 'ADT',
      TRIP_FLOW_TYPE: 'AVAILABILITY',
      DATE_1: `${props.departureDate.replace(/-/g, '')}0000`,
      WDS_ENABLE_MILES_TOGGLE: 'TRUE',
      FLOW: 'AWARD',
    });

    if (props.returnDate) {
      params.set("DATE_2", props.returnDate.replace(/-/g, '') + "0000")
    }

    return `${url}?${params.toString()}`;
  };

  // FinnairPlus
  const generateFinnairPlusLink = (props: DeepLinkProps, lang: string): string => {
    const url = "https://www.finnair.com/en/booking/flight-selection";
    const isPremiumCabin = searchingForPremiumCabin(props)
    const json = {
      "flights": [
        {
          "origin": props.origin,
          "destination": props.destination,
          "departureDate": props.departureDate
        }
      ],
      "cabin": isPremiumCabin ? "BUSINESS" : "MIXED",
      "adults": 1,
      "c15s": 0,
      "children": 0,
      "infants": 0,
      "isAward": true
    };
    if (props.returnDate != "") {
      json.flights.push(
        {
          "origin": props.destination,
          "destination": props.origin,
          "departureDate": props.returnDate
        }
      )
    }

    const params = new URLSearchParams({
      json: JSON.stringify(json)
    });
    return `${url}?${params.toString()}`;
  };

  // FlyingBlue
  const generateFlyingBlueLink = (props: DeepLinkProps, lang: string): string => {
    let url = "https://wwws.airfrance.us/search/offers";

    if (lang == 'pt') {
      url = "https://wwws.airfrance.com.br/search/offers"
    }

    const isPremiumCabin = searchingForPremiumCabin(props)
    const params = new URLSearchParams({
      activeConnection: '0',
      bookingFlow: 'REWARD',
      cabinClass: isPremiumCabin ? 'BUSINESS' : 'ECONOMY',
      pax: '1:0:0:0:0:0:0:0',
      connections: `${props.origin}:C:${props.departureDate.replace(/-/g, '')}>${props.destination}`,
    });

    if (props.returnDate != "") {
      let connections = params.get('connections') ?? ''
      connections += `:A-${props.destination}:A:${props.returnDate.replace(/-/g, '')}>${props.origin}:A`
      params.set("connections", connections)
    }
    return `${url}?${params.toString()}`;
  };

  // IberiaPlus
  const generateIberiaPlusLink = (props: DeepLinkProps, lang: string): string => {
    let departureDate: Date | null = null;

    departureDate = parse(props.departureDate, 'yyyy-MM-dd', new Date())

    let returnDate: Date | null = null;

    if (props.returnDate != "") {
      returnDate = parse(props.returnDate, 'yyyy-MM-dd', new Date())
    }

    const url = "https://www.iberia.com/flights/";
    const params = new URLSearchParams({
      market: 'US',
      language: 'en',
      appliesOMB: 'false',
      splitEndCity: 'false',
      initializedOMB: 'true',
      flexible: 'false',
      TRIP_TYPE: returnDate ? "2" : '1',
      BEGIN_CITY_01: props.origin,
      END_CITY_01: props.destination,
      BEGIN_DAY_01: format(departureDate, "dd"),
      BEGIN_MONTH_01: format(departureDate, "yyyyMM"),
      BEGIN_YEAR_01: format(departureDate, "yyyy"),
      END_DAY_01: returnDate ? format(returnDate, "dd") : '',
      END_MONTH_01: returnDate ? format(returnDate, "yyyyMM") : '',
      END_YEAR_01: returnDate ? format(returnDate, "yyyy") : '',
      FARE_TYPE: 'R',
      quadrigam: 'IBUPTS',
      ADT: '1',
      CHD: '0',
      INF: 'undefined',
      residentCode: '',
      familianumerosa: '',
      pagoAvios: 'true',
    });
    return `${url}?${params.toString()}#!/availability`;
  };

  // LatamPass
  const generateLatamPassLink = (props: DeepLinkProps, lang: string): string => {
    let url = "https://www.latamairlines.com/us/en/flight-offers";
    if (lang == 'pt') {
      url = "https://www.latamairlines.com/br/pt/oferta-voos"
    }

    const params = new URLSearchParams({
      origin: props.origin,
      outbound: props.departureDate + "T12:00:00.000Z",
      destination: props.destination,
      adt: '1',
      chd: '0',
      inf: '0',
      trip: "OW",
      cabin: 'Economy',
      redemption: 'true',
      sort: 'RECOMMENDED',
    });
    if (props.returnDate != "") {
      params.set("trip", "RT")
      params.set("inbound", props.returnDate + "T12:00:00.000Z")
    }
    return `${url}?${params.toString()}`;
  };

  // MileagePlus
  const generateMileagePlusLink = (props: DeepLinkProps, lang: string): string => {
    let url = "https://www.united.com/en/us/fsr/choose-flights";
    if (lang == 'pt') {
      url = "https://www.united.com/pt/br/fsr/choose-flights"
    }

    const params = new URLSearchParams({
      at: '1',
      cbm: '-1',
      cbm2: '-1',
      clm: '7',
      cp: '0',
      ct: '0',
      d: props.departureDate,
      f: props.origin,
      ft: '0',
      px: '1',
      idx: '1',
      mm: '0',
      sc: '7',
      st: 'bestmatches',
      t: props.destination,
      taxng: '1',
      tqp: 'R',
      tt: "1"
    });
    if (props.returnDate != "") {
      params.set("r", props.returnDate)
      params.set("tt", "0")
    }
    return `${url}?${params.toString()}`;
  };

  // MilesAndGo
  const generateMilesAndGoLink = (props: DeepLinkProps, lang: string): string => {
    const url = "https://booking.flytap.com/booking/flights/deeplink";
    const params = new URLSearchParams({
      origin: props.origin,
      destination: props.destination,
      depDate: props.departureDate.split('-').reverse().join('.'),
      adt: '1',
      chd: '0',
      inf: '0',
      yth: '0',
      language: 'PT',
      market: 'BR',
      flightType: 'single',
      // award:"true",
      networkName: 'EMUNDO',
      flightWithMiles: 'true',
      bookAwardFlights: 'true',
      starAlliance: 'true',
      payWithMilesEditableState: 'true',
      cabinOptions: props.cabin === 'BUSINESS' || props.cabin === 'FIRST' ? 'C' : 'E',
    });
    return `${url}?${params.toString()}`;
  };

  // PrivilegeClub
  const generatePrivilegeClubLink = (props: DeepLinkProps, lang: string): string => {
    const url = "https://booking.qatarairways.com/nsp/views/showBooking.action";
    const params = new URLSearchParams({
      widget: 'QR',
      searchType: 'F',
      addTaxToFare: 'Y',
      minPurTime: '0',
      tripType: 'O',
      bookingClass: 'E',
      allowRedemption: 'Y',
      flexibleDate: "Off",
      selLang: 'EN',
      fromStation: props.origin,
      from: props.origin,
      toStation: props.destination,
      to: props.destination,
      departingHidden: props.departureDate,
      departing: props.departureDate,
      adults: '1',
      children: '0',
      infants: '0',
      teenager: '0',
      ofw: '0',
      promoCode: 'null',
      qmilesFlow: 'true',
      paymentMode: 'qmiles',
      upsellCallId: '100',
    });
    return `${url}?${params.toString()}`;
  };

  // Smiles
  const generateSmilesLink = (props: DeepLinkProps, lang: string): string => {
    const url = "https://www.smiles.com.br/mfe/emissao-passagem/";
    const isPremiumCabin = searchingForPremiumCabin(props)
    const departureDate = parse(props.departureDate, 'yyyy-MM-dd', new Date())

    let returnDate: Date | null = null;
    if (props.returnDate != "") {
      returnDate = parse(props.returnDate, 'yyyy-MM-dd', new Date())
    }

    const params = new URLSearchParams({
      adults: '1',
      cabin: isPremiumCabin ? 'BUSINESS' : 'ALL',
      children: '0',
      departureDate: startOfDay(departureDate).getTime().toString(),
      infants: '0',
      isElegible: 'false',
      isFlexibleDateChecked: 'false',
      returnDate: returnDate ? startOfDay(returnDate).getTime().toString() : "",
      searchType: 'congenere',
      segments: '1',
      tripType: returnDate ? '1' : "2",
      originAirport: props.origin,
      originCity: '',
      originCountry: '',
      originAirportIsAny: 'false',
      destinationAirport: props.destination,
      destinCity: '',
      destinCountry: '',
      destinAirportIsAny: 'false',
      'novo-resultado': 'true',
    });
    return `${url}?${params.toString()}`;
  };

  // TudoAzul
  const generateAzulFidelidadeLink = (props: DeepLinkProps, isBusiness: boolean): string => {
    const isPremiumCabin = searchingForPremiumCabin(props)
    const cabinClass = isPremiumCabin ? 'BUSINESS' : 'ECONOMY';
    if (props.cabin != "") {
      if (isBusiness && !isPremiumCabin) {
        return ""
      }

      if (!isBusiness && isPremiumCabin) {
        return ""
      }
    }


    const date = parse(props.departureDate, 'yyyy-MM-dd', new Date())
    const interlineDate = format(startOfDay(date), 'yyyy-MM-dd');
    const interlineLink = `https://azulpelomundo.voeazul.com.br/flights/OW/${props.origin}/${props.destination}/-/-/${interlineDate}/-/1/0/0/0/0/ALL/F/${cabinClass}/-/-/-/-/A/-`;

    return interlineLink;
  };

  function generateAlaskaMileagePlanLink(props: DeepLinkProps, lang: string): string {
    const url = "https://www.alaskaair.com/search/results";
    const isPremiumCabin = searchingForPremiumCabin(props)
    const params = new URLSearchParams({
      O: props.origin,
      OD: props.departureDate,
      D: props.destination,
      DD: props.returnDate,
      A: "1",
      C: "0",
      L: "0",
      RT: props.returnDate == "" ? "false" : "true",
      ShoppingMethod: "onlineaward",
      awardType: "MilesOnly",
      beta: "true"
    });

    return `${url}?${params.toString()}`;
  }
  function generateCopaConnectMilesLink(props: DeepLinkProps, lang: string): string {
    const url = "https://shopping.copaair.com/miles";
    const params = new URLSearchParams({
      roundtrip: props.returnDate != "" ? "true" : "false",
      area1: props.origin,
      area2: props.destination,
      date1: props.departureDate,
      date2: props.returnDate,
      flexible_dates_v2: "false",
      adults: "1",
      children: "0",
      infants: "0",
      isMiles: "true",
      advanced_air_search: "false",
      stopover: "false",
      sf: "gs",
      langid: lang,
      promocode: "",
    });

    return `${url}?${params.toString()}`;
  }
  function generateDeltaSkyMiles(props: DeepLinkProps, lang: string): string {
    let url = "https://www.delta.com/flight-search/search";
    if (lang == 'pt') {
      url = "https://pt.delta.com/flight-search/search"
    }

    const departureDate = parse(props.departureDate, 'yyyy-MM-dd', new Date())

    let returnDate: Date | null = null;
    if (props.returnDate != "") {
      returnDate = parse(props.returnDate, 'yyyy-MM-dd', new Date())
    }
    const params = new URLSearchParams({
      "action": "findFlights",
      "searchByCabin": "true",
      "deltaOnlySearch": "false",
      "deltaOnly": "off",
      "go": "Find%20Flights",
      "tripType": returnDate ? "ROUND_TRIP" : "ONE_WAY",
      "passengerInfo": "ADT:1",
      "priceSchedule": "price",
      "awardTravel": "true",
      "originCity": props.origin,
      "destinationCity": props.destination,
      "departureDate": format(departureDate, 'MM/dd/yyyy'),
      "returnDate": returnDate ? format(returnDate, 'MM/dd/yyyy') : "",
      "forceMiles": "true",
    });

    return `${url}?${params.toString()}`;
  }
  function generateJetBlueTrueBlue(props: DeepLinkProps, lang: string): string {
    const url = "https://www.jetblue.com/booking/flights";
    const params = new URLSearchParams({
      "from": props.origin,
      "to": props.destination,
      "depart": props.departureDate,
      "isMultiCity": "false",
      "noOfRoute": "1",
      "lang": "en",
      "adults": "1",
      "children": "0",
      "infants": "0",
      "sharedMarket": "false",
      "roundTripFaresFlag": "true",
      "usePoints": "true",
    });

    if (props.returnDate != "") {
      params.set("return", props.returnDate)
    }
    return `${url}?${params.toString()}`;
  }

  function generateSASEurobonus(props: DeepLinkProps, lang: string): string {
    const url = "https://www.flysas.com/en/book/flights";
    let tripType = "OW"
    let returnDate = ""
    if (props.returnDate != "") {
      tripType = "RT";
      returnDate = `-${props.returnDate.replace(/-/g, '')}`
    }
    const searchString = `${tripType}_${props.origin}-${props.destination}-${props.departureDate.replace(/-/g, '')}${returnDate}_a1c0i0y0`
    const params = new URLSearchParams({
      "search": searchString,
      "view": "upsell",
      "bookingFlow": "points",
    });

    if (props.returnDate != "") {
      params.set("return", props.returnDate)
    }
    return `${url}?${params.toString()}`;
  }

  function generateVirginAtlanticFlyingClub(props: DeepLinkProps, lang: string): string {

    const url = "https://www.virginatlantic.com/flight-search/search";
    const departureDate = parse(props.departureDate, 'yyyy-MM-dd', new Date())

    let returnDate: Date | null = null;
    if (props.returnDate != "") {
      returnDate = parse(props.returnDate, 'yyyy-MM-dd', new Date())
    }
    const params = new URLSearchParams({
      "action": "findFlights",
      "searchByCabin": "true",
      "deltaOnlySearch": "false",
      "deltaOnly": "off",
      "go": "Find%20Flights",
      "tripType": returnDate ? "ROUND_TRIP" : "ONE_WAY",
      "passengerInfo": "ADT:1|GBE:0|CNN:0|INF:0",
      "priceSchedule": "price",
      "awardTravel": "true",
      "originCity": props.origin,
      "destinationCity": props.destination,
      "departureDate": format(departureDate, 'MM/dd/yyyy'),
      "returnDate": returnDate ? format(returnDate, 'MM/dd/yyyy') : "",
      "forceMiles": "true",
    });

    return `${url}?${params.toString()}`;
  }

  function generateVirginAustraliaVelocity(props: DeepLinkProps, lang: string): string {

    const url = "https://book.virginaustralia.com/dx/VADX/#/date-selection";
    const departureDate = parse(props.departureDate, 'yyyy-MM-dd', new Date())

    let returnDate: Date | null = null;
    if (props.returnDate != "") {
      returnDate = parse(props.returnDate, 'yyyy-MM-dd', new Date())
    }
    const params = new URLSearchParams({
      "journeyType": returnDate ? "round-trip" : "one-way",
      "activeMonth": format(departureDate, "MM-dd-yyyy"),
      "date": format(departureDate, "MM-dd-yyyy"),
      "awardBooking": "true",
      "searchType": "BRANDED",
      "class": "First",
      "ADT": "1",
      "CHD": "0",
      "INF": "0",
      "origin": props.origin,
      "destination": props.destination,
      "promoCode": "",
      "direction": "0",
    });
    if (returnDate) {
      params.set('date1', format(returnDate, "MM-dd-yyyy"))
    }


    return `${url}?${params.toString()}`;
  }

  const generateDeepLink = (program: string, props: DeepLinkProps, lang: string): string => {
    switch (program) {
      case 'AAdvantage':
        return generateAAdvantageLink(props, lang)
      case 'Aeroplan':
        return generateAeroplanLink(props, lang)
      case 'ConnectMiles':
        return generateConnectMilesLink(props, lang)
      case 'ClubPremier':
        return generateClubPremierLink(props, lang)
      case 'EtihadGuest':
        return generateEtihadGuest(props, lang)
      case 'ExecutiveClub':
        return generateExecutiveClubLink(props, lang)
      case 'FinnairPlus':
        return generateFinnairPlusLink(props, lang)
      case 'FlyingBlue':
        return generateFlyingBlueLink(props, lang)
      case 'IberiaPlus':
        return generateIberiaPlusLink(props, lang)
      case 'LatamPass':
        return generateLatamPassLink(props, lang)
      case 'MileagePlus':
        return generateMileagePlusLink(props, lang)
      case 'MilesAndGo':
        return generateMilesAndGoLink(props, lang)
      case 'PrivilegeClub':
        return generatePrivilegeClubLink(props, lang)
      case 'Smiles':
        return generateSmilesLink(props, lang)
      case 'AzulFidelidade':
        return generateAzulFidelidadeLink(props, false)
      case 'AzulFidelidadeBusiness':
        return generateAzulFidelidadeLink(props, true)
      case 'AlaskaMileagePlan':
        return generateAlaskaMileagePlanLink(props, lang)
      case 'CopaConnectMiles':
        return generateCopaConnectMilesLink(props, lang)
      case 'DeltaSkyMiles':
        return generateDeltaSkyMiles(props, lang)
      case 'JetBlueTrueBlue':
        return generateJetBlueTrueBlue(props, lang)
      case 'SASEurobonus':
        return generateSASEurobonus(props, lang)
      case 'VirginAtlanticFlyingClub':
        return generateVirginAtlanticFlyingClub(props, lang)
      case 'VirginAustraliaVelocity':
        return generateVirginAustraliaVelocity(props, lang)
      default:
        throw new Error(`No method found for program: ${program}`);
    }
  };

  return {
    generateDeepLink,
  };
}

