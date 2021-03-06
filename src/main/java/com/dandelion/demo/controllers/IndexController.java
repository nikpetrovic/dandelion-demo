/**
 * 
 */
package com.dandelion.demo.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.dandelion.demo.model.Person;

/**
 * @author Nikola.Petrovic
 *
 */

@Controller
public class IndexController {
    @RequestMapping("/")
    public String index() {
	return "index";
    }
    
    @RequestMapping("/nojsxreact")
    public String nojsxreact() {
	return "nojsxreact";
    }
    
    @RequestMapping("/reactOnly")
    public String reactOnly() {
	return "reactOnly";
    }
    
    @RequestMapping("/react")
    public String react() {
	return "react";
    }

    @RequestMapping("/typeAdministration")
    public String typeAdministration() {
	return "typeAdministration";
    }

    @RequestMapping("/ngGrid")
    public String ngGrid() {
	return "ngGrid";
    }

    @RequestMapping("/jqgrid")
    public String jqgrid() {
	return "jqgrid";
    }

    @RequestMapping("/slickGrid")
    public String slickGrid() {
	return "slickGrid";
    }

    @RequestMapping("/w2ui")
    public String w2ui() {
	return "w2ui";
    }

    @RequestMapping("/blank")
    public String blank() {
	return "blank";
    }

    @RequestMapping("/html")
    public String html() {
	return "html";
    }

    @RequestMapping("/twotables")
    public String twotables() {
	return "twotables";
    }

    @RequestMapping("/validation")
    public String validation() {
	return "validation";
    }

    @RequestMapping("/page")
    public ModelAndView page() {
	ModelAndView mav = new ModelAndView("page");
	return mav;
    }

    @RequestMapping("/persons")
    @ResponseBody
    public List<Person> persons() {
	return null;
    }

    private List<Person> getPersonsList() {
	return null;
    }
}
