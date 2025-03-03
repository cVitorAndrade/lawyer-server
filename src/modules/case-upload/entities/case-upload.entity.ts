import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface CaseUploadProps {
  caseId: string;
  uploadedById: string;
  path: string;
  fullpath: string;
  createdAt: Date;
}

export class CaseUpload {
  private _id: string;
  private props: CaseUploadProps;

  constructor(
    props: Replace<CaseUploadProps, { createdAt?: Date }>,
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

  get caseId(): string {
    return this.props.caseId;
  }

  set caseId(caseId: string) {
    this.props.caseId = caseId;
  }

  get uploadedById(): string {
    return this.props.uploadedById;
  }

  set uploadedById(uploadedById: string) {
    this.props.uploadedById = uploadedById;
  }

  get path(): string {
    return this.props.path;
  }

  set path(path: string) {
    this.props.path = path;
  }

  get fullpath(): string {
    return this.props.fullpath;
  }

  set fullpath(fullpath: string) {
    this.props.fullpath = fullpath;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}
