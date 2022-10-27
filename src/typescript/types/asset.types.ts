/* ====== General info for all assets */
export type AssetType = {
  brand: string;
  model: string;
  description: string; // TODO: add to models
  status: 'lost' | 'found' | 'safe' | 'misplaced';
  category: 'Cars' | 'Laptops' | 'Bikes' | 'Phones'; // TODO: Add to models
  images: [string];
  colour: string;
  location: {
    state: string;
    lga: string;
    town: string;
  };
  markings?: string | 'none';
};

/* ====== vehicle type */
export type VehjicleType = AssetType & {
  vin: string;
  year?: string;
  plate_no: string;
  chasis_no?: string;
};

/* ====== gadget asset type */
export type GadgetType = AssetType & {
  year: string;
  receipt: string;
  imei: [imei_1: string, imei_2: string];
  serial_no: string;
};
