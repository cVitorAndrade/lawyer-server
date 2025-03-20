import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface AddressProps {
  ownerId: string;
  name: string;
  postalCode: string;
  country: string;
  state: string;
  city: string;
  street: string;
  neighborhood: string;
  number: string;
  complement: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export class Address {
  private _id: string;
  private props: AddressProps;

  constructor(
    props: Replace<
      AddressProps,
      {
        createdAt?: Date;
        updatedAt?: Date;
        name?: string;
        country?: string;
        complement?: string | null;
      }
    >,
    id?: string,
  ) {
    this.props = {
      ...props,
      name: props.name ?? 'house',
      country: props.country ?? 'Brasil',
      complement: props.complement ?? null,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
    this._id = id ?? randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get ownerId(): string {
    return this.props.ownerId;
  }

  set ownerId(ownerId: string) {
    this.props.ownerId = ownerId;
  }

  get name(): string {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get postalCode(): string {
    return this.props.postalCode;
  }

  set postalCode(postalCode: string) {
    this.props.postalCode = postalCode;
  }

  get country(): string {
    return this.props.country;
  }

  set country(country: string) {
    this.props.country = country;
  }

  get state(): string {
    return this.props.state;
  }

  set state(state: string) {
    this.props.state = state;
  }

  get city(): string {
    return this.props.city;
  }

  set city(city: string) {
    this.props.city = city;
  }

  get street(): string {
    return this.props.street;
  }

  set street(street: string) {
    this.props.street = street;
  }

  get neighborhood(): string {
    return this.props.neighborhood;
  }

  set neighborhood(neighborhood: string) {
    this.props.neighborhood = neighborhood;
  }

  get number(): string {
    return this.props.number;
  }

  set number(number: string) {
    this.props.number = number;
  }

  get complement(): string {
    return this.props.complement;
  }

  set complement(complement: string) {
    this.props.complement = complement;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}
