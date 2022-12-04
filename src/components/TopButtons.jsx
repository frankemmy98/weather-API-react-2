import React from 'react'

function TopButtons({setQuery}) {

    const cities = [
        {
            id: 1,
            title: 'Lagos'
        },
        {
            id: 2,
            title: 'Abuja'
        },
        {
            id: 3,
            title: 'Kano'
        },
    ]

  return (
    <div className="flex items-center justify-around my-6">
        {
            cities.map(city => (
                <button key={city.id} 
                className="text-white text-lg font-medium
                hover:scale-125 transition ease-out hover:text-gray-100"
                onClick={()=> setQuery({q: city.title})}
                >
                    {city.title}
                </button>
            ))
        }
    </div>
  )
}

export default TopButtons