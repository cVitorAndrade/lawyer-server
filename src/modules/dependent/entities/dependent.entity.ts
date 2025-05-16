import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface DependentProps {
  clientId: string;
  name: string;
  email: string;
  telephone: string;
  rg: string;
  cpf: string;
  motherName: string;
  maritalStatus: string;
  gender: string;
  occupation: string;
  birthDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export class Dependent {
  private _id: string;
  private props: DependentProps;

  constructor(
    props: Replace<DependentProps, { createdAt?: Date; updatedAt?: Date }>,
    id?: string,
  ) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };

    this._id = id ?? randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get clientId(): string {
    return this.props.clientId;
  }

  set clientId(clientId: string) {
    this.props.clientId = clientId;
  }

  get email(): string {
    return this.props.email;
  }

  set email(email: string) {
    this.props.email = email;
  }

  get telephone(): string {
    return this.props.telephone;
  }

  set telephone(telephone: string) {
    this.props.telephone = telephone;
  }

  get rg(): string {
    return this.props.rg;
  }

  set rg(rg: string) {
    this.props.rg = rg;
  }

  get cpf(): string {
    return this.props.cpf;
  }

  set cpf(cpf: string) {
    this.props.cpf = cpf;
  }

  get motherName(): string {
    return this.props.motherName;
  }

  set motherName(motherName: string) {
    this.props.motherName = motherName;
  }

  get maritalStatus(): string {
    return this.props.maritalStatus;
  }

  set maritalStatus(maritalStatus: string) {
    this.props.maritalStatus = maritalStatus;
  }

  get gender(): string {
    return this.props.gender;
  }

  set gender(gender: string) {
    this.props.gender = gender;
  }

  get occupation(): string {
    return this.props.occupation;
  }

  set occupation(occupation: string) {
    this.props.occupation = occupation;
  }

  get birthDate(): Date {
    return this.props.birthDate;
  }

  set birthDate(birthDate: Date) {
    this.props.birthDate = birthDate;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }
}
