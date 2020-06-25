export interface Registry {
    id: BigInt;
    type: RegistryType;
    value: number;
    place?: any;
}

export enum RegistryType {
    RECEIPT,
    EXPENSE
}