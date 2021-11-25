import React from 'react';
import Picture from "../assets/Picture.jpg";
import '../styles/App.css';
//import 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'

const styles = {
    pic: {
        width: "350px",
        height: "500px",
    },
    content: {

    }

}

function AboutMe() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <img src={Picture} class="pic" style={styles.pic} alt="Kiri Smith" id="me"></img>
                </div>
                <div class="col-9 content" style={styles.content}>
                    <p> I live in Rochester, NY where I attended Nazareth College, receiving a BA in Mathematics and Childhood-Middle Childhood Education.I then
                        completed my Master's Degree in Inclusive Education at Nazareth College in 2012. I moved to
                        Alexandria, VA where I began teaching middle school math as a special education teacher at
                        Prince William County Schools.I obtained a second Master's degree in Educational Leadership
                        and was able to apply my new skillset as the Special Education Department Chairperson, IEP
                        Administrator, and member of the school's Leadership Team. After 6 years of teacher
                        leadership in Virginia, I moved back to Rochester and worked as the Special Education Middle
                        School Director at a local charter school.After 9 years of teaching, I decided to pursue a
                        new career direction and began my new career at Par-Tech, Inc.as a Software Developer.I am
                        currently enrolled in UC Berkeley's Coding Bootcamp Extension and will be adding to this
                        portfolio as I create more web applications.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;