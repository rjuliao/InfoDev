import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import AC_NAME from '@salesforce/schema/Account.Name';
import AC_ANNUALREVENUE from '@salesforce/schema/Account.AnnualRevenue';
import AC_PHONE from '@salesforce/schema/Account.Phone';
import AC_ACCOUNTSOURCE from '@salesforce/schema/Account.AccountSource'
import AC_RATING from '@salesforce/schema/Account.Rating'

export default class AccountForm extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    fields = {
        accountName : AC_NAME,
        accountAnnualR : AC_ANNUALREVENUE,
        accountPhone : AC_PHONE,
        accountAccountSource : AC_ACCOUNTSOURCE,
        accountRating : AC_RATING
    }
}