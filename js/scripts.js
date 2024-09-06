// JavaScript function to show/hide career details
// function showDetails(careerId) {
//     var element = document.getElementById(careerId);
//     if (element.style.display === "none" || element.style.display === "") {
//         element.style.display = "block"; // Show the details
//     } else {
//         element.style.display = "none"; // Hide the details
//     }
// }


function toggleDetails(careerId) {
    var element = document.getElementById(careerId);
    if (element.style.display === "block") {
        element.style.display = "none"; // Hide the details
    } else {
        element.style.display = "block"; // Show the details
    }
}


//carrer
 
// function showCareerFields(careerField) {
//     if (careerField === 'engineering') {
//         document.getElementById('engineeringSection').style.display = 'block';
//         document.getElementById('healthcareSection').style.display = 'none';
//     } else if (careerField === 'healthcare') {
//         document.getElementById('engineeringSection').style.display = 'none';
//         document.getElementById('healthcareSection').style.display = 'block';
//     } else {
//         document.getElementById('engineeringSection').style.display = 'none';
//         document.getElementById('healthcareSection').style.display = 'none';
//     }
// }

// function showEngineeringDetails(branch) {
//     // Hide all engineering details
//     const careerContents = document.querySelectorAll('#engineeringDetails .career-content');
//     careerContents.forEach(content => content.style.display = 'none');
    
//     // Show selected branch details
//     if (branch) {
//         const detailsSection = document.getElementById(branch);
//         if (detailsSection) {
//             detailsSection.style.display = 'block';
//             document.getElementById('engineeringDetails').style.display = 'block';
//         }
//     } else {
//         document.getElementById('engineeringDetails').style.display = 'none';
//     }
// }

// function showHealthcareDetails(career) {
//     // Hide all healthcare details
//     const careerContents = document.querySelectorAll('#healthcareDetails .career-content');
//     careerContents.forEach(content => content.style.display = 'none');
    
//     // Show selected career details
//     if (career) {
//         const detailsSection = document.getElementById(career);
//         if (detailsSection) {
//             detailsSection.style.display = 'block';
//             document.getElementById('healthcareDetails').style.display = 'block';
//         }
//     } else {
//         document.getElementById('healthcareDetails').style.display = 'none';
//     }
// }

// function closeCareerSection(sectionId) {
//     document.getElementById(sectionId).style.display = 'none';
// }


//sliding photo on carrer
let slideIndex = 0;
showSlide();

function showSlide() {
    let slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });

    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    setTimeout(showSlide, 3000); // Change image every 3 seconds
}

function changeSlide(n) {
    let slides = document.querySelectorAll('.slide');
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } 
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide();
}


//featured carrer sectin
document.querySelector('.story-slider').addEventListener('scroll', function() {
    // Scroll effect if needed
  });
  
//latest carre article



