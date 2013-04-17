//require.paths.unshift('./node_modules')
var dust = require('dustjs-linkedin');
var fs = require('fs');
var template = fs.readFileSync('./item_list.dust','utf-8');

var compiled = dust.compile(template, "listview");

dust.loadSource(compiled);

var itemListMode = getItemList();
dust.render("listview", itemListMode, function(err, out) {
    console.log(out);
});

/**
 * give the first render as warm up to template cache. defer the timer 2 seconds to measure.
 */
setTimeout(function(){
    console.time('listview');

    dust.render("listview", itemListMode, function(err, out) {
        console.timeEnd('listview')
    });
},2000);

/**
 * provide the item model
 * @returns {{cache: boolean}}
 */
function getItemList(){
    var ret = {
        cache:true
    };
    var list = [];
    for(var i=0;i<100;i++){
        list.push({
            'hashId':'item43bac1e65d',
            'listingId':'290896078429',
            'href':'http://www.ebay.com/itm/NIKE-AIR-JORDAN-13-RETRO-XIII-HE-GOT-GAME-2013-size-11-with-receipt-/290896078429?pt=US_Men_s_Shoes&hash=item43bac1e65d',
            'moreInfoHref':'http://www.ebay.com/sch/moreinfo/?_id=290896078429&_ptns=US_Men_s_Shoes&_pppn=r1',
            'title':'NIKE AIR JORDAN 13 RETRO XIII HE GOT GAME 2013 size 11 with receipt ',
            timeMs:'1365832376000',
            price:'$265.00',
            shipping:'Free shipping'

        });

    }
    ret.list = list;
    return ret;
}