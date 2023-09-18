const url = "https://api.spacexdata.com/v3/launches";
async function getLaunches(){ 
    const response = await fetch (url);
    const data = response.json();
    return data;
}
async function loadLaunches(){
    const Launches = await getLaunches();
    const list = document.getElementById("container");
    Launches.forEach(element => {
        const data = document.createElement("div");
        data.className = "data";
        const list = document.getElementById("container");

        const num = document.createElement("div");
        num.className = "flightNum";
        num.textContent = element.flight_number;
        const name = document.createElement("div");
        name.className = "name";
        name.textContent = element.mission_name;
        const year = document.createElement("div");
        year.className = "launchYear";
        year.textContent = element.launch_year;

        data.appendChild(num);
        data.appendChild(name);
        data.appendChild(year);

        list.appendChild(data);
    });
}
loadLaunches();