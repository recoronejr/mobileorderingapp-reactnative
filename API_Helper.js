

const SquareConnect = require('square-connect');


var defaultClient = SquareConnect.ApiClient.instance;
 
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "EAAAEIcD0M0yInfOwRwmH4GOoavCPcmM69rSOjcRFlqUCYIGLs_QIx6dubzrkApN";
 
var apiCatalog = new SquareConnect.CatalogApi();


    
export function getCatalog() {
        console.log("getCatalog Api called");
       var opts = { 
        'cursor': "", // String | The pagination cursor returned in the previous response. Leave unset for an initial request. See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
        'types': "ITEM" // String | An optional case-insensitive, comma-separated list of object types to retrieve, for example `ITEM,ITEM_VARIATION,CATEGORY,IMAGE`.  The legal values are taken from the CatalogObjectType enum: `ITEM`, `ITEM_VARIATION`, `CATEGORY`, `DISCOUNT`, `TAX`, `MODIFIER`, `MODIFIER_LIST`, or `IMAGE`.
      }; 
    
    
    apiCatalog.listCatalog(opts).then(function(data) {
        // Parse into Javascript Object
        var parsedJson = JSON.parse(JSON.stringify(data)) 
        // console.log('API called successfully. Returned data: ' + parsedJson);
        // res.json(data)
        // res.json(parsedJson.objects[1].item_data.name)
        console.log(parsedJson.objects[1])

}, function(error) {
        console.error(error);

});

}
