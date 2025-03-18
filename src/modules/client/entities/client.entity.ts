import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface ClientProps {
  createdById: string;
  name: string;
  email: string;
  telephone: string;
  birthDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export class Client {
  private props: ClientProps;
  private _id: string;

  constructor(
    props: Replace<ClientProps, { createdAt?: Date; updatedAt?: Date }>,
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

  get createdById(): string {
    return this.props.createdById;
  }

  set createdById(createdById: string) {
    this.props.createdById = createdById;
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
