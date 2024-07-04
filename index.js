let containerWisata = document.getElementById('wisata-container')
let containerHotel = document.getElementById('hotel-container')

for (let wisata of CONFIG.wisata) {
    let items = 
    `<a href="pages/wisata.html#${wisata.id}" class="flex flex-col w-full bg-slate-200 bg-[url('${wisata.image}')] aspect-video rounded-xl justify-end overflow-hidden bg-cover bg-center">
                    <div class="flex flex-col justify-end w-full h-full p-4 text-white bg-gradient-to-t from-black/80 to-transparent">
                        <span class="text-xl font-semibold text-white">${wisata.title}</span>
                        <span class="line-clamp-2">${wisata.description}</span>
                    </div>
                </a>`
    containerWisata.innerHTML += items
}

for (let hotel of CONFIG.hotel){
    let items = `<a href="pages/hotel.html#${hotel.id}" class="block p-4 text-black bg-white rounded-lg shadow-sm shadow-indigo-100">
                    <img alt=""  src="assets/${hotel.image}"  class="object-cover w-full h-56 rounded-md" />
                    <div class="mt-2">
                      <dl>
                        <div>
                          <dt class="sr-only">Price</dt>
                          <dd class="text-sm text-gray-500">${hotel.price}</dd>
                        </div>
                        <div>
                          <dt class="sr-only">Address</dt>
                          <dd class="font-medium">${hotel.title}</dd>
                        </div>
                      </dl>
                      <div class="flex items-center gap-8 mt-6 text-xs">
                        <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                          <svg
                            class="text-indigo-700 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                            />
                          </svg>
                  
                          <div class="mt-1.5 sm:mt-0">
                            <p class="text-gray-500">Parking</p>
                  
                            <p class="font-medium">2 spaces</p>
                          </div>
                        </div>
                  
                        <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                          <svg
                            class="text-indigo-700 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                          </svg>
                          <div class="mt-1.5 sm:mt-0">
                            <p class="text-gray-500">Bathroom</p>
                            <p class="font-medium">2 rooms</p>
                          </div>
                        </div>
                        <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                          <svg
                            class="text-indigo-700 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                          </svg>
                          <div class="mt-1.5 sm:mt-0">
                            <p class="text-gray-500">Bedroom</p>
                            <p class="font-medium">4 rooms</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </a>`
    containerHotel.innerHTML += items
}