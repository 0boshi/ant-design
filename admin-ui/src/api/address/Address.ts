import { Customer } from "../customer/Customer";

export type Address = {
  address_2: string | null;
  city: string | null;
  state: string | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address_1: string | null;
  zip: number | null;
  customers?: Array<Customer>;
};
