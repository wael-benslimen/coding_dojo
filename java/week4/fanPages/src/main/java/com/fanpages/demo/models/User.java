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
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "users")
public class User {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank
    @Pattern(regexp = "[a-zA-Z]+\\.?")
    private String username;
    
    @Email
    private String email;
    
    @Size(min = 8)
    private String password;
    
    @Transient
    @Size(min = 8)
    private String confpw;
    
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "creator" )
    List<Celebrity> myCelebites;
    
    @ManyToMany
	@JoinTable(
	        name = "users_celebrites", 
	        joinColumns = @JoinColumn(name = "user_id"), 
	        inverseJoinColumns = @JoinColumn(name = "celebrity_id")
	    )
    List<Celebrity> following;
    
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

  
	
    public User(Long id, @NotBlank @Pattern(regexp = "[a-zA-Z]+\\.?") String username, @Email String email,
			@Size(min = 8) String password, @Size(min = 8) String confpw, List<Celebrity> myCelebites,
			List<Celebrity> following, Date createdAt, Date updatedAt) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.confpw = confpw;
		this.myCelebites = myCelebites;
		this.following = following;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public User() {
    	
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfpw() {
		return confpw;
	}

	public void setConfpw(String confpw) {
		this.confpw = confpw;
	}

	public List<Celebrity> getMyCelebites() {
		return myCelebites;
	}

	public void setMyCelebites(List<Celebrity> myCelebites) {
		this.myCelebites = myCelebites;
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

	public List<Celebrity> getFollowing() {
		return following;
	}

	public void setFollowing(List<Celebrity> following) {
		this.following = following;
	}
    
   
}
