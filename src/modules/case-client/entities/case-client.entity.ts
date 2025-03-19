import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface CaseClientsProps {
  clientId: string;
  caseId: string;
  createdAt: Date;
}

export class CaseClient {
  private _id: string;
  private props: CaseClientsProps;

  constructor(
    props: Replace<CaseClientsProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
    this._id = id ?? randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get clientId(): string {
    return this.props.clientId;
  }

  set clientId(clientId: string) {
    this.props.clientId = clientId;
  }

  get caseId(): string {
    return this.props.caseId;
  }

  set caseId(caseId: string) {
    this.props.caseId = caseId;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}
