var express = require('express'), http = require('http'), _ = require('underscore'), engines = require('consolidate'), path = require('path');
var usage = require('usage');
var methods = require('methods');
var app = express();


app.engine('dust', engines.dust);
app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/templates/');
    app.set('view engine', 'dust');
    app.use(express.favicon());
    //app.use(express.logger('short'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    //app.use(express.cookieParser('your secret here'));
    //app.use(express.session());
    //app.use(express.responseTime());

    app.use(app.router);

    app.use(express.static(path.join(__dirname, '/public')));
});

/**
 * render a simple hello world template
 */
app.get('/', function (req, res) {
    res.render('index', {
        "name": "Raptor " + new Date().getTime(),
        cache: true
    });
});

var ulModel = getULModel();
function getULModel(){
    var ret = {
        cache:true
    };
    var list = [];
    for(var i=0;i<1000;i++){
        list.push({item:'benchmark'+i});
    }
    ret.list = list;
    return ret;
}

/**
 * render the 1000 ul element in the template   - measure the simple repeated templates
 */
app.get('/ul', function (req, res) {
    res.render('ul', ulModel);
});

var itemList = getItemList();
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
            'timeMs':'1365832376000',
            'price':'$265.00',
            'shipping':'Free shipping'

        });

    }
    ret.list = list;
    return ret;
}

/**
 * render a listing view of 100 items   - measure the render of complex html page.
 */
app.get('/listview', function (req, res) {
    res.render('item_list', itemList);
});

/**
 * make a soap service call to find items and return the response. measure the IO proxy.
 */
app.get('/search', function (req, res) {
    var search = new Search();
    search.finditems(function (result) {
        res.send(result);
    });
});

/**
 * run a fib caculation - measure the cpu computation only
 */
app.get('/fib/:num', function (req, res) {

    res.send(200, {
        res: fib(req.params.num)
    });
});
function fib(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

setInterval(printCpuMemory, 3000);

function printCpuMemory(){
    usage.lookup(process.pid,{ keepHistory: true }, function(err, result) {
        if(!err && result){
            if(result.memory){
                result.memory = (result.memory / 1048576) + 'mb'; //104875 = 1024 * 1024, convert bytes to mb
            }
            console.log(result);
        }
    });
}
module.exports = app.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
