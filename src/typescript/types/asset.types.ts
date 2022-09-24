/* ====== General info for all assets */
export type AssetType = {
  status: 'lost' | 'found' | 'safe';
  images: [string];
  colour: string;
  location: {
    state: string;
    lga: string;
    town: string;
  };
  markings?: String | 'none';
};

/* ====== Car type */
export type CarType = AssetType & {
  vin: string;
  brand?: string;
  model?: string;
  year?: string;
  plate_no: string;
  chasis_no?: string;
};

/* ====== bike asset type */
export type BikeType = AssetType & {
  vin: string;
  brand: string;
  model: string;
  type: string;
  plate_no: string;
};

/* ====== phone asset type */
export type PhoneType = AssetType & {
  brand: string;
  model: string;
  year: string;
  receipt: string;
  imei: [imei_1: string, imei_2: string];
  serial_no: string;
};

/* ====== laptop asset type */
export type LaptopType = AssetType & {
  brand: string;
  model: string;
  year: string;
  receipt: string;
  imei: [imei_1: string, imei_2: string];
  serial_no: string;
};
