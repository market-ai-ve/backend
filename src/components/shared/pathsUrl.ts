import { API_VERSION_1, MODULE_CONTENTS, POST_CREATE_PERSON } from './contants';

export class BaseUrl {
  public static V1_MO_CONTENTS = [API_VERSION_1, MODULE_CONTENTS].join('/');
}

export class UrlBackend {
  // url create person
  public static createBuyerPerson = POST_CREATE_PERSON;
}
