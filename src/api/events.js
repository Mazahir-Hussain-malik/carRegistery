import { BrowserProvider, Contract } from "ethers";
import { ABI, CONTRACT_ADDRESS } from "../config";

export const browserProvider = async () => {
  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const address = signer.address;

  return { provider, signer, address };
};
export const getContract = async () => {
  const { signer } = await browserProvider();
  const _contract = new Contract(CONTRACT_ADDRESS, ABI, signer);
  return _contract;
};
export async function connectWallet() {
  const { provider, signer, address } = await browserProvider();
  if (address) {
    return {
      provider,
      signer,
      address,
    };
  } else {
    return false;
  }
}

export const register = {
  car: async ({
    vin,
    owner,
    purchasePrice,
    accidentInvolvement,
    manufacturedDate,
    color,
    brand,
    numberPlate,
  }) => {
    try {
      const contract = await getContract();
      console.log("data", {
        vin: +vin,
        owner,
        purchasePrice: +purchasePrice,
        accidentInvolvement,
        manufacturedDate: +manufacturedDate,
        color,
        brand,
        numberPlate,
      });
      const trx = await contract.registerCar(
        +vin,
        owner,
        +purchasePrice,
        accidentInvolvement,
        +manufacturedDate,
        color,
        brand,
        numberPlate
      );
      const receipt = await trx.wait();
      return {
        error: false,
        data: receipt,
      };
    } catch (error) {
      return {
        error: true,
        data: error["reason"],
      };
    }
  },
  accident: () => {},
};
