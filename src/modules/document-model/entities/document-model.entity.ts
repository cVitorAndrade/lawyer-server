import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface DocumentModelProps {
  ownerId: string;
  title: string;
  description: string | null;
  color: string;
  createdAt: Date;
}

export class DocumentModel {
  private _id: string;
  private props: DocumentModelProps;

  constructor(
    props: Replace<
      DocumentModelProps,
      { createdAt?: Date; description?: string | null }
    >,
    id?: string,
  ) {
    this.props = {
      ...props,
      color: props.color ?? '#000000',
      createdAt: props.createdAt ?? new Date(),
      description: props.description ?? null,
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

  get title(): string {
    return this.props.title;
  }

  set title(title: string) {
    this.props.title = title;
  }

  get description(): string | null {
    return this.props.description;
  }

  set description(description: string) {
    this.props.description = description;
  }

  get color(): string {
    return this.props.color;
  }

  set color(color: string) {
    this.props.color = color;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}
