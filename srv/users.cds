using { db as sr } from '../db/enitity';

service BookService {

    entity Books as projection on sr.Books;
    entity Authors as projection on sr.Authors;
    entity Genres as projection on sr.Genres;

}
