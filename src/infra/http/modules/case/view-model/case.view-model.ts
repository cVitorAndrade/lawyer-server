import { Case } from 'src/modules/case/entities/case.entity';

export class CaseViewModel {
  static toHttp({
    id,
    createdById,
    title,
    description,
    priority,
    status,
    type,
    isDeleted,
    createdAt,
    updatedAt,
  }: Case) {
    return {
      id,
      createdById,
      title,
      description,
      priority,
      status,
      type,
      isDeleted,
      createdAt,
      updatedAt,
    };
  }
}
