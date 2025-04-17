package com.fanpages.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fanpages.demo.models.Celebrity;
import com.fanpages.demo.models.User;
import com.fanpages.demo.repositories.CelebrityRepository;

@Service
public class CelebrityService {
	@Autowired
	CelebrityRepository celebrityRepo;
	
	@Autowired
	UserService userS;
	
	public Celebrity create(Celebrity celebrity) {
		return celebrityRepo.save(celebrity);
	}
	
	public List<Celebrity> getAll(){
		return celebrityRepo.findAll();
	}
	
	public Celebrity findById(long id) {
		return celebrityRepo.findById(id).isEmpty() ? null : celebrityRepo.findById(id).get();
	}
	
	public List<Celebrity> search(String quary){
		return celebrityRepo.findByNameContains(quary);
	}
	
	public Celebrity edit(Celebrity celeb, User creator, long id ) {
		celeb.setCreator(creator);
		celeb.setId(id);
		celeb.setFollowers(findById(id).getFollowers());
		return celebrityRepo.save(celeb);
	}
	
	public void follow(long cId, long uId) {
		Celebrity celb = findById(cId);
		celb.getFollowers().add(userS.getById(uId));
		celebrityRepo.save(celb);
	}
	
	public void delete(long id) {
		celebrityRepo.deleteById(id);
	}
}
