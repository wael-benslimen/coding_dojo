package com.joybundel.demo.models;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="babies")
public class Baby {
	
	 @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
 	
 	@NotBlank
 	@Size(min = 2)
 	private String name;
 	
 	private String gender;
 	
 	@NotBlank
 	private String origin;
 	
 	@NotBlank
 	private String meaning;
 	
 	@ManyToOne
 	@JoinColumn(name="userId")
 	User creator;
 	
 	@ManyToMany
 	@JoinTable(
 	        name = "users_babies", 
 	        joinColumns = @JoinColumn(name = "baby_id"), 
 	        inverseJoinColumns = @JoinColumn(name = "user_id")
 	    )
 	List<User> upvotes;

    @Column(updatable=false)
    private Date createdAt;

    private Date updatedAt;

    // methods
    @PrePersist
    protected void onCreate() {
    this.createdAt=new Date();
    this.updatedAt=new Date();
    }

   

	@PreUpdate
    protected void onUpdate() {
    this.updatedAt=new Date();
    }
	
	public Baby() {
		
		}
	
	



	public List<User> getUpvotes() {
		return upvotes;
	}



	public void setUpvotes(List<User> upvotes) {
		this.upvotes = upvotes;
	}



	public Baby(Long id, @NotBlank @Size(min = 2) String name, String gender, @NotBlank String origin,
			@NotBlank String meaning, User creator, List<User> upvotes, Date createdAt, Date updatedAt) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.origin = origin;
		this.meaning = meaning;
		this.creator = creator;
		this.upvotes = upvotes;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getGender() {
		return gender;
	}



	public void setGender(String gender) {
		this.gender = gender;
	}



	public String getOrigin() {
		return origin;
	}



	public void setOrigin(String origin) {
		this.origin = origin;
	}



	public String getMeaning() {
		return meaning;
	}



	public void setMeaning(String meaning) {
		this.meaning = meaning;
	}



	public User getCreator() {
		return creator;
	}



	public void setCreator(User creator) {
		this.creator = creator;
	}



	public Date getCreatedAt() {
		return createdAt;
	}



	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}



	public Date getUpdatedAt() {
		return updatedAt;
	}



	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	 
	 
}
