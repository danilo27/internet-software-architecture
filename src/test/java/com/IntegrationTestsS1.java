package com;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.annotation.IfProfileValue;
import org.springframework.test.annotation.ProfileValueSourceConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.repositories.UserRepository;

import static org.hamcrest.Matchers.notNullValue;

import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import static org.assertj.core.api.Assertions.*;

import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.test.autoconfigure.OverrideAutoConfiguration;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.Application;
import com.beans.DatumProjekcije;
import com.beans.PozBio;
import com.beans.Projekcija;
import com.beans.RezervacijaKarte;
import com.beans.Sala;
import com.beans.Termin;
import com.beans.User;
import com.repositories.PozBioRepository;
import com.repositories.RezervacijaRepository;
import com.repositories.StatusRepository;
import com.repositories.UserRepository;
import com.services.PozBioService;
import com.services.StorageService;
import com.services.UserService;
import com.services.UserServiceInterface;

import com.controllers.UserController;
import com.fasterxml.jackson.databind.ObjectMapper;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;
import static org.mockito.Matchers.*;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.Matchers.anyString;
import static org.hamcrest.CoreMatchers.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.then;


import static org.hamcrest.Matchers.notNullValue;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;
import static org.assertj.core.api.Assertions.*;
import static org.assertj.core.api.BDDAssertions.then;
import static org.hamcrest.CoreMatchers.hasItem;
import static org.hamcrest.Matchers.*;
import static org.hamcrest.CoreMatchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.junit.Assert.*;
import static org.junit.Assume.*;
import static org.junit.matchers.JUnitMatchers.*;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;
import static org.mockito.Matchers.*;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.Matchers.anyString;
import static org.hamcrest.CoreMatchers.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.then;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.beans.User;
import com.controllers.UserController;
import com.services.UserService;

import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import java.math.BigDecimal;
import java.util.Collection;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.context.WebApplicationContext;
import static org.mockito.Mockito.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.hamcrest.Matchers.notNullValue;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;
import static org.assertj.core.api.Assertions.*;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.beans.User;
import com.repositories.UserRepository;

import ac.simons.spring.boot.test.autoconfigure.data.mongo.DataMongoTest;

@RunWith(SpringRunner.class)
@SpringBootTest(
  webEnvironment = WebEnvironment.RANDOM_PORT,
  classes = Application.class)
@AutoConfigureMockMvc
public class IntegrationTestsS1 {
	@Autowired
    private MockMvc mvc;
	
	@Autowired
	private RezervacijaRepository rezervacijaRepository;
    
    @Test
    public void find_all_users_and_check_name_then_200()
      throws Exception {
        mvc.perform(get("/findAllUsers")
          .contentType(MediaType.APPLICATION_JSON))
          .andExpect(status().isOk())
          .andExpect(content()
          .contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
          .andExpect(jsonPath("$[0].name", Matchers.is("ae")));
    }
    
    @Test
    public void test_login_then_status_200()
      throws Exception {
    	User user = new User("regular", "pas", "danilo@danilo", "Danilo", "Bujisa", "Novi Sad",
				2131, new ArrayList<String>(), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "coda", new ArrayList<String>(), new ArrayList<Integer>(),"true");
    	
    	ObjectMapper mapper = new ObjectMapper();
		String ujson = mapper.writeValueAsString(user);
    	
		mvc.perform(post("/updateUser")
		          .contentType(MediaType.APPLICATION_JSON)
		          .content(ujson))
		          .andExpect(status().isOk())
		          .andExpect(content()
		          .contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
		          .andExpect(jsonPath("$.email", Matchers.is("danilo@danilo")))
		          .andExpect(jsonPath("$.password", Matchers.is("pas")));

    }
    
    
    @Test
    public void test_update_email_and_number_then_200()
      throws Exception {
    	
    	User user = new User("regular", "", "danilo@danilo", "DB", "", "",
				2343, new ArrayList<String>(), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "coda", new ArrayList<String>(), new ArrayList<Integer>(),"true");
    	
    	ObjectMapper mapper = new ObjectMapper();
		String ujson = mapper.writeValueAsString(user);
    	
        mvc.perform(post("/updateUser")
          .contentType(MediaType.APPLICATION_JSON)
          .content(ujson))
          .andExpect(status().isOk())
          .andExpect(content()
          .contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
          .andExpect(jsonPath("$.name", Matchers.is("DB")))
          .andExpect(jsonPath("$.phoneNumber", Matchers.is(2343)));
    }
    
    @Test
    public void test_update_password_then_200()
      throws Exception {
    	
    	User user = new User("regular", "new_password", "", "", "", "",
				2343, new ArrayList<String>(), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "coda", new ArrayList<String>(), new ArrayList<Integer>(),"true");
    	
    	ObjectMapper mapper = new ObjectMapper();
		String ujson = mapper.writeValueAsString(user);
    	
        mvc.perform(post("/changePassword")
          .contentType(MediaType.APPLICATION_JSON)
          .content(ujson))
          .andExpect(status().isOk())
          .andExpect(content()
          .contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
          .andExpect(jsonPath("$.password", Matchers.is("new_password")));
    }
    
    @Test
    public void find_my_friends_then_200()
      throws Exception {
    	User user = new User("regular", "pas", "testacc1isa@gmail.com", "Ime1", "Prezime1", "a",
    			2131,  new ArrayList<String>(Arrays.asList("acc2","acc3")), new ArrayList<String>(),
    			new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
    			new ArrayList<String>(), "acc1", new ArrayList<String>(), new ArrayList<Integer>()	,"true");
    	
    	ObjectMapper mapper = new ObjectMapper();
		String ujson = mapper.writeValueAsString(user);
    	
       MvcResult mvcResult = mvc.perform(get("/find_my_friends/"+user.getUsername())
          .contentType(MediaType.APPLICATION_JSON))
          .andExpect(status().isOk())
          .andExpect(content()
          .contentTypeCompatibleWith(MediaType.APPLICATION_JSON)).andReturn();
       System.out.println("Friends are: " + mvcResult);
    }
    
    @Test
    public void add_friend_then_200()
      throws Exception {
    	User acc1 = new User("regular", "pas", "testacc1isa@gmail.com", "Ime1", "Prezime1", "a",
    			2131,  new ArrayList<String>(Arrays.asList("acc2","acc3")), new ArrayList<String>(),
    			new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
    			new ArrayList<String>(), "acc1", new ArrayList<String>(), new ArrayList<Integer>()	,"true");
    	
    	User danilo = new User("regular", "pas", "danilo@danilo", "Danilo", "Bujisa", "Novi Sad",
				2131, new ArrayList<String>(), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "coda", new ArrayList<String>(), new ArrayList<Integer>(),"true");
    	
       mvc.perform(get("/add_friend/"+acc1.getUsername()+"/"+danilo.getUsername())
          .contentType(MediaType.APPLICATION_JSON))
          .andExpect(status().isOk());
          
    }
    
    @Test
    public void accept_fr_then_list_friends_200()
      throws Exception {
    	User acc1 = new User("regular", "pas", "testacc1isa@gmail.com", "Ime1", "Prezime1", "a",
    			2131,  new ArrayList<String>(Arrays.asList("acc2","acc3")), new ArrayList<String>(),
    			new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
    			new ArrayList<String>(), "acc1", new ArrayList<String>(), new ArrayList<Integer>()	,"true");
    	
    	User danilo = new User("regular", "pas", "danilo@danilo", "Danilo", "Bujisa", "Novi Sad",
				2131, new ArrayList<String>(), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "coda", new ArrayList<String>(), new ArrayList<Integer>(),"true");
       
       System.out.println("Before accept: ");
       find_my_friends_then_200();
       mvc.perform(get("/acceptFR/"+danilo.getUsername()+"/"+acc1.getUsername())
    		   .contentType(MediaType.APPLICATION_JSON))
       .andExpect(status().isOk());
       System.out.println("After accept: ");
       find_my_friends_then_200();
    }
    
    @Test
    public void get_my_res_then_200()
      throws Exception {
    	User acc1 = new User("regular", "pas", "testacc1isa@gmail.com", "Ime1", "Prezime1", "a",
    			2131,  new ArrayList<String>(Arrays.asList("acc2","acc3")), new ArrayList<String>(),
    			new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
    			new ArrayList<String>(), "acc1", new ArrayList<String>(), new ArrayList<Integer>()	,"true");
    	
    	MvcResult mvcresult = mvc.perform(get("/getMyRes/"+acc1.getUsername())
        .contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk())
        .andExpect(content()
        .contentTypeCompatibleWith(MediaType.APPLICATION_JSON)).andReturn();
    	System.out.println("My res: " + mvcresult.toString());
    	
    }
    
    public int getRezId(){
		return rezervacijaRepository.findAll().size();
	}

    public void res_then_accept_inv_then_200()
      throws Exception {
    	User acc1 = new User("regular", "pas", "testacc1isa@gmail.com", "Ime1", "Prezime1", "a",
    			2131,  new ArrayList<String>(Arrays.asList("acc2","acc3")), new ArrayList<String>(),
    			new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
    			new ArrayList<String>(), "acc1", new ArrayList<String>(), 
    			new ArrayList<Integer>(), "true");
									   
    	RezervacijaKarte nova = new RezervacijaKarte(
				"Bioskop B",
				"Mad Max",
				"25/04/2018",
				"15:00",
				"1",
				new ArrayList<String>(Arrays.asList("a1")),
				new ArrayList<String>(Arrays.asList("acc2")),
				acc1.getUsername(),
				getRezId(),
				600,
				300
				);

	  	ObjectMapper mapper = new ObjectMapper();
		String rezjson = mapper.writeValueAsString(nova);
	    	
		mvc.perform(post("/rezervisi")
		          .contentType(MediaType.APPLICATION_JSON)
		          .content(rezjson))
		          .andExpect(status().isOk())
		          .andExpect(content()
		          .contentTypeCompatibleWith(MediaType.APPLICATION_JSON));
		
		mvc.perform(get("/getMyRes/"+acc1.getUsername())
		        .contentType(MediaType.APPLICATION_JSON))
		        .andExpect(status().isOk())
		        .andExpect(content()
		        .contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$[0].idRez", Matchers.is(0)))
				.andExpect(jsonPath("$[0].invited_friends[0]", Matchers.is("acc2")));
     
		mvc.perform(get("/acceptInv/acc2/"+0)
		        .contentType(MediaType.APPLICATION_JSON))
		        .andExpect(status().isOk());
		
		mvc.perform(get("/getMyRes/"+"acc2")
		        .contentType(MediaType.APPLICATION_JSON))
		        .andExpect(status().isOk())
		        .andExpect(content()
		        .contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$[0].idRez", Matchers.is(0)));
				
		
    }
    
    @Test
    public void reserve_then_acceptinv_then_cancelres_then_200()
      throws Exception {
    	User acc1 = new User("regular", "pas", "testacc1isa@gmail.com", "Ime1", "Prezime1", "a",
    			2131,  new ArrayList<String>(Arrays.asList("acc2","acc3")), new ArrayList<String>(),
    			new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
    			new ArrayList<String>(), "acc1", new ArrayList<String>(), 
    			new ArrayList<Integer>(), "true");
	    
    	res_then_accept_inv_then_200();
    	
		mvc.perform(get("/cancelRes/"+acc1.getUsername()+"/"+0)
		          .contentType(MediaType.APPLICATION_JSON))
		          .andExpect(status().isOk())
		          .andExpect(content()
		          .contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
		          .andExpect(jsonPath("$.poruka", Matchers.is("canceled")));
				  
		ResultActions actions = mvc.perform(get("/getMyRes/"+acc1.getUsername())
		        .contentType(MediaType.APPLICATION_JSON))
		        .andExpect(status().isOk())
		        .andExpect(content()
		        .contentTypeCompatibleWith(MediaType.APPLICATION_JSON));
		actions.andExpect(content().string("[]"));
    }
    
}
