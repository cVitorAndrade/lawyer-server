import { Replace } from 'src/utils/replace';
import { CasePriority } from '../enums/case-priority.enum';
import { CaseStatus } from '../enums/case-status.enum';
import { CaseType } from '../enums/case-type.enum';
import { randomUUID } from 'crypto';

interface CaseProps {
  createdById: string;
  title: string;
  description: string | null;
  priority: CasePriority;
  type: CaseType;
  status: CaseStatus;
  createdAt: Date;
  updatedAt: Date;
}

export class Case {
  private _id: string;
  private props: CaseProps;

  constructor(
    props: Replace<
      CaseProps,
      { createdAt?: Date; updatedAt?: Date; description?: string }
    >,
    id?: string,
  ) {
    this.props = {
      ...props,
      description: props.description ?? null,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
    this._id = id ?? randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get createdById(): string {
    return this.props.createdById;
  }

  set createdById(createdById: string) {
    this.props.createdById = createdById;
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

  set description(description: string | null) {
    this.props.description = description;
  }

  get priority(): CasePriority {
    return this.props.priority;
  }

  set priority(priority: CasePriority) {
    this.props.priority = priority;
  }

  get type(): CaseType {
    return this.props.type;
  }

  set type(type: CaseType) {
    this.props.type = type;
  }

  get status(): CaseStatus {
    return this.props.status;
  }

  set status(status: CaseStatus) {
    this.props.status = status;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }
}
