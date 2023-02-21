function handleSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const event = data.get('event');
  const date = data.get('date');
  const photographers = data.get('photographers');
  const dj = data.get('dj');
  const venue = data.get('venue');
  const catering = data.get('catering');
  const decoration = data.get('decoration');

  const obj = {
    event: event,
    date: date,
    photographers: photographers,
    dj: dj,
    venue: venue,
    catering: catering,
    decoration: decoration,
  };

  console.log(obj);

  if (!event || event.length === 0) {
    alert('Please select a DJ.');
  } else if (!dj || dj.length === 0) {
    alert('Please select a DJ.');
  } else if (!decoration || decoration.length === 0) {
    alert('Please select a decoration.');
  } else if (!catering || catering.length === 0) {
    alert('Please select a catering restaurant.');
  } else if (!photographers || photographers.length === 0) {
    alert('PLease select a photographer');
  } else {
    reserve(obj);
  }
}

function reserve(obj) {
  const url = 'https://health-call.herokuapp.com/api/v2/reserve';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === 'success') {
        console.log(data)
        alert('Reserved successfully!');
      } else {
        console.log(data);
        alert('Something went wrong!');
      }
    })
    .catch(err => console.log(err));
}
