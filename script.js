const jobs = [
  {
    title: "Frontend Dev",
    company: "CreativeCoders inc.",
    location: "Nevada, USA",
    logo: "https://via.placeholder.com/80x80.png?text=CC",
    url: "https://unsplash.com/photos/a-colorful-wooden-toy-on-a-blue-background-a8NP2AwGZKs",
  },
  {
    title: "Backend Dev",
    company: "Berrylium Build Initiative",
    location: "Remote",
    logo: "https://via.placeholder.com/80x80.png?text=SL",
    url: "https://unsplash.com/photos/a-colorful-wooden-toy-on-a-blue-background-a8NP2AwGZKs",
  },
  {
    title: "UI/UX Designer",
    company: "QUICKOnnect",
    location: "Nevada, USA",
    logo: "https://via.placeholder.com/80x80.png?text=DL",
    url: "https://unsplash.com/photos/a-colorful-wooden-toy-on-a-blue-background-a8NP2AwGZKs",
  },
  {
    title: "DevOps Specialist",
    company: "CloudWave",
    location: "Remote",
    logo: "https://via.placeholder.com/80x80.png?text=DL",
    url: "https://unsplash.com/photos/a-colorful-wooden-toy-on-a-blue-background-a8NP2AwGZKs",
  },
  {
    title: "Data Analyst",
    company: "DataDriven",
    location: "Remote",
    logo: "https://via.placeholder.com/80x80.png?text=DL",
    url: "https://unsplash.com/photos/a-colorful-wooden-toy-on-a-blue-background-a8NP2AwGZKs",
  },

  {
    title: "Product Manager",
    company: "InnovateX",
    location: "New York, USA",
    logo: "https://via.placeholder.com/80x80.png?text=PM",
    url: "https://unsplash.com/photos/a-colorful-wooden-toy-on-a-blue-background-a8NP2AwGZKs",
  },

  {
    title: "Growth Manager",
    company: "GrowthCorp",
    location: "San Francisco, USA",
    logo: "https://via.placeholder.com/80x80.png?text=GM",
    url: "https://unsplash.com/photos/a-colorful-wooden-toy-on-a-blue-background-a8NP2AwGZKs",
  },

  {
    title: "Marketing Specialist",
    company: "MarketMakers",
    location: "Remote",
    logo: "https://via.placeholder.com/80x80.png?text=MS",
    url: "https://unsplash.com/photos/a-colorful-wooden-toy-on-a-blue-background-a8NP2AwGZKs",
  },

  {
    title: "Growth Manager Assistant",
    company: "GrowthCorp",
    location: "San Francisco, USA",
    logo: "https://via.placeholder.com/80x80.png?text=GM",
    url: "https://unsplash.com/photos/a-colorful-wooden-toy-on-a-blue-background-a8NP2AwGZKs",
  },

  {
    title: "Marketing Specialist",
    company: "MarketMakers",
    location: "Remote",
    logo: "https://via.placeholder.com/80x80.png?text=MS",
    url: "https://unsplash.com/photos/a-colorful-wooden-toy-on-a-blue-background-a8NP2AwGZKs",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const jobListings = document.getElementById("jobListings");
  const searchInput = document.getElementById("searchInput");

  function displayJobs(filteredJobs) {
    jobListings.innerHTML = "";
    if (filteredJobs.length === 0) {
      jobListings.innerHTML = "<p>No jobs found</p>";
      return;
    }
    filteredJobs.forEach((job) => {
      const jobCard = document.createElement("div");
      jobCard.classList.add("job-card");
      jobCard.innerHTML = `
        <img src="${job.logo}" alt="${job.company} logo" class="company-logo">
        <h3>${job.title}</h3>
        <p class="company">${job.company}</p>
        <p class="location">${job.location}</p>
        <a href="${job.url}" target="_blank"><button class="apply-button">Apply Now</button></a>
      `;
      jobListings.appendChild(jobCard);
    });
  }

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredJobs = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm) ||
        job.location.toLowerCase().includes(searchTerm)
    );
    displayJobs(filteredJobs);
  });

  displayJobs(jobs);
});
