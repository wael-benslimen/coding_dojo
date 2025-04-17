package com.fanpages.demo.models;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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
import jakarta.validation.constraints.Size;

@Entity
@Table(name="celebrites")
public class Celebrity {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@Size(min=3)
	private String name;
	
	@Size(min=10, message = "must be at least 10")
	private String details;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id")
	User creator;
	
	@ManyToMany
	@JoinTable(
	        name = "users_celebrites", 
	        joinColumns = @JoinColumn(name = "celebrity_id"), 
	        inverseJoinColumns = @JoinColumn(name = "user_id")
	    )
	List<User> followers;
	
	
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
	    
	    public Celebrity () {
	    	
	    }

		

		

		public Celebrity(Long id, @Size(min = 3) String name, @Size(min = 10) String details, User creator,
				List<User> followers, Date createdAt, Date updatedAt) {
			super();
			this.id = id;
			this.name = name;
			this.details = details;
			this.creator = creator;
			this.followers = followers;
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

		public String getDetails() {
			return details;
		}

		public void setDetails(String details) {
			this.details = details;
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
		public List<User> getFollowers() {
			return followers;
		}

		public void setFollowers(List<User> followers) {
			this.followers = followers;
		}
	      
		
}
