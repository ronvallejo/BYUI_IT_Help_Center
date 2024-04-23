
  document.addEventListener('DOMContentLoaded', () => {
    // Array of buildings with full names and abbreviations
    const buildings = [
    { name: "Agriculture Engineering", abbreviation: "AGM" },
    { name: "Ag Science Center", abbreviation: "ASC" },
    { name: "Austin", abbreviation: "AUS" },
    { name: "BYU-Idaho Center", abbreviation: "BCTR" },
    { name: "Benson", abbreviation: "BEN" },
    { name: "Biddulph", abbreviation: "BID" },
    { name: "Chapman", abbreviation: "CHP" },
    { name: "Clarke", abbreviation: "CLK" },
    { name: "Center Square", abbreviation: "CS" },
    { name: "Engineering Technology Center", abbreviation: "ETC" },
    { name: "Hinckley", abbreviation: "HIN" },
    { name: "Hart", abbreviation: "HRT" },
    { name: "Kimball", abbreviation: "KIM" },
    { name: "Kirkham", abbreviation: "KRK" },
    { name: "Lamprecht", abbreviation: "LAM" },
    { name: "McKay Library", abbreviation: "MCK" },
    { name: "Manwaring Center", abbreviation: "MC" },
    { name: "Mechanical Operations Shop", abbreviation: "MOS" },
    { name: "Badger Creek Outdoor Learning Center", abbreviation: "OLC" },
    { name: "Outdoor Recreation Center", abbreviation: "ORC" },
    { name: "Physical Plant Grounds Construction & Sign Shop", abbreviation: "PPG" },
    { name: "Physical Plant Office", abbreviation: "PPO" },
    { name: "Physical Plant Shop", abbreviation: "PPS" },
    { name: "Plumbing and Welding Shop", abbreviation: "PWS" },
    { name: "Rigby Hall", abbreviation: "RIG" },
    { name: "Ricks", abbreviation: "RKS" },
    { name: "Romney", abbreviation: "ROM" },
    { name: "Student Health Center", abbreviation: "SHC" },
    { name: "Smith", abbreviation: "SMI" },
    { name: "Snow", abbreviation: "SNO" },
    { name: "Spori", abbreviation: "SPO" },
    { name: "BYU-Idaho Stadium", abbreviation: "STA" },
    { name: "Science and Technology Center", abbreviation: "STC" },
    { name: "Taylor", abbreviation: "TAY" },
    { name: "University Communication", abbreviation: "UCB" },
    { name: "University Operations", abbreviation: "UO" },
    { name: "University Support Services", abbreviation: "USS" },
    { name: "University Village", abbreviation: "UV" },
    { name: "Visual Arts Studio", abbreviation: "VAS" },
    ];
  
    // Populate dropdown with building names and abbreviations
  const buildingSelect = document.getElementById('building-select');
  buildings.forEach(building => {
    let option = document.createElement('option');
    option.value = building.abbreviation;
    option.textContent = building.name;
    buildingSelect.appendChild(option);
  });

  // Function to generate URL
  function generateURL() {
    const building = buildingSelect.value;
    const room = document.getElementById('room-number').value.trim();
    const baseUrl = 'https://maps.byui.edu/interactive-map/index.html?building=';
    const completeUrl = `${baseUrl}${building}&room=${room}`;

    // Display the generated URL
    const outputElement = document.getElementById('output-url');
    outputElement.href = completeUrl;
    outputElement.textContent = completeUrl;

    // Show the link container
    document.getElementById('link-container').style.display = 'block';
  }

  // Function to navigate to the generated URL
  function navigateToURL() {
    const outputElement = document.getElementById('output-url');
    if (outputElement.href && outputElement.href !== '#') {
      window.open(outputElement.href, '_blank');
    } else {
      alert('Please create a link first.');
    }
  }

  // Add event listener to the 'Create Link' button
  document.getElementById('create-link').addEventListener('click', generateURL);

  // Add event listener to the 'Navigate Me' button
  document.getElementById('navigate-me').addEventListener('click', navigateToURL);
});