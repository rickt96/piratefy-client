import { Artist } from './artist';

export interface Album {
    
    albumId?: number;
    title?: string;
    year?: number;
    coverUrl?: string;
    
    artistId?: number;
    artist?: Artist;

}