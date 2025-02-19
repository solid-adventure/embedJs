import { Chunk, EmbeddedChunk } from '../global/types.js';

export interface BaseDb {
    init({}: { dimensions: number }): Promise<void>;
    insertChunks(chunks: EmbeddedChunk[]): Promise<number>;
    similaritySearch(query: number[], k: number): Promise<Chunk[]>;
    getVectorCount(): Promise<number>;
    
    deleteKeys(keys: string[]): Promise<void>;
    reset(): Promise<void>;
}
