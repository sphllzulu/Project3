var firstName = "Siphelele";
        var lastName = "Zulu";
        var age = 23;
        var gender = "Female";
        var bio = "Hi, I'm Siphelele, a passionate student pursuing a qualification in System Development. I love programming";

 // Projects
        var projects = [
            {
                title: "Gemini Ai chatbot clone",
                description: "https://sphllzulu.github.io/DermDoc/",
                year: 2024
            },
            {
                title: "Food Delivery System",
                description: "https://sphllzulu.github.io/food-delivery/",
                year: 2024
            },
            {
                title: "Trip Booking Site",
                description: "https://sphllzulu.github.io/CampN/",
                year: 2023
            },
            {
                title: "Beauty Spa website",
                description: "https://sphllzulu.github.io/UmndeniBeauty/",
                year: 2023
            }
        ];

        // Educational Background
        var education = [
            {
                degree: "Software Development",
                institution: "FMTALI",
                year: 2022
            },
            {
                degree:"Technical Support",
                institution: "Finweb Business Consultancy",
                year: 2020
            }

        ];

        //work experience
        var experience = 
            {
                company: "Maredi Technologies",
                position: "Software Development Intern",
                duration: "6 months",
                responsibilities:"Creating a ticketing system using power apps"
            };
            
            
            

        

        // Contact Information
        var contact = {
            email: "sphllzulu@gmail.com",
            phone: "+27746992821",
            address: "3181 Pitse Street, Emdeni"
        };

        // Render Personal Information
        var personalInfoHTML = `
            <p>Name: ${firstName} ${lastName}</p>
            <p>Age: ${age}</p>
            <p>Gender: ${gender}</p>
            <p>Bio: ${bio}</p>
        `;
        document.getElementById('personal-info').innerHTML = personalInfoHTML;

        // Render Projects
        var projectsHTML = projects.map(project => `
            <li>
                <strong>${project.title}</strong> (${project.year}) - <a href=${project.description}>View</a>
            </li>
        `).join('');
        document.getElementById('projects-list').innerHTML = projectsHTML;

        // Render Education
        var educationHTML = education.map(edu => `
            <li>
                ${edu.degree} - ${edu.institution} (${edu.year})
            </li>
        `).join('');
        document.getElementById('education-list').innerHTML = educationHTML;

        // Render Contact Information
        var contactInfoHTML = `
            <p>Email:${contact.email}</p>
            <p>Phone: ${contact.phone}</p>
            <p>Address: ${contact.address}</p>
        `;
        document.getElementById('contact-info').innerHTML = contactInfoHTML;


        //Render Experience
    
       var experienceHTML=`
       <p>Company: ${experience.company}</p>
       <p>Position: ${experience.position}</p>
       <p>Duration: ${experience.duration}</p>
       <p>Responsibilities: ${experience.responsibilities}</p>
       `;
       document.getElementById('work-experience').innerHTML = experienceHTML;