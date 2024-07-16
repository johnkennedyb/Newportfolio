import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
    const params = useParams();
    const navigate = useNavigate();
    
    const userId = '65b3a22c01d900e96c4219ae'; //John doe

   
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.cookie = `portfolio-name=portfolio1`;
        const fetchUserData = async () => {
            try {
                

                document.title = 'Johnkennedy';
                setIsLoading(false);
                document.body.classList.remove('loaded');
            } catch (error) {
                navigate('/');
                setIsLoading(true);
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [params?.user, userId, navigate]);

   

    if (isLoading) {
        return <div className="w-full h-screen bg-black flex items-center justify-center text-center">Loading..</div>;
    }

    return (
        <div className=" " style={{backgroundImage: 'radial-gradient(black, #000033)'}}>
           <div className="  top-0" > <Header /></div> 
           <section id="home">  <Hero /></section>

           <section id="about"> <About /></section> 

           <section id="skills"></section>  <Skills />
           <section id="projects"> <Projects /></section> 
           <section id="services"> <Services /></section> 
           <section id="testimonial"> <Testimonial /></section> 
           <section id="contact"> <Contact /></section> 
            <Footer/>
        </div>
    );
}

export default Home;
