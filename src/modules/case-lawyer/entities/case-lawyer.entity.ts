import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface CaseLawyerProps {
  caseId: string;
  lawyerId: string;
  createdAt: Date;
}

export class CaseLawyer {
  private _id: string;
  private props: CaseLawyerProps;

  constructor(
    props: Replace<CaseLawyerProps, { createdAt?: Date }>,
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

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get caseId(): string {
    return this.props.caseId;
  }

  set caseId(caseId: string) {
    this.props.caseId = caseId;
  }

  get lawyerId(): string {
    return this.props.lawyerId;
  }

  set lawyerId(lawyerId: string) {
    this.props.lawyerId = lawyerId;
  }
}
