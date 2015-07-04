$(function() {
	var pstyle = 'padding-right: 3px; color: #828AA7; text-shadow: 1px 1px 3px white;';
	var people = [ 'George Washington', 'John Adams', 'Thomas Jefferson', 'James Buchanan', 'James Madison',
			'Abraham Lincoln', 'James Monroe', 'Andrew Johnson', 'John Adams', 'Ulysses Grant', 'Andrew Jackson',
			'Rutherford Hayes', 'Martin VanBuren', 'James Garfield', 'William Harrison', 'Chester Arthur', 'John Tyler',
			'Grover Cleveland', 'James Polk', 'Benjamin Harrison', 'Zachary Taylor', 'Grover Cleveland', 'Millard Fillmore',
			'William McKinley', 'Franklin Pierce', 'Theodore Roosevelt', 'John Kennedy', 'William Howard', 'Lyndon Johnson',
			'Woodrow Wilson', 'Richard Nixon', 'Warren Harding', 'Gerald Ford', 'Calvin Coolidge', 'James Carter',
			'Herbert Hoover', 'Ronald Reagan', 'Franklin Roosevelt', 'George Bush', 'Harry Truman', 'William Clinton',
			'Dwight Eisenhower', 'George W. Bush', 'Barack Obama' ];

	var countries = [ {
		country : "Ireland",
		continent : "Europe",
		language : "English"
	}, {
		country : "Spain",
		continent : "Europe",
		language : "Spanish"
	}, {
		country : "United Kingdom",
		continent : "Europe",
		language : "English"
	}, {
		country : "France",
		continent : "Europe",
		language : "French"
	}, {
		country : "Germany",
		continent : "Europe",
		language : "(other)"
	}, {
		country : "Sweden",
		continent : "Europe",
		language : "(other)"
	}, {
		country : "Norway",
		continent : "Europe",
		language : "(other)"
	}, {
		country : "Italy",
		continent : "Europe",
		language : "(other)"
	}, {
		country : "Greece",
		continent : "Europe",
		language : "(other)"
	}, {
		country : "Iceland",
		continent : "Europe",
		language : "(other)"
	}, {
		country : "Portugal",
		continent : "Europe",
		language : "Portuguese"
	}, {
		country : "Malta",
		continent : "Europe",
		language : "(other)"
	}, {
		country : "Brazil",
		continent : "South America",
		language : "Portuguese"
	}, {
		country : "Argentina",
		continent : "South America",
		language : "Spanish"
	}, {
		country : "Colombia",
		continent : "South America",
		language : "Spanish"
	}, {
		country : "Peru",
		continent : "South America",
		language : "Spanish"
	}, {
		country : "Venezuela",
		continent : "South America",
		language : "Spanish"
	}, {
		country : "Uruguay",
		continent : "South America",
		language : "Spanish"
	} ];

	$('#enum').w2field('enum', {
		items : function() {
			var cs = [];
			$.each(countries, function(i, obj) {
				cs.push(obj.country);
				console.log(obj.country);
			});

			return cs;
		}(),
		openOnFocus : true
	});

	// if you need to get to the selected items, use:
	// $('#id').data('selected');
});