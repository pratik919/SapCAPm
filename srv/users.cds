using { CapMProj.db as sr } from '../db/enitity';

service BookService {

    @requires: 'authenticated-user'
    entity Books as projection on sr.Books;

    @requires: 'authenticated-user'
    entity Authors as projection on sr.Authors;

    @requires: 'Admin'
    @restrict: [{ grant: 'READ'}]
    entity Genres as projection on sr.Genres;

}
