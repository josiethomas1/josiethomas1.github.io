const btn = document.querySelector('#js-new-activity');
btn.addEventListener('click', getActivity);

const activityText = document.querySelector('#js-activity-text');
const endpoint = 'https://www.boredapi.com/api/activity';

async function getActivity() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json['activity']);
        displayActivity(json['activity']);
    } catch (err) {
        console.log(err);
        alert('Failed to fetch new activity');
    }
}

function displayActivity(activity) {
    activityText.textContent = activity;
}

getActivity();
