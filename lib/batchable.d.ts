export declare enum BatchType {
    save = 0,
    update = 1,
    delete = 2,
}
export interface Batchable {
    batchID?: string;
    pack(type: BatchType, batch?: FirebaseFirestore.WriteBatch): FirebaseFirestore.WriteBatch;
    batch(type: BatchType, batchID: string): any;
}