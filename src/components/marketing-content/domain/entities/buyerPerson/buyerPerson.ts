export class BuyerPerson {
  constructor(
    readonly companyName: string,
    readonly companyDescription: string,
    readonly dataSearch?: string[]
  ) {
    // validate data
    if (typeof this.companyName !== 'string') throw new TypeError('parameter companyName is not string')
    if (typeof this.companyDescription !== 'string') throw new TypeError('parameter companyDescription is not string')      
    if (!Array.isArray(this.dataSearch)) throw new TypeError('parameter dataSearch is not array')
  }

  toString() {
    return `company name: ${this.companyName} \n\ncompany description: ${this.companyDescription} \n\n data search: ${this.dataSearch.join(', ')}`
  }
}