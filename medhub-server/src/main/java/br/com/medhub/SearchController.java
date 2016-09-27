package br.com.medhub;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SearchController {

	@RequestMapping("/search")
	public String search() {
		return "OK";
	}

}
