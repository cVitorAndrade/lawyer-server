import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface DocumentModelFileProps {
  documentModelId: string;
  uploadedById: string;
  path: string;
  fullpath: string;
  mimetype: string;
  originalname: string;
  size: number;
  createdAt: Date;
}

export class DocumentModelFile {
  private _id: string;
  private props: DocumentModelFileProps;

  constructor(
    props: Replace<DocumentModelFileProps, { createdAt?: Date }>,
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

  get documentModelId(): string {
    return this.props.documentModelId;
  }

  set documentModelId(documentModelId: string) {
    this.props.documentModelId = documentModelId;
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

  get mimetype(): string {
    return this.props.mimetype;
  }

  set mimetype(mimetype: string) {
    this.props.mimetype = mimetype;
  }

  get originalname(): string {
    return this.props.originalname;
  }

  set originalname(originalname: string) {
    this.props.originalname = originalname;
  }

  get size(): number {
    return this.props.size;
  }

  set size(size: number) {
    this.props.size = size;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}
