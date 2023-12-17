export const CONTRACT_ADDRESS = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
export const ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "vin",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "partHit",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "faultPercentage",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
    ],
    name: "AccidentOccurred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "vin",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "owner",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "purchasePrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "manufacturedDate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "color",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "brand",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "numberPlate",
        type: "string",
      },
    ],
    name: "CarRegisteredByUser",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "accidents",
    outputs: [
      {
        internalType: "uint256",
        name: "car",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "partHit",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "faultPercentage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "accidentsByVin",
    outputs: [
      {
        internalType: "uint256",
        name: "car",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "partHit",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "faultPercentage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_vin",
        type: "uint256",
      },
    ],
    name: "getAccidentsByVin",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "car",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "partHit",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "faultPercentage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "date",
            type: "uint256",
          },
        ],
        internalType: "struct CarVerification.Accident[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllAccidentDetails",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "car",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "partHit",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "faultPercentage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "date",
            type: "uint256",
          },
        ],
        internalType: "struct CarVerification.Accident[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getCarByUser",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "vin",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "owner",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "purchasePrice",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "accidentInvolvement",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "manufacturedDate",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "color",
            type: "string",
          },
          {
            internalType: "string",
            name: "brand",
            type: "string",
          },
          {
            internalType: "string",
            name: "numberPlate",
            type: "string",
          },
        ],
        internalType: "struct CarVerification.Car",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_vin",
        type: "uint256",
      },
    ],
    name: "getCarByVin",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "vin",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "owner",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "purchasePrice",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "accidentInvolvement",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "manufacturedDate",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "color",
            type: "string",
          },
          {
            internalType: "string",
            name: "brand",
            type: "string",
          },
          {
            internalType: "string",
            name: "numberPlate",
            type: "string",
          },
        ],
        internalType: "struct CarVerification.Car",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalAccidents",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "government",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_vin",
        type: "uint256",
      },
    ],
    name: "isRegistered",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_vin",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_partHit",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_faultPercentage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_dateAccident",
        type: "uint256",
      },
    ],
    name: "registerAccident",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_vin",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_owner",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_purchasePrice",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_accidentInvolvement",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_manufacturedDate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_color",
        type: "string",
      },
      {
        internalType: "string",
        name: "_brand",
        type: "string",
      },
      {
        internalType: "string",
        name: "_numberPlate",
        type: "string",
      },
    ],
    name: "registerCar",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "verifiedCars",
    outputs: [
      {
        internalType: "uint256",
        name: "vin",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "owner",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "purchasePrice",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "accidentInvolvement",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "manufacturedDate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "color",
        type: "string",
      },
      {
        internalType: "string",
        name: "brand",
        type: "string",
      },
      {
        internalType: "string",
        name: "numberPlate",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_vin",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_ownerName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_priceBought",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_accidentInvolvement",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_dateMade",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_color",
        type: "string",
      },
      {
        internalType: "string",
        name: "_carBrand",
        type: "string",
      },
      {
        internalType: "string",
        name: "_numberPlate",
        type: "string",
      },
    ],
    name: "verifyCar",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const fields = {
  car: {
    register: [
      { type: "text", name: "vin", placeholder: "Vin Number" },
      { type: "text", name: "owner", placeholder: "Owner Name" },
      { type: "text", name: "brand", placeholder: "Car Brand" },
      {
        type: "text",
        name: "manufacturedDate",
        placeholder: "Manufactured Date",
      },
      { type: "text", name: "color", placeholder: "Color" },
      { type: "text", name: "numberPlate", placeholder: "Number Plate" },
      { type: "text", name: "purchasePrice", placeholder: "Purchase Price" },
      {
        type: "checkbox",
        name: "accidentInvolvement",
        label: "Accident Involvement",
      },
    ],
  },
};
