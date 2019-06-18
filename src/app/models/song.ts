import { Album } from './album';

export interface Song {
    
    songId?: number;
    title?: string;
    length?: number;
    trackNo?: number;
    
    albumId?: number;
    album?: Album;

}