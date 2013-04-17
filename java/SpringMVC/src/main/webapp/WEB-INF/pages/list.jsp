<%@ page trimDirectiveWhitespaces="true" contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <link rel="canonical" href="http://www.ebay.com/sch/i.html?_nkw=nike"></link>
    <meta name="y_key" content="acf32e2a69cbc2b0"></meta>
    <meta name="description" content="Find great deals on eBay for nike and Nike Shoes. Shop with confidence."></meta>
    <meta name="google-site-verification" content="8kHr3jd3Z43q1ovwo0KVgo_NZKIEMjthBxti8m8fYTg"></meta>
    <meta name="msvalidate.01" content="31154A785F516EC9842FC3BA2A70FB1A"></meta>
    <meta name="keywords" content="Nike Shoes, Nike Air Max, Jordan, Nike Foamposite, Nike Shox, Adidas, nike"></meta>
    <meta property="fb:app_id" content="102628213125203"></meta>
    <!--[if IE]><link/><![endif]-->

    <link href="http://gh.ebaystatic.com/header/css/all.min?combo=53&app=RAPTOR&factor=ALERTS&siteid=0&rvr=84&h=20455" type="text/css" rel="stylesheet"><link href="http://ir.ebaystatic.com/z/et/1edylaaoly2ojnimfuupnrsct.css?dataUri=true" type="text/css" rel="stylesheet"><link href="http://ir.ebaystatic.com/z/22/sd2t3hscguymfowe5txsmewkm.css?dataUri=true" type="text/css" rel="stylesheet"><!--[if lt IE 8]>
    <![endif]-->

    <noscript><style>#gh-shop, #gh-f { display: block; }
    #gh-cat-box #gh-cat {display:block}
    </style></noscript>
    <style>#gh-ac::-webkit-input-placeholder{font-size:0px;color:#fff;} #gh-ac:-moz-placeholder{font-size:0px;}</style></head>
<body class="sz1200">

<div id="Body"  class="VR CHROME CHROME_26 CHROME_26_0">


<div id="Center" class="rr_present">

<div id="CenterPanel"  class="c-std" >
<div id="Results" class="">
<div class="rst tabs mgBtm10" id="rsTabs">
<div class="tabs-h">
</div>
<div class="tabs-b">
<div class="tab-b t225">


<b style="display:none">&nbsp;</b>
<div id="e1-39" class="rs rsw t225"  _sp="p2045573.m1686">
<% Long timer = System.nanoTime(); %>
<div id="ResultSetItems"  class="lnkClr" >
<c:forEach items="${itemList}" var="item">
<a name=${item["hashId"]} class="lv-1st"></a>
<table listingId=${item["listingId"]} class="li rsittlref "
       r="1" itemprop="offers" itemscope itemtype="http://schema.org/Offer">

    <tbody class="lyr" itemprop="itemOffered" itemscope itemtype="http://schema.org/Product">
    <tr itemprop="offers" itemscope itemtype="http://schema.org/Offer">
        <td class="pic p225 lt img" iid=${item["listingId"]} rowspan=2>
            <div class="l-shad lftd pshad">
                <div class="picW">
                    <div class="s225">

                        <b class="dum"></b>
                        <a href={href} class="img" itemprop="url">
                            <img itemprop="image"
                                 src="http://thumbs2.ebaystatic.com/d/l225/m/m9jxgKv6CP3Y9NrZoxNyZ0g.jpg" class="img" alt='NIKE AIR JORDAN 13 RETRO XIII HE GOT GAME 2013 size 11 with receipt ' />
                        </a>
                    </div>
                    <a class="enl mi-a" t="QL" url={moreInfoHref} title="Quick Look" ></a>
                </div></div>
        </td>
        <td class="dtl"
            style="line-height:10px; width:100%">
            <div class="ittl">
                <h4><a href=${item["href"]}  class="vip" title=${item["title"]} itemprop="name"><span class="new">Newly listed</span><strong>
                    ${item["title"]}</strong>
                </a>
                </h4>
            </div> <div class="sttl dyn"> ${item["title"]}</div>
            <div class="dyn dynS">

            </div>
            <div class="logos">
            </div>
            <div class="anchors">
                <div class="group">
                </div>
            </div>
        </td>

        <td class="col3">
					<span class="tme"  ><b class="hidlb">Time left:</b>
			<span class="THURSDAY timeMs" timeMs=${item["timeMs"]}></span>
						</span>
        </td>
        <td class='prc'><div  class="g-b bpo">

            <div  class="g-b" itemprop="price">
                ${item["price"]}</div>
            <div class="bin">
		<span >
                              <div>or Best Offer</div>
                                                </span>
            </div>
        </div>
            <div class="tsp">
						<span class="ship">
<span >
					<span class='tfsp'>${item["shipping"]}</span></span>
			</span></div>
        </td>
    </tr>
    </tbody>
</table>
</c:forEach>
</div>
</div>

<% 
        Long timeElapsed = (System.nanoTime() - timer)/1000000;
        System.out.println("Time to render more deals using JSP Tags: " + timeElapsed + "ms"); 
        %>
</body>
</html>
