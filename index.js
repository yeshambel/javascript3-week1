class Movie {
    constructor(title, director) {
      // add your code here
    
        this.title = title;
        this.director = director;
        this.stars = [];
        this.rating = [];
        this.writers = [];
    }

    getTitle() {
      // add your code here
        console.log(this.title);
        return this.title;
    }
  
    getDirector() {
      // add your code here
      console.log(this.director);
      return this.director;
    }
    addStar(star) {
      // add your code here
      this.stars.push(star);
    }
  
    getStars() {
      // add your code here
      console.log(this.stars);
      return this.stars;
    }
  
    addWriter(writer) {
      // add your code here
      this.writers.push(writer);
    }
    getWriters() {
      // add your code here
      console.log(this.writers);
      return this.writers;
    }
  
    addRating(rating) {
      // add your code here
      this.rating.push(rating);
    }
  
    getAverageRating() {
      // add your code here
      console.log(this.rating);
      return this.rating;
    }
  }

  
  class StaffMember {
    constructor(name, role, dateOfBirth) {
      // add your code here
    //   super (title)
      this.name = name;
      this.role = role;
      this.dateOfBirth = dateOfBirth;
      this.movies = [];
    }
    
  
    addMovie(movie) {
        this.movies.push(movie);
      // add your code here
    }
  
    getName() {
      // add your code here
      console.log(this.name);
      return this.name;

    }
  
    getRole() {
      // add your code here
      console.log(this.role);
      return this.role;
    }
  
    getAge() {
      // add your code here
      console.log(this.age);
      return this.age;
    }
  }
  
  
  const myMovie = new Movie("sfdfs", "asgag");
  console.log(myMovie);
  const firstActor = new StaffMember('yeshambel', "director", 354);
  const firstActor1 = new StaffMember('Yared', "writer", 354);
  const firstActor2 = new StaffMember('adew', "producer", 354);
  const firstActor3 = new StaffMember('sober', "typiest", 354);
  const firstActor4 = new StaffMember('mohammed', "actor", 354);
  myMovie.addStar(firstActor);
  myMovie.addStar(firstActor1);
  myMovie.addStar(firstActor2);
  myMovie.addStar(firstActor3);
  myMovie.addStar(firstActor4);

  
  console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
  const director = myMovie.getDirector();
 console.log(director);
