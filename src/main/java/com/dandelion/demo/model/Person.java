/**
 * 
 */
package com.dandelion.demo.model;

/**
 * @author Nikola.Petrovic
 *
 */
public class Person {
    private String email;
    private String firstName;
    private String lastName;

    public Person() {
	super();
    }

    public Person(String firstName, String lastName, String email) {
	super();
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
    }

    public String getEmail() {
	return email;
    }

    public String getFirstName() {
	return firstName;
    }

    public String getLastName() {
	return lastName;
    }

    public void setEmail(String email) {
	this.email = email;
    }

    public void setFirstName(String firstName) {
	this.firstName = firstName;
    }

    public void setLastName(String lastName) {
	this.lastName = lastName;
    }
}
