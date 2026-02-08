const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Element is visible! Trigger API call...");
      loadMoreData();
      
      // Optional: Stop watching once it's triggered once
      // observer.unobserve(entry.target);
    }
  });
}, {
  root: null, // defaults to the browser viewport
  rootMargin: '0px',
  threshold: 1.0 // 1.0 means 100% of the element must be visible
});

// Start watching a "sentinel" div at the bottom of your list
observer.observe(document.querySelector('#sentinel'));