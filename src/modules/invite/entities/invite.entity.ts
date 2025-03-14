import { Replace } from 'src/utils/replace';
import { InviteStatus } from '../types/invite-status.type';
import { randomUUID } from 'crypto';

interface InviteProps {
  caseId: string;
  invitedById: string;
  invitedId: string;
  status: InviteStatus;
  createdAt: Date;
  respondedAt: Date | null;
}

export class Invite {
  private _id: string;
  private props: InviteProps;

  constructor(
    props: Replace<
      InviteProps,
      { createdAt?: Date; respondedAt?: Date | null }
    >,
    id?: string,
  ) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      respondedAt: props.respondedAt ?? null,
    };

    this._id = id ?? randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get caseId(): string {
    return this.props.caseId;
  }

  set caseId(caseId: string) {
    this.props.caseId = caseId;
  }

  get invitedById(): string {
    return this.props.invitedById;
  }

  set invitedById(invitedById: string) {
    this.props.invitedById = invitedById;
  }

  get invitedId(): string {
    return this.props.invitedId;
  }

  set invitedId(invitedId: string) {
    this.props.invitedId = invitedId;
  }

  get status(): InviteStatus {
    return this.props.status;
  }

  set status(status: InviteStatus) {
    this.props.status = status;
  }

  get respondedAt(): Date | null {
    return this.props.createdAt;
  }

  set respondedAt(respondedAt: Date | null) {
    this.props.respondedAt = respondedAt;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}
