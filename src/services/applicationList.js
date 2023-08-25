import * as tokenService from '../services/tokenService'
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/applicationList`

async function create(appList) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(appList)
  })
	return res.json()
}

async function deleteOne(id) {
  console.log(`${BASE_URL}/${id}`);
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  return res.json()
}

async function getAll() {
  const res = await fetch(BASE_URL)
  return res.json()
}

async function update(item) {
  const res = await fetch(`${BASE_URL}/${item._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(item)
  })
	return res.json()
}

export {
	create,
  getAll,
  deleteOne,
  update
}