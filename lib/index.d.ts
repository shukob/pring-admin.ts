import * as FirebaseFirestore from '@google-cloud/firestore';
import { BatchType } from './batchable';
import { Base, property } from './base';
import { SubCollection } from './subCollection';
import { NestedCollection } from './nestedCollection';
import { ReferenceCollection } from './referenceCollection';
import { File } from './file';
export { BatchType, Base, property, SubCollection, NestedCollection, ReferenceCollection, File };
export declare let firestore: FirebaseFirestore.Firestore;
export declare const initialize: (options?: any) => void;
