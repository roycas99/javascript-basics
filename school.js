class School {
    constructor(name,level,numberOfStudents){
        this._name =name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name(){
        return this._name;
    }

    get level(){
        return this._level;
    }

    get numberOfStudents(){
        return this._numberOfStudents;
    }

    set numberOfStudents(numberOfStudents){
        // if(typeof numberOfStudents === Number){
        //     this._numberOfStudents = numberOfStudents;
        // }
        if(numberOfStudents.isNaN()){
            console.log("invalid Input");
            
        }
        else{
            this._numberOfStudents = numberOfStudents;
         }
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} at ${this.level} school level` );

    }

    static pickSubstituteTeacher(subsituteTeachers){

       const randInt = Math.floor(subsituteTeachers.length * Math.random());
       return subsituteTeachers[randInt];

    }

}

class PrimarySchool extends School {
    constructor(name,numberOfStudents,pickupPolicy){
        super(name, 'primary',numberOfStudents);
        this._pickuPolicy = pickupPolicy;

    }
    get pickupPolicy(){
        return this._pickuPolicy;
    }
}

class HighSchool extends School {
    constructor(name,numberOfStudents,sportsTeam){
        super(name,"high",numberOfStudents);
        this._sportTeam = sportsTeam;

    }
    get sportsTeam() {
        console.log(this._sportTeam);
    }
}
const lorraineHansbury = new PrimarySchool("Lori",514,"Students must be picked up by a parent");
lorraineHansbury.quickFacts;
console.log(lorraineHansbury.quickFacts);
School.pickSubstituteTeacher(['james', 'John', 'Jack']);