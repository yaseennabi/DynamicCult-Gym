document.addEventListener('DOMContentLoaded', function () {
    const trainers = [
      {
        name: 'Michelle Rodriguez',
        specialty: 'High-Intensity Interval Training (HIIT)',
        experience: '8 years',
        certifications: 'Certified Personal Trainer (CPT), HIIT Specialist',
        image: 't1.jpeg'
      },
      {
        name: 'Alex Thompson',
        specialty: 'Strength and Conditioning',
        experience: '10 years',
        certifications: 'Certified Strength and Conditioning Specialist (CSCS)',
        image: 't2.jpeg'
      },
      {
        name: 'Dr. Olivia Simmons',
        specialty: 'Holistic Wellness and Yoga',
        experience: '12 years',
        certifications: 'Doctor of Naturopathic Medicine, Registered Yoga Instructor (RYT)',
        image: 't3.jpeg'
      },
      {
        name: 'Javier Mendez',
        specialty: 'Functional Fitness and CrossFit',
        experience: '6 years',
        certifications: 'CrossFit Level 2 Trainer, Functional Movement Systems (FMS) Certified',
        image: 't4.jpeg'
      }
    ];
  
    const trainerContainer = document.getElementById('trainer-carousel');
  
    trainers.forEach(trainer => {
      const trainerBox = document.createElement('div');
      trainerBox.classList.add('trainer-box');
      trainerBox.innerHTML = `
        <img src="${trainer.image}" alt="${trainer.name}" class="trainer-image">
        <div class="trainer-details">
          <h3>${trainer.name}</h3>
          <p>${trainer.specialty}</p>
          <p>${trainer.experience} of experience</p>
          <p>Certifications: ${trainer.certifications}</p>
        </div>
      `;
      trainerContainer.appendChild(trainerBox);
  
      trainerBox.addEventListener('mouseover', function () {
        trainerBox.classList.add('highlighted');
      });
  
      trainerBox.addEventListener('mouseout', function () {
        trainerBox.classList.remove('highlighted');
      });
    });
  });
  