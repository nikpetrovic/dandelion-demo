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
import com.github.dandelion.datatables.core.ajax.DatatablesResponse;

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

    @RequestMapping("/page")
    public ModelAndView page() {
	ModelAndView mav = new ModelAndView("page");
	return mav;
    }

    @RequestMapping("/persons")
    @ResponseBody
    public DatatablesResponse<Person> persons() {
	return null;
    }

    private List<Person> getPersonsList() {
	return null;
    }
}