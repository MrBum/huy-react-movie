// import { useStore } from './store'
// import {
//   GET_API_REQUEST,
//   GET_API_SUCCESS,
//   GET_API_ERROR
// } from './store/constant'

import HomePage from './page/Home'

function App() {
  return (
    <div>
      <HomePage/>
    </div>
  )

  // const [state, dispatch] = useStore()
  // const newData = []
  // console.log(state)
  // const handleGetApi = () => {
  //   dispatch({
  //     type: GET_API_REQUEST
  //   })
  //   fetch('https://reqres.in/api/users')
  //     .then(res => res.json())
  //     .then(res => {
  //       dispatch({
  //         type: GET_API_SUCCESS,
  //         data: res.data
  //       })
  //     })
  //     .catch(err => {
  //       dispatch({
  //         type: GET_API_ERROR
  //       })
  //     })
  // }
  // return (
  //   <section className=" h-screen bg-gradient-to-b from-slate-600 to-purple-700">
  //     <div style={{ padding: 35 }} className="container ">
  //       <h1>App Hello World</h1>
  //       {/* <p> {JSON.stringify(state)}</p> */}

  //       <div className="columns-3xs">
  //         <Button variant="contained" onClick={handleGetApi}>
  //           HANDLE
  //         </Button>
  //         {console.log('state dinh dang :', typeof state.data)}

  //         <div className="grid gap-4 grid-cols-3 grid-rows-3">
  //           {state.data.map((data, key) => (
  //             <div>
  //               <h1 className=" text-2xl">{data.email}</h1>

  //               <img src={data.avatar}></img>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //     <div className="relative bg-white overflow-hidden">
  //       <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
  //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
  //           <div className="sm:max-w-lg">
  //             <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
  //               Summer styles are finally here
  //             </h1>
  //             <p className="mt-4 text-xl text-gray-500">
  //               This year, our new summer collection will shelter you
  //               from the harsh elements of a world that doesn't care
  //               if you live or die.
  //             </p>
  //           </div>
  //           <div>
  //             <div className="mt-10">
  //               {/* Decorative image grid */}
  //               <div
  //                 aria-hidden="true"
  //                 className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
  //               >
  //                 <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
  //                   <div className="flex items-center space-x-6 lg:space-x-8">
  //                     <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
  //                       <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
  //                         <img
  //                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
  //                           alt=""
  //                           className="w-full h-full object-center object-cover"
  //                         />
  //                       </div>
  //                       <div className="w-44 h-64 rounded-lg overflow-hidden">
  //                         <img
  //                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
  //                           alt=""
  //                           className="w-full h-full object-center object-cover"
  //                         />
  //                       </div>
  //                     </div>
  //                     <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
  //                       <div className="w-44 h-64 rounded-lg overflow-hidden">
  //                         <img
  //                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
  //                           alt=""
  //                           className="w-full h-full object-center object-cover"
  //                         />
  //                       </div>
  //                       <div className="w-44 h-64 rounded-lg overflow-hidden">
  //                         <img
  //                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
  //                           alt=""
  //                           className="w-full h-full object-center object-cover"
  //                         />
  //                       </div>
  //                       <div className="w-44 h-64 rounded-lg overflow-hidden">
  //                         <img
  //                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
  //                           alt=""
  //                           className="w-full h-full object-center object-cover"
  //                         />
  //                       </div>
  //                     </div>
  //                     <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
  //                       <div className="w-44 h-64 rounded-lg overflow-hidden">
  //                         <img
  //                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
  //                           alt=""
  //                           className="w-full h-full object-center object-cover"
  //                         />
  //                       </div>
  //                       <div className="w-44 h-64 rounded-lg overflow-hidden">
  //                         <img
  //                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
  //                           alt=""
  //                           className="w-full h-full object-center object-cover"
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>

  //               <a
  //                 href="#"
  //                 className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
  //               >
  //                 Shop Collection
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
}
export default App
