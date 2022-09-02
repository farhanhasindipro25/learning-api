const loadUserFetch = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))
        .catch(error => console.log(error))
}

const loadUserAsync = async() => {
    try{
        const res = await fetch('https://randomuser.me/api/?gender=female');
        const data = await res.json();
        displayUser(data.results[0]);
    }
    catch(error){
        console.log(error);
    }
}

const displayUser = user => {
    console.log(user)
}