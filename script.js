// your code here
    const button = document.getElementById("button");
    const urlDisplay = document.getElementById("url");

    button.addEventListener("click", () => {
      const nameValue = document.getElementById("name").value.trim();
      const yearValue = document.getElementById("year").value.trim();

      let baseUrl = "https://localhost:8080/";

      // Build query string dynamically
      const params = new URLSearchParams();

      if (nameValue) params.append("name", nameValue);
      if (yearValue) params.append("year", yearValue);
		

      // Update the h3 text content
      urlDisplay.textContent = params.toString()
        ? `${baseUrl}?${params.toString()}`
        : baseUrl;
    });
