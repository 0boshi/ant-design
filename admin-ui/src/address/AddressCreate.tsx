import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address 2" source="address_2" />
        <TextInput label="City" source="city" />
        <TextInput label="State" source="state" />
        <TextInput label="Address 1" source="address_1" />
        <NumberInput step={1} label="Zip" source="zip" />
        <ReferenceArrayInput
          source="customers"
          reference="Customer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
