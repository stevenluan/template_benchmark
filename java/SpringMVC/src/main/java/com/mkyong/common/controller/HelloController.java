package com.mkyong.common.controller;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HelloController {
	private List<String> dataList = new LinkedList<String>();
	private List<Map<String,String>> itemList = new LinkedList<Map<String,String>>();
	public HelloController(){
		for(int i=0;i<1000;i++){
			dataList.add("benchmark"+i);
		}
		for(int i=0;i<100;i++){
			Map<String,String> itemMap = new HashMap<String,String>();
			itemMap.put("hashId", "item43bac1e65d");
			itemMap.put("listingId", "290896078429");
			itemMap.put("href", "http://www.ebay.com/itm/NIKE-AIR-JORDAN-13-RETRO-XIII-HE-GOT-GAME-2013-size-11-with-receipt-/290896078429?pt=US_Men_s_Shoes&hash=item43bac1e65d");
			itemMap.put("moreInfoHref", "http://www.ebay.com/sch/moreinfo/?_id=290896078429&_ptns=US_Men_s_Shoes&_pppn=r1");
			itemMap.put("title", "NIKE AIR JORDAN 13 RETRO XIII HE GOT GAME 2013 size 11 with receipt ");
			itemMap.put("timeMs", "1365832376000");
			itemMap.put("price", "$265.00");
			itemMap.put("shipping", "Free shipping");
			
			itemList.add(itemMap);
		}
	}
	@RequestMapping(value="/welcome", method = RequestMethod.GET)
	public String printWelcome(ModelMap model) {
		
		model.addAttribute("list", dataList);
		return "hello";

	}
	
	@RequestMapping(value="/listview", method = RequestMethod.GET)
	public String getItems(ModelMap model) {
		
		model.addAttribute("itemList", itemList);
		return "list";

	}
	
	
}