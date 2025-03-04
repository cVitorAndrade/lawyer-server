import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface LawyerProps {
  name: string;
  username: string;
  email: string;
  password: string;
  avatar: string | null;
  telephone: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export class Lawyer {
  private _id: string;
  private props: LawyerProps;

  constructor(
    props: Replace<
      LawyerProps,
      {
        createdAt?: Date;
        updatedAt?: Date;
        avatar?: string;
        telephone?: string;
      }
    >,
    id?: string,
  ) {
    this.props = {
      ...props,
      avatar: props.avatar ?? null,
      telephone: props.telephone ?? null,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };

    this._id = id ?? randomUUID();
  }

  get id() {
    return this._id;
  }

  get name(): string {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get username(): string {
    return this.props.username;
  }

  set username(username: string) {
    this.props.username = username;
  }

  get email(): string {
    return this.props.email;
  }

  set email(email: string) {
    this.props.email = email;
  }

  get password(): string {
    return this.props.password;
  }

  set password(password: string) {
    this.props.password = password;
  }

  get avatar(): string | null {
    return this.props.avatar;
  }

  set avatar(avatar: string | null) {
    this.props.avatar = avatar;
  }

  get telephone(): string | null {
    return this.props.telephone;
  }

  set telephone(telephone: string | null) {
    this.props.telephone = telephone;
  }

  get updatedAt(): Date {
    return this.props.createdAt;
  }

  set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}
