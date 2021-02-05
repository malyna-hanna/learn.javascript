const BASE_URL = 'https://api.github.com/users/';
const USER_LOGIN = document.getElementById('login');
const onClick = document.getElementById('btn');
onClick.addEventListener('click', onBtnClick);

const avatar = document.getElementById('avatar');
const repositories = document.getElementById('repos');
const followers = document.getElementById('followers')
const following = document.getElementById('following');

function onBtnClick(){
    const USERS_URL = BASE_URL + USER_LOGIN.value
    console.log(USERS_URL);


    fetch(USERS_URL).then(
        result => {
            result.json().then(
                data => {
                    avatar.src = data.avatar_url; 
                    repositories.innerHTML = data.public_repos;
                    followers.innerHTML = data.followers;
                    following.innerHTML = data.following;
                },
              );
        }
      );
}
