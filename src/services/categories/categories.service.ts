import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class CategoriesService {

    constructor(private http: HttpService){

    }

    getCategories(): any {
        return this.http.get('http://45.32.252.34:8080/being-local-api/v1.0/product-categories')
            .pipe(
                map(response => response.data)
            );
    }
}
