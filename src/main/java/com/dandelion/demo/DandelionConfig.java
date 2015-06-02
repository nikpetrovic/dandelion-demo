package com.dandelion.demo;

import javax.servlet.Filter;

import org.springframework.boot.context.embedded.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.github.dandelion.core.web.DandelionFilter;
import com.github.dandelion.core.web.DandelionServlet;
import com.github.dandelion.datatables.thymeleaf.dialect.DataTablesDialect;
import com.github.dandelion.thymeleaf.dialect.DandelionDialect;

@Configuration
public class DandelionConfig {

    @Bean
    public DandelionDialect dandelionDialect() {
	return new DandelionDialect();
    }

    @Bean
    public Filter dandelionFilter() {
	return new DandelionFilter();
    }

    @Bean
    public ServletRegistrationBean dandelionServletRegistrationBean() {
	return new ServletRegistrationBean(new DandelionServlet(),
		"/dandelion-assets/*");
    }

    @Bean
    public DataTablesDialect dataTablesDialect() {
	return new DataTablesDialect();
    }
}