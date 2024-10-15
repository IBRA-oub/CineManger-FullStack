import React from 'react'

export default function CommentSection() {

  function showButton(){
    document.getElementById('submitButton').classList.remove('hidden')
  }
  function hideButton(){
    document.getElementById('submitButton').classList.add('hidden')
  }
  return (
    <>

      <div class=" text-white">
        <div class="w-[95%] mt-10 p-4">
          <div class="flex items-start space-x-4">

            <div class="flex-shrink-0">
              <div class="w-10 h-10 rounded-full flex items-center justify-center text-white">
                <img class=" rounded-full" src="https://via.placeholder.com/150" alt="User avatar" />
              </div>
            </div>


            <div class="flex-grow">
              <form >

                <input
                  onFocus={showButton}
                  onBlur={hideButton}
                  type="text"
                  placeholder="Ajoutez un commentaire..."
                  class="w-full bg-gray-800 text-gray-300 placeholder-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <div id="submitButton" className='w-full  flex justify-end hidden'>

                <button
                  
                  type="submit"
                  class="mt-2   bg-[#25252564] hover:bg-[#252525a3] text-white px-10 py-2 rounded-lg "
                >
                  Submit
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="  text-white">
        <div class=" w-[90%]  mx-10  mt-10">
          <div class="border bg-[#252525] border-gray-700 rounded-lg p-4 flex items-start space-x-4">

            <img class="w-12 h-12 rounded-full" src="https://via.placeholder.com/150" alt="User avatar" />


            <div class="flex-1">

              <div class="flex justify-between items-center mb-3">
                <div class="text-sm font-medium text-gray-400">
                  <span>brahim oubourrih</span>
                  <span class="ml-2 text-xs text-gray-500">il y a 10 min (modifié)</span>
                </div>
                <div class="text-sm text-gray-400">

                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12h.01M12 12h.01M18 12h.01" />
                  </svg>
                </div>
              </div>

              <p class="text-base">
                Welcome home Relaxed family <span class="text-blue-500">🌧️</span> <span class="text-yellow-500">🙂</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="  text-white">
        <div class=" w-[90%]  mx-10  mt-10">
          <div class="border bg-[#252525] border-gray-700 rounded-lg p-4 flex items-start space-x-4">

            <img class="w-12 h-12 rounded-full" src="https://via.placeholder.com/150" alt="User avatar" />


            <div class="flex-1">

              <div class="flex justify-between items-center mb-3">
                <div class="text-sm font-medium text-gray-400">
                  <span>brahim oubourrih</span>
                  <span class="ml-2 text-xs text-gray-500">il y a 10 min (modifié)</span>
                </div>
                <div class="text-sm text-gray-400">

                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12h.01M12 12h.01M18 12h.01" />
                  </svg>
                </div>
              </div>

              <p class="text-base">
                Welcome home Relaxed family <span class="text-blue-500">🌧️</span> <span class="text-yellow-500">🙂</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="  text-white">
        <div class=" w-[90%]  mx-10  mt-10">
          <div class="border bg-[#252525] border-gray-700 rounded-lg p-4 flex items-start space-x-4">

            <img class="w-12 h-12 rounded-full" src="https://via.placeholder.com/150" alt="User avatar" />


            <div class="flex-1">

              <div class="flex justify-between items-center mb-3">
                <div class="text-sm font-medium text-gray-400">
                  <span>brahim oubourrih</span>
                  <span class="ml-2 text-xs text-gray-500">il y a 10 min (modifié)</span>
                </div>
                <div class="text-sm text-gray-400">

                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12h.01M12 12h.01M18 12h.01" />
                  </svg>
                </div>
              </div>

              <p class="text-base">
                Welcome home Relaxed family <span class="text-blue-500">🌧️</span> <span class="text-yellow-500">🙂</span>
              </p>
            </div>
          </div>
        </div>
      </div>





    </>
  )
}
