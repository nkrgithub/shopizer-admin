import { Injectable } from '@angular/core';

import { CrudService } from '../../../shared/services/crud.service';
import { Observable } from 'rxjs';
import { StorageService } from '../../../shared/services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class TypesService {

  constructor(
    private crudService: CrudService,
    private storageService: StorageService,
  ) { }


  getListOfTypes(params): Observable<any> {
    //return this.crudService.get(`/v1/private/products/types`, params);
    return this.crudService.get(`/v1/private/product/types`, params);
  }

  getType(id, params): Observable<any> {
    //return this.crudService.get(`/v1/private/products/type/${id}`, params);
    return this.crudService.get(`/v1/private/product/type/${id}`, params);
  }

  createType(req): Observable<any> {
    const reqparams = {
      store: this.storageService.getMerchant(),
      lang: this.storageService.getLanguage(),
    };
    //return this.crudService.post('/v1/private/products/type', req, reqparams);
    return this.crudService.post('/v1/private/product/type', req, reqparams);
  }

  updateType(id, req): Observable<any> {
    const reqparams = {
      store: this.storageService.getMerchant(),
      lang: this.storageService.getLanguage(),
    };
    //return this.crudService.put(`/v1/private/products/type/${id}`, req, reqparams);
    return this.crudService.put(`/v1/private/product/type/${id}`, req, reqparams);
  }

  deleteType(id): Observable<any> {
    const reqparams = {
      store: this.storageService.getMerchant(),
      lang: this.storageService.getLanguage(),
    };
    //return this.crudService.delete(`/v1/private/products/type/${id}`, reqparams);
    return this.crudService.delete(`/v1/private/product/type/${id}`, reqparams);
  }

  checkCode(code): Observable<any> {
    const reqparams = {
      store: this.storageService.getMerchant(),
      lang: this.storageService.getLanguage(),
    };
    //return this.crudService.get('/v1/private/products/type/unique?code=' + code, reqparams);
    return this.crudService.get('/v1/private/product/type/unique?code=' + code, reqparams);
  }
}
